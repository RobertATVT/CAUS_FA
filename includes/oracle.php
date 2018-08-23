<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 8/21/18
 * Time: 1:46 PM
 */
function causfa_test_oracle() {
    $output = "Let's connect to Oracle!";
    // Create connection to Oracle
    $PROD="(DESCRIPTION=(ADDRESS=(PROTOCOL=tcp)(PORT=1251)(HOST=prod-ha.db.vt.edu))(CONNECT_DATA=(UR=A)(SERVICE_NAME=PROD)))";
    $output = $output."  DB String is set yo!";
    $conn = oci_connect("FIN_FA_CAUS", "FdgfFcDsG_6NsLFpe_2m", $PROD);
    $output = $output."   DB Connection is Not made";
    if (!$conn) {
        $m = oci_error();
        $output = $output.$m['message']."\n";
        exit;
    }
    else {
        $output = $output."Connected to Oracle!";
    }

// Close the Oracle connection
    oci_close($conn);
    return $output;
}