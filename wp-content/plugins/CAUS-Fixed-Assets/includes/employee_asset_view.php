<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 3/7/18
 * Time: 8:54 PM
 */

function causfa_load_employee_view() {
    global $wpdb;
    $current_user = wp_get_current_user();
    $result_user = $wpdb->get_row('SELECT * FROM causfa_custodians WHERE Email = "'.$current_user->user_email.'";');
    $output = apply_filters('causfa_employee_info', $result_user);
    $response = wp_remote_get(plugins_url('assets/html/asset_header_template.html', CAUSFA_PLUGIN_URL));
    $output = $output.wp_remote_retrieve_body($response);

    $results_assets = $wpdb->get_results('SELECT * FROM causfa_banner WHERE FZVFORG_CUSTODIAN = "'.$result_user->Name.'";');
    $value_total = 0.00;
    $missing_total = 0.00;
    $asset_index = 0;
    foreach ($results_assets as $result_asset) {
        $value_total += $result_asset->FZVFORG_AMOUNT;
        $return_value = apply_filters('causfa_employee_asset_info', $result_asset, $asset_index);
        $output = $output.$return_value[0];
        if ($return_value[1]) {
            $missing_total += $result_asset->FZVFORG_AMOUNT;
        }
        $asset_index++;
    }
    $output = $output.(apply_filters('causfa_employee_asset_total', $value_total, $missing_total));
    $response = wp_remote_get(plugins_url('assets/html/modal.html', CAUSFA_PLUGIN_URL));
    $modals = wp_remote_retrieve_body($response);
    $modals = str_replace('[PID]', "'".$result_user->PID."'", $modals);
    $output = $output.$modals;
    return $output;
}

