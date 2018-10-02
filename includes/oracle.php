<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 8/21/18
 * Time: 1:46 PM
 */

/**
 * Occurrence Codes
 * 0 - Found in banner not in local
 * 1 - Found in local not in banner
 * 2 - Unexpected change
 * 3 - Incomplete Action
 */
/**
 * Change Codes
 * 0 - Custodian
 * 1 - Location
 * 2 - Org
 */
function casufa_oracle_org_report()
{
    ini_set('zlib.output_compression', 0);
    ini_set('implicit_flush', 1);
    ini_set('max_execution_time', 0); // to get unlimited php script execution time
    header('Content-Type: text/event-stream');
    // recommended to prevent caching of event data.
    //header('Cache-Control: no-cache');
    ob_implicit_flush(1);
    send_message(-1,'START', 'Process Initiated');
    // Create connection to Oracle
    $PROD = "(DESCRIPTION=(ADDRESS=(PROTOCOL=tcp)(PORT=1521)(HOST=prod.db.vt.edu))(CONNECT_DATA=(UR=A)(SERVICE_NAME=PROD_SVC)))";
    $conn = oci_connect("FIN_FA_CAUS", "FdgfFcDsG_6NsLFpe_2m", $PROD);
    if (!$conn) {
        $m = oci_error();
        $output = $m['message'] . "\n";
        exit;
    } else {
        $query = "select * from BANINST1.FZVFORG where not regexp_like(trim(fzvforg_asset_type), '^[0-9]') AND (fzvforg_amount >= '2000' OR fzvforg_schev_year is not null) order by FZVFORG_PTAG";
        $stid = oci_parse($conn, $query);
        $r = oci_execute($stid);
        oci_fetch_all($stid, $oracle_assets, 0, -1, OCI_FETCHSTATEMENT_BY_ROW);
        oci_close($conn);
        causfa_oracle_compare($oracle_assets);
    }
}
function send_message($id, $message, $progress) {
    $d = array('message' => $message , 'progress' => $progress);
    echo "id: $id" . PHP_EOL;
    echo "data: " . json_encode($d) . PHP_EOL;
    echo PHP_EOL;
    echo str_repeat(' ',1024*64);
}
function causfa_oracle_compare($oracle) {
    $count = 0;
    $total = count($oracle);
    global $wpdb;
    $assets = $wpdb->get_results('SELECT * FROM causfa_banner ORDER BY FZVFORG_PTAG');
    $total_local = count($assets);
    $exceptions_list = array();
    foreach ($oracle as $key => $row) {
        $found = false;
        for ($i = 0; $i < count($assets); $i++) {
            $found = false;
            if ($assets[$i]->FZVFORG_PTAG == $row['FZVFORG_PTAG']) {
                $result = causfa_oracle_compare_custodian($row, $assets[$i]);
                if ($result !== null) {
                    array_push($exceptions_list, $result);
                }
                $result = causfa_oracle_compare_location($row, $assets[$i]);
                if ($result !== null) {
                    array_push($exceptions_list, $result);
                }
                $result = causfa_oracle_compare_org($row, $assets[$i]);
                if ($result !== null) {
                    array_push($exceptions_list, $result);
                }
                $result = causfa_oracle_compare_ownership($row, $assets[$i]);
                if ($result !== null) {
                    array_push($exceptions_list, $result);
                }
                array_splice($assets, $i, 1);
                array_splice($oracle, $key, 1);
                $found = true;
                break;
            }
        }
        if (!$found) {
            $entry = array(
                'FZVFORG_PTAG' => $row['FZVFORG_PTAG'],
                'OCCURRENCE_CODE' => 0
            );
            array_push($exceptions_list, $entry);
            array_splice($oracle, $key, 1);
        }
        $count++;
        $percent = intval(($count / $total) * 100) . "%";
        $found_text = ($found ? 'found in local database': 'not found in local database');
        send_message($row['FZVFORG_PTAG'], $count. ' of '.$total. " was ".$found_text, $percent);
    }
    send_message(0,'CLOSE', 'Process complete');
    $wpdb->insert(
        'causfa_exception_reports',
        array(
            'TOTAL_BANNER' => $total,
            'TOTAL_LOCAL' => $total_local,
            'EXCEPTIONS' => $exceptions_list
        )
    );
}
function causfa_oracle_compare_custodian($oracle, $asset) {
    global $wpdb;
    if ($oracle['FZVFORG_CUSTODIAN'] !== $asset->FZVFORG_CUSTODIAN) {
        $result = $wpdb->get_row("SELECT * FROM causfa_pending WHERE FZVFORG_PTAG = '".$oracle['FZVFORG_PTAG']."';");
        if($result === null) {
            return array (
                'FZVFORG_PTAG' => $asset->FZVFORG_PTAG,
                'OCCURRENCE_CODE' => 2,
                'CHANGE_CODE' => 0,
                'OLD_VALUE' => $asset->FZVFORG_CUSTODIAN,
                'NEW_VALUE' => $oracle->FZVFORG_CUSTODIAN
            );
        } else {
            if ($result->PENDING_TYPE === 0 ) {
                if ($result->PENDING_STATUS !== 7) {
                    return array (
                        'FZVFORG_PTAG' => $result->FZVFORG_PTAG,
                        'OCCURRENCE_CODE' => 3,
                        'CHANGE_CODE' => 0,
                        'PENDING_TYPE' => 0,
                        'OLD_VALUE' => $asset->FZVFORG_CUSTODIAN,
                        'NEW_VALUE' => $oracle->FZVFORG_CUSTODIAN
                    );
                } else {
                    return null;
                }
            } else {
                if ($result->PENDING_STATUS !== 5) {
                    return array (
                        'FZVFORG_PTAG' => $result->FZVFORG_CUSTODIAN,
                        'OCCURRENCE_CODE' => 3,
                        'CHANGE_CODE' => 0,
                        'PENDING_TYPE' => 1,
                        'OLD_VALUE' => $asset->FZVFORG_CUSTODIAN,
                        'NEW_VALUE' => $oracle->FZVFORG_CUSTODIAN
                    );
                } else {
                    return null;
                }
            }
        }
    } else {
        return null;
    }
}
function causfa_oracle_compare_location($oracle, $asset) {
    return '';
}
function causfa_oracle_compare_org($oracle, $asset) {
    return '';
}
function causfa_oracle_compare_ownership($oracle, $asset) {
    return '';
}
