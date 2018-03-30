<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 3/13/18
 * Time: 8:47 PM
 */
function causfa_autocomplete_PID() {
    $query = $_POST['query'];

// These values may have been gotten from a database.
// We'll use a simple array just to show this example.
    global $wpdb;
    $CurrentPrefix = $wpdb->base_prefix;
    $PIDs = $wpdb->get_col('SELECT user_login FROM '.$CurrentPrefix.'users WHERE display_name LIKE "%'.$query.'%"');
    $Names = $wpdb->get_col('SELECT display_name FROM '.$CurrentPrefix.'users WHERE display_name LIKE "%'.$query.'%"');
//    $PIDs = $wpdb->get_col('SELECT PID FROM causfa_custodians WHERE Name LIKE "%'.$query.'%"');
//    $Names = $wpdb->get_col('SELECT Name FROM causfa_custodians WHERE Name LIKE "%'.$query.'%"');
    $values = array(
        'PIDs' => $PIDs,
        'Names' => $Names
    );
    wp_send_json($values);
}
