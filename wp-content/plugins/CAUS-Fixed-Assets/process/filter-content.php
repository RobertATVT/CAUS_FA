<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 3/7/18
 * Time: 9:15 PM
 */
function causfa_filter_employee_info( $content) {
    $employee_info_html = file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/employee_info_template.html', true );
    $employee_info_html = str_replace('[NAME]', $content->Name, $employee_info_html);
    //$employee_info_html = str_replace('[FAL]', $content->FAL, $employee_info_html);
    $employee_info_html = str_replace('[FAL]', causfa_groups_FAL(), $employee_info_html);
    $employee_info_html = str_replace( '[PID]', $content->PID, $employee_info_html);
    $employee_info_html = str_replace( '[EMAIL]', $content->Email, $employee_info_html);
    //$employee_info_html = str_replace( '[FAC]', $content->FAC, $employee_info_html);
    $employee_info_html = str_replace( '[FAC]', causfa_groups_FAC(), $employee_info_html);
    $employee_info_html = str_replace( '[OFFICE]', $content->Office, $employee_info_html);
    $employee_info_html = str_replace( '[PHONE]', $content->Phone, $employee_info_html);
    //$employee_info_html = str_replace( '[BM]', $content->BM, $employee_info_html);
    $employee_info_html = str_replace( '[BM]', causfa_groups_BM(), $employee_info_html);

    return $employee_info_html;
}

function causfa_filter_employee_asset_info( $content) {
    $asset_info_html = file_get_contents( plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/asset_template.html', true);
    $asset_info_html = str_replace('[VT TAG]', 'VT000'.$content->FZVFORG_PTAG, $asset_info_html);
    $asset_info_html = str_replace( '[S/N]', $content->FZVFORG_SERIAL_NUM, $asset_info_html);
    $asset_info_html = str_replace('[DESCRIPTION]', $content->FZVFORG_DESCRIPTION, $asset_info_html);
    $asset_info_html = str_replace( '[VALUE]', ('$'.$content->FZVFORG_AMOUNT), $asset_info_html);
    $asset_info_html = str_replace( '[ORGANIZATION]', $content->FZVFORG_ORGN_TITLE, $asset_info_html);
    $asset_info_html = str_replace( '[OWNERSHIP]', $content->FZVFORG_OWNER, $asset_info_html);
    $asset_info_html = str_replace( '[VT SCAN]', $content->FZVFORG_LAST_INVENTORY_DATE, $asset_info_html);
    $asset_info_html = str_replace( '[CAUS SCAN]', '[CAUS SCAN]', $asset_info_html);
    $asset_info_html = str_replace( '[PURCHASE DATE]', $content->FZVFORG_ACQ_DATE, $asset_info_html);
    $asset_status = $content->FZVFORG_ROOM;
    if (strpos($asset_status, 'HOME') !== false) {
        $asset_info_html = str_replace('[STATUS]', 'Home Use', $asset_info_html);
    } else {
        $asset_info_html = str_replace('[STATUS]', 'Office Use', $asset_info_html);
    }
    return $asset_info_html;
}

function causfa_filter_employee_asset_total( $content) {
    $asset_total_html = file_get_contents ( plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/asset_total_template.html', true);
    $asset_total_html = str_replace('[TOTAL VALUE]', $content, $asset_total_html);
    $asset_total_html = str_replace( '[TOTAL MISSING VALUE]', '[TOTAL MISSING VALUE]', $asset_total_html);
    return $asset_total_html;
}