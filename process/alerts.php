<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 6/12/18
 * Time: 1:32 PM
 */
function causfa_alerts() {
    global $wpdb;
    $output = file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-alert-header.html', true);
    $PID = wp_get_current_user()->user_nicename;
    $results = $wpdb->get_results("SELECT * FROM causfa_pending WHERE PENDING_TYPE = 0 AND PENDING_STATUS = 0 AND PID_DESTINATION = '" . $PID . "';");
    for ($i = 0; $i < count($results); $i++) {
        $asset = $wpdb->get_row("SELECT * FROM causfa_banner WHERE FZVFORG_PTAG = '".$results[$i]->FZVFORG_PTAG."';");
        $alert = file_get_contents( plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-alert-item.html', true);
        $output = $output.$alert;
    }
    $output = $output.file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-alert-footer.html', true);
    return $output;
}