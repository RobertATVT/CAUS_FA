<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 3/17/18
 * Time: 11:37 PM
 */

function causfa_form_fill_data() {
    global $wpdb;
    $ptag = $_POST['ptag'];
    $result = $wpdb->get_row("SELECT * FROM causfa_banner WHERE FZVFORG_PTAG = " . $ptag . ";");
    $model = $result->FZVFORG_MODEL;
    $manufacturer = $result->FZVFORG_MANUFACTURER;
    $custodian = $result->FZVFORG_CUSTODIAN;
    $serial = $result->FZVFORG_SERIAL_NUM;
    $desc = $result->FZVFORG_DESCRIPTION;
    $result = $wpdb->get_row("SELECT * FROM causfa_custodians WHERE Name = '" . $custodian . "';");
    $PID = $result->PID;
    $bldg = $result->Office;
    $output = array(
        'status' => 1,
        'ptag' => $ptag,
        'model' => $model,
        'manufacturer' => $manufacturer,
        'custodian' => $custodian,
        'serial' => $serial,
        'desc' => $desc,
        'pid' => $PID,
        'bldg' => $bldg,
        'office' => 0
    );
    wp_send_json($output);
}
