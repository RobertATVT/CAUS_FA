<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 8/21/18
 * Time: 1:46 PM
 */

function casufa_oracle_org_report()
{
    ini_set('zlib.output_compression', 0);
    ini_set('implicit_flush', 1);
    ini_set('max_execution_time', 0); // to get unlimited php script execution time
    header('Content-Type: text/event-stream');
    // recommended to prevent caching of event data.
    header('Cache-Control: no-cache');
    ob_implicit_flush(1);
    send_message(-1,'START', 'Process Initiated');
    // Create connection to Oracle
    $PROD = "(DESCRIPTION=(ADDRESS=(PROTOCOL=tcp)(PORT=1251)(HOST=prod-ha.db.vt.edu))(CONNECT_DATA=(UR=A)(SERVICE_NAME=PROD)))";
    $conn = oci_connect("FIN_FA_CAUS", "FdgfFcDsG_6NsLFpe_2m", $PROD);
    if (!$conn) {
        $m = oci_error();
        $output = $m['message'] . "\n";
        exit;
    } else {
        $query = "select * from BANINST1.FZVFORG order by FZVFORG_PTAG";
        $stid = oci_parse($conn, $query);
        $r = oci_execute($stid);
        $output = causfa_oracle_compare($stid);
    }
    // Close the Oracle connection
    oci_close($conn);

    $total = oci_num_rows($stid);
    $count = 0;
    global $wpdb;
    $assets = $wpdb->get_results('SELECT * FROM causfa_banner ORDER BY FZVFORG_PTAG');
    while ($row = oci_fetch_array($stid, OCI_RETURN_NULLS + OCI_ASSOC)) {
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
        $percent = intval($count / $total * 100) . "%";
        send_message($row['FZVFORG_PTAG'], $found, $percent);
    }
    send_message(0,'CLOSE', 'Process complete');
}
function send_message($id, $message, $progress) {
    $d = array('message' => $message , 'progress' => $progress);
    echo "id: $id" . PHP_EOL;
    echo "data: " . json_encode($d) . PHP_EOL;
    echo PHP_EOL;
    echo str_repeat(' ',1024*64);
}
function causfa_oracle_compare_custodian($oracle, $asset) {

}
function causfa_oracle_compare_location($oracle, $asset) {

}
function causfa_oracle_compare_org($oracle, $asset) {

}
function causfa_oracle_compare_ownership($oracle, $asset) {

}
