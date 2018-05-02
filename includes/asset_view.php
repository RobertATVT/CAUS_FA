<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 3/7/18
 * Time: 8:54 PM
 */


function causfa_load_view (){
	if (causfa_groups_is_admin() == 'true') {
		if (isset($_SESSION['admin_view']) && $_SESSION['admin_view'] == 1) {
			return causfa_load_admin_view();
		} else {
			$header = (file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-header.html', true ));
			return $header.causfa_load_employee_view();
		} 
	} else {
		$header = (file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-employee-header.html', true ));
		return $header.causfa_load_employee_view();
	}
}


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
        $output = apply_filters('causfa_header', $result_user);
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
	$output = (file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-header.html', true));
	$output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-transfer-header.html', true));
	$output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-transfer-fill.html', true));
	$output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-transfer-footer.html', true));
	$output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-surplus-header.html', true));
	$output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-surplus-fill.html', true));
	$output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-surplus-footer.html', true));
	$output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-tickets-header.html', true));
	$output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-tickets-fill.html', true));
	$output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-tickets-footer.html', true));
	$output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-reports-header.html', true));
	$output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-reports-fill.html', true));
	$output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-reports-footer.html', true));
	$output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-admin-footer.html', true));
	return $output;
}