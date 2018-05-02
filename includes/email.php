<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 4/5/18
 * Time: 1:25 PM
 */
function causfa_email_transfer($requester, $ptag, $recipient) {
    if (CAUSFA_SEND_EMAIL) {
        $to = causfa_get_recipient_list($requester, $recipient);
        $transferSubject = file_get_contents ( plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/emailTemplates/transfer-subject.txt', true);
        $transferSubject = str_replace('[EMPLOYEE]', $requester, $transferSubject);
        $transferSubject = str_replace( '[PTAG]', $ptag, $transferSubject);
        $transferSubject = str_replace( '[RECIPIENT]', $recipient, $transferSubject);
        $transferBody = file_get_contents ( plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/emailTemplates/transfer-body.txt', true);
        $transferBody = str_replace( '[EMPLOYEE]', $requester, $transferBody);
        $transferBody = str_replace( '[PTAG]', $ptag, $transferBody);
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
        $newEmail = true;
        for ($i = 0; $i < $to.count(); $i++) {
            if (strcmp($FAL['Email'], $to[$i]) == 0) {
                $newEmail = false;
            }
        }
        if ($newEmail == true) {
            $to[] = $FAL['Email'];
        }
    }
    foreach($requester_BM as $BM) {
        $newEmail = true;
        for ($i = 0; $i < $to.count(); $i++) {
            if (strcmp($BM['Email'], $to[$i]) == 0) {
                $newEmail = false;
            }
        }
        if ($newEmail) {
            $to[] = $BM['Email'];
        }
    }
    foreach($recipient_FAL as $FAL) {
        $newEmail = true;
        for ($i = 0; $i < $to.count(); $i++) {
            if (strcmp($FAL['Email'], $to[$i]) == 0) {
                $newEmail = false;
            }
        }
        if ($newEmail) {
            $newEmail = true;
            for ($i = 0; $i < $to.count(); $i++) {
                if (strcmp($BM['Email'], $to[$i]) == 0) {
                    $newEmail = false;
                }
            }
            if ($newEmail) {
                $to[] = $FAL['Email'];
            }
        }
    }
    foreach($recipient_BM as $BM) {
        $newEmail = true;
        for ($i = 0; $i < $to.count(); $i++) {
            if ($BM['Email'] == $to[$i]) {
                $newEmail = false;
            }
        }
        if ($newEmail) {
            $to[] = $BM['Email'];
        }
    }
    return $to;
}