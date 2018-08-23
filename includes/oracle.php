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
        $output = $m['message']."\n";
        exit;
    }
    else {
        $output ="Connected to Oracle!";
    }

// Close the Oracle connection
    oci_close($conn);
    return $output;
}