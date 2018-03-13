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
    $result_user = $wpdb->get_row('SELECT * FROM causfa_custodians WHERE Email = "'.$current_user->user_email.'";');
    $output = apply_filters('causfa_employee_info', $result_user);
    $output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/asset_header_template.html', true ));

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
    //Gets the html for the modals and puts it at the bottom of the page.
    $modal = (file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/modal.html', true ));
    $modals = str_replace('[PID]', "'".$result_user->PID."'", $modals);
    $output = $output.$modals;
    return $output;
}

