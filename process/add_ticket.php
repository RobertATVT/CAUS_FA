<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 3/30/18
 * Time: 7:59 PM
 */
function causfa_add_ticket() {
    global $wpdb;
    $ptag = sanitize_text_field($_POST['ptag']);
    $serial = sanitize_text_field($_POST['serial']);
    $desc = sanitize_text_field($_POST['desc']);
    $note = sanitize_text_field($_POST['note']);
    $user = wp_get_current_user()->user_nicename;
    $FAL = 'mattwj6';
    $wpdb->insert(
        'causfa_tickets',
        array(
            'PID_Submit' => $user,
            'PID_Assigned' => $FAL,
            'FZVFORG_PTAG' => $ptag,
            'FZVFORG_SERIAL_NUM' => $serial,
            'FZVFORG_DESCRIPTION' => $desc,
            'Notes' => $note,
            'Type' => 0
        ), array('%s','%s','%s','%s','%s','%s','%d')
    );

}