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
    $values = $wpdb->get_col('SELECT PID FROM causfa_custodians WHERE PID LIKE "%'.$query.'%"', 0);
//    $output = array();
//    if ($query) {
//        foreach($values as $key => $value) {
//            if (stripos($value, $query) !== false) {
//                array_push($output, $values[$key]);
//            }
//        }
//    }
    wp_send_json($values);
}
