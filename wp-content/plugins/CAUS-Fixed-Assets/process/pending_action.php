<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 3/14/18
 * Time: 3:48 PM
 */
function causfa_pending_action() {
    global $wpdb;
    $tag = $_POST['ptag'];
    $output = "";
    $result = $wpdb->get_row('SELECT * FROM causfa_pending WHERE FZVFORG_PTAG = '.$tag.';');
    if(!$result->PENDING_TYPE) {
        switch($result->PENDIND_STATUS) {
            case 0:
                $output = 'This item is pending transfer. You are currently waiting to be contacted by your Fixed Assets Liaison or Business Manger';
                break;
            case 1:
                $output = "This item is pending transfer. You are currently waiting for the item to be picked up by your IT person or your Fixed Assets Liaison";
                break;
            case 2:
                $output = "This item is pending transfer. You are currently waiting for the item to be updated in banner.";
                break;
            default:
                //this should not happen
                break;
        }
    } else {
        switch($result->PENDING_STATUS) {
            case 0:
                $output = 'This item is pending surplus. You are currently waiting to be contacted by your Fixed Assets Liaison or Business Manger';
                break;
            case 1:
                $output = "This item is pending surplus. You are currently waiting for the item to be picked up by your IT person or your Fixed Assets Liaison";
                break;
            case 2:
                $output = "This item is pending surplus. You are currently waiting for the item to be updated in banner.";
                break;
            default:
                //this should not happen
                break;
        }
    }
    wp_send_json($output);
}