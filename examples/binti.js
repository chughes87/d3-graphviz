/*
 * TODOS
 * Fix exclusion/inclusion for tables with :: in them
 * toggle body of just highlighted node
 * deleting many nodes at once
 * list inclusions/exclusions on the top
 * add UI guide
 * integrate NextJS
 * add search box
 * Dark mode
 */

let margin = 0; // to avoid scrollbars

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

let includeBody = params.includeBody === "true";
let selectedNodes = params.selectedNodes ? params.selectedNodes.split(",") : [];
let excludedNodes = params.excludedNodes ? params.excludedNodes.split(",") : [];
let highlightedEdges = [];
let highlightedNode = params.highlightedNode;

const nodeRegex = /\n(["\w:]+) \[([^}]|\n)+\}>\];/g;
const edgeRegex = /\n *(["\w:]+) -> (["\w:]+).*/g;

function toggleBody() {
  redirect(selectedNodes, excludedNodes, !includeBody, highlightedNode);
}

const redirect = (selectedNodes, excludedNodes, includeBody, highlightedNode) =>
  window.location.assign(
    buildQueryString(selectedNodes, excludedNodes, includeBody, highlightedNode)
  );

const buildQueryString = (
  selectedNodes,
  excludedNodes,
  includeBody,
  highlightedNode
) =>
  "?" +
  Object.entries({
    selectedNodes,
    excludedNodes,
    includeBody: [includeBody],
    highlightedNode: [highlightedNode],
  })
    .filter(([_, nodeNames]) => nodeNames.length)
    .map(([nodeType, nodeNames]) => [nodeType, nodeNames.join(",")])
    .map((kv) => kv.join("="))
    .join("&");

const getEdgeMetaData = (node) => {
  const value = node.value;
  return {
    value: value[0].trim(),
    from: value[1].trim(),
    to: value[2].trim(),
  };
};

const getNodeMetaData = (node) => {
  const value = node.value;
  return {
    value: value[0].trim(),
    name: value[1].trim(),
  };
};

const extractDataFromIterator = (iter, getData) => {
  const data = [];
  let node = iter.next();
  while (!node.done) {
    data.push(getData(node));
    node = iter.next();
  }

  return data;
};

const generateMetaData = (src) => {
  const metaData = { nodes: [], edges: [] };
  const nodeIter = dotSrc.matchAll(nodeRegex);
  metaData.nodes = extractDataFromIterator(nodeIter, getNodeMetaData);
  const edgeIter = dotSrc.matchAll(edgeRegex);
  metaData.edges = extractDataFromIterator(edgeIter, getEdgeMetaData);

  return metaData;
};

const buildDot = ({ edges, nodes }) => {
  const header = `digraph Binti {
rankdir = "LR"
ranksep = "0.5"
nodesep = "0.4"
pad = "0.4,0.4"
margin = "0,0"
concentrate = "true"
labelloc = "t"
fontsize = "13"
fontname = "Arial Bold"
splines = "spline"
node[ shape  =  "Mrecord" , fontsize  =  "10" , fontname  =  "Arial" , margin  =  "0.07,0.05" , penwidth  =  "1.0"]
edge[ fontname  =  "Arial" , fontsize  =  "7" , dir  =  "both" , arrowsize  =  "0.9" , penwidth  =  "1.0" , labelangle  =  "32" , labeldistance  =  "1.8"]
rankdir = "TB"
label = "BintiFamily domain model\n\n"
`;

  return `
${header}\n
${includeBody ? nodes.map((n) => n.value).join("\n") : ""}
${edges.map((e) => e.value).join("\n")}
}`;
};

const filterData = ({ nodes, edges }, selectedNodes, excludedNodes) => {
  if (!selectedNodes.length) {
    return { nodes, edges };
  }
  const relatedEdges = edges.filter(
    (e) =>
      (selectedNodes.includes(e.from) || selectedNodes.includes(e.to)) &&
      !(excludedNodes.includes(e.from) || excludedNodes.includes(e.to))
  );
  const relatedNodes = relatedEdges.map((e) =>
    [e.from, e.to].find(
      (name) => !selectedNodes.includes(name) && !excludedNodes.includes(name)
    )
  );

  return {
    nodes: nodes.filter(
      (n) => selectedNodes.includes(n.name) || !!relatedNodes.includes(n.name)
    ),
    edges: relatedEdges,
  };
};

const metaData = generateMetaData();

const buildData = (selectedNodes, excludedNodes) => {
  const selectedData = filterData(metaData, selectedNodes, excludedNodes);
  return buildDot(selectedData);
};

function render() {
  initApp(buildData(selectedNodes, excludedNodes));
}

let graphviz = d3
  .select("#graph")
  .graphviz({ useWorker: true })
  .on("initEnd", render);

function initApp(src) {
  graphviz
    .attributer(attributer)
    // .transition(() => d3.transition().duration(1000))
    .renderDot(src, registerEventHandlers);
}

function attributer(datum, index, nodes) {
  let selection = d3.select(this);
  if (datum.tag == "svg") {
    let width = window.innerWidth - margin;
    let height = window.innerHeight - margin;
    let unit = "px";
    selection.attr("width", width + unit).attr("height", height + unit);
    datum.attributes.width = width + unit;
    datum.attributes.height = height + unit;
  }
}

function highlightNode(title) {
  highlightedEdges.map((s) =>
    s.attr("stroke", "black").attr("stroke-width", "1px")
  );
  if (highlightedNode == title) {
    highlightedEdges = [];
    highlightedNode = null;
    return;
  }
  highlightedNode = title || highlightedNode;
  const edges = d3
    .selectAll(".edge")
    .filter((x) =>
      x.key.match(new RegExp(`(^${highlightedNode}->|->${highlightedNode}$)`))
    );
  const path = edges
    .selectAll("path")
    .attr("stroke", "red")
    .attr("stroke-width", "5px");
  highlightedEdges = [path];
}

function registerEventHandlers() {
  let nodes = d3.selectAll(".node");
  let edges = d3.selectAll(".edge");

  if (highlightedNode && highlightedNode.length) {
    highlightNode();
  }

  nodes
    .filter((x) => selectedNodes.includes(x.key))
    .attr("stroke-width", "2px");

  // click outside of nodes
  // d3.select(document).on("click", function() { })

  // keyup outside of nodes
  // d3.select(document).on("keyup", function() { })

  // move
  // d3.select(document).on("mousemove", (event) => { })

  // click and mousedown on nodes
  nodes.on("click", function (event) {
    event.preventDefault();
    title = this.children[0].textContent;
    if (!selectedNodes.includes(title)) {
      selectedNodes.push(title);
      // initApp(buildData(selectedNodes, excludedNodes))
    } else {
      highlightNode(title);
    }
    redirect(selectedNodes, excludedNodes, includeBody, highlightedNode);
  });

  // double-click on nodes
  // nodes.on("dblclick", function() { })

  // right-click on nodes
  nodes.on("contextmenu", function (event) {
    event.preventDefault();
    title = this.children[0].textContent;
    if (selectedNodes.includes(title)) {
      selectedNodes = selectedNodes.filter((n) => n != title);
    }
    excludedNodes.push(title);
    redirect(selectedNodes, excludedNodes, includeBody, highlightedNode);
    // initApp(buildData(selectedNodes, excludedNodes))
  });

  // click and mousedown on edges
  // edges.on("click mousedown", function() { })

  // right-click outside of nodes
  // d3.select(document).on("contextmenu", function() { })
}
