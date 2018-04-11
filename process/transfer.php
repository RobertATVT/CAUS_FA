<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 3/12/18
 * Time: 11:37 PM
 */
function causfa_transfer_asset() {
    global $wpdb;
    $output = array(
        'status' => 0,
        'message' => ''
    );
    $ptag = $_SESSION['ptag'];
    $PID_origin = $_SESSION['PID'];
    $type = $_POST['type'];
    $date_created = current_time('mysql');
    $PID_dest = $_POST['dest'];
    $PID_dest = $PID_dest;
    $pending_status = 0;
    $wpdb->insert(
        'causfa_pending',
        array(
            'FZVFORG_PTAG' => $ptag,
            'FZVFORG_ORGN_CODE' => causfa_groups_management_code(),
            'PENDING_TYPE' => $type,
            'DATE_CREATED' => $date_created,
            'PID_ORIGIN' => $PID_origin,
            'PID_DESTINATION' => $PID_dest,
            'PENDING_STATUS' => $pending_status
        ), array('%s', '%s', '%d', '%s', '%s', '%s', '%d')
    );
    $logger_info = array(
        'PID' => $PID_origin,
        'Action' => 1,
        'FZVFORG_PTAG' => $ptag,
        'PID_dest' => $PID_dest,
        'Info' => null
    );
    causfa_logger($logger_info);
    causfa_email_transfer('mattwj6@vt.edu', $PID_origin.'@vt.edu', $ptag, $PID_origin, $PID_dest);
    $output['status'] = 1;
    $output['message'] = 'A transfer request has been sent to your Fixed Assets Liaison and Business Manager. They will be in contact with you soon to facilitate the transfer of the asset.';
    wp_send_json($output);
}