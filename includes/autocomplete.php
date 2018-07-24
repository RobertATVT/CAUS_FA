<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 3/13/18
 * Time: 8:47 PM
 */
function causfa_autocomplete_PID() {

// These values may have been gotten from a database.
// We'll use a simple array just to show this example.
    global $wpdb;
    $CurrentPrefix = $wpdb->base_prefix;
    $PIDs = $wpdb->get_col('SELECT user_login FROM '.$CurrentPrefix.'users ORDER BY display_name');
    $Names = $wpdb->get_col('SELECT display_name FROM '.$CurrentPrefix.'users ORDER BY display_name');
    $userPID = wp_get_current_user()->user_nicename;
    $index = array_search($userPID, $PIDs);
    array_splice($PIDs, $index, 1);
    array_splice($Names, $index, 1);
    $values = array(
        'PIDs' => $PIDs,
        'Names' => $Names
    );
    wp_send_json($values);
}
