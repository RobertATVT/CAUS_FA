<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 4/5/18
 * Time: 1:25 PM
 */
function causfa_email_transfer($requester, $ptag, $manufacturer, $model, $recipient) {
    if (CAUSFA_SEND_EMAIL) {
		$headers = "MIME-Version: 1.0\n";
		$headers .= "Content-type: text/html; charset=iso-8859-1";
        $headers .= "From: InsideCAUS <caus+inside@vt.edu>" . "\r\n" . "Reply-To: InsideCAUS <caus+inside@vt.edu>" . "\r\n"; 
        $to = causfa_get_recipient_list($requester);
        $transferSubject = file_get_contents ( plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/emailTemplates/transfer-subject.txt', true);
        $transferSubject = str_replace('[EMPLOYEE_NAME]', causfa_email_get_name($requester), $transferSubject);
        $transferSubject = str_replace('[EMPLOYEE]', $requester, $transferSubject);
        $transferSubject = str_replace( '[PTAG]', $ptag, $transferSubject);
        $transferSubject = str_replace('[RECIPIENT_NAME]', causfa_email_get_name($recipient), $transferSubject);
        $transferSubject = str_replace( '[RECIPIENT]', $recipient, $transferSubject);
        $transferBody = file_get_contents ( plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/emailTemplates/transfer-body.html', true);
		$bodyText = causfa_email_get_name($requester) . " (" . $requester . ") is requesting an asset transfer to " . causfa_email_get_name($recipient) . " (" . $recipient . "). The asset is a " . $manufacturer . " " . $model . " with a tag number " . $ptag . "."; 
		$footerText = "Email generated on behalf of " . causfa_email_get_name($requester) . " (" . $requester . ") by the College of Architecture and Urban Studies (CAUS) Fixed Assets Application "; 
		$transferBody = str_replace( '[TransferBody]', $bodyText, $transferBody);
		$transferBody = str_replace( '[footer]', $footerText, $transferBody);
		$transferBody = str_replace( '[date]', date("D, m d, Y"), $transferBody);
		$transferDest_buttons = file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/emailTemplates/transfer-body-dest.html', true);
		$transferBody_dest = str_replace('[TransferDest]', $transferDest_buttons, $transferBody);
        $transferBody = str_replace('[TransferDest]','',$transferBody);
        mail(implode(',',$to), $transferSubject, $transferBody, $headers);
        mail($recipient.'@vt.edu,caus+fa@vt.edu', $transferSubject, $transferBody_dest, $headers);
    }
}

function causfa_email_transfer_update($action, $ptag) {
    if (CAUSFA_SEND_EMAIL) {
        global $wpdb;
        $result = $wpdb->get_row("SELECT * FROM causfa_pending where FZVFORG_PTAG = '".$ptag."';");
        $headers = "MIME-Version: 1.0\n";
        $headers .= "Content-type: text/html; charset=iso-8859-1";
        $to = causfa_get_recipient_list($result->PID_ORIGIN, $result->PID_DESTINATION);
        $transferSubject = file_get_contents ( plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/emailTemplates/transfer-subject.txt', true);
        $transferSubject = str_replace('[EMPLOYEE_NAME]', causfa_email_get_name($result->PID_ORIGIN), $transferSubject);
        $transferSubject = str_replace('[EMPLOYEE]', $result->PID_ORIGIN, $transferSubject);
        $transferSubject = str_replace( '[PTAG]', $ptag, $transferSubject);
        $transferSubject = str_replace('[RECIPIENT_NAME]', causfa_email_get_name($result->PID_DESTINATION), $transferSubject);
        $transferSubject = str_replace( '[RECIPIENT]', $result->PID_DESTINATION, $transferSubject);
        $transferBody = file_get_contents ( plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/emailTemplates/transfer-body.html', true);
        $bodyText = '';
        if ($action === 0) {
            //Accept transfer email
            $bodyText = 'This transfer was accepted by the recipient';
        } else {
            //Deny transfer email
            $bodyText = 'This transfer was rejected by the recipient';
        }
        $footerText = "Email generated on behalf of " . causfa_email_get_name($result->PID_DESTINATION) . " (" . $result->PID_DESTINATION . ") by the College of Architecture and Urban Studies (CAUS) Fixed Assets Application ";
        $transferBody = str_replace( '[TransferBody]', $bodyText, $transferBody);
        $transferBody = str_replace( '[footer]', $footerText, $transferBody);
        $transferBody = str_replace( '[date]', date("D, m d, Y"), $transferBody);
        $transferBody = str_replace('[TransferDest]','',$transferBody);
        $transferBody = $transferBody.'  '.print_r($to, true);
        mail(implode(',',$to), $transferSubject, $transferBody, $headers);
    }
}

function causfa_email_surplus($requester, $ptag, $manufacturer, $model) {
    if (CAUSFA_SEND_EMAIL) {
		$headers = "MIME-Version: 1.0\n";
		$headers .= "Content-type: text/html; charset=iso-8859-1";
        $to = causfa_get_recipient_list($requester);
        $surplusSubject = file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/emailTemplates/surplus-subject.txt', true);
        $surplusSubject = str_replace('[EMPLOYEE_NAME]', causfa_email_get_name($requester), $surplusSubject);
        $surplusSubject = str_replace('[EMPLOYEE]', $requester, $surplusSubject);
        $surplusSubject = str_replace( '[PTAG]', $ptag, $surplusSubject);
        $surplusBody = file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/emailTemplates/surplus-body.html', true);
		$bodyText = causfa_email_get_name($requester) . " (" . $requester . ") is requesting a surplus of a " . $manufacturer . " " . $model . " with a tag number of " . $ptag . "."; 
		$footerText = "Email generated on behalf of " . causfa_email_get_name($requester) . " (" . $requester . ") by the College of Architecture and Urban Studies (CAUS) Fixed Assets Application "; 
		$surplusBody = str_replace( '[surplusBody]', $bodyText, $surplusBody);
		$surplusBody = str_replace( '[footer]', $footerText, $surplusBody);
		$surplusBody = str_replace( '[date]', date("D, m d, Y"), $surplusBody);
        mail(implode(',', $to), $surplusSubject, $surplusBody, $headers);
    }
}

function causfa_email_transfer_change_admin($admin1, $admin2, $requester, $recipient, $ptag) {
    if (CAUSFA_SEND_EMAIL) {
        $headers = "MIME-Version: 1.0\n";
        $headers .= "Content-type: text/html; charset=iso-8859-1";
        $headers .= "From: InsideCAUS <caus+inside@vt.edu>" . "\r\n" . "Reply-To: InsideCAUS <caus+inside@vt.edu>" . "\r\n";
        $to = $admin1.'@vt.edu,'.$admin2.'@vt.edu';
        $transferSubject = file_get_contents ( plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/emailTemplates/transfer-subject.txt', true);
        $transferSubject = str_replace('[EMPLOYEE_NAME]', causfa_email_get_name($requester), $transferSubject);
        $transferSubject = str_replace('[EMPLOYEE]', $requester, $transferSubject);
        $transferSubject = str_replace( '[PTAG]', $ptag, $transferSubject);
        $transferSubject = str_replace('[RECIPIENT_NAME]', causfa_email_get_name($recipient), $transferSubject);
        $transferSubject = str_replace( '[RECIPIENT]', $recipient, $transferSubject);
        $transferBody = file_get_contents ( plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/emailTemplates/transfer-body.html', true);
        $bodyText = 'This ticket is being transferred from '.$admin1.' to '.$admin2;
        $footerText = "Email generated on behalf of " . causfa_email_get_name($requester) . " (" . $requester . ") by the College of Architecture and Urban Studies (CAUS) Fixed Assets Application ";
        $transferBody = str_replace( '[TransferBody]', $bodyText, $transferBody);
        $transferBody = str_replace( '[footer]', $footerText, $transferBody);
        $transferBody = str_replace( '[date]', date("D, m d, Y"), $transferBody);
        $transferBody = str_replace('[TransferDest]','',$transferBody);
        $transferBody = $transferBody.'  '.print_r($to, true);
        mail($to, $transferSubject, $transferBody, $headers);
    }
}

function causfa_email_problem($requester, $ptag, $problem) {
    if (CAUSFA_SEND_EMAIL) {
        $headers = "MIME-Version: 1.0\n";
        $headers .= "Content-type: text/html; charset=iso-8859-1";
        $to = causfa_get_recipient_list($requester);
        $ticketSubject = file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/emailTemplates/ticket-subject.txt', true);
        $ticketSubject = str_replace('[EMPLOYEE_NAME]', causfa_email_get_name($requester), $ticketSubject);
        $ticketSubject = str_replace('[EMPLOYEE]', $requester, $ticketSubject);
        $ticketSubject = str_replace( '[PTAG]', $ptag, $ticketSubject);
        $bodyText = causfa_email_get_name($requester)." (".$requester.") submitted a ticket for an asset with tag number ".$ptag.". The stated problem is - ".$problem;
        $footerText = "Email generated on behalf of " . causfa_email_get_name($requester) . " (" . $requester . ") by the College of Architecture and Urban Studies (CAUS) Fixed Assets Application ";
        $ticketBody = file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/emailTemplates/ticket-body.html', true);
        $ticketBody = str_replace( '[ticketBody]', $bodyText, $ticketBody);
        $ticketBody = str_replace( '[footer]', $footerText, $ticketBody);
        $ticketBody = str_replace( '[date]', date("D, m d, Y"), $ticketBody);
        mail(implode(',', $to), $ticketSubject, $ticketBody, $headers);
    }
}

function causfa_email_add_asset($requester, $ptag, $serial, $description) {
    if (CAUSFA_SEND_EMAIL) {
        $headers = "MIME-Version: 1.0\n";
        $headers .= "Content-type: text/html; charset=iso-8859-1";
        $to = causfa_get_recipient_list($requester);
        $ticketSubject = file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/emailTemplates/ticket-subject.txt', true);
        $ticketSubject = str_replace('[EMPLOYEE_NAME]', causfa_email_get_name($requester), $ticketSubject);
        $ticketSubject = str_replace('[EMPLOYEE]', $requester, $ticketSubject);
        $ticketSubject = str_replace( '[PTAG]', $ptag, $ticketSubject);
        $bodyText = causfa_email_get_name($requester)." (".$requester.") submitted a request to add an asset. The asset has the following information.";
        $bodyText .= "<br />PTAG: ".$ptag;
        $bodyText .= "<br />SERIAL: ".$serial;
        $bodyText .= "<br />DESCRIPTION: ".$description;
        $footerText = "Email generated on behalf of " . causfa_email_get_name($requester) . " (" . $requester . ") by the College of Architecture and Urban Studies (CAUS) Fixed Assets Application ";
        $ticketBody = file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/emailTemplates/ticket-body.html', true);
        $ticketBody = str_replace( '[ticketBody]', $bodyText, $ticketBody);
        $ticketBody = str_replace( '[footer]', $footerText, $ticketBody);
        $ticketBody = str_replace( '[date]', date("D, m d, Y"), $ticketBody);
        mail(implode(',', $to), $ticketSubject, $ticketBody, $headers);
    }
}

function causfa_email_to_spiceworks() {
    if (CAUSFA_SEND_EMAIL) {
        global $wpdb;
        $ptag = $_POST['ptag'];
        $admin_notes = $_POST['notes'];
        $result = $wpdb->get_row("SELECT * FROM causfa_tickets WHERE FZVFORG_PTAG = '".$ptag."'");
        $user = $wpdb->get_row('SELECT * FROM causfa_custodians WHERE PID = '.$result->PID_Submit.';');
        $to = 'caussupport@vt.edu';
        $subject = 'Ticket submitted on behalf of '.$user->Name.' ('.$result->PID_Submit.') through the Fixed Assets Application';
        $body = 'Tag: '.$ptag."\n\r";
        $body .= 'Description: '.$result->FZVFORG_DESCRIPTION."\n\r";
        $body .= 'Notes: '.$result->Notes."\r\n";
        $body .= 'Admin Notes: '.$admin_notes."\r\n";
        $body .= '#created by '.$result->PID_Submit.'@vt.edu';
        mail($to, $subject, $body);
    }
}

function causfa_get_recipient_list($requester, $recipient = null) {
    $to = array();
    if (!causfa_groups_is_admin($requester)) {
        $requester_FAL = causfa_groups_FAL($requester);
        $requester_BM = causfa_groups_BM($requester);
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
    } else {
        $to[] = $requester.'@vt.edu';
    }
    if ($recipient != null) {
        if (!causfa_groups_is_admin($recipient)) {
            $recipient_FAL = causfa_groups_FAL($recipient);
            $recipient_BM = causfa_groups_BM($recipient);
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
        } else {
            $to[] = $recipient.'@vt.edu';
        }
    }
    $to[] = 'caus+fa@vt.edu';
    return $to;
}
function causfa_email_get_name($PID) {
    $user = get_user_by('email', $PID.'@vt.edu');
    return $user->display_name;
}