<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 4/5/18
 * Time: 1:25 PM
 */
function causfa_email_transfer($requester, $ptag, $name, $recipient) {
    if (CAUSFA_SEND_EMAIL) {
        $from = $requester.'@vt.edu';
        $requester_FAL = causfa_groups_FAL($requester);
        $requester_BM = causfa_groups_BM($requester);
        $recipient_FAL = causfa_groups_FAL($recipient);
        $recipient_BM = causfa_groups_BM($recipient);
        $to = $requester.'@vt.edu';
        foreach($requester_FAL as $FAL) {
            $to = $to.', '.$FAL['Email'];
        }
        foreach($requester_BM as $BM) {
            $to = $to.', '.$BM['Email'];
        }
        foreach($recipient_FAL as $FAL) {
            $to = $to.', '.$FAL['Email'];
        }
        foreach($recipient_BM as $BM) {
            $to = $to.', '.$BM['Email'];
        }
        $transferSubject = file_get_contents ( plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/emailTemplates/transfer-subject.txt', true);
        $transferSubject = str_replace('[EMPLOYEE]', $name, $transferSubject);
        $transferSubject = str_replace( '[PTAG]', $ptag, $transferSubject);
        $transferSubject = str_replace( '[RECIPIENT]', $recipient, $transferSubject);
        $transferBody = file_get_contents ( plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/emailTemplates/transfer-body.txt', true);
        $transferBody = str_replace( '[EMPLOYEE]', $name, $transferBody);
        $transferBody = str_replace( '[PTAG]', $ptag, $transferBody);
        $transferBody = str_replace( '[RECIPIENT]', $recipient, $transferBody);
        $transferBody = $transferBody.'  '.$to;
        $headers = 'From: '.$from.'\r\n';
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