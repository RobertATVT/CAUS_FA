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
    $result = $wpdb->get_row('SELECT * FROM Custodians WHERE Email = "'.$current_user->user_email.'";');
    $output = apply_filters('causfa_employee_info', $result);
    $output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/asset_header_template.html', true ));
    $results = $wpdb->get_results('SELECT * FROM Assets WHERE Custodian = "'.$result->Name.'";');
    $value_total = 0;
    foreach ($results as $result) {
        $value_total += $result->Amt;
        $output = $output.(apply_filters('causfa_employee_asset_info', $result));
    }
    $output = $output.(apply_filters('causfa_employee_asset_total', $value_total));
    return $output;
}

