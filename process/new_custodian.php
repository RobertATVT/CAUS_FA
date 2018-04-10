<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 3/15/18
 * Time: 12:49 PM
 */
function causfa_new_custodian_dialog() {
    if (is_user_logged_in()) {
        $new_custodian_modal = file_get_contents ( plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-new-custodian.html', true);
        return $new_custodian_modal;
    } else {
        return "Please login to view this page";
    }
}

function causfa_new_custodian() {
    global $wpdb;
    $output = 0;
    $current_user = wp_get_current_user();
    $firstName = $current_user->first_name;
    $firstName = explode(" ", $firstName)[0];
    $name = $current_user->last_name.', '.$firstName;
    $email = $current_user->user_email;
    $PID = $current_user->user_nicename;
    $office = sanitize_text_field($_POST['office']);
    $phone = sanitize_text_field($_POST['phone']);
    $phone = preg_replace('/[^0-9.]+/', '', $phone);
    if (strlen($phone) != 10) {
        $output = 2;
        wp_send_json($output);
    }
    $phone = substr_replace($phone,'-', 3, 0);
    $phone = substr_replace($phone,'-', 7, 0);
    if ($wpdb->insert('causfa_custodians', array(
        'Name' => $name,
        'PID' => $PID,
        'Email' => $email,
        'Office' => $office,
        'Phone' => $phone
    ), array(
        '%s',
        '%s',
        '%s',
        '%s',
        '%s'
        ))) {
        $output = 1;
    }
    causfa_groups_add($_POST['org']);
    wp_send_json($output);

}
