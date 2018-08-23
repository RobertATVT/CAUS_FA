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
// Fetch each row in an associative array
        print '<table border="1">';
        while ($row = oci_fetch_array($stid, OCI_RETURN_NULLS+OCI_ASSOC)) {
            print '<tr>';
            foreach ($row as $item) {
                print '<td>'.($item !== null ? htmlentities($item, ENT_QUOTES) : '&nbsp').'</td>';
            }
            print '</tr>';
        }
        print '</table>';

    }

// Close the Oracle connection
    oci_close($conn);
}