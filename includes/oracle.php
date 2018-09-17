<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 8/21/18
 * Time: 1:46 PM
 */
include 'oracle_helper.php';

if (!session_id()) {
    session_start();
}

ini_set('max_execution_time', 0); // to get unlimited php script execution time

// Create connection to Oracle
$PROD="(DESCRIPTION=(ADDRESS=(PROTOCOL=tcp)(PORT=1251)(HOST=prod-ha.db.vt.edu))(CONNECT_DATA=(UR=A)(SERVICE_NAME=PROD)))";
$conn = oci_connect("FIN_FA_CAUS", "FdgfFcDsG_6NsLFpe_2m", $PROD);
if (!$conn) {
    $m = oci_error();
    $output = $m['message']."\n";
    exit;
} else {
    $query = "select * from BANINST1.FZVFORG order by FZVFORG_PTAG";
    $stid = oci_parse($conn, $query);
    $r = oci_execute($stid);
    $output = causfa_oracle_compare($stid);
}
// Close the Oracle connection
oci_close($conn);

$total = count($stid);
$count = 0;

global $wpdb;
$assets = $wpdb->get_results('SELECT * FROM causfa_banner ORDER BY FZVFORG_PTAG');
$output = 'never finding it';
while ($row = oci_fetch_array($stid, OCI_RETURN_NULLS+OCI_ASSOC)) {
    $found = false;
    for ($i = 0; $i < count($assets); $i++) {
        $found = false;
        if ($assets[$i]->FZVFORG_PTAG === $row['FZVFORG_PTAG']) {
            $output = causfa_oracle_compare_custodian($row, $assets[$i]);
            $output = $output . causfa_oracle_compare_location($row, $assets[$i]);
            $output = $output . causfa_oracle_compare_org($row, $assets[$i]);
            $output = $output . causfa_oracle_compare_ownership($row, $assets[$i]);
            array_splice($assets, $i, 1);
            $found = true;
        }
    }
    $count++;
    $percent = intval($count/$total * 100)."%";
    echo '<script>
    parent.document.getElementById("progressbar").innerHTML="<div style=\"width:'.$percent.';background:linear-gradient(to bottom, rgba(125,126,125,1) 0%,rgba(14,14,14,1) 100%); ;height:35px;\">&nbsp;</div>";
    parent.document.getElementById("FA_LoadPercent").innerHTML="'.$percent.'";</script>';

    ob_flush();
    flush();
}

session_destroy();