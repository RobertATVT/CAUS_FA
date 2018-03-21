<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 3/19/18
 * Time: 8:58 PM
 */
function causfa_upload_image() {
    $output = array(
        status => 0,
        message => ''
    );
    //Check if file is below 5MB
    if ($_FILES['imageFileToUpload']['size'] > 5242880) {
        $output['message'] = 'File size too large';
        wp_send_json($output);
    }
    //Check if file format is supported
    $imageFileType = strtolower(pathinfo(($_FILES['imageFileToUpload']['name']), PATHINFO_EXTENSION));
    if ($imageFileType != 'jpg' && $imageFileType != 'png' && $imageFileType != 'heic' && $imageFileType != 'jpeg') {
        $output['message'] = 'File is in an unsupported format';
        wp_send_json($output);
    }
    $PID = $_POST['PID'];
    $ptag = $_POST['ptag'];
    $target_dir = wp_upload_dir()['basedir'].'/causfa/images/'.$ptag;
    $date = getdate();
    if(! is_dir($target_dir)) {
        mkdir($target_dir, 0755);
    }
    for ($i = 0; $i<99; $i++) {
        $target_file = $target_dir.'/'.$date['year'].$date['mon'].$date['mday'].'_'.$PID.'_'.$i.'.'.$imageFileType;
        if (!file_exists($target_file)) {
            $i = 100;
        }
    }
    if (move_uploaded_file($_FILES['imageFileToUpload']['tmp_name'], $target_file)) {
        $output['status'] = 1;
        wp_send_json($output);
    } else {
        $output['message'] = 'There was an error uploading your file.';
        wp_send_json($output);
    }
}
function causfa_upload_form_home() {
    $output = array(
        status => 0,
        message => ''
    );
    //Check if file is below 5MB
    if ($_FILES['homeFormToUpload']['size'] > 5242880) {
        $output['message'] = 'File size too large';
        wp_send_json($output);
    }
    //Check if file format is supported
    $imageFileType = strtolower(pathinfo(($_FILES['homeFormToUpload']['name']), PATHINFO_EXTENSION));
    if ($imageFileType != 'jpg' && $imageFileType != 'png' && $imageFileType != 'heic' && $imageFileType != 'jpeg' && $imageFileType != 'pdf') {
        $output['message'] = 'File is in an unsupported format';
        wp_send_json($output);
    }
    $PID = $_POST['PID'];
    $ptag = $_POST['ptag'];
    $date = getdate();
    $target_dir = wp_upload_dir()['basedir'].'/causfa/forms/home/'.$date['year'];
    if(! is_dir($target_dir)) {
        mkdir($target_dir, 0755);
    }
    $target_dir = $target_dir.'/'.$date['mon'];
    if(! is_dir($target_dir)) {
        mkdir($target_dir, 0755);
    }
//    for ($i = 0; $i<99; $i++) {
//        $target_file = $target_dir.'/'.$date['year'].$date['mon'].$date['mday'].'_'.$PID.'_'.$i.'.'.$imageFileType;
//        if (!file_exists($target_file)) {
//            $i = 100;
//        }
//    }
//    if (move_uploaded_file($_FILES['homeFormToUpload']['tmp_name'], $target_file)) {
//        $output['status'] = 1;
//        wp_send_json($output);
//    } else {
//        $output['message'] = 'There was an error uploading your file.';
//        wp_send_json($output);
//    }
}
function causfa_upload_form_office() {
    $output = array(
        status => 0,
        message => ''
    );
    //Check if file is below 5MB
    if ($_FILES['officeFormToUpload']['size'] > 5242880) {
        $output['message'] = 'File size too large';
        wp_send_json($output);
    }
    //Check if file format is supported
    $imageFileType = strtolower(pathinfo(($_FILES['officeFormToUpload']['name']), PATHINFO_EXTENSION));
    if ($imageFileType != 'jpg' && $imageFileType != 'png' && $imageFileType != 'heic' && $imageFileType != 'jpeg' && $imageFileType != 'pdf') {
        $output['message'] = 'File is in an unsupported format';
        wp_send_json($output);
    }
    $PID = $_POST['PID'];
    $ptag = $_POST['ptag'];
    $date = getdate();
    $target_dir = wp_upload_dir()['basedir'].'/causfa/forms/office/'.$date['year'];
    if(! is_dir($target_dir)) {
        mkdir($target_dir, 0755);
    }
    $target_dir = $target_dir.'/'.$date['mon'];
    if(! is_dir($target_dir)) {
        mkdir($target_dir, 0755);
    }
//    for ($i = 0; $i<99; $i++) {
//        $target_file = $target_dir.'/'.$date['year'].$date['mon'].$date['mday'].'_'.$PID.'_'.$i.'.'.$imageFileType;
//        if (!file_exists($target_file)) {
//            $i = 100;
//        }
//    }
//    if (move_uploaded_file($_FILES['homeFormToUpload']['tmp_name'], $target_file)) {
//        $output['status'] = 1;
//        wp_send_json($output);
//    } else {
//        $output['message'] = 'There was an error uploading your file.';
//        wp_send_json($output);
//    }
}