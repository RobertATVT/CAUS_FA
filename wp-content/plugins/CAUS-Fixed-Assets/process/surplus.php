<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 3/12/18
 * Time: 3:28 PM
 */
function causfa_surplus() {
    global $wpdb;
    $output = array(
        'status' => 0
    );
    $ptag = $_POST['ptag'];
    $PID_origin = $_POST['PID'];
    $type = $_POST['type'];
    $orgn_code = 'M000';
    $date_created = date('m/d/y');
    $PID_dest = 'surplus';
    $pending_status = 0;
    $wpdb->insert(
        'causfa_pending',
        array(
          'FZVFORG_PTAG' => $ptag,
          'FZVFORG_ORGN_CODE' => $orgn_code,
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