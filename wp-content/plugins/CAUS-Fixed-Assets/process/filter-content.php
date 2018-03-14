<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 3/7/18
 * Time: 9:15 PM
 */

/**
 * @param $content - contains a row of the custodians table that corresponds to the current user
 * @return mixed - the html that corresponds to the employee info section if employee asset view page
 */
function causfa_filter_employee_info( $content) {
    $employee_info_html = file_get_contents ( plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/employee_info_template.html', true);
    $employee_info_html = str_replace('[NAME]', $content->Name, $employee_info_html);
    $employee_info_html = str_replace('[FAL]', causfa_groups_FAL(), $employee_info_html);
    $employee_info_html = str_replace( '[PID]', $content->PID, $employee_info_html);
    $employee_info_html = str_replace( '[EMAIL]', $content->Email, $employee_info_html);
    $employee_info_html = str_replace( '[FAC]', causfa_groups_FAC(), $employee_info_html);
    $employee_info_html = str_replace( '[OFFICE]', $content->Office, $employee_info_html);
    $employee_info_html = str_replace( '[PHONE]', $content->Phone, $employee_info_html);
    $employee_info_html = str_replace( '[BM]', causfa_groups_BM(), $employee_info_html);

    return $employee_info_html;
}

/**
 * @param $content - contains a row of the asset table that corresponds to an item that belongs to the current user
 * @param $asset_index - contains the index value of the $content in regards to all of the assets in the current users name
 * @return array - returns an array containing two keys
 *      $asset_info_html - contains the html of the asset that corresponds to the content passed into the function
 *      $missing - contains a bool that indicates if the asset has a status of missing or not.
 */
function causfa_filter_employee_asset_info( $content, $asset_index) {
    global $wpdb;
    $asset_info_html = file_get_contents ( plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/asset_template.html', true);
    $asset_info_html = str_replace('[VT TAG]', $content->FZVFORG_PTAG, $asset_info_html);
    $asset_info_html = str_replace( '[S/N]', $content->FZVFORG_SERIAL_NUM, $asset_info_html);
    $asset_info_html = str_replace('[DESCRIPTION]', $content->FZVFORG_DESCRIPTION, $asset_info_html);
    $asset_info_html = str_replace( '[VALUE]', ('$'.$content->FZVFORG_AMOUNT), $asset_info_html);
    $asset_info_html = str_replace( '[ORGANIZATION]', $content->FZVFORG_ORGN_TITLE, $asset_info_html);
    $asset_info_html = str_replace( '[OWNERSHIP]', $content->FZVFORG_OWNERSHIP, $asset_info_html);
    $asset_info_html = str_replace( '[VT SCAN]', $content->FZVFORG_LAST_INVENTORY_DATE, $asset_info_html);
    $asset_info_html = str_replace( '[CAUS SCAN]', '[CAUS SCAN]', $asset_info_html);
    $asset_info_html = str_replace( '[PURCHASE DATE]', $content->FZVFORG_ACQ_DATE, $asset_info_html);
    $asset_info_html = str_replace('[ID]', $asset_index, $asset_info_html);
    $missing = false;
    if ($wpdb->get_row("SELECT * FROM causfa_banner_missing WHERE FZVFORG_PTAG = '".$content->FZVFORG_PTAG."';")) {
        $asset_info_html = str_replace( '[STATUS]', 'Missing', $asset_info_html);
        $asset_info_html = str_replace('faa-asset-status', 'faa-asset-status faa-asset-status-missing', $asset_info_html);
        $missing = true;
    } elseif ($wpdb->get_row("SELECT * FROM causfa_pending WHERE FZVFORG_PTAG = '".$content->FZVFORG_PTAG."';")) {
        $asset_info_html = str_replace( '[STATUS]', 'Pending', $asset_info_html);
        $asset_info_html = str_replace('faa-asset-status', 'faa-asset-status faa-asset-status-pending', $asset_info_html);
    } else {
        $asset_status = $content->FZVFORG_ROOM;
        if (strpos($asset_status, 'HOME') !== false) {
            $asset_info_html= str_replace('[STATUS]', 'Home Use', $asset_info_html);
        } else {
            $asset_info_html = str_replace('[STATUS]', 'Office Use', $asset_info_html);
        }
    }
    return array($asset_info_html, $missing);
}

/**
 * @param $value_total - total value of items in the current users name
 * @param $missing_total - total value of missing items in the current users name
 * @return mixed - html corresponding to the footer of the employee asset view page
 */
function causfa_filter_employee_asset_total( $value_total, $missing_total) {
    $asset_total_html = file_get_contents ( plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/asset_total_template.html', true);
    $asset_total_html = str_replace('[TOTAL VALUE]', ('$'.$value_total), $asset_total_html);
    $asset_total_html = str_replace( '[TOTAL MISSING VALUE]', ('$'.$missing_total), $asset_total_html);
    return $asset_total_html;
}