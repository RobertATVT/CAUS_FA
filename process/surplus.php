<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 3/12/18
 * Time: 3:28 PM
 */

/**
 * Function that is called from the frontend javascript using an AJAX POST request
 */
function causfa_surplus() {
    global $wpdb;
    $output = array(
        'status' => 0,
        'message' => ''
    );
    $ptag = $_SESSION['ptag'];
    $PID_origin = $_SESSION['PID'];
    $type = $_POST['type'];
    $date_created = current_time('mysql');
    $PID_dest = 'surplus';
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
        'Action' => 8,
        'FZVFORG_PTAG' => $ptag,
        'PID_dest' => $PID_dest,
        'Info' => null
    );
    causfa_logger($logger_info);
    $result = $wpdb->get_row('SELECT * FROM causfa_banner WHERE FZVFORG_PTAG = '. $ptag.';');
    causfa_email_surplus($PID_origin, $ptag, $result->FZVFORG_MANUFACTURER, $result->FZVFORG_MODEL);
    $output['status'] = 1;
    $output['message'] = 'A surplus request has been sent to your Fixed Assets Liaison and Business Manager. They will be in contact with you soon to facilitate the transfer of the asset.';
    wp_send_json($output);

}

function causfa_bulk_surplus() {
    global $wpdb;
    $output = array (
        'status' => 0,
        'message' => ''
    );
    $ptags = $_POST['ptags'];
    $ptags = explode(',', $ptags);
    $PID_origin = $_SESSION['PID'];
    $type = $_POST['type'];
    $date_created = current_time('mysql');
    $PID_dest = 'surplus';
    $Assignee_info = causfa_groups_FAL($PID_origin);
    $Assignee_pids = array();
    foreach($Assignee_info as $value) {
        $Assignee_pids[] = $value['PID'];
    }
    $pending_status = 0;
    for ($i = 0; $i < count($ptags); $i++) {
        $wpdb->insert(
            'causfa_pending',
            array(
                'FZVFORG_PTAG' => $ptags[$i],
                'FZVFORG_ORGN_CODE' => causfa_groups_management_code(),
                'PENDING_TYPE' => $type,
                'DATE_CREATED' => $date_created,
                'PID_ORIGIN' => $PID_origin,
                'PID_DESTINATION' => $PID_dest,
                'PENDING_STATUS' => $pending_status,
                'ASSIGNEE' => $Assignee_pids[0]
            ), array('%s', '%s', '%d', '%s', '%s', '%s', '%d')
        );
        $logger_info = array(
            'PID' => $PID_origin,
            'Action' => 8,
            'FZVFORG_PTAG' => $ptags[$i],
            'PID_dest' => $PID_dest,
            'Info' => null
        );
        causfa_logger($logger_info);
        $result = $wpdb->get_row('SELECT * FROM causfa_banner WHERE FZVFORG_PTAG = '. $ptags[$i].';');
        causfa_email_surplus($PID_origin, $ptags[$i], $result->FZVFORG_MANUFACTURER, $result->FZVFORG_MODEL);
    }
    $output['status'] = 1;
    $output['message'] = 'A surplus request has been sent to your Fixed Assets Liaison and Business Manager. They will be in contact with you soon to facilitate the transfer of the asset.';
    wp_send_json($output);
}