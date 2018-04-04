<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 3/19/18
 * Time: 8:58 PM
 */
function causfa_upload_image() {
    $output = array(
        'status' => 0,
        'message' => ''
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
    $desc = $_POST['desc'];
    $PID = $_SESSION['PID'];
    $ptag = $_SESSION['ptag'];
    $target_dir = wp_upload_dir()['basedir'].'/causfa/images/'.$ptag;
    $target_url = wp_upload_dir()['baseurl'].'/causfa/images/'.$ptag;
    $date = getdate();
    if(! is_dir($target_dir)) {
        mkdir($target_dir, 0755);
    }
    for ($i = 0; $i<99; $i++) {
        $target_file = $target_dir.'/'.$date['year'].$date['mon'].$date['mday'].'_'.$PID.'_'.$i.'.'.$imageFileType;
        if (!file_exists($target_file)) {
            $target_url = $target_url.'/'.$date['year'].$date['mon'].$date['mday'].'_'.$PID.'_'.$i.'.'.$imageFileType;
            $i = 100;
        }
    }
    if (move_uploaded_file($_FILES['imageFileToUpload']['tmp_name'], $target_file)) {
        $value = causfa_DB_Serialize_Images($target_url, $ptag, $desc);
        if(is_null($value)){
            $output['message'] = 'Something went wrong';
            unlink($target_file);
        } else {
            $output['status'] = 1;
            $output['message'] = 'File Upload Successful';
            $output['src'] = $target_url;
            $output['desc'] = $desc;
            $output['date'] = $date['year'].'-'.$date['mon'].'-'.$date['mday'];
        }
        wp_send_json($output);
    } else {
        $output['message'] = 'There was an error uploading your file.';
        wp_send_json($output);
    }
}
function causfa_upload_form_home() {
    $output = array(
        'status' => 0,
        'message' => ''
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
    $user = wp_get_current_user();
    $ptag = $_SESSION['ptag'];
    $first_name = $user->first_name;
    $first_name = explode(' ',$first_name)[0];
    $last_name = $user->last_name;
    $date = getdate();
    $target_dir = wp_upload_dir()['basedir'].'/causfa/forms/home/'.$date['year'];
    $target_url = wp_upload_dir()['baseurl'].'/causfa/forms/home/'.$date['year'];
    if(! is_dir($target_dir)) {
        mkdir($target_dir, 0755);
    }
    $target_dir = $target_dir.'/'.$date['mon'];
    $target_url = $target_url.'/'.$date['mon'];
    if(! is_dir($target_dir)) {
        mkdir($target_dir, 0755);
    }
    $target_file = $target_dir.'/Home'.'_'.$last_name.'_'.$first_name.'_VT'.$ptag.'_'.$date['year'].'.'.$imageFileType;
    $target_url = $target_url.'/Home'.'_'.$last_name.'_'.$first_name.'_VT'.$ptag.'_'.$date['year'].'.'.$imageFileType;
    if (!file_exists($target_file)) {
        if (move_uploaded_file($_FILES['homeFormToUpload']['tmp_name'], $target_file)) {
            $value = causfa_DB_Serialize_Form_Home($target_url, $ptag);
            if(is_null($value)){
                $output['message'] = 'Something went wrong';
                unlink($target_file);
            } else {
                $output['status'] = 1;
                $output['message'] = 'File Upload Successful';
            }
            wp_send_json($output);
        } else {
            $output['message'] = 'There was an error uploading your file.';
            wp_send_json($output);
        }
    }
}
function causfa_upload_form_office() {
    $output = array(
        'status' => 0,
        'message' => ''
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
    $user = wp_get_current_user();
    $ptag = $_SESSION['ptag'];
    $first_name = $user->first_name;
    $first_name = explode(' ',$first_name)[0];
    $last_name = $user->last_name;
    $date = getdate();
    $target_dir = wp_upload_dir()['basedir'].'/causfa/forms/office/'.$date['year'];
    $target_url = wp_upload_dir()['baseurl'].'/causfa/forms/office/'.$date['year'];
    if(! is_dir($target_dir)) {
        mkdir($target_dir, 0755);
    }
    $target_dir = $target_dir.'/'.$date['mon'];
    $target_url = $target_url.'/'.$date['mon'];
    if(! is_dir($target_dir)) {
        mkdir($target_dir, 0755);
    }
    $target_file = $target_dir.'/Office'.'_'.$last_name.'_'.$first_name.'_VT'.$ptag.'_'.$date['year'].'.'.$imageFileType;
    $target_url = $target_url.'/Office'.'_'.$last_name.'_'.$first_name.'_VT'.$ptag.'_'.$date['year'].'.'.$imageFileType;
    if (!file_exists($target_file)) {
        if (move_uploaded_file($_FILES['officeFormToUpload']['tmp_name'], $target_file)) {
            $value = causfa_DB_Serialize_Form_Office($target_url, $ptag);
            if(is_null($value)){
                $output['message'] = 'Something went wrong';
                unlink($target_file);
            } else {
                $output['status'] = 1;
                $output['message'] = 'File Upload Successful';
            }
            wp_send_json($output);
        } else {
            $output['message'] = 'There was an error uploading your file.';
            wp_send_json($output);
        }
    }
}
function causfa_output_images() {
    global $wpdb;
    $ptag = $_SESSION['ptag'];
    $results = $wpdb->get_results(
        'SELECT * 
        FROM causfa_gallery
        WHERE FZVFORG_PTAG = '.$ptag.';'
    );
    $output = array(
        'src' => array(),
        'desc' => array(),
        'date' => array(),
        'count' => 0
    );
    for ($i = 0; $i < count($results); $i++) {
        $output['src'] = unserialize($results[$i]->IMG_URL);
        $output['desc'] = unserialize($results[$i]->IMG_DESC);
        $output['date'] = unserialize($results[$i]->IMG_DATE);
        $output['count'] = count($output['src']);
    }
    if (count($output['src']) == 0) {
        $output['src'][] =  plugins_url('assets/no-image-available.png', CAUSFA_PLUGIN_URL);
        $output['desc'][] = 'No image available for this asset';
        $output['date'][] = '';
    }
    wp_send_json($output);
}