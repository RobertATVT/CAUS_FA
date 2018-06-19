<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 6/12/18
 * Time: 1:32 PM
 */
function causfa_alerts() {
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
            $alert = str_replace('[Issuer]', $person->Name, $alert);
            $alert = str_replace('[PTAG]', $results[$i]->FZVFORG_PTAG, $alert);
            $alert = str_replace('[DESCRIPTION]', $asset->FZVFORG_DESCRIPTION, $alert);
            $output = $output.$alert;
        }
        $output = $output.file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-employee-alert-footer.html', true);
    }
    return $output;
}