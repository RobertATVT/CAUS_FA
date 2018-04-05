<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 3/16/18
 * Time: 7:14 PM
 */

/**
 * Encoded action list
 * 0 = login
 * 1 = transfer - started
 * 2 = transfer - recipient accepted
 * 3 = transfer - Liaison Contacted requester
 * 4 = transfer - Liaison/IT picked up equipment
 * 5 = transfer - Liaison/IT delivered equipment to recipient
 * 6 = transfer - Updated in banner
 * 7 = transfer - complete
 * 8 = surplus - started
 * 9 = surplus - Liaison Contacted requester
 * 10 = surplus - Liaison/IT picked up equipment
 * 11 = surplus - Surplus form submitted
 * 12 = surplus - Surplus picked up and confirmation uploaded
 * 13 = surplus - Updated in banner
 * 14 = surplus - Cancelled by Liaison/IT
 * 15 = image upload
 * 16 = home use form upload
 * 17 = office use form upload
 * 18 = add asset request
 * 19 = asset ticket submitted
 */
function causfa_logger($input) {
    global $wpdb;
    $wpdb->insert(
        'causfa_logs', $input , array('%s', '%d', '%s', '%s', '%s')
    );
}
function causfa_logger_login($user_login, $user) {
    global $wpdb;
    $PID = $user->user_nicename;
    $wpdb->insert(
        'causfa_logs',
        array(
            PID => $PID,
            Action => 0,
            FZVFORG_PTAG => null,
            PID_dest => null,
            Info => null
        ), array('%s', '%d', '%s', '%s', '%s')
    );
}
function causfa_ajax_logger() {
    global $wpdb;
    $PID = $_SESSION['PID'];
    $type = $_POST['type'];
    $ptag = $_POST['ptag'];
    $PID_dest = $_POST['PID_dest'];
    $Info = $_POST['Info'];
    $wpdb->insert(
        'causfa_logs',
        array(
            PID => $PID,
            Action=> $type,
            FZVFORG_PTAG => $ptag,
            PID_dest => $PID_dest,
            Info => $Info
        ), array('%s', '%d', '%s', '%s', '%s')
    );
    wp_send_json('1');
}