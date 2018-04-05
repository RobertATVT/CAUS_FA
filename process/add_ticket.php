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
            'PID_Submit' => $user,
            'PID_Assigned' => $FAL_PIDs_s,
            'FZVFORG_PTAG' => $ptag,
            'FZVFORG_SERIAL_NUM' => $serial,
            'FZVFORG_DESCRIPTION' => $desc,
            'Notes' => $note,
            'Type' => $type
        ), array('%s','%s','%s','%s','%s','%s','%d')
    );
    $output['status'] = 1;
    $output['message'] = 'Your request has been submitted and will be processed by your Fixed Assets Liaison';
    wp_send_json($output);

}