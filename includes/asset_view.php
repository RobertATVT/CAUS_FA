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
        $comp_number = round(100-(($missing_number/$total_number)*100));
        $comp_dollar = round(100-(($missing_total/$value_total)*100));
        if ($comp_number < 95 || $comp_dollar < 95) {
            $compliance = $wpdb->get_row("SELECT * FROM causfa_alerts WHERE CREATOR = 'compliance' AND ORG = '".$current_user->user_nicename."';");
            if ($compliance === null) {
                $wpdb->insert(
                    'causfa_alerts',
                    array(
                        'ORG'=>$current_user->user_nicename,
                        'EXP_DATE'=>'',
                        'CREATOR'=>'Compliance',
                        'PRIORITY'=>3,
                        'BODY'=>'You are out of Compliance, to be eligible to purchase new equipment please <a href="https://inside.caus.vt.edu/fixed-assets/compliance-help/" class="get-help">CLICK HERE</a>',
                    )
                );    
            }
                 
        } else {
            $wpdb->delete(
                'causfa_alerts',
                array(
                    'ORG'=>$current_user->user_nicename,
                    'CREATOR'=>'compliance',  
                )
            );
        }
        
        $output = (file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-employee-header.html', true ));
        $output = $output.(apply_filters('causfa_header', $result_user));
        
        $output = $output.(apply_filters('causfa_impact', $value_total, $total_number, $missing_total, $missing_number, $comp_number, $comp_dollar));
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
	for ($i = 0; $i < count($results); $i++) {
        switch($results[$i]->PENDING_STATUS) {
            case 1:
                $output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-transfer-fill-1.html', true));
                break;
            case 2:
                $output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-transfer-fill-2.html', true));
                break;
            case 3:
                $output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-transfer-fill-3.html', true));
                break;
            case 4:
                $output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-transfer-fill-4.html', true));
                break;
            case 5:
                $output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-transfer-fill-5.html', true));
                break;
            case 6:
                $output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-transfer-fill-6.html', true));
                break;
            case 7:
                $output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-transfer-fill-7.html',true));
            case 8:
                $output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-transfer-fill-8.html',true));
                break;
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
    $results = $wpdb->get_results("SELECT * FROM causfa_pending WHERE PENDING_TYPE = 1 AND ((FZVFORG_ORGN_CODE ='".causfa_groups_management_code()."' AND ASSIGNEE IS NULL) OR ASSIGNEE = '".wp_get_current_user()->user_nicename."');");
    if (!count($results)) {
        $output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-surplus-header-none.html', true));
    } else {
        $output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-surplus-header.html', true));
    }
    for ($i = 0; $i < count($results); $i++) {
        switch($results[$i]->PENDING_STATUS) {
            case 0:
                $output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-surplus-fill-1.html', true));
                break;
            case 1:
                $output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-surplus-fill-2.html', true));
                break;
            case 2:
                $output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-surplus-fill-3.html', true));
                break;
            case 3:
                $output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-surplus-fill-4.html', true));
                break;
            case 4:
                $output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-surplus-fill-5.html', true));
                break;
            case 5:
                $output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-surplus-fill-6.html', true));
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
        $output = str_replace('[NOTE]', $results[$i]->Notes, $output);
        $output = str_replace('[ID]', $i, $output);
    }
	$output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-tickets-footer.html', true));
	$output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-reports.html', true));
	$output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-footer.html', true));
	$output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-modal.html', true));
	$output = str_replace('[PID]', wp_get_current_user()->user_nicename, $output);
	$IT = causfa_groups_IT();
	$IT_options = '';
	for ($i = 0; $i < count($IT); $i++) {
	    $IT_item = '<option value="'.$IT[$i]['PID'].'">'.$IT[$i]['Name'].'</option>';
	    $IT_options = $IT_options.$IT_item;
    }
    $output = str_replace('[ITFILL]', $IT_options, $output);
	return $output; 
}