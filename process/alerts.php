<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 6/12/18
 * Time: 1:32 PM
 */
function causfa_asset_alerts() {
    global $wpdb;
    $output = '';
    $PID = wp_get_current_user()->user_nicename;
    $results = $wpdb->get_results("SELECT * FROM causfa_pending WHERE PENDING_TYPE = 0 AND PENDING_STATUS = 0 AND PID_DESTINATION = '" . $PID . "';");
    if (count($results) !== 0) {
        $output = $output.file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-employee-alert-header.html', true);
        for ($i = 0; $i < count($results); $i++) {
            $asset = $wpdb->get_row("SELECT * FROM causfa_banner WHERE FZVFORG_PTAG = '".$results[$i]->FZVFORG_PTAG."';");
            $person = $wpdb->get_row("SELECT * FROM causfa_custodians WHERE PID ='".$results[$i]->PID_ORIGIN."';");
            $alert = file_get_contents( plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-employee-alert-item.html', true);
            $alert = str_replace('[ID]', $i, $alert);
            $alert = str_replace('[ISSUER]', $person->Name, $alert);
            $alert = str_replace('[PTAG]', $results[$i]->FZVFORG_PTAG, $alert);
            $alert = str_replace('[DESCRIPTION]', $asset->FZVFORG_DESCRIPTION, $alert);
            $output = $output.$alert;
        }
        $output = $output.file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-employee-alert-footer.html', true);
    }
    return $output;
}

function causfa_general_alerts() {
    global $wpdb;
    $output = '';
    $PID = wp_get_current_user()->user_nicename;
    $org = causfa_groups_management_code();
    $results = $wpdb->get_results("SELECT * FROM causfa_alerts;");
    if (count($results) !== 0) {
        $alerts = '';
        $count = 0;
        for ($i = 0; $i < count($results); $i++) {
            $alert_found = false;
            if($results[$i]->ORG === 'S02') {
                $alert_found = true;
                $count++;
                //CAUS wide alert
            } else if ($results[$i]->ORG === $org) {
                $alert_found = true;
                $count++;
                // ORG alert
            } else if ($results[$i]->ORG === $PID) {
                $alert_found = true;
                $count++;
                // Specific person alert
            }
            if ($alert_found === true) {
                $alert = file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-employee-general-item.html', true);
                switch($results[$i]->PRIORITY) {
                    case 1:
                        $alert = str_replace('alert-normal', 'alert-low', $alert);
                        break;
                    case 2:
                        $alert = str_replace('alert-normal', 'alert-medium', $alert);
                        break;
                    case 3:
                        $alert = str_replace('alert-normal', 'alert-high', $alert);
                        break;
                }
                $alert = str_replace('[ORG]', $results[$i]->ORG, $alert);
                $alert = str_replace('[EXPIRATION]', $results[$i]->EXP_DATE, $alert);
                $alert = str_replace('[ISSUER]', $results[$i]->CREATOR, $alert);
                $alert = str_replace('[MESSAGE]', $results[$i]->BODY, $alert);
                $alerts .=$alert;
            }
        }
        if ($count !== 0) {
            $output = $output.file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-employee-general-header.html', true);
            $output = $output.$alerts;
            $output = $output.file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-employee-general-footer.html', true);
        }
        return $output;
    }
}