<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 9/17/18
 * Time: 6:20 PM
 */

function causfa_oracle_compare($stid) {
    global $wpdb;
    $assets = $wpdb->get_results('SELECT * FROM causfa_banner ORDER BY FZVFORG_PTAG');
    $output = 'never finding it';
    while ($row = oci_fetch_array($stid, OCI_RETURN_NULLS+OCI_ASSOC)) {
        $found = false;
        for($i = 0; $i < count($assets); $i++) {
            $found = false;
            if ($assets[$i]->FZVFORG_PTAG === $row['FZVFORG_PTAG']) {
                $output = causfa_oracle_compare_custodian($row, $assets[$i]);
                $output = $output.causfa_oracle_compare_location($row, $assets[$i]);
                $output = $output.causfa_oracle_compare_org($row, $assets[$i]);
                $output = $output.causfa_oracle_compare_ownership($row, $assets[$i]);
                array_splice($assets, $i, 1);
                $found = true;
            }
        }
        if (!$found) {
            //log exception / change report

        }
    }
    return $output;
}

function causfa_oracle_compare_custodian($oracle, $asset) {

}
function causfa_oracle_compare_location($oracle, $asset) {

}
function causfa_oracle_compare_org($oracle, $asset) {

}
function causfa_oracle_compare_ownership($oracle, $asset) {

}
