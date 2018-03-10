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
    $result = $wpdb->get_row('SELECT * FROM causfa_custodians WHERE Email = "'.$current_user->user_email.'";');
    $output = apply_filters('causfa_employee_info', $result);
    $output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/asset_header_template.html', true ));

    $results = $wpdb->get_results('SELECT * FROM causfa_banner WHERE FZVFORG_CUSTODIAN = "'.$result->Name.'";');
    $value_total = 0.00;
    $missing_total = 0.00;
    $asset_index = 0;
    foreach ($results as $result) {
        $value_total += $result->FZVFORG_AMOUNT;
        $return_value = apply_filters('causfa_employee_asset_info', $result, $asset_index);
        $output = $output.$return_value[0];
        if ($return_value[1]) {
            $missing_total += $result->FZVFORG_AMOUNT;
        }
        $asset_index++;
    }
    $output = $output.(apply_filters('causfa_employee_asset_total', $value_total, $missing_total));
    return $output;
}

