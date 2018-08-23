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
                'PENDING_STATUS' => $pending_status
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

function causfa_update_surplus() {
    global $wpdb;
    $ptag = $_POST['ptag'];
    $state = $_POST['state'];
    $assignee = $_POST['assignee'];
    $output = array(
        'status' => 0
    );
    if ($assignee !== '') {
        $wpdb->update('causfa_pending', array('PENDING_STATUS' => $state, 'ASSIGNEE' => $assignee), array('FZVFORG_PTAG' => $ptag));
    } else {
        $wpdb->update('causfa_pending', array('PENDING_STATUS' => $state, 'ASSIGNEE' => wp_get_current_user()->user_nicename), array('FZVFORG_PTAG' => $ptag));
    }
    $output['status'] = 1;
    wp_send_json($output);
}

function causfa_surplus_to_transfer() {
    global $wpdb;
    $ptag = $_POST['ptag'];
    $recipient = $_POST['recipient'];
    $dest_org = causfa_groups_management_code($recipient);
    $result = $wpdb->get_row("SELECT * FROM causfa_pending WHERE FZVFORG_PTAG = '".$ptag."';");
    $output = array(
        'status' => 0,
        'changeOrg' => 0,
        'newOrg' => ''
    );
    if ($result->FZVFORG_ORGN_CODE !== $dest_org) {
        $wpdb->update(
            'causfa_pending',
            array(
                'FZVFORG_ORGN_CODE' => $dest_org,
                'PENDING_TYPE' => 0,
                'PID_DESTINATION' => $recipient,
                'PENDING_STATUS' => 3,
                'ASSIGNEE' => NULL
            ), array('FZVFORG_PTAG' =>$ptag)
        );
        $output['status'] = 1;
        $output['changeOrg'] = 1;
        $output['newOrg'] = $dest_org;
    } else {
        $wpdb->update(
            'causfa_pending',
            array(
                'PENDING_TYPE' => 0,
                'PID_DESTINATION' => $recipient,
                'PENDING_STATUS' => 4
            ), array('FZVFORG_PTAG' =>$ptag)
        );
        $output['status'] = 1;
    }
    wp_send_json($output);
}
function causfa_surplus_number() {
    global $wpdb;
    $managementCode = causfa_groups_management_code();
    $oldTime = date('Y-m-d', mktime(0, 0, 0, date("m") , date("d") - 14, date("Y")));
    $newTime  = date('Y-m-d', mktime(0, 0, 0, date("m") , date("d") - 7, date("Y")));
    $results = $wpdb->get_results("SELECT * FROM causfa_pending WHERE PENDING_TYPE = 1 AND FZVFORG_ORGN_CODE = '" . $managementCode . "';");
    $results_old = $wpdb->get_results("SELECT * FROM causfa_pending WHERE DATE_CREATED < '".$oldTime."' AND PENDING_TYPE = 1 AND FZVFORG_ORGN_CODE = '" . $managementCode . "';");
    $results_new = $wpdb->get_results("SELECT * FROM causfa_pending WHERE DATE_CREATED > '".$newTime."' AND PENDING_TYPE = 1 AND FZVFORG_ORGN_CODE = '" . $managementCode . "';");
    $output = array (
        'total' => count($results),
        'old' => count($results_old),
        'new' => count($results_new),
    );
    return $output;

}