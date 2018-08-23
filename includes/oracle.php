<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 8/21/18
 * Time: 1:46 PM
 */
function causfa_oracle_full_org() {
    // Create connection to Oracle
    $PROD="(DESCRIPTION=(ADDRESS=(PROTOCOL=tcp)(PORT=1251)(HOST=prod-ha.db.vt.edu))(CONNECT_DATA=(UR=A)(SERVICE_NAME=PROD)))";
    $conn = oci_connect("FIN_FA_CAUS", "FdgfFcDsG_6NsLFpe_2m", $PROD);
    if (!$conn) {
        $m = oci_error();
        print $m['message']."\n";
        exit;
    }
    else {
        $query = "select * from BANINST1.FZVFORG WHERE FZVFORG_PTAG = '000390860'";
        $stid = oci_parse($conn, $query);
        $r = oci_execute($stid);
        causfa_oracle_compare($stid);
    }
// Close the Oracle connection
    oci_close($conn);
}

function causfa_oracle_compare($stid) {
    global $wpdb;
    $assets = $wpdb->get_results('SELECT * FROM causfa_banner');
    while ($row = oci_fetch_array($stid, OCI_RETURN_NULLS+OCI_ASSOC)) {
        print_r($row['FZVFORG_PTAG']);
        for($i = 0; $i < count($assets); $i++) {
            if ($assets[$i]['FZVFORG_PTAG'] === $row['FZVFORG_PTAG']) {
                print ('Found in database');
            }
        }
    }
}