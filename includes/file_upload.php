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
        $logger_data = array(
            'url' => $target_url,
            'desc' => $desc,
            'date' => $date
        );
        $logger_info = array(
            'PID' => wp_get_current_user()->user_nicename,
            'Action' => 15,
            'FZVFORG_PTAG' => $ptag,
            'PID_dest' => null,
            'Info' => maybe_serialize($logger_data)
        );
        causfa_logger($logger_info);
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
    $ptag = $_POST['ptag'];
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
            $logger_data = array(
                'url' => $target_url,
                'date' => $date
            );
            $logger_info = array(
                'PID' => wp_get_current_user()->user_nicename,
                'Action' => 16,
                'FZVFORG_PTAG' => $ptag,
                'PID_dest' => null,
                'Info' => maybe_serialize($logger_data)
            );
            causfa_logger($logger_info);
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
    $ptag = $_POST['ptag'];
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
            $logger_data = array(
                'url' => $target_url,
                'date' => $date
            );
            $logger_info = array(
                'PID' => wp_get_current_user()->user_nicename,
                'Action' => 17,
                'FZVFORG_PTAG' => $ptag,
                'PID_dest' => null,
                'Info' => maybe_serialize($logger_data)
            );
            causfa_logger($logger_info);
            wp_send_json($output);
        } else {
            $output['message'] = 'There was an error uploading your file.';
            wp_send_json($output);
        }
    }
}
function causfa_upload_surplus_form() {
    global $wpdb;
    $output = array(
        'status' => 0,
        'message' => '',
        'ptag' => ''
    );
    //Check if file is below 5MB
    if ($_FILES['surplusFormToUpload']['size'] > 5242880) {
        $output['message'] = 'File size too large';
        wp_send_json($output);
    }
    //Check if file format is supported
    $imageFileType = strtolower(pathinfo(($_FILES['surplusFormToUpload']['name']), PATHINFO_EXTENSION));
    if ($imageFileType != 'jpg' && $imageFileType != 'png' && $imageFileType != 'heic' && $imageFileType != 'jpeg' && $imageFileType != 'pdf') {
        $output['message'] = 'File is in an unsupported format';
        wp_send_json($output);
    }
    $ptag[0] = $_POST['ptag'];
    $output['ptag'] = $ptag[0];
    $result = $wpdb->get_var("SELECT NOTE FROM causfa_notes WHERE DATE_CREATED = (select MAX(DATE_CREATED) FROM causfa_notes WHERE FZVFORG_PTAG = '".$ptag[0]."' AND ACTION = 'Surplus-PickedUp')");
    $date = explode(' ', $result)[8];
    $date = explode('/', $date);
    $month = $date[0];
    $day = $date[1];
    $year = str_replace('.', '', $date[2]);
    $user = wp_get_current_user();
    $target_dir = wp_upload_dir()['basedir'].'/causfa/surplus/'.$year;
    $target_url = wp_upload_dir()['baseurl'].'/causfa/surplus/'.$year;
    if(! is_dir($target_dir)) {
        mkdir($target_dir, 0755);
    }
    $target_dir = $target_dir.'/'.$month;
    $target_url = $target_url.'/'.$month;
    if(! is_dir($target_dir)) {
        mkdir($target_dir, 0755);
    }
    $target_dir = $target_dir.'/'.$day;
    $target_url = $target_url.'/'.$day;
    if(! is_dir($target_dir)) {
        mkdir($target_dir, 0755);
    }
    $filename = $user->user_nicename.'_SURPLUS_'.$year.'-'.$month.'-'.$day.'.'.$imageFileType;
    $target_file = $target_dir.'/'.$filename;
    $target_url = $target_url.'/'.$filename;
    if (!file_exists($target_file)) {
        if (move_uploaded_file($_FILES['surplusFormToUpload']['tmp_name'], $target_file)) {
            $wpdb->insert(
                'causfa_surplus_forms',
                array(
                    'PATH' => $target_file,
                    'FILENAME' => $filename,
                    'YEAR' => $year,
                    'MONTH' => $month,
                    'DAY' => $day,
                    'PID' => $user->user_nicename,
                    'ASSETS' => maybe_serialize($ptag)
                ));
            $output['status'] = 1;
            $output['message'] = 'File Upload Successful';
            $wpdb->update(
                'causfa_pending',
                array('PENDING_STATUS' => 4),
                array('PENDING_TYPE' => 1, 'FZVFORG_PTAG' => $ptag[0])
            );
            wp_send_json($output);
        } else {
            $output['message'] = 'There was an error uploading your file.';
            wp_send_json($output);
        }
    } else {
        $id = $wpdb->get_var("SELECT ID FROM causfa_surplus_forms WHERE YEAR = ".$year." AND MONTH = ".$month." AND DAY = ".$day." AND PID = '".$user->user_nicename."';");
        $assets = maybe_unserialize($wpdb->get_var("SELECT ASSETS FROM causfa_surplus_forms WHERE ID = ".$id));
        $assets[] = $ptag;
        $wpdb->update('causfa_surplus_forms',
            array( 'ASSETS' => maybe_serialize($assets)),
            array('ID' => $id)
        );
        $wpdb->update(
            'causfa_pending',
            array('PENDING_STATUS' => 4),
            array('PENDING_TYPE' => 1, 'FZVFORG_PTAG' => $ptag[0])
        );
        $output['status'] = 1;
        $output['message'] = 'File Upload Successful';
    }

    wp_send_json($output);
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