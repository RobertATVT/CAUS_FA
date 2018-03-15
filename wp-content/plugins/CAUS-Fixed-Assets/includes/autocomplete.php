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
    $PIDs = $wpdb->get_col('SELECT PID FROM causfa_custodians WHERE Name LIKE "%'.$query.'%"');
    $Names = $wpdb->get_col('SELECT Name FROM causfa_custodians WHERE Name LIKE "%'.$query.'%"');
    $values = array(
        PIDs => $PIDs,
        Names => $Names
    );
    wp_send_json($values);
}
