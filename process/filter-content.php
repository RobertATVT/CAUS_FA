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
function causfa_filter_header( $content) {
    $faa_head_info = file_get_contents ( plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-employee-header.html', true);
    $faa_head_info = str_replace('[NAME]', $content->Name, $faa_head_info);
    $faa_head_info = str_replace( '[PID]', $content->PID, $faa_head_info);
    $faa_head_info = str_replace( '[EMAIL]', $content->Email, $faa_head_info);
    $faa_head_info = str_replace( '[OFFICE]', $content->Office, $faa_head_info);
    $faa_head_info = str_replace( '[PHONE]', $content->Phone, $faa_head_info);
    $FAL_info = causfa_groups_FAL();
    $FAL_name = '';
    $FAL_email = '';
    $FAL_phone = '';
    for ($i = 0; $i < count($FAL_info); $i++) {
        if ($i == 0) {
            $FAL_name = $FAL_info[$i]['Name'];
            $FAL_email = $FAL_info[$i]['Email'];
            $FAL_phone = $FAL_info[$i]['Phone'];
        } else {
            $FAL_name = $FAL_name.', '.$FAL_info[$i]['Name'];
            $FAL_email = $FAL_email.', '.$FAL_info[$i]['Email'];
            $FAL_phone = $FAL_phone.', '.$FAL_info[$i]['Phone'];
        }
    }
    $faa_head_info = str_replace('[FAL]', $FAL_name, $faa_head_info);
    $faa_head_info = str_replace('[FAL-EMAIL]', $FAL_email, $faa_head_info);
    $faa_head_info = str_replace('[FAL-PHONE]', $FAL_phone, $faa_head_info);
    $FAC_info = causfa_groups_FAC();
    $FAC_name = '';
    $FAC_email = '';
    $FAC_phone = '';
    for ($i = 0; $i < count($FAC_info); $i++) {
        if ($i == 0) {
            $FAC_name = $FAC_info[$i]['Name'];
            $FAC_email = $FAC_info[$i]['Email'];
            $FAC_phone = $FAC_info[$i]['Phone'];
        } else {
            $FAC_name = $FAC_name.', '.$FAC_info[$i]['Name'];
            $FAC_email = $FAC_email.', '.$FAC_info[$i]['Email'];
            $FAC_phone = $FAC_phone.', '.$FAC_info[$i]['Phone'];
        }
    }
    $faa_head_info = str_replace( '[FAC]', $FAC_name, $faa_head_info);
    $faa_head_info = str_replace( '[FAC-EMAIL]', $FAC_email, $faa_head_info);
    $faa_head_info = str_replace( '[FAC-PHONE]', $FAC_phone, $faa_head_info);
    $BM_info = causfa_groups_BM();
    $BM_name = '';
    $BM_email = '';
    $BM_phone = '';
    for ($i = 0; $i < count($BM_info); $i++) {
        if ($i == 0) {
            $BM_name = $BM_info[$i]['Name'];
            $BM_email = $BM_info[$i]['Email'];
            $BM_phone = $BM_info[$i]['Phone'];
        } else {
            $BM_name = $BM_name.', '.$BM_info[$i]['Name'];
            $BM_email = $BM_email.', '.$BM_info[$i]['Email'];
            $BM_phone = $BM_phone.', '.$BM_info[$i]['Phone'];
        }
    }
    $faa_head_info = str_replace( '[BM]', $BM_name, $faa_head_info);
    $faa_head_info = str_replace( '[BM-EMAIL]', $BM_email, $faa_head_info);
    $faa_head_info = str_replace( '[BM-PHONE]', $BM_phone, $faa_head_info);

    return $faa_head_info;
}


/**
 * @param $value_total - total value of items in the current users name
 * @param $missing_total - total value of missing items in the current users name
 * @return mixed - html corresponding to the footer of the employee asset view page
 */
function causfa_filter_impact( $value_total, $total_number, $missing_total, $missing_number) {
    $asset_impact_html = file_get_contents ( plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-employee-impact.html', true);
    $asset_impact_html = str_replace('[TOTAL VALUE]', ('$'.$value_total), $asset_impact_html);
    $asset_impact_html = str_replace('[TOTAL NUMBER]', $total_number, $asset_impact_html);
    $asset_impact_html = str_replace( '[MISSING VALUE]', ('$'.$missing_total), $asset_impact_html);
    $asset_impact_html = str_replace('[MISSING NUMBER]', $missing_number, $asset_impact_html);
    return $asset_impact_html;
}

/**
 * @param $content - contains a row of the asset table that corresponds to an item that belongs to the current user
 * @param $asset_index - contains the index value of the $content in regards to all of the assets in the current users name
 * @return array - returns an array containing two keys
 *      $asset_info_html - contains the html of the asset that corresponds to the content passed into the function
 *      $missing - contains a bool that indicates if the asset has a status of missing or not.
 */
function causfa_filter_asset_info( $content, $asset_index) {
    global $wpdb;
    $asset_info_html = file_get_contents ( plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-employee-asset-list.html', true);
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
    $asset_info_html = str_replace('[PURCHASED]', $content->FZVFORG_ACQ_DATE, $asset_info_html);
    $missing = false;
    if ($wpdb->get_row("SELECT * FROM causfa_banner_missing WHERE FZVFORG_PTAG = '".$content->FZVFORG_PTAG."';")) {
        $asset_info_html = str_replace( '[STATUS]', 'Missing', $asset_info_html);
        $asset_info_html = str_replace('asset-status', 'asset-status asset-missing', $asset_info_html);
        $missing = true;
        $asset_info_html = str_replace('transferModalRequested', 'modalRequestedOnMissingAsset', $asset_info_html);
        $asset_info_html = str_replace('surplusModalRequested', 'modalRequestedOnMissingAsset', $asset_info_html);
    } elseif ($row = $wpdb->get_row("SELECT * FROM causfa_pending WHERE FZVFORG_PTAG = '".$content->FZVFORG_PTAG."';")) {
        if ($row->PENDING_TYPE == 0) {
            $asset_info_html = str_replace( '[STATUS]', 'Pending Transfer', $asset_info_html);
        } else {
            $asset_info_html = str_replace( '[STATUS]', 'Pending Surplus', $asset_info_html);
        }

        $asset_info_html = str_replace('asset-status', 'asset-status asset-pending', $asset_info_html);
        $asset_info_html = str_replace('transferModalRequested', 'modalRequestedOnPendingAsset', $asset_info_html);
        $asset_info_html = str_replace('surplusModalRequested', 'modalRequestedOnPendingAsset', $asset_info_html);
    } else if ($row = $wpdb->get_row("SELECT * FROM causfa_tickets WHERE FZVFORG_PTAG = '".$content->FZVFORG_PTAG."';")) {
        $asset_info_html = str_replace('[STATUS]', 'Pending Ticket', $asset_info_html);
        $asset_info_html = str_replace('asset-status', 'asset-status asset-pending', $asset_info_html);
        $asset_info_html = str_replace('transferModalRequested', 'modalRequestedOnPendingAsset', $asset_info_html);
        $asset_info_html = str_replace('surplusModalRequested', 'modalRequestedOnPendingAsset', $asset_info_html);
        $asset_info_html = str_replace('ticketModalRequested', 'modalRequestedOnPendingAsset', $asset_info_html);
    } else {
        $asset_status = $content->FZVFORG_ROOM;
        if (strpos($asset_status, 'HOME') !== false) {
            $asset_info_html= str_replace('[STATUS]', 'Home Use', $asset_info_html);
            $asset_info_html= str_replace('asset-status', 'asset-status asset-home', $asset_info_html);
        } else {
            $asset_info_html = str_replace('[STATUS]', 'Office Use', $asset_info_html);
            $asset_info_html= str_replace('asset-status', 'asset-status asset-office', $asset_info_html);
        }
    }
    return array($asset_info_html, $missing);
}
