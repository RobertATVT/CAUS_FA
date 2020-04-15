<?php

function causfa_change_status() {
    global $wpdb;
    $creator = wp_get_current_user()->user_nicename;
    $date = current_time('mysql');
    $ptag = $_POST['ptag'];
    $note = sanitize_text_field($_POST['note']);
    $status = $_POST['status'];
    $action = $_POST['act'];
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
    $wpdb->update(
        'causfa_banner',
        array(
            'STATUS' => $status
        ),
        array(
            "FZVFORG_PTAG" => $ptag
        ), array("%d"), array("%s")
    );
    $output = array(
        'status' => 1
    );
    wp_send_json($output);
}