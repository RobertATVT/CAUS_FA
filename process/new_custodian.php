<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 3/15/18
 * Time: 12:49 PM
 */
function causfa_new_custodian_dialog() {
    if (is_user_logged_in()) {
        $new_custodian_modal = file_get_contents ( plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-new-custodian.html', true);
        $new_custodian_modal .= file_get_contents ( plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-eula-modal.html', true);
        return $new_custodian_modal;
    } else {
        return "Please login to view this page";
    }
}

function causfa_eula() {
    global $wpdb;
    $output = array(
        'status' => 1
    );
    $status = $_POST['status'];
    $pid = wp_get_current_user()->user_nicename;
    $result = $wpdb->get_row("SELECT * FROM causfa_eula WHERE PID = '".$pid."'");
    if($result !== null) {
        if ($status == 0) {
            if (!$result->ACCEPTANCE) {
                //causfa_email_eula_reject($pid);
                $output['status'] = 0;
            }
        }
    } else {
        if ($status == 0) {
            causfa_email_eula_reject($pid);
            $output['status'] = 0;
        }
        $wpdb->insert(
            'causfa_eula',
            array(
                'PID' => $pid,
                'ACCEPTANCE' => $status
            )
        );
    }
    wp_send_json($output);
}

function causfa_new_custodian() {
    global $wpdb;
    $output = 0;
    $current_user = wp_get_current_user();
    $firstName = $current_user->first_name;
    $firstName = explode(" ", $firstName)[0];
    $name = $current_user->last_name.', '.$firstName;
    $email = $current_user->user_email;
    $PID = $current_user->user_nicename;
    $building = sanitize_text_field($_POST['building']);
    $office = sanitize_text_field($_POST['office']);
    $phone = sanitize_text_field($_POST['phone']);
    $phone = preg_replace('/[^0-9.]+/', '', $phone);
    if (strlen($phone) != 10) {
        $output = 2;
        wp_send_json($output);
    }
    $phone = substr_replace($phone,'-', 3, 0);
    $phone = substr_replace($phone,'-', 7, 0);
    $org = $_POST['org'];
    $oldOrg = $wpdb->get_var("SELECT Org FROM causfa_custodians WHERE PID='".$PID."';");
    if ($wpdb->get_row("SELECT * FROM causfa_custodians WHERE PID='".$PID."';")) {
       $wpdb->update('causfa_custodians',
           array(
               'Building' => $building,
               'Office' => $office,
               'Phone' => $phone,
               'Org' => $org
           ), array('PID' => $PID));
        $output = 1;
        causfa_groups_remove($oldOrg);
        causfa_groups_add($org);
    } else {
        if ($wpdb->insert('causfa_custodians', array(
            'Name' => $name,
            'PID' => $PID,
            'Email' => $email,
            'Building' => $building,
            'Office' => $office,
            'Phone' => $phone,
            'Org' => $org,
        ))) {
            $output = 1;
        }
        causfa_groups_add($org);
    }
    wp_send_json($output);

}

function causfa_get_custodian() {
    global $wpdb;
    $current_user = wp_get_current_user();
    $PID = $current_user->user_nicename;
    $result = $wpdb->get_row("SELECT * FROM causfa_custodians WHERE PID='".$PID."';");
    $output = array(
        'Building' => '',
        'Office' => '',
        'Phone' => '',
        'Org' => 'CAUS'
    );
    if ($result) {
        $output = array(
            'Building' => $result->Building,
            'Office' => $result->Office,
            'Phone' => $result->Phone,
            'Org' => $result->Org
        );
    }
    wp_send_json($output);
}
