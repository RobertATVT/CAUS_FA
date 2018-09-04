<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 3/30/18
 * Time: 7:59 PM
 */
function causfa_add_ticket() {
    global $wpdb;
    $output = array();
    $ptag = sanitize_text_field($_POST['ptag']);
    if ($wpdb->get_var("SELECT ID FROM causfa_tickets WHERE FZVFORG_PTAG = ".$ptag.";") != null) {
        $output['status'] = 0;
        $output['message'] = 'Your request has not been submitted because a request under this tag number has already been submitted';
        wp_send_json($output);
    }
    $serial = sanitize_text_field($_POST['serial']);
    $desc = sanitize_text_field($_POST['desc']);
    $note = sanitize_text_field($_POST['note']);
    $date_created = current_time('mysql');
    $type = $_POST['type'];
    $user = wp_get_current_user()->user_nicename;
    $FALs = causfa_groups_FAL();
    $FAL_PIDs = array();
    for ($i = 0; $i < count($FALs); $i++) {
        $FAL_PIDs[] = explode('@', $FALs[$i]['Email'])[0];
    }
    $FAL_PIDs_s = maybe_serialize($FAL_PIDs);
    $wpdb->insert(
        'causfa_tickets',
        array(
            'DATE_CREATED' => $date_created,
            'FZVFORG_ORGN_CODE' => causfa_groups_management_code(),
            'PID_Submit' => $user,
            'PID_Assigned' => $FAL_PIDs_s,
            'FZVFORG_PTAG' => $ptag,
            'FZVFORG_SERIAL_NUM' => $serial,
            'FZVFORG_DESCRIPTION' => $desc,
            'Notes' => $note,
            'Type' => $type
        ), array('%s','%s','%s','%s','%s','%s','%s','%s','%d')
    );
    if ($type == 0) {
        $action = 18;
    } else {
        $action = 19;
    }
    $logger_info = array(
        'PID' => $user,
        'Action' => $action,
        'FZVFORG_PTAG' => $ptag,
        'PID_dest' => $FAL_PIDs_s,
        'Info' => $note
    );
    causfa_logger($logger_info);
    causfa_email_problem($user, $ptag, $note);
    $output['status'] = 1;
    $output['message'] = 'Your request has been submitted and will be processed by your Fixed Assets Liaison';
    wp_send_json($output);

}

function causfa_close_ticket() {
    global $wpdb;
    $ptag = $_POST['ptag'];
    $wpdb->delete('causfa_tickets', array('FZVFORG_PTAG' => $ptag));
    $output = array(
        'status' => 1
    );
    wp_send_json($output);
}

function causfa_ticket_number() {
    global $wpdb;
    $oldTime = date('Y-m-d', mktime(0, 0, 0, date("m") , date("d") - 14, date("Y")));
    $newTime  = date('Y-m-d', mktime(0, 0, 0, date("m") , date("d") - 7, date("Y")));
    $managementCode = causfa_groups_management_code();
    $results = $wpdb->get_results("SELECT * FROM causfa_tickets WHERE Type = 1 AND FZVFORG_ORGN_CODE = '" . $managementCode . "';");
    $results_old = $wpdb->get_results("SELECT * FROM causfa_tickets WHERE DATE_CREATED < '".$oldTime."' AND Type = 1 AND FZVFORG_ORGN_CODE = '" . $managementCode . "';");
    $results_new = $wpdb->get_results("SELECT * FROM causfa_tickets WHERE DATE_CREATED > '".$newTime."' AND Type = 1 AND FZVFORG_ORGN_CODE = '" . $managementCode . "';");
    $output = array (
        'total' => count($results),
        'old' => count($results_old),
        'new' => count($results_new),
    );
    return $output;

}