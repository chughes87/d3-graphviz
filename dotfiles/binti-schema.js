var dotSrc = `digraph BintiFamily {
rankdir = "LR";
ranksep = "0.5";
nodesep = "0.4";
pad = "0.4,0.4";
margin = "0,0";
concentrate = "true";
labelloc = "t";
fontsize = "13";
fontname = "Arial Bold";
splines = "spline";
node[ shape  =  "Mrecord" , fontsize  =  "10" , fontname  =  "Arial" , margin  =  "0.07,0.05" , penwidth  =  "1.0"];
edge[ fontname  =  "Arial" , fontsize  =  "7" , dir  =  "both" , arrowsize  =  "0.9" , penwidth  =  "1.0" , labelangle  =  "32" , labeldistance  =  "1.8"];
rankdir = "TB";
label = "BintiFamily domain model\n\n";
"m_ActiveStorage::Attachment" [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">ActiveStorage::Attachment</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="name">name <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="record_type">record_type <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
</table>
}>];
"m_ActiveStorage::Blob" [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">ActiveStorage::Blob</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="byte_size">byte_size <font face="Arial Italic" color="grey60">integer (8) ∗</font></td></tr>
  <tr><td align="left" width="130" port="checksum">checksum <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="content_type">content_type <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="filename">filename <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="key">key <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="metadata">metadata <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="service_name">service_name <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
</table>
}>];
"m_ActiveStorage::VariantRecord" [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">ActiveStorage::VariantRecord</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="variation_digest">variation_digest <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
</table>
}>];
m_Agency [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">Agency</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="address">address <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="address_location">address_location <font face="Arial Italic" color="grey60">geography</font></td></tr>
  <tr><td align="left" width="130" port="address_location_accuracy">address_location_accuracy <font face="Arial Italic" color="grey60">decimal</font></td></tr>
  <tr><td align="left" width="130" port="approvals_enabled">approvals_enabled <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="can_manually_mark_documents_complete">can_manually_mark_documents_complete <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="case_management_enabled">case_management_enabled <font face="Arial Italic" color="grey60">boolean ∗</font></td></tr>
  <tr><td align="left" width="130" port="cbo_workers_can_approve_applications">cbo_workers_can_approve_applications <font face="Arial Italic" color="grey60">boolean ∗</font></td></tr>
  <tr><td align="left" width="130" port="cbo_workers_can_change_application_statuses_minus_approve">cbo_workers_can_change_application_statuses_minus_approve <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="cbo_workers_can_intake_applications">cbo_workers_can_intake_applications <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="certification_number">certification_number <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="display_child_prefs">display_child_prefs <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="display_self_withdraw">display_self_withdraw <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="eligibility_enabled">eligibility_enabled <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="family_id_prefix">family_id_prefix <font face="Arial Italic" color="grey60">string ∗ U</font></td></tr>
  <tr><td align="left" width="130" port="generate_external_license_id">generate_external_license_id <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="goal_days_to_approval">goal_days_to_approval <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="google_analytics_profile_id">google_analytics_profile_id <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="google_credentials">google_credentials <font face="Arial Italic" color="grey60">json</font></td></tr>
  <tr><td align="left" width="130" port="has_medical_ask_number_how_many_children">has_medical_ask_number_how_many_children <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="intake_referrals_enabled">intake_referrals_enabled <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="internal_notes">internal_notes <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="introduced_at">introduced_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="investigations_enabled">investigations_enabled <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="launch_date">launch_date <font face="Arial Italic" color="grey60">date</font></td></tr>
  <tr><td align="left" width="130" port="legacy_has_medical_ask_number_how_many_people">legacy_has_medical_ask_number_how_many_people <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="max_n_approvals_workers">max_n_approvals_workers <font face="Arial Italic" color="grey60">integer ∗</font></td></tr>
  <tr><td align="left" width="130" port="max_n_sub_agency_assignments">max_n_sub_agency_assignments <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="max_n_sub_agency_worker_assignments">max_n_sub_agency_worker_assignments <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="max_n_support_workers">max_n_support_workers <font face="Arial Italic" color="grey60">integer ∗</font></td></tr>
  <tr><td align="left" width="130" port="n_days_to_approval_before_binti">n_days_to_approval_before_binti <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="n_monthly_applications_before_binti">n_monthly_applications_before_binti <font face="Arial Italic" color="grey60">decimal</font></td></tr>
  <tr><td align="left" width="130" port="n_monthly_approvals_before_binti">n_monthly_approvals_before_binti <font face="Arial Italic" color="grey60">decimal</font></td></tr>
  <tr><td align="left" width="130" port="n_monthly_inquiries_before_binti">n_monthly_inquiries_before_binti <font face="Arial Italic" color="grey60">decimal</font></td></tr>
  <tr><td align="left" width="130" port="name">name <font face="Arial Italic" color="grey60">string (255) ∗</font></td></tr>
  <tr><td align="left" width="130" port="next_family_id_number">next_family_id_number <font face="Arial Italic" color="grey60">integer ∗</font></td></tr>
  <tr><td align="left" width="130" port="partner_agency_worker_can_create_bg_checks">partner_agency_worker_can_create_bg_checks <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="payments_enabled">payments_enabled <font face="Arial Italic" color="grey60">boolean ∗</font></td></tr>
  <tr><td align="left" width="130" port="percent_children_in_congregate_care_before_binti">percent_children_in_congregate_care_before_binti <font face="Arial Italic" color="grey60">decimal</font></td></tr>
  <tr><td align="left" width="130" port="placements_enabled">placements_enabled <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="reference_redirect_url">reference_redirect_url <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="separate_rate_table_per_referring_agency">separate_rate_table_per_referring_agency <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="should_pay_respite_provider_for_respite_placement">should_pay_respite_provider_for_respite_placement <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="should_pay_standard_provider_for_respite_placement">should_pay_standard_provider_for_respite_placement <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="show_cbo_workers_case_notes">show_cbo_workers_case_notes <font face="Arial Italic" color="grey60">boolean ∗</font></td></tr>
  <tr><td align="left" width="130" port="slug">slug <font face="Arial Italic" color="grey60">string ∗ U</font></td></tr>
  <tr><td align="left" width="130" port="stripe_data">stripe_data <font face="Arial Italic" color="grey60">json</font></td></tr>
  <tr><td align="left" width="130" port="time_zone">time_zone <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="user_session_time_out">user_session_time_out <font face="Arial Italic" color="grey60">integer</font></td></tr>
</table>
}>];
m_AgencyAdminAssignment [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">AgencyAdminAssignment</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="able_to_see_applications">able_to_see_applications <font face="Arial Italic" color="grey60">boolean ∗</font></td></tr>
  <tr><td align="left" width="130" port="agency_role">agency_role <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="contact_information_visible">contact_information_visible <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="explicit_can_change_status">explicit_can_change_status <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="explicit_can_override_approval">explicit_can_override_approval <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="external_identifier">external_identifier <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="phone_number">phone_number <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="supervisees">supervisees <font face="Arial Italic" color="grey60">string</font></td></tr>
</table>
}>];
m_AgencyCommunityBasedOrganization [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">AgencyCommunityBasedOrganization</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
</table>
}>];
m_AgencyContact [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">AgencyContact</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="additional_information">additional_information <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="affiliated_organization">affiliated_organization <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="contact_name">contact_name <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="email">email <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="phone_number">phone_number <font face="Arial Italic" color="grey60">string</font></td></tr>
</table>
}>];
m_AgencyPlacement [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">AgencyPlacement</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="availability">availability <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="availability_updated_at">availability_updated_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="can_call_after_hours">can_call_after_hours <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="capacity">capacity <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="child_characteristic_open_to">child_characteristic_open_to <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="child_preferences">child_preferences <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="comments">comments <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="contact_email">contact_email <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="contact_information">contact_information <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="emergency_placement">emergency_placement <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="emergency_placement_str">emergency_placement_str <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="external_identifier">external_identifier <font face="Arial Italic" color="grey60">string ∗ U</font></td></tr>
  <tr><td align="left" width="130" port="has_pet_in_home">has_pet_in_home <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="interested_in_adoption">interested_in_adoption <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="managed_by_type">managed_by_type <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="name">name <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="open_to_community">open_to_community <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="preferences_updated_at">preferences_updated_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="respite_provider">respite_provider <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="status">status <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="status_str">status_str <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="therapeutic_care">therapeutic_care <font face="Arial Italic" color="grey60">boolean</font></td></tr>
</table>
}>];
m_AgencyPlacementProviderProfile [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">AgencyPlacementProviderProfile</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
</table>
}>];
m_AgencyTransferRelationship [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">AgencyTransferRelationship</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
</table>
}>];
m_AgencyType [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">AgencyType</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="classification">classification <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="has_good_causes">has_good_causes <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="has_medical_forms_on_initial">has_medical_forms_on_initial <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="has_medical_forms_on_renewal">has_medical_forms_on_renewal <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="has_psycho_social_form">has_psycho_social_form <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="has_tb_test">has_tb_test <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="other_adult_types">other_adult_types <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="partners_may_edit_family_type">partners_may_edit_family_type <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="state_abbr">state_abbr <font face="Arial Italic" color="grey60">string</font></td></tr>
</table>
}>];
m_Allegation [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">Allegation</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="allegation_type">allegation_type <font face="Arial Italic" color="grey60">integer ∗</font></td></tr>
  <tr><td align="left" width="130" port="allegation_type_str">allegation_type_str <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="description">description <font face="Arial Italic" color="grey60">text ∗</font></td></tr>
  <tr><td align="left" width="130" port="findings">findings <font face="Arial Italic" color="grey60">integer ∗</font></td></tr>
  <tr><td align="left" width="130" port="findings_explanation">findings_explanation <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="findings_str">findings_str <font face="Arial Italic" color="grey60">string</font></td></tr>
</table>
}>];
m_Application [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">Application</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_form_online_percentage">agency_form_online_percentage <font face="Arial Italic" color="grey60">integer ∗</font></td></tr>
  <tr><td align="left" width="130" port="applicant_form_online_percentage">applicant_form_online_percentage <font face="Arial Italic" color="grey60">integer ∗</font></td></tr>
  <tr><td align="left" width="130" port="approved_age_higher">approved_age_higher <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="approved_age_lower">approved_age_lower <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="asfa_standard_met">asfa_standard_met <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="asfa_status_date">asfa_status_date <font face="Arial Italic" color="grey60">date</font></td></tr>
  <tr><td align="left" width="130" port="belongs_to_binti_employee">belongs_to_binti_employee <font face="Arial Italic" color="grey60">boolean ∗</font></td></tr>
  <tr><td align="left" width="130" port="capacity">capacity <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="case_type">case_type <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="case_type_str">case_type_str <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="case_work_completed_percentage">case_work_completed_percentage <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="child_associated_with_home">child_associated_with_home <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="child_in_home">child_in_home <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="childrens_names">childrens_names <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="community_foster">community_foster <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="completed_at">completed_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="confidential">confidential <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="cpr_due_date_a">cpr_due_date_a <font face="Arial Italic" color="grey60">date</font></td></tr>
  <tr><td align="left" width="130" port="cpr_due_date_b">cpr_due_date_b <font face="Arial Italic" color="grey60">date</font></td></tr>
  <tr><td align="left" width="130" port="created_from">created_from <font face="Arial Italic" color="grey60">integer ∗</font></td></tr>
  <tr><td align="left" width="130" port="created_from_str">created_from_str <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="custom_fields">custom_fields <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="cws_cms_status">cws_cms_status <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="cws_cms_status_date">cws_cms_status_date <font face="Arial Italic" color="grey60">date</font></td></tr>
  <tr><td align="left" width="130" port="cws_cms_status_str">cws_cms_status_str <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="cws_cms_status_system_update_date">cws_cms_status_system_update_date <font face="Arial Italic" color="grey60">date</font></td></tr>
  <tr><td align="left" width="130" port="cws_cms_status_updated_at">cws_cms_status_updated_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="cws_cms_touch_date">cws_cms_touch_date <font face="Arial Italic" color="grey60">date</font></td></tr>
  <tr><td align="left" width="130" port="date_application_started">date_application_started <font face="Arial Italic" color="grey60">date</font></td></tr>
  <tr><td align="left" width="130" port="date_of_inquiry">date_of_inquiry <font face="Arial Italic" color="grey60">date ∗</font></td></tr>
  <tr><td align="left" width="130" port="date_of_placement">date_of_placement <font face="Arial Italic" color="grey60">date</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="emergency_provider">emergency_provider <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="family_type">family_type <font face="Arial Italic" color="grey60">integer ∗</font></td></tr>
  <tr><td align="left" width="130" port="family_type_str">family_type_str <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="first_contacted_at">first_contacted_at <font face="Arial Italic" color="grey60">date</font></td></tr>
  <tr><td align="left" width="130" port="form_requirements_enabled">form_requirements_enabled <font face="Arial Italic" color="grey60">boolean ∗</font></td></tr>
  <tr><td align="left" width="130" port="forms_completed_percentage">forms_completed_percentage <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="how_did_you_hear_about_us">how_did_you_hear_about_us <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="how_did_you_hear_about_us_details">how_did_you_hear_about_us_details <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="in_county">in_county <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="intake_completed_percentage">intake_completed_percentage <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="intake_fields">intake_fields <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="intake_forms_complete">intake_forms_complete <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="inter_county_request">inter_county_request <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="inter_state_request">inter_state_request <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="is_most_recent_for_applicant">is_most_recent_for_applicant <font face="Arial Italic" color="grey60">boolean ∗</font></td></tr>
  <tr><td align="left" width="130" port="legacy_community_based_organization_id">legacy_community_based_organization_id <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="medically_trained">medically_trained <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="minor_children_need_medical_forms">minor_children_need_medical_forms <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="not_signed">not_signed <font face="Arial Italic" color="grey60">boolean ∗</font></td></tr>
  <tr><td align="left" width="130" port="num_children_in_home_excluding_foster_children">num_children_in_home_excluding_foster_children <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="num_na_placeholder_references_a">num_na_placeholder_references_a <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="num_na_placeholder_references_b">num_na_placeholder_references_b <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="office_code">office_code <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="office_name">office_name <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="other_adults_in_home_known">other_adults_in_home_known <font face="Arial Italic" color="grey60">boolean ∗</font></td></tr>
  <tr><td align="left" width="130" port="other_adults_need_medical_forms">other_adults_need_medical_forms <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="referral_county">referral_county <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="referral_date">referral_date <font face="Arial Italic" color="grey60">date</font></td></tr>
  <tr><td align="left" width="130" port="referral_out_of_county_worker">referral_out_of_county_worker <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="referral_out_of_county_worker_contact_info">referral_out_of_county_worker_contact_info <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="referral_state">referral_state <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="referral_type">referral_type <font face="Arial Italic" color="grey60">integer ∗</font></td></tr>
  <tr><td align="left" width="130" port="referral_type_str">referral_type_str <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="referred_by_type">referred_by_type <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="referred_by_type_other_explanation">referred_by_type_other_explanation <font face="Arial Italic" color="grey60">text ∗</font></td></tr>
  <tr><td align="left" width="130" port="referred_by_type_str">referred_by_type_str <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="referring_caseworker">referring_caseworker <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="referring_supervisor_caseworker">referring_supervisor_caseworker <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="reminder_count">reminder_count <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="renewal_due_date">renewal_due_date <font face="Arial Italic" color="grey60">date</font></td></tr>
  <tr><td align="left" width="130" port="respite_provider">respite_provider <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="single_parent">single_parent <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="spa">spa <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="started_at">started_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="status">status <font face="Arial Italic" color="grey60">integer ∗</font></td></tr>
  <tr><td align="left" width="130" port="status_date">status_date <font face="Arial Italic" color="grey60">date ∗</font></td></tr>
  <tr><td align="left" width="130" port="status_explanation">status_explanation <font face="Arial Italic" color="grey60">text ∗</font></td></tr>
  <tr><td align="left" width="130" port="status_reason">status_reason <font face="Arial Italic" color="grey60">integer ∗</font></td></tr>
  <tr><td align="left" width="130" port="status_reason_str">status_reason_str <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="status_str">status_str <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="sub_level_status_reason">sub_level_status_reason <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="supporting_docs_completed_percentage">supporting_docs_completed_percentage <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="supporting_docs_v2_enabled">supporting_docs_v2_enabled <font face="Arial Italic" color="grey60">boolean ∗</font></td></tr>
  <tr><td align="left" width="130" port="top_level_status_reason">top_level_status_reason <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="trainings_completed_percentage">trainings_completed_percentage <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="transferred_at">transferred_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="version_info">version_info <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
</table>
}>];
m_ApplicationChildInHome [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">ApplicationChildInHome</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="relationship_to_applicant">relationship_to_applicant <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="relationship_to_applicant_details">relationship_to_applicant_details <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
</table>
}>];
m_ApplicationOtherAdult [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">ApplicationOtherAdult</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="adult_type">adult_type <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="first_name">first_name <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="last_name">last_name <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="middle_name">middle_name <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="name">name <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="phone_number">phone_number <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="reminder_count">reminder_count <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="suffix">suffix <font face="Arial Italic" color="grey60">string</font></td></tr>
</table>
}>];
m_ApplicationReference [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">ApplicationReference</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="first_name">first_name <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="last_name">last_name <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="middle_name">middle_name <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="name">name <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="phone_number">phone_number <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="reminder_count">reminder_count <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="suffix">suffix <font face="Arial Italic" color="grey60">string</font></td></tr>
</table>
}>];
m_ApplicationStage [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">ApplicationStage</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="children_in_home_section_text_translations">children_in_home_section_text_translations <font face="Arial Italic" color="grey60">jsonb</font></td></tr>
  <tr><td align="left" width="130" port="completed_at">completed_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="content_translations">content_translations <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="custom_fields">custom_fields <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="has_children_in_home_section">has_children_in_home_section <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="has_other_adults_in_home_section">has_other_adults_in_home_section <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="has_references_section">has_references_section <font face="Arial Italic" color="grey60">boolean ∗</font></td></tr>
  <tr><td align="left" width="130" port="headline_translations">headline_translations <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="icon_name">icon_name <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="icon_name_str">icon_name_str <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="incomplete_tasks_tooltip_text_translations">incomplete_tasks_tooltip_text_translations <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="lead_text_translations">lead_text_translations <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="other_adults_help_text_translations">other_adults_help_text_translations <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="other_adults_in_home_required">other_adults_in_home_required <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="other_adults_in_home_section_text_translations">other_adults_in_home_section_text_translations <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="other_adults_label_text_translations">other_adults_label_text_translations <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="reference_section_text_translations">reference_section_text_translations <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="references_for">references_for <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="references_for_str">references_for_str <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="references_required">references_required <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="role">role <font face="Arial Italic" color="grey60">integer ∗</font></td></tr>
  <tr><td align="left" width="130" port="role_str">role_str <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="stage_number">stage_number <font face="Arial Italic" color="grey60">integer ∗ U</font></td></tr>
  <tr><td align="left" width="130" port="started_at">started_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="supported_locales">supported_locales <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
</table>
}>];
m_ApplicationStageTemplate [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">ApplicationStageTemplate</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="children_in_home_section_text_translations">children_in_home_section_text_translations <font face="Arial Italic" color="grey60">jsonb</font></td></tr>
  <tr><td align="left" width="130" port="content_translations">content_translations <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="custom_fields">custom_fields <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="has_children_in_home_section">has_children_in_home_section <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="has_other_adults_in_home_section">has_other_adults_in_home_section <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="has_references_section">has_references_section <font face="Arial Italic" color="grey60">boolean ∗</font></td></tr>
  <tr><td align="left" width="130" port="headline_translations">headline_translations <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="icon_name">icon_name <font face="Arial Italic" color="grey60">integer ∗</font></td></tr>
  <tr><td align="left" width="130" port="icon_name_str">icon_name_str <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="incomplete_tasks_tooltip_text_translations">incomplete_tasks_tooltip_text_translations <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="lead_text_translations">lead_text_translations <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="other_adults_help_text_translations">other_adults_help_text_translations <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="other_adults_in_home_section_text_translations">other_adults_in_home_section_text_translations <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="other_adults_label_text_translations">other_adults_label_text_translations <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="reference_section_text_translations">reference_section_text_translations <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="references_for">references_for <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="references_for_str">references_for_str <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="references_required">references_required <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="role">role <font face="Arial Italic" color="grey60">integer ∗ U</font></td></tr>
  <tr><td align="left" width="130" port="role_str">role_str <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="stage_number">stage_number <font face="Arial Italic" color="grey60">integer ∗ U</font></td></tr>
  <tr><td align="left" width="130" port="supported_locales">supported_locales <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
</table>
}>];
m_ApplicationStatusChange [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">ApplicationStatusChange</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="application_errors">application_errors <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="changed_at">changed_at <font face="Arial Italic" color="grey60">datetime ∗</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="overridden">overridden <font face="Arial Italic" color="grey60">boolean ∗</font></td></tr>
  <tr><td align="left" width="130" port="overridden_explanation">overridden_explanation <font face="Arial Italic" color="grey60">text ∗</font></td></tr>
  <tr><td align="left" width="130" port="overridden_reason">overridden_reason <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="status_after">status_after <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="status_after_str">status_after_str <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="status_before">status_before <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="status_before_str">status_before_str <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="status_date">status_date <font face="Arial Italic" color="grey60">date</font></td></tr>
  <tr><td align="left" width="130" port="status_explanation_after">status_explanation_after <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="status_explanation_before">status_explanation_before <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="status_reason_after">status_reason_after <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="status_reason_after_str">status_reason_after_str <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="status_reason_before">status_reason_before <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="status_reason_before_str">status_reason_before_str <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="sub_level_status_reason_after">sub_level_status_reason_after <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="sub_level_status_reason_before">sub_level_status_reason_before <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="top_level_status_reason_after">top_level_status_reason_after <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="top_level_status_reason_before">top_level_status_reason_before <font face="Arial Italic" color="grey60">string</font></td></tr>
</table>
}>];
m_ApplicationTemplate [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">ApplicationTemplate</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="activated_at">activated_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="children_in_home_enabled">children_in_home_enabled <font face="Arial Italic" color="grey60">boolean ∗</font></td></tr>
  <tr><td align="left" width="130" port="default_family_type">default_family_type <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="deprecated_at">deprecated_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="form_requirements_enabled">form_requirements_enabled <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="headline_translations">headline_translations <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="internal_notes">internal_notes <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="is_next_renewal_due_at_end_of_month">is_next_renewal_due_at_end_of_month <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="jira_task">jira_task <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="lead_text_translations">lead_text_translations <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="minor_children_need_medical_forms">minor_children_need_medical_forms <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="next_renewal_due_in_x_months">next_renewal_due_in_x_months <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="no_required_training_hours">no_required_training_hours <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="other_adults_need_medical_forms">other_adults_need_medical_forms <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="reference_redirect_url">reference_redirect_url <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="reference_section_text_translations">reference_section_text_translations <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="references_for">references_for <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="references_required">references_required <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="renewal_due_date_basis">renewal_due_date_basis <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="sign_up_page_header_1_translations">sign_up_page_header_1_translations <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="sign_up_page_header_2_translations">sign_up_page_header_2_translations <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="slug">slug <font face="Arial Italic" color="grey60">string ∗ U</font></td></tr>
  <tr><td align="left" width="130" port="state">state <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="supported_locales">supported_locales <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="supporting_docs_v2_enabled">supporting_docs_v2_enabled <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="title_translations">title_translations <font face="Arial Italic" color="grey60">jsonb ∗ U</font></td></tr>
  <tr><td align="left" width="130" port="training_number_of_hours">training_number_of_hours <font face="Arial Italic" color="grey60">integer ∗</font></td></tr>
  <tr><td align="left" width="130" port="version_name">version_name <font face="Arial Italic" color="grey60">string U</font></td></tr>
</table>
}>];
m_ApplicationTemplateChange [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">ApplicationTemplateChange</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="details">details <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="reason">reason <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
</table>
}>];
m_ApplicationTemplateForm [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">ApplicationTemplateForm</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="sort_order">sort_order <font face="Arial Italic" color="grey60">integer</font></td></tr>
</table>
}>];
m_ApplicationTemplateLineage [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">ApplicationTemplateLineage</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="application_type">application_type <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="internal_notes">internal_notes <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="jira_task">jira_task <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="should_use_partner_agency_on_external_communications">should_use_partner_agency_on_external_communications <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="slug">slug <font face="Arial Italic" color="grey60">string ∗ U</font></td></tr>
  <tr><td align="left" width="130" port="title_translations">title_translations <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
</table>
}>];
m_Attachment [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">Attachment</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="attachable_type">attachable_type <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="category">category <font face="Arial Italic" color="grey60">integer ∗</font></td></tr>
  <tr><td align="left" width="130" port="category_str">category_str <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="created_from">created_from <font face="Arial Italic" color="grey60">integer ∗</font></td></tr>
  <tr><td align="left" width="130" port="created_from_str">created_from_str <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="file_content_type">file_content_type <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="file_filename">file_filename <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="file_id">file_id <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="file_size">file_size <font face="Arial Italic" color="grey60">integer ∗</font></td></tr>
  <tr><td align="left" width="130" port="locale">locale <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="name">name <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="optional_subject_role">optional_subject_role <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="optional_subject_role_str">optional_subject_role_str <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="part_of_batch_upload">part_of_batch_upload <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="pdf_file_id">pdf_file_id <font face="Arial Italic" color="grey60">string</font></td></tr>
</table>
}>];
m_BackgroundCheck [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">BackgroundCheck</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="name">name <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="renewal_required">renewal_required <font face="Arial Italic" color="grey60">boolean ∗</font></td></tr>
  <tr><td align="left" width="130" port="required">required <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="step">step <font face="Arial Italic" color="grey60">integer ∗</font></td></tr>
  <tr><td align="left" width="130" port="step_str">step_str <font face="Arial Italic" color="grey60">string</font></td></tr>
</table>
}>];
m_BackgroundCheckExemption [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">BackgroundCheckExemption</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="cws_cms_touch_date">cws_cms_touch_date <font face="Arial Italic" color="grey60">date</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="granted">granted <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="notes">notes <font face="Arial Italic" color="grey60">text ∗</font></td></tr>
</table>
}>];
m_BackgroundCheckLog [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">BackgroundCheckLog</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="completed_at">completed_at <font face="Arial Italic" color="grey60">date ∗</font></td></tr>
  <tr><td align="left" width="130" port="cws_cms_touch_date">cws_cms_touch_date <font face="Arial Italic" color="grey60">date</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="notes">notes <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="status">status <font face="Arial Italic" color="grey60">integer ∗</font></td></tr>
  <tr><td align="left" width="130" port="status_str">status_str <font face="Arial Italic" color="grey60">string</font></td></tr>
</table>
}>];
m_BintiRentedPhoneNumber [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">BintiRentedPhoneNumber</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="phone_number">phone_number <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="twilio_id">twilio_id <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
</table>
}>];
m_CaseNote [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">CaseNote</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="amount_spent">amount_spent <font face="Arial Italic" color="grey60">money ∗</font></td></tr>
  <tr><td align="left" width="130" port="body">body <font face="Arial Italic" color="grey60">text ∗</font></td></tr>
  <tr><td align="left" width="130" port="case_note_type">case_note_type <font face="Arial Italic" color="grey60">integer ∗</font></td></tr>
  <tr><td align="left" width="130" port="case_note_type_str">case_note_type_str <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="complaint_or_violation_type">complaint_or_violation_type <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="complaint_or_violation_type_str">complaint_or_violation_type_str <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="contact_method">contact_method <font face="Arial Italic" color="grey60">integer ∗</font></td></tr>
  <tr><td align="left" width="130" port="contact_method_str">contact_method_str <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="date">date <font face="Arial Italic" color="grey60">date ∗</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="estimated_approval_date">estimated_approval_date <font face="Arial Italic" color="grey60">date ∗</font></td></tr>
  <tr><td align="left" width="130" port="legacy_user_id">legacy_user_id <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="support_service_type">support_service_type <font face="Arial Italic" color="grey60">integer ∗</font></td></tr>
  <tr><td align="left" width="130" port="support_service_type_str">support_service_type_str <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="visit_type">visit_type <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="visit_type_str">visit_type_str <font face="Arial Italic" color="grey60">string</font></td></tr>
</table>
}>];
m_Child [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">Child</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="allergies">allergies <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="behavior_and_medical">behavior_and_medical <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="can_be_in_home_with_pets">can_be_in_home_with_pets <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="cib_number">cib_number <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="client_id">client_id <font face="Arial Italic" color="grey60">string ∗ U</font></td></tr>
  <tr><td align="left" width="130" port="client_id_cleaned_up_duplicate_status">client_id_cleaned_up_duplicate_status <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="client_id_former">client_id_former <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="comments">comments <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="community_of_origin_location">community_of_origin_location <font face="Arial Italic" color="grey60">geography</font></td></tr>
  <tr><td align="left" width="130" port="community_of_origin_location_accuracy">community_of_origin_location_accuracy <font face="Arial Italic" color="grey60">decimal</font></td></tr>
  <tr><td align="left" width="130" port="community_of_origin_zipcode">community_of_origin_zipcode <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="date_joined_agency">date_joined_agency <font face="Arial Italic" color="grey60">date</font></td></tr>
  <tr><td align="left" width="130" port="date_of_birth">date_of_birth <font face="Arial Italic" color="grey60">date</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="dependent_date_of_birth">dependent_date_of_birth <font face="Arial Italic" color="grey60">date</font></td></tr>
  <tr><td align="left" width="130" port="dependent_gender">dependent_gender <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="dependent_medical">dependent_medical <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="dependent_name">dependent_name <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="diagnoses">diagnoses <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="ethnicities">ethnicities <font face="Arial Italic" color="grey60">jsonb</font></td></tr>
  <tr><td align="left" width="130" port="first_name">first_name <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="further_education_information">further_education_information <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="further_gender_information">further_gender_information <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="gender">gender <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="grade_level">grade_level <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="has_child">has_child <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="has_no_siblings">has_no_siblings <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="in_school">in_school <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="last_name">last_name <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="legacy_sibling_ids">legacy_sibling_ids <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="medicaid_number">medicaid_number <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="medication">medication <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="middle_name">middle_name <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="nickname">nickname <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="not_in_agency_care">not_in_agency_care <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="nps">nps <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="parental_rights_terminated">parental_rights_terminated <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="phone_number">phone_number <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="placements_worker_id">placements_worker_id <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="primary_language">primary_language <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="protected_tribe">protected_tribe <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="protected_tribe_names">protected_tribe_names <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="psw_cell_number">psw_cell_number <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="psw_desk_number">psw_desk_number <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="psw_email">psw_email <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="psw_name">psw_name <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="psw_placement_recommendations">psw_placement_recommendations <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="psycho_tropic_medication">psycho_tropic_medication <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="referring_caseworker">referring_caseworker <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="referring_caseworker_email">referring_caseworker_email <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="referring_caseworker_phone_number">referring_caseworker_phone_number <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="referring_type">referring_type <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="referring_type_str">referring_type_str <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="sex_assigned_at_birth">sex_assigned_at_birth <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="ssn">ssn <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="strengths">strengths <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="suffix">suffix <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="therapist">therapist <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="therapist_phone_number">therapist_phone_number <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="total_beds_needed">total_beds_needed <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="visitation_description">visitation_description <font face="Arial Italic" color="grey60">text</font></td></tr>
</table>
}>];
m_ChildAgencyPlacement [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">ChildAgencyPlacement</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="relationship">relationship <font face="Arial Italic" color="grey60">text</font></td></tr>
</table>
}>];
m_Complaint [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">Complaint</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="complainant_name">complainant_name <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="date_due">date_due <font face="Arial Italic" color="grey60">date</font></td></tr>
  <tr><td align="left" width="130" port="date_reported">date_reported <font face="Arial Italic" color="grey60">date ∗</font></td></tr>
  <tr><td align="left" width="130" port="date_resolved">date_resolved <font face="Arial Italic" color="grey60">date</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="input_complaint_id">input_complaint_id <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="legacy_user_id">legacy_user_id <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="response">response <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="response_str">response_str <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="will_investigate">will_investigate <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="will_investigate_explanation">will_investigate_explanation <font face="Arial Italic" color="grey60">text</font></td></tr>
</table>
}>];
m_DataValidatorGroup [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">DataValidatorGroup</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="name">name <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="summary">summary <font face="Arial Italic" color="grey60">string</font></td></tr>
</table>
}>];
m_DataValidatorRecord [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">DataValidatorRecord</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="summary">summary <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="validation_status">validation_status <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="validation_status_str">validation_status_str <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="validation_type">validation_type <font face="Arial Italic" color="grey60">integer ∗</font></td></tr>
  <tr><td align="left" width="130" port="validation_type_str">validation_type_str <font face="Arial Italic" color="grey60">string</font></td></tr>
</table>
}>];
m_DripEmail [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">DripEmail</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="days">days <font face="Arial Italic" color="grey60">integer ∗</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="message_content_translations">message_content_translations <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="message_subject_translations">message_subject_translations <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
</table>
}>];
m_EmailCampaign [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">EmailCampaign</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="content">content <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="criteria_for_recipients">criteria_for_recipients <font face="Arial Italic" color="grey60">jsonb</font></td></tr>
  <tr><td align="left" width="130" port="reply_to_email">reply_to_email <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="subject">subject <font face="Arial Italic" color="grey60">string</font></td></tr>
</table>
}>];
m_EmailLog [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">EmailLog</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="email_outreach_type">email_outreach_type <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="sent_at">sent_at <font face="Arial Italic" color="grey60">datetime ∗</font></td></tr>
</table>
}>];
m_FamilyHistoricalDump [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">FamilyHistoricalDump</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="data">data <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="imported_at">imported_at <font face="Arial Italic" color="grey60">datetime ∗</font></td></tr>
</table>
}>];
m_FamilyHistoricalDumpCodebook [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">FamilyHistoricalDumpCodebook</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="data">data <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="name">name <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
</table>
}>];
"m_Flipper::Adapters::ActiveRecord::Feature" [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">Flipper::Adapters::ActiveRecord::Feature</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="key">key <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
</table>
}>];
"m_Flipper::Adapters::ActiveRecord::Gate" [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">Flipper::Adapters::ActiveRecord::Gate</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="feature_key">feature_key <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="key">key <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="value">value <font face="Arial Italic" color="grey60">string</font></td></tr>
</table>
}>];
m_Form [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">Form</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="applicant_b_signs">applicant_b_signs <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="applicant_signs">applicant_signs <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="caseworker_signs">caseworker_signs <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="cbo_worker_can_access">cbo_worker_can_access <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="custom_fields">custom_fields <font face="Arial Italic" color="grey60">jsonb</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="enable_prepopulation_from_past_form">enable_prepopulation_from_past_form <font face="Arial Italic" color="grey60">boolean ∗</font></td></tr>
  <tr><td align="left" width="130" port="form_type_str">form_type_str <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="hellosign_single_applicant_template_id_translations">hellosign_single_applicant_template_id_translations <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="hellosign_template_id_translations">hellosign_template_id_translations <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="include_in_intake">include_in_intake <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="internal_notes">internal_notes <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="is_sibling_form">is_sibling_form <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="jira_task">jira_task <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="name_translations">name_translations <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="optional">optional <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="passing_score">passing_score <font face="Arial Italic" color="grey60">integer ∗</font></td></tr>
  <tr><td align="left" width="130" port="pdf_liquid_template">pdf_liquid_template <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="pdf_strategy_str">pdf_strategy_str <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="placements_worker_can_access">placements_worker_can_access <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="questionnaires_json">questionnaires_json <font face="Arial Italic" color="grey60">json</font></td></tr>
  <tr><td align="left" width="130" port="questions_json">questions_json <font face="Arial Italic" color="grey60">json</font></td></tr>
  <tr><td align="left" width="130" port="roles_spec">roles_spec <font face="Arial Italic" color="grey60">jsonb</font></td></tr>
  <tr><td align="left" width="130" port="slug">slug <font face="Arial Italic" color="grey60">string ∗ U</font></td></tr>
  <tr><td align="left" width="130" port="special_significance_str">special_significance_str <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="sub_forms">sub_forms <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="sub_forms_json">sub_forms_json <font face="Arial Italic" color="grey60">json ∗</font></td></tr>
  <tr><td align="left" width="130" port="supervisor_signs_at_end">supervisor_signs_at_end <font face="Arial Italic" color="grey60">boolean</font></td></tr>
</table>
}>];
m_FormInstance [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">FormInstance</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="application_id">application_id <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="application_stage_id">application_stage_id <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="completed_offline">completed_offline <font face="Arial Italic" color="grey60">boolean ∗</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="hellosign_job_id">hellosign_job_id <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="hellosign_request_status">hellosign_request_status <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="hellosign_request_status_str">hellosign_request_status_str <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="not_applicable">not_applicable <font face="Arial Italic" color="grey60">boolean ∗</font></td></tr>
  <tr><td align="left" width="130" port="partial_available">partial_available <font face="Arial Italic" color="grey60">boolean ∗</font></td></tr>
  <tr><td align="left" width="130" port="progress_percentage">progress_percentage <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="signature_data">signature_data <font face="Arial Italic" color="grey60">json</font></td></tr>
  <tr><td align="left" width="130" port="sort_order">sort_order <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="state">state <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="state_str">state_str <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="sub_forms_completed_offline">sub_forms_completed_offline <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="sub_forms_not_applicable">sub_forms_not_applicable <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="version_bound">version_bound <font face="Arial Italic" color="grey60">boolean ∗</font></td></tr>
</table>
}>];
m_FormInstanceSubject [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">FormInstanceSubject</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
</table>
}>];
m_FormVersion [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">FormVersion</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="applicant_b_signs">applicant_b_signs <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="applicant_signs">applicant_signs <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="caseworker_signs">caseworker_signs <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="custom_fields">custom_fields <font face="Arial Italic" color="grey60">jsonb</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="enable_prepopulation_from_past_form">enable_prepopulation_from_past_form <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="hellosign_single_applicant_template_id_translations">hellosign_single_applicant_template_id_translations <font face="Arial Italic" color="grey60">jsonb</font></td></tr>
  <tr><td align="left" width="130" port="hellosign_template_id_translations">hellosign_template_id_translations <font face="Arial Italic" color="grey60">jsonb</font></td></tr>
  <tr><td align="left" width="130" port="internal_notes">internal_notes <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="jira_task">jira_task <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="passing_score">passing_score <font face="Arial Italic" color="grey60">integer ∗</font></td></tr>
  <tr><td align="left" width="130" port="pdf_strategy">pdf_strategy <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="questionnaires_json">questionnaires_json <font face="Arial Italic" color="grey60">json</font></td></tr>
  <tr><td align="left" width="130" port="questions_json">questions_json <font face="Arial Italic" color="grey60">json</font></td></tr>
  <tr><td align="left" width="130" port="roles_spec">roles_spec <font face="Arial Italic" color="grey60">jsonb</font></td></tr>
  <tr><td align="left" width="130" port="state">state <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="sub_forms_json">sub_forms_json <font face="Arial Italic" color="grey60">json</font></td></tr>
  <tr><td align="left" width="130" port="supervisor_signs_at_end">supervisor_signs_at_end <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="version_name">version_name <font face="Arial Italic" color="grey60">string ∗ U</font></td></tr>
</table>
}>];
m_FundingSource [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">FundingSource</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="description">description <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="name">name <font face="Arial Italic" color="grey60">string ∗ U</font></td></tr>
  <tr><td align="left" width="130" port="slug">slug <font face="Arial Italic" color="grey60">string ∗ U</font></td></tr>
</table>
}>];
m_GoodCause [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">GoodCause</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="anticipated_completion_date">anticipated_completion_date <font face="Arial Italic" color="grey60">date</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="generated_at">generated_at <font face="Arial Italic" color="grey60">datetime ∗</font></td></tr>
</table>
}>];
m_GoodCauseBarrier [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">GoodCauseBarrier</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="barrier_type">barrier_type <font face="Arial Italic" color="grey60">integer ∗ U</font></td></tr>
  <tr><td align="left" width="130" port="barrier_type_str">barrier_type_str <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="explanation">explanation <font face="Arial Italic" color="grey60">text</font></td></tr>
</table>
}>];
m_GroupHome [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">GroupHome</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="address">address <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="address_location">address_location <font face="Arial Italic" color="grey60">geography</font></td></tr>
  <tr><td align="left" width="130" port="address_location_accuracy">address_location_accuracy <font face="Arial Italic" color="grey60">decimal</font></td></tr>
  <tr><td align="left" width="130" port="approved_age_higher">approved_age_higher <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="approved_age_lower">approved_age_lower <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="certification_number">certification_number <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="description">description <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="level">level <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="name">name <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
</table>
}>];
m_HumanPlacementProviderRole [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">HumanPlacementProviderRole</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="first_name">first_name <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="joined_at">joined_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="last_name">last_name <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="left_at">left_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="middle_name">middle_name <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="primary">primary <font face="Arial Italic" color="grey60">boolean ∗</font></td></tr>
  <tr><td align="left" width="130" port="role">role <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="subrole">subrole <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="subrole_details">subrole_details <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="suffix">suffix <font face="Arial Italic" color="grey60">string</font></td></tr>
</table>
}>];
m_IntakeReferral [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">IntakeReferral</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="address">address <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="allegation_description">allegation_description <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="allegation_types">allegation_types <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="external_stakeholders_referred_to">external_stakeholders_referred_to <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="has_mandated_reporter">has_mandated_reporter <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="is_referred_to_investigations">is_referred_to_investigations <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="is_referred_to_support_services">is_referred_to_support_services <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="parent_one_name">parent_one_name <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="parent_one_phone">parent_one_phone <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="parent_two_name">parent_two_name <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="parent_two_phone">parent_two_phone <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="priority">priority <font face="Arial Italic" color="grey60">integer ∗</font></td></tr>
  <tr><td align="left" width="130" port="referred_to_support_services_notes">referred_to_support_services_notes <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="reported_at">reported_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="reported_at_time">reported_at_time <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="reporter_address">reporter_address <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="reporter_name">reporter_name <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="reporter_phone">reporter_phone <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="reporter_type">reporter_type <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="status">status <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="was_reported_anonymously">was_reported_anonymously <font face="Arial Italic" color="grey60">boolean</font></td></tr>
</table>
}>];
m_IntakeReferralChildren [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">IntakeReferralChildren</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
</table>
}>];
m_Investigation [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">Investigation</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="allegation_determination">allegation_determination <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="child_removal_decision">child_removal_decision <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="first_visit_due_date">first_visit_due_date <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="status">status <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="support_services_decision">support_services_decision <font face="Arial Italic" color="grey60">string</font></td></tr>
</table>
}>];
m_LevelOfCare [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">LevelOfCare</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="description">description <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="name">name <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="slug">slug <font face="Arial Italic" color="grey60">string ∗ U</font></td></tr>
</table>
}>];
m_LevelOfCareAssignment [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">LevelOfCareAssignment</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="end_date">end_date <font face="Arial Italic" color="grey60">date</font></td></tr>
  <tr><td align="left" width="130" port="start_date">start_date <font face="Arial Italic" color="grey60">date ∗</font></td></tr>
</table>
}>];
m_LevelOfCareSchedule [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">LevelOfCareSchedule</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
</table>
}>];
m_License [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">License</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="confidential">confidential <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="confidential_reason">confidential_reason <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="confidential_reason_other_explanation">confidential_reason_other_explanation <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="external_identifier">external_identifier <font face="Arial Italic" color="grey60">string U</font></td></tr>
  <tr><td align="left" width="130" port="is_icwa_home">is_icwa_home <font face="Arial Italic" color="grey60">boolean</font></td></tr>
</table>
}>];
m_MergeLog [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">MergeLog</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="duplicate_id">duplicate_id <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="duplicate_type">duplicate_type <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="inferior_type">inferior_type <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="retained_id">retained_id <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="retained_type">retained_type <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="superior_type">superior_type <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
</table>
}>];
m_Message [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">Message</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="content">content <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="twilio_conversation_id">twilio_conversation_id <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="twilio_conversation_service_id">twilio_conversation_service_id <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="twilio_message_id">twilio_message_id <font face="Arial Italic" color="grey60">string</font></td></tr>
</table>
}>];
m_OnDemandServiceRun [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">OnDemandServiceRun</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="completed_at">completed_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="service_args">service_args <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="service_name">service_name <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="sidekiq_job_id">sidekiq_job_id <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="status">status <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
</table>
}>];
m_OrientationAttendance [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">OrientationAttendance</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="in_person_orientation_date">in_person_orientation_date <font face="Arial Italic" color="grey60">date ∗</font></td></tr>
  <tr><td align="left" width="130" port="online_completed_at">online_completed_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="online_started_at">online_started_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="orientation_type">orientation_type <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="slug">slug <font face="Arial Italic" color="grey60">string ∗ U</font></td></tr>
  <tr><td align="left" width="130" port="state">state <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
</table>
}>];
m_OverrideRecord [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">OverrideRecord</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="details">details <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="expiration_date">expiration_date <font face="Arial Italic" color="grey60">date</font></td></tr>
  <tr><td align="left" width="130" port="explicit_training_hours">explicit_training_hours <font face="Arial Italic" color="grey60">decimal</font></td></tr>
  <tr><td align="left" width="130" port="grant_date">grant_date <font face="Arial Italic" color="grey60">date ∗</font></td></tr>
  <tr><td align="left" width="130" port="key">key <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="option_key">option_key <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="override_type">override_type <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="reason">reason <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
</table>
}>];
"m_PaperTrail::Version" [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">PaperTrail::Version</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="event">event <font face="Arial Italic" color="grey60">string (255) ∗</font></td></tr>
  <tr><td align="left" width="130" port="item_type">item_type <font face="Arial Italic" color="grey60">string (255) ∗</font></td></tr>
  <tr><td align="left" width="130" port="metadata">metadata <font face="Arial Italic" color="grey60">jsonb</font></td></tr>
  <tr><td align="left" width="130" port="object">object <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="object_changes">object_changes <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="who_really_dunnit_id">who_really_dunnit_id <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="whodunnit">whodunnit <font face="Arial Italic" color="grey60">string (255)</font></td></tr>
</table>
}>];
m_Payment [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">Payment</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="amount_total_cents">amount_total_cents <font face="Arial Italic" color="grey60">integer ∗</font></td></tr>
  <tr><td align="left" width="130" port="completed_at">completed_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="manually_paid_out_at">manually_paid_out_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="metadata">metadata <font face="Arial Italic" color="grey60">json</font></td></tr>
  <tr><td align="left" width="130" port="needs_manual_payout">needs_manual_payout <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="stripe_id">stripe_id <font face="Arial Italic" color="grey60">string (255)</font></td></tr>
  <tr><td align="left" width="130" port="stripe_response">stripe_response <font face="Arial Italic" color="grey60">json</font></td></tr>
</table>
}>];
m_PhoneNumber [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">PhoneNumber</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="active">active <font face="Arial Italic" color="grey60">boolean ∗</font></td></tr>
  <tr><td align="left" width="130" port="carrier_data">carrier_data <font face="Arial Italic" color="grey60">jsonb</font></td></tr>
  <tr><td align="left" width="130" port="category">category <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="extension">extension <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="notes">notes <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="person_type">person_type <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="phone_number">phone_number <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="primary">primary <font face="Arial Italic" color="grey60">boolean ∗</font></td></tr>
</table>
}>];
m_PlacementCallingLog [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">PlacementCallingLog</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="availability">availability <font face="Arial Italic" color="grey60">integer ∗</font></td></tr>
  <tr><td align="left" width="130" port="availability_str">availability_str <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="child_ids">child_ids <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="comments">comments <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="contacted_at">contacted_at <font face="Arial Italic" color="grey60">datetime ∗</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="other_explanation">other_explanation <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="placement_search_ids">placement_search_ids <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="why_refused">why_refused <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="why_refused_str">why_refused_str <font face="Arial Italic" color="grey60">string</font></td></tr>
</table>
}>];
m_PlacementHold [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">PlacementHold</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">date</font></td></tr>
  <tr><td align="left" width="130" port="reason_requested">reason_requested <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="requested_at">requested_at <font face="Arial Italic" color="grey60">date</font></td></tr>
  <tr><td align="left" width="130" port="resolved_at">resolved_at <font face="Arial Italic" color="grey60">date</font></td></tr>
  <tr><td align="left" width="130" port="voluntary">voluntary <font face="Arial Italic" color="grey60">boolean</font></td></tr>
</table>
}>];
m_PlacementPeriod [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">PlacementPeriod</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="address">address <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="can_family_view_child_profile">can_family_view_child_profile <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="end_date">end_date <font face="Arial Italic" color="grey60">date</font></td></tr>
  <tr><td align="left" width="130" port="family_name">family_name <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="is_respite">is_respite <font face="Arial Italic" color="grey60">boolean ∗</font></td></tr>
  <tr><td align="left" width="130" port="license_number">license_number <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="phone_number_str">phone_number_str <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="placement_ended_reason">placement_ended_reason <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="placement_reason">placement_reason <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="placement_reason_explanation">placement_reason_explanation <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="placement_type">placement_type <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="placement_type_description">placement_type_description <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="private_agency_family_address">private_agency_family_address <font face="Arial Italic" color="grey60">jsonb</font></td></tr>
  <tr><td align="left" width="130" port="private_agency_family_license_number">private_agency_family_license_number <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="private_agency_family_name">private_agency_family_name <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="private_agency_family_phone_number">private_agency_family_phone_number <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="provider_type">provider_type <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="relationship_to_child">relationship_to_child <font face="Arial Italic" color="grey60">text ∗</font></td></tr>
  <tr><td align="left" width="130" port="respite_additional_information">respite_additional_information <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="respite_reason_requested">respite_reason_requested <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="should_pay_respite_provider">should_pay_respite_provider <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="should_pay_standard_provider">should_pay_standard_provider <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="start_date">start_date <font face="Arial Italic" color="grey60">date ∗</font></td></tr>
</table>
}>];
m_PlacementProvider [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">PlacementProvider</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
</table>
}>];
m_PlacementSearch [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">PlacementSearch</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="closed_at">closed_at <font face="Arial Italic" color="grey60">date ∗</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="due_at">due_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="reason_closed">reason_closed <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="reason_closed_other_explanation">reason_closed_other_explanation <font face="Arial Italic" color="grey60">text ∗</font></td></tr>
  <tr><td align="left" width="130" port="reason_closed_str">reason_closed_str <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="reason_requested">reason_requested <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="reason_requested_explanation">reason_requested_explanation <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="reason_requested_str">reason_requested_str <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="requested_at">requested_at <font face="Arial Italic" color="grey60">datetime ∗</font></td></tr>
</table>
}>];
m_ProductUpdate [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">ProductUpdate</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="ca_only">ca_only <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="description">description <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="email_identifier">email_identifier <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="image_name">image_name <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="private_agencies_only">private_agencies_only <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="product">product <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="public_agencies_only">public_agencies_only <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="title">title <font face="Arial Italic" color="grey60">string</font></td></tr>
</table>
}>];
m_Program [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">Program</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="description">description <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="name">name <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="short_code">short_code <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="slug">slug <font face="Arial Italic" color="grey60">string ∗ U</font></td></tr>
</table>
}>];
m_ProgramAssignment [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">ProgramAssignment</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
</table>
}>];
m_ProgramSchedule [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">ProgramSchedule</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
</table>
}>];
m_PulledReport [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">PulledReport</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="completed_at">completed_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="controller_class">controller_class <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="job_id">job_id <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="params">params <font face="Arial Italic" color="grey60">json ∗</font></td></tr>
  <tr><td align="left" width="130" port="retry_count">retry_count <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="source_path">source_path <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
</table>
}>];
m_QuestionnaireResponse [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">QuestionnaireResponse</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="completion">completion <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="data">data <font face="Arial Italic" color="grey60">json</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="key">key <font face="Arial Italic" color="grey60">string (255) ∗ U</font></td></tr>
</table>
}>];
m_Rate [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">Rate</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="max_age">max_age <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="min_age">min_age <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="parenting">parenting <font face="Arial Italic" color="grey60">boolean ∗</font></td></tr>
  <tr><td align="left" width="130" port="placement_type">placement_type <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="rate_billed">rate_billed <font face="Arial Italic" color="grey60">decimal ∗</font></td></tr>
  <tr><td align="left" width="130" port="rate_paid_to_recipient">rate_paid_to_recipient <font face="Arial Italic" color="grey60">decimal ∗</font></td></tr>
  <tr><td align="left" width="130" port="respite">respite <font face="Arial Italic" color="grey60">boolean ∗</font></td></tr>
</table>
}>];
m_RateTable [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">RateTable</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="comments">comments <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="configuration_attributes">configuration_attributes <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="effective_date">effective_date <font face="Arial Italic" color="grey60">date ∗</font></td></tr>
  <tr><td align="left" width="130" port="inactive_date">inactive_date <font face="Arial Italic" color="grey60">date</font></td></tr>
  <tr><td align="left" width="130" port="rate_unit">rate_unit <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="rate_version">rate_version <font face="Arial Italic" color="grey60">integer ∗ U</font></td></tr>
  <tr><td align="left" width="130" port="status">status <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="validation_errors">validation_errors <font face="Arial Italic" color="grey60">string</font></td></tr>
</table>
}>];
m_RelationshipBasedPermission [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">RelationshipBasedPermission</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="record_id">record_id <font face="Arial Italic" color="grey60">integer ∗ U</font></td></tr>
</table>
}>];
m_RelationshipBasedPermissionsRule [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">RelationshipBasedPermissionsRule</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="action">action <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="relationship_through_root">relationship_through_root <font face="Arial Italic" color="grey60">boolean ∗</font></td></tr>
  <tr><td align="left" width="130" port="relationship_type">relationship_type <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="resource">resource <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="root_resource">root_resource <font face="Arial Italic" color="grey60">string</font></td></tr>
</table>
}>];
m_RequiredSignature [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">RequiredSignature</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="completed_at">completed_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="locations">locations <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="order">order <font face="Arial Italic" color="grey60">integer ∗</font></td></tr>
  <tr><td align="left" width="130" port="role">role <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="signing_context">signing_context <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
</table>
}>];
m_Requirement [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">Requirement</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="completed_at">completed_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="due_at">due_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="key">key <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="max_expiration_date">max_expiration_date <font face="Arial Italic" color="grey60">date</font></td></tr>
  <tr><td align="left" width="130" port="state">state <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="training_curriculum_id">training_curriculum_id <font face="Arial Italic" color="grey60">integer</font></td></tr>
</table>
}>];
m_RequirementRecord [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">RequirementRecord</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
</table>
}>];
m_RequirementTemplate [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">RequirementTemplate</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="requirement_type">requirement_type <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="specification">specification <font face="Arial Italic" color="grey60">jsonb</font></td></tr>
</table>
}>];
m_RequirementTemplateSet [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">RequirementTemplateSet</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="requirement_template_type">requirement_template_type <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
</table>
}>];
m_Role [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">Role</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="name_translations">name_translations <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="slug">slug <font face="Arial Italic" color="grey60">string ∗ U</font></td></tr>
</table>
}>];
m_RoleBasedPermission [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">RoleBasedPermission</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="action">action <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="conditions">conditions <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="resource">resource <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
</table>
}>];
m_Schedule [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">Schedule</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="name">name <font face="Arial Italic" color="grey60">string ∗ U</font></td></tr>
  <tr><td align="left" width="130" port="oldest_age">oldest_age <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="slug">slug <font face="Arial Italic" color="grey60">string ∗ U</font></td></tr>
  <tr><td align="left" width="130" port="specification">specification <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="youngest_age">youngest_age <font face="Arial Italic" color="grey60">integer</font></td></tr>
</table>
}>];
m_ScheduleActivation [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">ScheduleActivation</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="activated_at">activated_at <font face="Arial Italic" color="grey60">datetime ∗</font></td></tr>
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
</table>
}>];
m_ScheduleAssignment [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">ScheduleAssignment</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="level_of_care_assignment_id">level_of_care_assignment_id <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="next_activation_at">next_activation_at <font face="Arial Italic" color="grey60">date</font></td></tr>
  <tr><td align="left" width="130" port="started_at">started_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
</table>
}>];
m_School [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">School</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="address">address <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="address_location">address_location <font face="Arial Italic" color="grey60">geography</font></td></tr>
  <tr><td align="left" width="130" port="address_location_accuracy">address_location_accuracy <font face="Arial Italic" color="grey60">decimal</font></td></tr>
  <tr><td align="left" width="130" port="boundary">boundary <font face="Arial Italic" color="grey60">geometry</font></td></tr>
  <tr><td align="left" width="130" port="defacto">defacto <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="geographic_boundary">geographic_boundary <font face="Arial Italic" color="grey60">geography</font></td></tr>
  <tr><td align="left" width="130" port="grade_differing_boundary">grade_differing_boundary <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="highest_grade">highest_grade <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="level">level <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="lowest_grade">lowest_grade <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="name">name <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="nces_school_id">nces_school_id <font face="Arial Italic" color="grey60">string U</font></td></tr>
  <tr><td align="left" width="130" port="open_enroll">open_enroll <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="school_district_id">school_district_id <font face="Arial Italic" color="grey60">string</font></td></tr>
</table>
}>];
m_Service [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">Service</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="accepted_date">accepted_date <font face="Arial Italic" color="grey60">date</font></td></tr>
  <tr><td align="left" width="130" port="billable_amount">billable_amount <font face="Arial Italic" color="grey60">float</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="details">details <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="end_date">end_date <font face="Arial Italic" color="grey60">date</font></td></tr>
  <tr><td align="left" width="130" port="offered_date">offered_date <font face="Arial Italic" color="grey60">date</font></td></tr>
  <tr><td align="left" width="130" port="referred_date">referred_date <font face="Arial Italic" color="grey60">date</font></td></tr>
  <tr><td align="left" width="130" port="rrule">rrule <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="start_date">start_date <font face="Arial Italic" color="grey60">date ∗</font></td></tr>
  <tr><td align="left" width="130" port="used">used <font face="Arial Italic" color="grey60">boolean ∗</font></td></tr>
</table>
}>];
m_ServiceTemplate [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">ServiceTemplate</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="code">code <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="description">description <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="name">name <font face="Arial Italic" color="grey60">string ∗ U</font></td></tr>
  <tr><td align="left" width="130" port="slug">slug <font face="Arial Italic" color="grey60">string ∗ U</font></td></tr>
</table>
}>];
m_ServicesFundingSource [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">ServicesFundingSource</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
</table>
}>];
m_SiblingRelationship [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">SiblingRelationship</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
</table>
}>];
m_Signature [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">Signature</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="signature_uri">signature_uri <font face="Arial Italic" color="grey60">text ∗</font></td></tr>
</table>
}>];
m_SigningEvent [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">SigningEvent</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="completed_at">completed_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="job_id">job_id <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="state">state <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
</table>
}>];
m_SpecialEvent [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">SpecialEvent</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="comment">comment <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="form_instance_id">form_instance_id <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="occurred_at">occurred_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
</table>
}>];
m_SpecialEventTemplate [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">SpecialEventTemplate</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="description">description <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="name">name <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="slug">slug <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
</table>
}>];
m_SpecialEventTemplateForm [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">SpecialEventTemplateForm</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
</table>
}>];
m_SubAgencyAssignment [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">SubAgencyAssignment</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="created_by_id">created_by_id <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="deleted_by_id">deleted_by_id <font face="Arial Italic" color="grey60">integer</font></td></tr>
</table>
}>];
m_SupervisoryAssignment [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">SupervisoryAssignment</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
</table>
}>];
m_Tag [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">Tag</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="category">category <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="name">name <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
</table>
}>];
m_Tagging [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">Tagging</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="taggable_type">taggable_type <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
</table>
}>];
m_TamSnippet [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">TamSnippet</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="content_type">content_type <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="shortcut">shortcut <font face="Arial Italic" color="grey60">string ∗ U</font></td></tr>
  <tr><td align="left" width="130" port="snippet">snippet <font face="Arial Italic" color="grey60">text ∗</font></td></tr>
</table>
}>];
m_TrainingCurriculum [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">TrainingCurriculum</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="active">active <font face="Arial Italic" color="grey60">boolean ∗</font></td></tr>
  <tr><td align="left" width="130" port="cpr">cpr <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="name">name <font face="Arial Italic" color="grey60">string ∗ U</font></td></tr>
  <tr><td align="left" width="130" port="number_of_hours">number_of_hours <font face="Arial Italic" color="grey60">decimal ∗</font></td></tr>
  <tr><td align="left" width="130" port="training_type_str">training_type_str <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
</table>
}>];
m_TrainingCurriculumsTrack [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">TrainingCurriculumsTrack</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
</table>
}>];
m_TrainingSession [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">TrainingSession</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="expiration_date">expiration_date <font face="Arial Italic" color="grey60">date ∗</font></td></tr>
  <tr><td align="left" width="130" port="language">language <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="other_training_explanation">other_training_explanation <font face="Arial Italic" color="grey60">text ∗</font></td></tr>
  <tr><td align="left" width="130" port="other_training_number_of_hours">other_training_number_of_hours <font face="Arial Italic" color="grey60">decimal ∗</font></td></tr>
  <tr><td align="left" width="130" port="training_session_date">training_session_date <font face="Arial Italic" color="grey60">date ∗</font></td></tr>
  <tr><td align="left" width="130" port="training_session_time">training_session_time <font face="Arial Italic" color="grey60">time</font></td></tr>
</table>
}>];
m_TrainingSessionAttendance [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">TrainingSessionAttendance</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="body">body <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="caregiver_not_in_binti">caregiver_not_in_binti <font face="Arial Italic" color="grey60">boolean ∗</font></td></tr>
  <tr><td align="left" width="130" port="custom_caregiver_address_city">custom_caregiver_address_city <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="custom_caregiver_address_county">custom_caregiver_address_county <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="custom_caregiver_address_state">custom_caregiver_address_state <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="custom_caregiver_address_street">custom_caregiver_address_street <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="custom_caregiver_address_zipcode">custom_caregiver_address_zipcode <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="custom_caregiver_email">custom_caregiver_email <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="custom_caregiver_name">custom_caregiver_name <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="custom_caregiver_phone_number">custom_caregiver_phone_number <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="custom_caregiver_reason">custom_caregiver_reason <font face="Arial Italic" color="grey60">integer ∗</font></td></tr>
  <tr><td align="left" width="130" port="custom_caregiver_reason_str">custom_caregiver_reason_str <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
</table>
}>];
m_TrainingTrack [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">TrainingTrack</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="name">name <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
</table>
}>];
m_UploadType [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">UploadType</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="cbo_worker_can_access">cbo_worker_can_access <font face="Arial Italic" color="grey60">boolean ∗</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="description_translations">description_translations <font face="Arial Italic" color="grey60">jsonb</font></td></tr>
  <tr><td align="left" width="130" port="name_translations">name_translations <font face="Arial Italic" color="grey60">jsonb</font></td></tr>
  <tr><td align="left" width="130" port="placements_worker_can_access">placements_worker_can_access <font face="Arial Italic" color="grey60">boolean ∗</font></td></tr>
  <tr><td align="left" width="130" port="requires_expiration_date">requires_expiration_date <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="roles_spec">roles_spec <font face="Arial Italic" color="grey60">jsonb</font></td></tr>
  <tr><td align="left" width="130" port="sensitive">sensitive <font face="Arial Italic" color="grey60">boolean ∗</font></td></tr>
  <tr><td align="left" width="130" port="slug">slug <font face="Arial Italic" color="grey60">string ∗ U</font></td></tr>
  <tr><td align="left" width="130" port="source_from_any_application">source_from_any_application <font face="Arial Italic" color="grey60">boolean ∗</font></td></tr>
</table>
}>];
m_UploadedRecord [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">UploadedRecord</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="completed_date">completed_date <font face="Arial Italic" color="grey60">date</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="expiration_date">expiration_date <font face="Arial Italic" color="grey60">date</font></td></tr>
  <tr><td align="left" width="130" port="metadata">metadata <font face="Arial Italic" color="grey60">jsonb</font></td></tr>
</table>
}>];
m_User [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">User</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="account_claimed_at">account_claimed_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="additional_languages">additional_languages <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="authentication_token">authentication_token <font face="Arial Italic" color="grey60">string (255)</font></td></tr>
  <tr><td align="left" width="130" port="availability">availability <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="availability_updated_at">availability_updated_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="child_characteristic_open_to">child_characteristic_open_to <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="child_preferences">child_preferences <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="color_blind_friendly">color_blind_friendly <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="current_sign_in_at">current_sign_in_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="current_sign_in_ip">current_sign_in_ip <font face="Arial Italic" color="grey60">inet</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="email">email <font face="Arial Italic" color="grey60">string (255) ∗ U</font></td></tr>
  <tr><td align="left" width="130" port="email_change_explanation">email_change_explanation <font face="Arial Italic" color="grey60">text ∗</font></td></tr>
  <tr><td align="left" width="130" port="encrypted_password">encrypted_password <font face="Arial Italic" color="grey60">string (255) ∗</font></td></tr>
  <tr><td align="left" width="130" port="explicitly_has_no_email">explicitly_has_no_email <font face="Arial Italic" color="grey60">boolean ∗</font></td></tr>
  <tr><td align="left" width="130" port="failed_attempts">failed_attempts <font face="Arial Italic" color="grey60">integer ∗</font></td></tr>
  <tr><td align="left" width="130" port="first_name">first_name <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="internal_notes">internal_notes <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="invite_email_sent_at">invite_email_sent_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="last_failed_at">last_failed_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="last_name">last_name <font face="Arial Italic" color="grey60">string ∗</font></td></tr>
  <tr><td align="left" width="130" port="last_sign_in_at">last_sign_in_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="last_sign_in_ip">last_sign_in_ip <font face="Arial Italic" color="grey60">inet</font></td></tr>
  <tr><td align="left" width="130" port="locale">locale <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="locked_at">locked_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="locked_by_admin_at">locked_by_admin_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="login_token">login_token <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="login_token_expires_at">login_token_expires_at <font face="Arial Italic" color="grey60">date</font></td></tr>
  <tr><td align="left" width="130" port="middle_name">middle_name <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="name">name <font face="Arial Italic" color="grey60">text</font></td></tr>
  <tr><td align="left" width="130" port="notification_preferences">notification_preferences <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="phantom_mode_active">phantom_mode_active <font face="Arial Italic" color="grey60">boolean ∗</font></td></tr>
  <tr><td align="left" width="130" port="point_of_contact_for_api_user_id">point_of_contact_for_api_user_id <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="primary_language">primary_language <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="readonly_mode_active">readonly_mode_active <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="referral_application_template_id">referral_application_template_id <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="remember_created_at">remember_created_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="reset_password_sent_at">reset_password_sent_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="reset_password_token">reset_password_token <font face="Arial Italic" color="grey60">string (255)</font></td></tr>
  <tr><td align="left" width="130" port="role">role <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="role_str">role_str <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="sign_in_count">sign_in_count <font face="Arial Italic" color="grey60">integer ∗</font></td></tr>
  <tr><td align="left" width="130" port="stripe_id">stripe_id <font face="Arial Italic" color="grey60">string (255)</font></td></tr>
  <tr><td align="left" width="130" port="suffix">suffix <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="unlock_token">unlock_token <font face="Arial Italic" color="grey60">string</font></td></tr>
</table>
}>];
m_UserAgencyProfile [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">UserAgencyProfile</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="address">address <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="address_location">address_location <font face="Arial Italic" color="grey60">geography</font></td></tr>
  <tr><td align="left" width="130" port="address_location_accuracy">address_location_accuracy <font face="Arial Italic" color="grey60">decimal</font></td></tr>
  <tr><td align="left" width="130" port="certificate_of_degree_of_indian_blood_number">certificate_of_degree_of_indian_blood_number <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="custom_fields">custom_fields <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="date_of_birth">date_of_birth <font face="Arial Italic" color="grey60">date</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="ethnicities">ethnicities <font face="Arial Italic" color="grey60">jsonb</font></td></tr>
  <tr><td align="left" width="130" port="ethnicity">ethnicity <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="external_id">external_id <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="family_id">family_id <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="gender">gender <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="is_a_protected_tribe_member">is_a_protected_tribe_member <font face="Arial Italic" color="grey60">boolean</font></td></tr>
  <tr><td align="left" width="130" port="last_contact_date">last_contact_date <font face="Arial Italic" color="grey60">date</font></td></tr>
  <tr><td align="left" width="130" port="mailing_address">mailing_address <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="next_contact_date">next_contact_date <font face="Arial Italic" color="grey60">date</font></td></tr>
  <tr><td align="left" width="130" port="notification_preferences">notification_preferences <font face="Arial Italic" color="grey60">jsonb ∗</font></td></tr>
  <tr><td align="left" width="130" port="phone_number">phone_number <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="protected_tribe_names">protected_tribe_names <font face="Arial Italic" color="grey60">string</font></td></tr>
  <tr><td align="left" width="130" port="roles">roles <font face="Arial Italic" color="grey60">string</font></td></tr>
</table>
}>];
m_WorkerAssignment [label = <{<table border="0" align="center" cellspacing="0.5" cellpadding="0" width="134">
  <tr><td align="center" valign="bottom" width="130"><font face="Arial Bold" point-size="11">WorkerAssignment</font></td></tr>
</table>
|
<table border="0" align="left" cellspacing="2" cellpadding="0" width="134">
  <tr><td align="left" width="130" port="agency_id">agency_id <font face="Arial Italic" color="grey60">integer (8)</font></td></tr>
  <tr><td align="left" width="130" port="created_by_id">created_by_id <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="deleted_at">deleted_at <font face="Arial Italic" color="grey60">datetime</font></td></tr>
  <tr><td align="left" width="130" port="deleted_by_id">deleted_by_id <font face="Arial Italic" color="grey60">integer</font></td></tr>
  <tr><td align="left" width="130" port="role">role <font face="Arial Italic" color="grey60">integer ∗ U</font></td></tr>
  <tr><td align="left" width="130" port="role_str">role_str <font face="Arial Italic" color="grey60">string</font></td></tr>
</table>
}>];
  m_Agency -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_AgencyAdminAssignment -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_AgencyPlacement -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_AgencyPlacementProviderProfile -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_AgencyTransferRelationship -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_Allegation -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_Application -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_ApplicationChildInHome -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_ApplicationOtherAdult -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_ApplicationReference -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_ApplicationStage -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_ApplicationStageTemplate -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_ApplicationTemplate -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_ApplicationTemplateChange -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_ApplicationTemplateLineage -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_Attachment -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_BackgroundCheckExemption -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_BackgroundCheckLog -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_CaseNote -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_Child -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_ChildAgencyPlacement -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_Complaint -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  "m_Flipper::Adapters::ActiveRecord::Feature" -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  "m_Flipper::Adapters::ActiveRecord::Gate" -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_Form -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_FormInstance -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_FormInstanceSubject -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_FormVersion -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_FundingSource -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_GoodCause -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_GoodCauseBarrier -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_HumanPlacementProviderRole -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_IntakeReferral -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_Investigation -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_LevelOfCare -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_LevelOfCareAssignment -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_License -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_OverrideRecord -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_PlacementPeriod -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_PlacementProvider -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_PlacementSearch -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_Program -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_QuestionnaireResponse -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_Rate -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_RateTable -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_RelationshipBasedPermission -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_RelationshipBasedPermissionsRule -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_RequiredSignature -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_Requirement -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_RequirementRecord -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_RequirementTemplate -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_RequirementTemplateSet -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_Role -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_RoleBasedPermission -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_Schedule -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_ScheduleAssignment -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_Service -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_ServicesFundingSource -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_Signature -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_SigningEvent -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_SpecialEvent -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_SpecialEventTemplate -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_TrainingCurriculum -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_TrainingSession -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_TrainingSessionAttendance -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_UploadType -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_UploadedRecord -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_User -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_UserAgencyProfile -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_Application -> m_UserAgencyProfile [arrowhead = "normal", arrowtail = "none", weight = "26"];
  m_License -> m_Application [arrowhead = "normal", arrowtail = "none", weight = "7"];
  m_Application -> m_User [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "8", constraint = "false"];
  m_Application -> m_Agency [arrowhead = "normal", arrowtail = "none", weight = "15"];
  m_Attachment -> m_Application [arrowhead = "normal", arrowtail = "none", weight = "5"];
  m_ApplicationTemplate -> m_Application [arrowhead = "normal", arrowtail = "none", weight = "5"];
  m_Application -> m_ApplicationTemplateLineage [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "5", constraint = "false"];
  m_Application -> m_Application [arrowhead = "none", arrowtail = "none", weight = "12"];
  m_Application -> m_AgencyPlacement [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "5", constraint = "false"];
  m_Application -> m_ApplicationOtherAdult [arrowhead = "normal", arrowtail = "none", weight = "5"];
  m_Application -> m_ApplicationChildInHome [arrowhead = "normal", arrowtail = "none", weight = "5"];
  m_Application -> m_ApplicationStatusChange [arrowhead = "normal", arrowtail = "none", weight = "5"];
  m_Application -> m_ApplicationTemplateChange [arrowhead = "normal", arrowtail = "none", weight = "5"];
  m_Application -> m_SubAgencyAssignment [arrowhead = "normal", arrowtail = "none", weight = "5"];
  m_Application -> m_WorkerAssignment [arrowhead = "normal", arrowtail = "none", weight = "17"];
  m_Application -> m_ApplicationStage [arrowhead = "normal", arrowtail = "none", weight = "10"];
  m_Application -> m_Form [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "8", constraint = "false"];
  m_Application -> m_ApplicationReference [arrowhead = "normal", arrowtail = "none", weight = "5"];
  m_Application -> m_BackgroundCheckExemption [arrowhead = "normal", arrowtail = "none", weight = "5"];
  m_Application -> "m_PaperTrail::Version" [arrowhead = "normal", arrowtail = "none", weight = "8"];
  m_Agency -> m_Attachment [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_Application -> m_Attachment [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_ApplicationTemplate -> m_Attachment [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_Child -> m_Attachment [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_DataValidatorRecord -> m_Attachment [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_Form -> m_Attachment [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_FormInstance -> m_Attachment [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_FormVersion -> m_Attachment [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_PulledReport -> m_Attachment [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_QuestionnaireResponse -> m_Attachment [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_RateTable -> m_Attachment [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_UploadedRecord -> m_Attachment [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_Application -> m_GoodCause [arrowhead = "normal", arrowtail = "none", weight = "5"];
  m_Application -> m_TrainingSessionAttendance [arrowhead = "normal", arrowtail = "none", weight = "5"];
  m_Application -> m_Requirement [arrowhead = "normal", arrowtail = "none", weight = "12"];
  m_Application -> m_OrientationAttendance [arrowhead = "normal", arrowtail = "none", weight = "5"];
  m_Application -> m_UploadedRecord [arrowhead = "normal", arrowtail = "none", weight = "5"];
  m_Application -> m_OverrideRecord [arrowhead = "normal", arrowtail = "none", weight = "5"];
  m_Application -> m_MergeLog [arrowhead = "normal", arrowtail = "none", weight = "8"];
  m_Agency -> m_Tagging [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_AgencyAdminAssignment -> m_Tagging [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_ApplicationTemplateLineage -> m_Tagging [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_Form -> m_Tagging [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_ServiceTemplate -> m_Tagging [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_UploadType -> m_Tagging [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_Agency -> m_Tag [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "1", constraint = "false"];
  m_Agency -> m_AgencyContact [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_Agency -> m_ApplicationTemplateLineage [arrowhead = "normal", arrowtail = "none", weight = "5"];
  m_Agency -> m_AgencyAdminAssignment [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_Agency -> m_UserAgencyProfile [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_Agency -> m_User [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "1", constraint = "false"];
  m_Agency -> m_Child [arrowhead = "normal", arrowtail = "none", weight = "3"];
  m_Agency -> m_AgencyTransferRelationship [arrowhead = "normal", arrowtail = "none", weight = "4"];
  m_Agency -> m_Form [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_Agency -> m_ApplicationTemplate [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_Agency -> m_BackgroundCheck [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_Agency -> m_TrainingCurriculum [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_Agency -> m_TrainingTrack [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_Agency -> m_TrainingSession [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "2", constraint = "false"];
  m_Agency -> m_UploadType [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_Agency -> m_AgencyPlacement [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_GroupHome -> m_AgencyPlacement [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_Agency -> m_AgencyPlacementProviderProfile [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_Agency -> m_Program [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_AgencyType -> m_Agency [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_Agency -> m_Payment [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_Agency -> m_RateTable [arrowhead = "normal", arrowtail = "none", weight = "4"];
  m_Agency -> m_FundingSource [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_Agency -> m_AgencyCommunityBasedOrganization [arrowhead = "normal", arrowtail = "none", weight = "4"];
  m_Agency -> m_Agency [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "2", constraint = "false"];
  m_Agency -> m_SubAgencyAssignment [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_Agency -> m_ServiceTemplate [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_User -> m_Attachment [arrowhead = "normal", arrowtail = "none", weight = "5"];
  m_User -> m_UserAgencyProfile [arrowhead = "normal", arrowtail = "none", weight = "5"];
  m_User -> m_Signature [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "4", constraint = "false"];
  m_User -> m_ApplicationStatusChange [arrowhead = "normal", arrowtail = "none", weight = "5"];
  m_User -> m_HumanPlacementProviderRole [arrowhead = "normal", arrowtail = "none", weight = "13"];
  m_User -> m_PlacementProvider [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "18", constraint = "false"];
  m_Agency -> m_AgencyPlacement [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_AgencyPlacement -> m_AgencyPlacementProviderProfile [arrowhead = "none", arrowtail = "none", weight = "2"];
  m_UserAgencyProfile -> m_AgencyPlacement [arrowhead = "none", arrowtail = "none", weight = "2"];
  m_AgencyPlacement -> m_User [style = "dotted", arrowhead = "none", arrowtail = "none", weight = "3", constraint = "false"];
  m_AgencyPlacement -> m_PlacementHold [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_AgencyPlacement -> m_PlacementCallingLog [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_AgencyPlacement -> m_PlacementSearch [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_AgencyPlacement -> m_PlacementPeriod [arrowhead = "normal", arrowtail = "none", weight = "4"];
  m_AgencyPlacement -> m_Child [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "1", constraint = "false"];
  m_AgencyPlacement -> m_ChildAgencyPlacement [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_AgencyPlacement -> m_Service [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_ApplicationStageTemplate -> m_ApplicationStage [arrowhead = "normal", arrowtail = "none", weight = "6"];
  m_ApplicationStage -> m_ApplicationTemplate [style = "dotted", arrowhead = "none", arrowtail = "none", weight = "6", constraint = "false"];
  m_Payment -> m_ApplicationStage [arrowhead = "normal", arrowtail = "none", weight = "6"];
  m_ApplicationStage -> m_ApplicationReference [arrowhead = "normal", arrowtail = "none", weight = "7"];
  m_ApplicationStage -> m_Form [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "6", constraint = "false"];
  m_ApplicationStage -> m_ApplicationOtherAdult [arrowhead = "normal", arrowtail = "none", weight = "14"];
  m_ApplicationStage -> m_Agency [style = "dotted", arrowhead = "none", arrowtail = "none", weight = "6", constraint = "false"];
  m_ApplicationTemplate -> m_ApplicationStageTemplate [arrowhead = "normal", arrowtail = "none", weight = "7"];
  m_ApplicationStageTemplate -> m_Agency [style = "dotted", arrowhead = "none", arrowtail = "none", weight = "6", constraint = "false"];
  m_ApplicationStageTemplate -> m_ApplicationTemplateForm [arrowhead = "normal", arrowtail = "none", weight = "14"];
  m_ApplicationStageTemplate -> m_Form [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "7", constraint = "false"];
  m_AgencyType -> m_LevelOfCare [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_ApplicationTemplateLineage -> m_AgencyTransferRelationship [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_ApplicationTemplateLineage -> m_ApplicationTemplate [arrowhead = "normal", arrowtail = "none", weight = "3"];
  m_ApplicationTemplate -> m_ApplicationTemplateForm [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "1", constraint = "false"];
  m_ApplicationTemplate -> m_Form [arrowhead = "normal", arrowtail = "none", weight = "4"];
  m_ApplicationTemplate -> m_RequirementTemplateSet [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_ApplicationTemplate -> m_RequirementTemplate [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "6", constraint = "false"];
  m_ApplicationTemplate -> m_DripEmail [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_ApplicationTemplateLineage -> m_Tag [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "1", constraint = "false"];
  m_ApplicationTemplateLineage -> m_ApplicationTemplateLineage [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_TrainingTrack -> m_ApplicationTemplateLineage [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_BackgroundCheck -> m_BackgroundCheckLog [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_Application -> m_BackgroundCheckLog [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_UserAgencyProfile -> m_BackgroundCheckLog [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_TrainingTrack -> m_UserAgencyProfile [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_UserAgencyProfile -> m_ApplicationReference [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_UserAgencyProfile -> m_ApplicationOtherAdult [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_UserAgencyProfile -> m_ApplicationChildInHome [arrowhead = "normal", arrowtail = "none", weight = "3"];
  m_UserAgencyProfile -> m_ChildAgencyPlacement [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "1", constraint = "false"];
  m_UserAgencyProfile -> m_BackgroundCheckExemption [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_UserAgencyProfile -> m_CaseNote [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_UserAgencyProfile -> m_Complaint [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_UserAgencyProfile -> m_FamilyHistoricalDump [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_UserAgencyProfile -> m_WorkerAssignment [arrowhead = "normal", arrowtail = "none", weight = "3"];
  m_UserAgencyProfile -> m_Requirement [arrowhead = "normal", arrowtail = "none", weight = "9"];
  m_UserAgencyProfile -> m_ScheduleAssignment [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_UserAgencyProfile -> m_Schedule [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "1", constraint = "false"];
  m_UserAgencyProfile -> m_Signature [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_UserAgencyProfile -> m_TrainingSessionAttendance [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_UserAgencyProfile -> m_TrainingSession [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "1", constraint = "false"];
  m_UserAgencyProfile -> m_TrainingCurriculum [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "1", constraint = "false"];
  m_UserAgencyProfile -> m_UploadedRecord [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_UserAgencyProfile -> m_OverrideRecord [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_UserAgencyProfile -> m_FormInstanceSubject [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_UserAgencyProfile -> m_FormInstance [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "6", constraint = "false"];
  m_AgencyAdminAssignment -> m_PhoneNumber [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_UserAgencyProfile -> m_PhoneNumber [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_Child -> m_CaseNote [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_School -> m_Child [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_Child -> m_PlacementSearch [arrowhead = "normal", arrowtail = "none", weight = "4"];
  m_Child -> m_LevelOfCareAssignment [arrowhead = "normal", arrowtail = "none", weight = "4"];
  m_Child -> m_ProgramAssignment [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_Child -> m_Program [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "2", constraint = "false"];
  m_Child -> m_LevelOfCare [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "2", constraint = "false"];
  m_Child -> m_Requirement [arrowhead = "normal", arrowtail = "none", weight = "10"];
  m_Child -> m_WorkerAssignment [arrowhead = "none", arrowtail = "none", weight = "2"];
  m_Child -> m_PlacementPeriod [arrowhead = "normal", arrowtail = "none", weight = "5"];
  m_Child -> m_ChildAgencyPlacement [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_Child -> m_ScheduleAssignment [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_Child -> m_Schedule [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "2", constraint = "false"];
  m_Child -> m_UploadedRecord [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_Child -> m_SpecialEvent [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_Child -> m_SiblingRelationship [arrowhead = "normal", arrowtail = "none", weight = "4"];
  m_Child -> m_Child [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "2", constraint = "false"];
  m_Child -> m_Service [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_PlacementSearch -> m_PlacementPeriod [arrowhead = "none", arrowtail = "none", weight = "2"];
  m_PlacementSearch -> m_Agency [style = "dotted", arrowhead = "none", arrowtail = "none", weight = "1", constraint = "false"];
  m_Agency -> m_PlacementPeriod [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_Complaint -> m_Agency [style = "dotted", arrowhead = "none", arrowtail = "none", weight = "1", constraint = "false"];
  m_Complaint -> m_Allegation [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_DataValidatorGroup -> m_DataValidatorRecord [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_User -> m_DataValidatorRecord [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_Agency -> m_DataValidatorGroup [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_User -> m_DataValidatorGroup [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_DripEmail -> m_EmailLog [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_EmailCampaign -> m_EmailLog [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_Agency -> m_EmailCampaign [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_Form -> m_Tag [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "1", constraint = "false"];
  m_Form -> m_ApplicationTemplateForm [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_Form -> m_FormInstance [arrowhead = "normal", arrowtail = "none", weight = "6"];
  m_Form -> m_FormVersion [arrowhead = "normal", arrowtail = "none", weight = "3"];
  m_Agency -> m_FormVersion [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_FormVersion -> m_FormInstance [arrowhead = "normal", arrowtail = "none", weight = "6"];
  m_FormVersion -> m_ApplicationStageTemplate [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "1", constraint = "false"];
  m_FundingSource -> m_ServicesFundingSource [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_FundingSource -> m_Service [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "2", constraint = "false"];
  m_GoodCause -> m_GoodCauseBarrier [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_Agency -> m_IntakeReferral [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_IntakeReferral -> m_IntakeReferralChildren [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_IntakeReferral -> m_Child [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "1", constraint = "false"];
  m_IntakeReferral -> m_WorkerAssignment [arrowhead = "none", arrowtail = "none", weight = "2"];
  m_IntakeReferral -> m_Investigation [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_Investigation -> m_Child [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "1", constraint = "false"];
  m_Agency -> m_Investigation [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_Investigation -> m_WorkerAssignment [arrowhead = "none", arrowtail = "none", weight = "2"];
  m_LevelOfCare -> m_LevelOfCareSchedule [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_LevelOfCare -> m_Schedule [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "2", constraint = "false"];
  m_LevelOfCare -> m_LevelOfCareAssignment [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_License -> m_ApplicationStatusChange [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_License -> m_Requirement [arrowhead = "normal", arrowtail = "none", weight = "8"];
  m_License -> m_TrainingSessionAttendance [arrowhead = "normal", arrowtail = "none", weight = "3"];
  m_Agency -> m_License [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_PlacementProvider -> m_License [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_PlacementProvider -> m_AgencyPlacementProviderProfile [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_PlacementProvider -> m_HumanPlacementProviderRole [arrowhead = "normal", arrowtail = "none", weight = "3"];
  m_Payment -> m_Application [style = "dotted", arrowhead = "none", arrowtail = "none", weight = "1", constraint = "false"];
  m_Payment -> m_UserAgencyProfile [style = "dotted", arrowhead = "none", arrowtail = "none", weight = "1", constraint = "false"];
  m_Payment -> m_User [style = "dotted", arrowhead = "none", arrowtail = "none", weight = "1", constraint = "false"];
  m_User -> m_PlacementCallingLog [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_Agency -> m_PlacementHold [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_Program -> m_ProgramSchedule [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_Program -> m_Schedule [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "2", constraint = "false"];
  m_Program -> m_ProgramAssignment [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_User -> m_RateTable [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_RateTable -> m_Rate [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_User -> m_Service [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_ServiceTemplate -> m_Service [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_Service -> m_ServicesFundingSource [arrowhead = "none", arrowtail = "none", weight = "2"];
  m_ApplicationStatusChange -> m_WorkerAssignment [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "1", constraint = "false"];
  m_Agency -> m_Role [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_Role -> m_Role [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_Role -> m_AgencyAdminAssignment [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_Agency -> m_Schedule [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_Schedule -> m_RequirementTemplate [arrowhead = "normal", arrowtail = "none", weight = "8"];
  m_Schedule -> m_LevelOfCareSchedule [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_Schedule -> m_ScheduleAssignment [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_Schedule -> m_ProgramSchedule [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_ServiceTemplate -> m_Tag [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "1", constraint = "false"];
  m_UserAgencyProfile -> m_SpecialEvent [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_SpecialEventTemplate -> m_SpecialEvent [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_SpecialEvent -> m_Requirement [arrowhead = "normal", arrowtail = "none", weight = "9"];
  m_Agency -> m_SpecialEventTemplate [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_SpecialEventTemplate -> m_SpecialEventTemplateForm [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_SpecialEventTemplate -> m_Form [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "1", constraint = "false"];
  m_TrainingCurriculum -> m_TrainingSession [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_TrainingCurriculum -> m_TrainingCurriculumsTrack [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_TrainingCurriculum -> m_TrainingTrack [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "2", constraint = "false"];
  m_TrainingSessionAttendance -> m_User [style = "dotted", arrowhead = "none", arrowtail = "none", weight = "1", constraint = "false"];
  m_TrainingSession -> m_TrainingSessionAttendance [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_TrainingCurriculum -> m_TrainingSessionAttendance [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_TrainingSessionAttendance -> m_Agency [style = "dotted", arrowhead = "none", arrowtail = "none", weight = "1", constraint = "false"];
  m_TrainingSessionAttendance -> m_RequirementRecord [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_TrainingSessionAttendance -> m_Requirement [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "1", constraint = "false"];
  m_FormInstance -> m_Requirement [arrowhead = "normal", arrowtail = "none", weight = "13"];
  m_Requirement -> m_Form [style = "dotted", arrowhead = "none", arrowtail = "none", weight = "7", constraint = "false"];
  m_Requirement -> m_SigningEvent [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "9", constraint = "false"];
  m_ScheduleActivation -> m_Requirement [arrowhead = "normal", arrowtail = "none", weight = "8"];
  m_RequirementTemplate -> m_Requirement [arrowhead = "normal", arrowtail = "none", weight = "13"];
  m_Requirement -> m_UploadType [style = "dotted", arrowhead = "none", arrowtail = "none", weight = "6", constraint = "false"];
  m_Requirement -> m_Agency [style = "dotted", arrowhead = "none", arrowtail = "none", weight = "8", constraint = "false"];
  m_Requirement -> m_RequirementRecord [arrowhead = "normal", arrowtail = "none", weight = "9"];
  m_Requirement -> m_OverrideRecord [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "9", constraint = "false"];
  m_Requirement -> m_UploadedRecord [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "8", constraint = "false"];
  m_License -> m_OverrideRecord [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_UploadType -> m_OverrideRecord [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_Form -> m_OverrideRecord [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_TrainingCurriculum -> m_OverrideRecord [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_User -> m_OverrideRecord [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_OverrideRecord -> m_RequirementRecord [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_UploadType -> m_Tag [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "1", constraint = "false"];
  m_UploadType -> m_RequirementTemplate [arrowhead = "normal", arrowtail = "none", weight = "6"];
  m_ApplicationOtherAdult -> m_User [style = "dotted", arrowhead = "none", arrowtail = "none", weight = "1", constraint = "false"];
  m_Agency -> m_ApplicationOtherAdult [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_FormInstance -> m_RequirementRecord [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_UploadedRecord -> m_RequirementRecord [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_Agency -> m_ApplicationChildInHome [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_FormInstance -> m_SigningEvent [arrowhead = "normal", arrowtail = "none", weight = "11"];
  m_SigningEvent -> m_RequiredSignature [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_FormInstance -> m_QuestionnaireResponse [arrowhead = "normal", arrowtail = "none", weight = "6"];
  m_FormInstance -> m_FormInstanceSubject [arrowhead = "normal", arrowtail = "none", weight = "6"];
  m_AgencyAdminAssignment -> m_Tag [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "1", constraint = "false"];
  m_AgencyAdminAssignment -> m_WorkerAssignment [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "1", constraint = "false"];
  m_AgencyAdminAssignment -> m_Signature [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_RequirementTemplateSet -> m_RequirementTemplate [arrowhead = "normal", arrowtail = "none", weight = "6"];
  m_Form -> m_RequirementTemplate [arrowhead = "normal", arrowtail = "none", weight = "5"];
  m_ApplicationReference -> m_User [style = "dotted", arrowhead = "none", arrowtail = "none", weight = "1", constraint = "false"];
  m_ApplicationTemplate -> m_ApplicationTemplateChange [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_User -> m_ApplicationTemplateChange [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_AgencyAdminAssignment -> m_BintiRentedPhoneNumber [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_UserAgencyProfile -> m_BintiRentedPhoneNumber [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_DripEmail -> m_Agency [style = "dotted", arrowhead = "none", arrowtail = "none", weight = "1", constraint = "false"];
  m_DripEmail -> m_Application [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "1", constraint = "false"];
  m_User -> m_EmailLog [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_CaseNote -> m_EmailLog [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_FamilyHistoricalDumpCodebook -> m_FamilyHistoricalDump [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_Agency -> m_FamilyHistoricalDumpCodebook [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_Child -> m_IntakeReferralChildren [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_AgencyAdminAssignment -> m_Message [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_UserAgencyProfile -> m_Message [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_LevelOfCare -> m_Rate [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_AgencyAdminAssignment -> m_RelationshipBasedPermission [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_RelationshipBasedPermissionsRule -> m_RelationshipBasedPermission [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_Role -> m_RelationshipBasedPermissionsRule [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_Signature -> m_RequiredSignature [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_Role -> m_RoleBasedPermission [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_ScheduleAssignment -> m_ScheduleActivation [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_ScheduleActivation -> m_FormInstance [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "1", constraint = "false"];
  m_ScheduleActivation -> m_Child [style = "dotted", arrowhead = "none", arrowtail = "none", weight = "1", constraint = "false"];
  m_ScheduleAssignment -> m_FormInstance [style = "dotted", arrowhead = "normal", arrowtail = "none", weight = "1", constraint = "false"];
  m_Form -> m_SpecialEventTemplateForm [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_Tag -> m_Tagging [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_TrainingTrack -> m_TrainingCurriculumsTrack [arrowhead = "normal", arrowtail = "none", weight = "2"];
  m_UploadType -> m_UploadedRecord [arrowhead = "normal", arrowtail = "none", weight = "1"];
  m_User -> m_UploadedRecord [arrowhead = "normal", arrowtail = "none", weight = "1"];
  "m_ActiveStorage::Blob" -> "m_ActiveStorage::Attachment" [arrowhead = "none", arrowtail = "none", weight = "1"];
  "m_ActiveStorage::VariantRecord" -> "m_ActiveStorage::Attachment" [arrowhead = "none", arrowtail = "none", weight = "1"];
  "m_ActiveStorage::Blob" -> "m_ActiveStorage::Attachment" [arrowhead = "normal", arrowtail = "none", weight = "2"];
  "m_ActiveStorage::Blob" -> "m_ActiveStorage::VariantRecord" [arrowhead = "normal", arrowtail = "none", weight = "3"];
  "m_ActiveStorage::Blob" -> "m_ActiveStorage::Blob" [style = "dotted", arrowhead = "none", arrowtail = "none", weight = "1", constraint = "false"];
}`;
