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
        'status' => 0
    );
    $ptag = $_POST['ptag'];
    $PID_origin = $_POST['origin'];
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
    $output['status'] = 1;
    wp_send_json($output);
}