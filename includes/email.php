<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 4/5/18
 * Time: 1:25 PM
 */
function causfa_email_transfer($requester, $ptag, $manufacturer, $model, $recipient) {
    if (CAUSFA_SEND_EMAIL) {
        $to = causfa_get_recipient_list($requester, $recipient);
        $transferSubject = file_get_contents ( plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/emailTemplates/transfer-subject.txt', true);
        $transferSubject = str_replace('[EMPLOYEE_NAME]', causfa_email_get_name($requester), $transferSubject);
        $transferSubject = str_replace('[EMPLOYEE]', $requester, $transferSubject);
        $transferSubject = str_replace( '[PTAG]', $ptag, $transferSubject);
        $transferSubject = str_replace('[RECIPIENT_NAME]', causfa_email_get_name($recipient), $transferSubject);
        $transferSubject = str_replace( '[RECIPIENT]', $recipient, $transferSubject);
        $transferBody = file_get_contents ( plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/emailTemplates/transfer-body.txt', true);
        $transferBody = str_replace('[EMPLOYEE_NAME]', causfa_email_get_name($requester), $transferBody);
        $transferBody = str_replace( '[EMPLOYEE]', $requester, $transferBody);
        $transferBody = str_replace( '[PTAG]', $ptag, $transferBody);
        $transferBody = str_replace('[MANUFACTURER]', $manufacturer, $transferBody);
        $transferBody = str_replace('[MODEL]', $model, $transferBody);
        $transferBody = str_replace('[RECIPIENT_NAME]', causfa_email_get_name($recipient), $transferBody);
        $transferBody = str_replace( '[RECIPIENT]', $recipient, $transferBody);
        $transferBody = $transferBody.'  '.print_r($to, true);
        wp_mail('mattwj6@vt.edu', $transferSubject, $transferBody);
    }
}

function causfa_email_surplus($to, $from, $ptag) {
    if (CAUSFA_SEND_EMAIL) {

    }
}

function causfa_email_problem($to, $from, $ptag, $problem) {
    if (CAUSFA_SEND_EMAIL) {

    }
}

function causfa_email_add_asset($to, $from, $ptag, $desc, $serial) {
    if (CAUSFA_SEND_EMAIL) {

    }
}
function causfa_get_recipient_list($requester, $recipient) {
    $requester_FAL = causfa_groups_FAL($requester);
    $requester_BM = causfa_groups_BM($requester);
    $recipient_FAL = causfa_groups_FAL($recipient);
    $recipient_BM = causfa_groups_BM($recipient);
    $to[] = $requester.'@vt.edu';
    foreach($requester_FAL as $FAL) {
        if (!in_array($FAL['Email'], $to)) {
            $to[] = $FAL['Email'];
        }
    }
    foreach($requester_BM as $BM) {
        if (!in_array($BM['Email'], $to)) {
            $to[] = $BM['Email'];
        }
    }
    foreach($recipient_FAL as $FAL) {
        if (!in_array($FAL['Email'], $to)) {
            $to[] = $FAL['Email'];
        }
    }
    foreach($recipient_BM as $BM) {
        if (!in_array($BM['Email'], $to)) {
            $to[] = $BM['Email'];
        }
    }
    return $to;
}

function causfa_email_get_name($PID) {
    $user = get_user_by('email', $PID.'@vt.edu');
    return $user->disply_name;
}