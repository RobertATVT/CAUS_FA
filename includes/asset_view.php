<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 3/7/18
 * Time: 8:54 PM
 */

/**
 * @return string - the html to be rendered in the browser
 *
 * This function is linked to the [causfa] shortcode. This function loads an individuals asset view
 * and connects the javascript functions for modal and toggle functionality
 */

function causfa_load_employee_view() {
    global $wpdb;
    $current_user = wp_get_current_user();
    $_SESSION['PID'] = $current_user->user_nicename;
    $result_user = $wpdb->get_row('SELECT * FROM causfa_custodians WHERE Email = "'.$current_user->user_email.'";');
    if ($result_user == null) {
        return causfa_new_custodian_dialog();
    } else {
		$output = (file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-employee-header.html', true ));
        $output = $output.(apply_filters('causfa_header', $result_user));
        $results_assets = $wpdb->get_results('SELECT * FROM causfa_banner WHERE FZVFORG_CUSTODIAN = "'.$result_user->Name.'";');
        $value_total = 0.00;
        $missing_total = 0.00;
        $asset_index = 0;
        $assets = '';
        $total_number = 0;
        $missing_number = 0;
        for ($i =0; $i < count($results_assets); $i++) {
            $result_asset = $results_assets[$i];
            $value_total += $result_asset->FZVFORG_AMOUNT;
            $total_number++;
            $return_value = apply_filters('causfa_asset_info', $result_asset, $asset_index);
            $assets = $assets.$return_value[0];
            if ($return_value[1]) {
                $missing_total += $result_asset->FZVFORG_AMOUNT;
                $missing_number++;
            }
            $asset_index++;
        }
        $output = $output.(apply_filters('causfa_impact', $value_total, $total_number, $missing_total, $missing_number));
		$output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-employee-asset-header.html', true ));
        $output = $output.$assets;
		$output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-employee-asset-footer.html', true ));
        $output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-employee-footer.html', true));
        
        //Gets the html for the modals and puts it at the bottom of the page.
        $modals = (file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-modal.html', true ));
        $modals = str_replace('[PID]', "'".$result_user->PID."'", $modals);
        $output = $output.$modals;
        return $output;
    }
}

function causfa_load_admin_view(){
    global $wpdb;
	$output = (file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-header.html', true));
	$output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-impact.html', true));
	$transfers = causfa_transfer_number();
	$output = str_replace('[TRANSFER#]', $transfers['total'], $output);
    $output = str_replace('[TRANSFER OLD]', $transfers['old'], $output);
    $output = str_replace('[TRANSFER NEW]', $transfers['new'], $output);
    $surpluses = causfa_surplus_number();
    $output = str_replace('[SURPLUS#]', $surpluses['total'], $output);
    $output = str_replace('[SURPLUS OLD]', $surpluses['old'], $output);
    $output = str_replace('[SURPLUS NEW]', $surpluses['new'], $output);
    $tickets = causfa_ticket_number();
    $output = str_replace('[TICKET#]', $tickets['total'], $output);
    $output = str_replace('[TICKET OLD]', $tickets['old'], $output);
    $output = str_replace('[TICKET NEW]', $tickets['new'], $output);
	$results = $wpdb->get_results("SELECT * FROM causfa_pending WHERE PENDING_TYPE = 0 AND PENDING_STATUS > 0 AND ((FZVFORG_ORGN_CODE ='".causfa_groups_management_code()."'AND ASSIGNEE IS NULL) OR ASSIGNEE = '".wp_get_current_user()->user_nicename."');");
	if (!count($results)) {
        $output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-transfer-header-none.html', true));
    } else {
        $output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-transfer-header.html', true));
    }
    $checkbox1 = '<input id="transfer-stage-1-[ID]" type="checkbox" value="transfer-stage-1-complete-[ID]" class="filled-in admin-block-line-b" onclick="openModal(\'transfer-stage-1\',\'\')">';
	for ($i = 0; $i < count($results); $i++) {
        $output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-transfer-fill.html', true));
        switch($results[$i]->PENDING_STATUS) {
            case 2:
                $output = str_replace($checkbox1, '<input id="transfer-stage-1-[ID]" type="checkbox" value="transfer-stage-1-complete-[ID]" class="filled-in admin-block-line-b" disabled="disabled">', $output);
                $output = str_replace('<input id="transfer-stage-2-[ID]" type="checkbox" value="transfer-stage-2-complete-[ID]" class="filled-in admin-block-line-b" disabled="disabled">', '<input id="transfer-stage-2-[ID]" type="checkbox" value="transfer-stage-2-complete-[ID]" class="filled-in admin-block-line-b" onclick="openModal(\'transfer-stage-2\',\'\')">', $output);
                break;
            case 3:
                $output = str_replace($checkbox1, '<input id="transfer-stage-1-[ID]" type="checkbox" value="transfer-stage-1-complete-[ID]" class="filled-in admin-block-line-b" disabled="disabled">', $output);
                $output = str_replace('<input id="transfer-stage-3-[ID]" type="checkbox" value="transfer-stage-3-complete-[ID]" class="filled-in admin-block-line-b" disabled="disabled">', '<input id="transfer-stage-3-[ID]" type="checkbox" value="transfer-stage-3-complete-[ID]" class="filled-in admin-block-line-b" onclick="openModal(\'transfer-stage-3\',\'\')">', $output);
                break;
            case 4:
                $output = str_replace($checkbox1, '<input id="transfer-stage-1-[ID]" type="checkbox" value="transfer-stage-1-complete-[ID]" class="filled-in admin-block-line-b" disabled="disabled">', $output);
                $output = str_replace('<input id="transfer-stage-4-[ID]" type="checkbox" value="transfer-stage-4-complete-[ID]" class="filled-in admin-block-line-b" disabled="disabled">', '<input id="transfer-stage-4-[ID]" type="checkbox" value="transfer-stage-4-complete-[ID]" class="filled-in admin-block-line-b"                 $output = str_replace(\'<input id="transfer-stage-3-[ID]" type="checkbox" value="transfer-stage-3-complete-[ID]" class="filled-in admin-block-line-b" disabled="disabled">\', \'<input id="transfer-stage-3-[ID]" type="checkbox" value="transfer-stage-3-complete-[ID]" class="filled-in admin-block-line-b" onclick="openModal(\'transfer - stage - 4\',\'\')">\', $output);
">', $output);
                break;
            case 5:
                //Enable upload form button
                break;
            case 6:
                //Enable complete button
            default:
                break;
        }
        $output = str_replace('[PTAG]', $results[$i]->FZVFORG_PTAG, $output);
        $output = str_replace('[PID 1]', $results[$i]->PID_ORIGIN, $output);
        $output = str_replace('[PID 2]', $results[$i]->PID_DESTINATION, $output);
        $output = str_replace('[DATE]', $results[$i]->DATE_CREATED, $output);
        $output = str_replace('[ID]', $i, $output);

	}
	$output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-transfer-footer.html', true));
    $results = $wpdb->get_results("SELECT * FROM causfa_pending WHERE PENDING_TYPE = 1 AND PENDING_STATUS > 0 AND ((FZVFORG_ORGN_CODE ='".causfa_groups_management_code()."' AND ASSIGNEE IS NULL) OR ASSIGNEE = '".wp_get_current_user()->user_nicename."');");
    if (!count($results)) {
        $output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-surplus-header-none.html', true));
    } else {
        $output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-surplus-header.html', true));
    }
    $checkbox1 = '<input id="surplus-stage-1-[ID]" type="checkbox" value="surplus-stage-1-complete-[ID]" class="filled-in admin-block-line-b" onclick="openModal(\'surplusModal\',\'\')">';
    for ($i = 0; $i < count($results); $i++) {
        $output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-surplus-fill.html', true));
        switch($results[$i]->PENDING_STATUS) {
            case 2:
                $output = str_replace($checkbox1, '<input id="surplus-stage-1-[ID]" type="checkbox" value="surplus-stage-1-complete-[ID]" class="filled-in admin-block-line-b" disabled="disabled">', $output);
                $output = str_replace('<input id="surplus-stage-2-[ID]" type="checkbox" value="surplus-stage-2-complete-[ID]" class="filled-in admin-block-line-b" disabled="disabled">', '<input id="surplus-stage-2-[ID]" type="checkbox" value="surplus-stage-2-complete-[ID]" class="filled-in admin-block-line-b" onclick="openModal(\'surplusModal\',\'\')">', $output);
                break;
            case 3:
                $output = str_replace($checkbox1, '<input id="surplus-stage-1-[ID]" type="checkbox" value="surplus-stage-1-complete-[ID]" class="filled-in admin-block-line-b" disabled="disabled">', $output);
                $output = str_replace('<input id="surplus-stage-3-[ID]" type="checkbox" value="surplus-stage-3-complete-[ID]" class="filled-in admin-block-line-b" disabled="disabled">', '<input id="surplus-stage-3-[ID]" type="checkbox" value="surplus-stage-3-complete-[ID]" class="filled-in admin-block-line-b" onclick="openModal(\'surplusModal\',\'\')">', $output);
                break;
            case 4:
                $output = str_replace($checkbox1, '<input id="surplus-stage-1-[ID]" type="checkbox" value="surplus-stage-1-complete-[ID]" class="filled-in admin-block-line-b" disabled="disabled">', $output);
                $output = str_replace('<input id="surplus-stage-4-[ID]" type="checkbox" value="surplus-stage-4-complete-[ID]" class="filled-in admin-block-line-b" disabled="disabled">', '<input id="surplus-stage-4-[ID]" type="checkbox" value="surplus-stage-4-complete-[ID]" class="filled-in admin-block-line-b" onclick="openModal(\'surplusModal\',\'\')">', $output);
                break;
            case 5:
                //Enable upload form button
                break;
            case 6:
                //Enable complete button
            default:
                break;
        }
        $output = str_replace('[PTAG]', $results[$i]->FZVFORG_PTAG, $output);
        $output = str_replace('[PID 1]', $results[$i]->PID_ORIGIN, $output);
        $output = str_replace('[DATE]', $results[$i]->DATE_CREATED, $output);
        $output = str_replace('[ID]', $i, $output);

    }
	$output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-surplus-footer.html', true));
	$results = $wpdb->get_results("SELECT * FROM causfa_tickets WHERE FZVFORG_ORGN_CODE = '".causfa_groups_management_code()."';");
	if (!count($results)) {
        $output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-tickets-header-none.html', true));
    } else {
        $output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-tickets-header.html', true));
    }
    for ($i = 0; $i < count($results); $i++) {
        $output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-tickets-fill.html', true));
        $output = str_replace('[PTAG]', $results[$i]->FZVFORG_PTAG, $output);
        $output = str_replace('[PID 1]', $results[$i]->PID_Submit, $output);
        $output = str_replace('[DATE]', $results[$i]->DATE_CREATED, $output);
        $output = str_replace('[ID]', $i, $output);
    }
	$output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-tickets-footer.html', true));
	$output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-reports.html', true));
	$output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-footer.html', true));
	$output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-modal.html', true));
	return $output;
}