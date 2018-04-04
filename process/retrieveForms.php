<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 3/29/18
 * Time: 12:02 PM
 */

function causfa_get_last_form() {
    global $wpdb;
    $tag = $_POST['ptag'];
    $result = $wpdb->get_row('SELECT * FROM causfa_forms WHERE FZVFORG_PTAG = "'.$tag.'";');
    $url = '';
    $date ='';
    $status = 0;
    $type = -1;
    if($result->OU_URL) {
        $type = 0;
        $status = 1;
        $url = $result->OU_URL;
        $date = $result->OU_DATE;
    } else if($result->HU_URL) {
        $type = 1;
        $status = 1;
        $url = $result->HU_URL;
        $date = $result->HU_DATE;
    }
    $output = array (
        'status' => $status,
        'url' =>  $url,
        'date' => $date,
        'type' => $type
    );
    wp_send_json($output);
}