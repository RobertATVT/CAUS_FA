<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 7/26/18
 * Time: 12:42 PM
 */

function causfa_add_note() {
    global $wpdb;
    $creator = wp_get_current_user()->user_nicename;
    $date = current_time('mysql');
    $action = $_POST['act'];
    $ptag = $_POST['ptag'];
    $note = sanitize_text_field($_POST['note']);
    $wpdb->insert(
        'causfa_notes',
        array(
            'CREATOR' => $creator,
            'DATE_CREATED' => $date,
            'ACTION' => $action,
            'FZVFORG_PTAG' => $ptag,
            'NOTE' => $note
        ), array('%s','%s','%s','%s','%s')
    );
    $output = array(
        'status' => 1
    );
    wp_send_json($output);
}