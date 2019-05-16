<?php


function causfa_get_report() {
    global $wpdb;
    $type = $_POST['type'];
    $result = '';
    $name = '';
    switch ($type) {
        case 0:
            $result = causfa_indv_asset_report($_POST['input']);
            break;
        case 1:
            $input = $_POST['input'];
            $userID = $wpdb->get_var("SELECT ID FROM ".$wpdb->base_prefix."users WHERE user_nicename = '".$input."'");
            $lastname = $wpdb->get_var("SELECT meta_value FROM ".$wpdb->base_prefix."usermeta WHERE meta_key = 'last_name' AND user_id =".$userID.";");
            $firstname = $wpdb->get_var("SELECT meta_value FROM ".$wpdb->base_prefix."usermeta WHERE meta_key = 'first_name' AND user_id =".$userID.";");
            $name = $lastname.', '.explode(" ", $firstname)[0];
            $result = causfa_indv_employee_report($name);
            
            break;
        case 2:
            $result = causfa_indv_location_report($_POST['input'], $_POST['input2']);
            break;
        case 3:
            $result = causfa_org_report($_POST['input']);
            break;
        case 4:
            $result = causfa_missing_report($_POST['input']);
            break;
    }
    $header = file_get_contents( plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-wpadmin-indv-report-header.html', true);
    $footer = file_get_contents( plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-wpadmin-indv-report-footer.html', true);
    $output = array (
        'status' => 1,
        'report' => ($header.$result.$footer),
        'name' => $name
    );
    wp_send_json($output);
}
function causfa_indv_asset_report($ptag) {
    global $wpdb;
    $result = $wpdb->get_row("SELECT * FROM causfa_banner WHERE FZVFORG_PTAG = '".$ptag."'");
    $output = '';
    $filler = file_get_contents( plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-wpadmin-indv-report-fill.html', true);
    $item = str_replace("[ID]", "0", $filler);
    $item = str_replace("[VT TAG]", $result->FZVFORG_PTAG, $item);
    $item = str_replace("[S/N]", $result->FZVFORG_SERIAL_NUM, $item);
    $item = str_replace("[MANUFACTURER]", $result->FZVFORG_MANUFACTURER, $item);
    $item = str_replace("[DESCRIPTION]", $result->FZVFORG_DESCRIPTION, $item);
    $item = str_replace("[VALUE]", $result->FZVFORG_AMOUNT, $item);
    $item = str_replace("[VT SCAN]", $result->FZVFORG_LAST_INVENTORY_DATE, $item);
    $item = str_replace("[PURCHASED]", $result->FZVFORG_ACQ_DATE, $item);
    $item = str_replace("[CUSTODIAN]", $result->FZVFORG_CUSTODIAN, $item);
    $item = str_replace("[ROOM]", $result->FZVFORG_ROOM, $item);
    $item = str_replace("[BLDG]", $result->FZVFORG_BLDG, $item);
    $item = str_replace("[PO]", $result->FZVFORG_PO, $item);
    $item = str_replace("[COND]", $result->FZVFORG_CONDITION, $item);
    $item = str_replace("[OWNERSHIP]", $result->FZVFORG_OWNERSHIP, $item);
    $item = str_replace("[ORGANIZATION]", $result->FZVFORG_ORGN_TITLE, $item);
    if ($result->PENDING_STATUS == 0) {
        switch ($result->STATUS) {
            case 0:
                break;
            case 1:
                $item = str_replace( '[STATUS]', 'Missing', $item);
                $item = str_replace('asset-status', 'asset-status asset-missing', $item);
                $missing = true;
                $item = str_replace('transferModalRequested', 'modalRequestedOnMissingAsset', $item);
                $item = str_replace('surplusModalRequested', 'modalRequestedOnMissingAsset', $item);
                break;
            case 2:
                $item = str_replace( '[STATUS]', 'Missing Reconciled', $item);
                $item = str_replace('asset-status', 'asset-status asset-missing-recon', $item);
                $item = str_replace('transferModalRequested', 'modalRequestedOnMissingAsset', $item);
                $item = str_replace('surplusModalRequested', 'modalRequestedOnMissingAsset', $item);
                break;
            case 3:
                $item = str_replace('[STATUS]', 'Office Use', $item);
                $item= str_replace('asset-status', 'asset-status asset-office', $item);
                break;
            case 4:
                $item = str_replace('[STATUS]', 'Office Use*', $item);
                $item= str_replace('asset-status', 'asset-status asset-office', $item);
                break;
            case 5:
                $item= str_replace('[STATUS]', 'Home Use', $item);
                $item= str_replace('asset-status', 'asset-status asset-home', $item);
                break;
            case 6:
                $item= str_replace('[STATUS]', 'Home Use*', $item);
                $item= str_replace('asset-status', 'asset-status asset-home', $item);
                break;
        }
    } else {
       switch ($result->PENDING_STATUS) {
           case 1:
               $item = str_replace( '[STATUS]', 'Pending Transfer', $item);
               $item = str_replace( 'value="asset-select-0"', 'value="asset-select-0" disabled="disabled"', $item);
               $item = str_replace('asset-status', 'asset-status asset-pending', $item);
               $item = str_replace('transferModalRequested', 'modalRequestedOnPendingAsset', $item);
               $item = str_replace('surplusModalRequested', 'modalRequestedOnPendingAsset', $item);
               break;
           case 2:
               $item = str_replace( '[STATUS]', 'Pending Surplus', $item);
               $item = str_replace( 'value="asset-select-0"', 'value="asset-select-0" disabled="disabled"', $item);
               $item = str_replace('asset-status', 'asset-status asset-pending', $item);
               $item = str_replace('transferModalRequested', 'modalRequestedOnPendingAsset', $item);
               $item = str_replace('surplusModalRequested', 'modalRequestedOnPendingAsset', $item);
               break;
           case 3:
               $item = str_replace('[STATUS]', 'Pending Ticket', $item);
               $item = str_replace('asset-status', 'asset-status asset-pending', $item);
               $item = str_replace( 'value="asset-select-0"', 'value="asset-select-0" disabled="disabled"', $item);
                $item = str_replace('transferModalRequested', 'modalRequestedOnPendingAsset', $item);
               $item = str_replace('surplusModalRequested', 'modalRequestedOnPendingAsset', $item);
               $item = str_replace('ticketModalRequested', 'modalRequestedOnPendingAsset', $item);
               break;
       }
    }
    return $item;
}
function causfa_indv_employee_report($name) {
    global $wpdb;
    $results = $wpdb->get_results("SELECT * FROM causfa_banner WHERE FZVFORG_CUSTODIAN = '".$name."'");
    $output = '';
    $filler = file_get_contents( plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-wpadmin-indv-report-fill.html', true);
    for ($i = 0; $i < count($results); $i++) {
        $result = $results[$i];
        $item = str_replace("[ID]", $i, $filler);
        $item = str_replace("[VT TAG]", $result->FZVFORG_PTAG, $item);
        $item = str_replace("[S/N]", $result->FZVFORG_SERIAL_NUM, $item);
        $item = str_replace("[MANUFACTURER]", $result->FZVFORG_MANUFACTURER, $item);
        $item = str_replace("[DESCRIPTION]", $result->FZVFORG_DESCRIPTION, $item);
        $item = str_replace("[VALUE]", $result->FZVFORG_AMOUNT, $item);
        $item = str_replace("[VT SCAN]", $result->FZVFORG_LAST_INVENTORY_DATE, $item);
        $item = str_replace("[PURCHASED]", $result->FZVFORG_ACQ_DATE, $item);
        $item = str_replace("[CUSTODIAN]", $result->FZVFORG_CUSTODIAN, $item);
        $item = str_replace("[ROOM]", $result->FZVFORG_ROOM, $item);
        $item = str_replace("[BLDG]", $result->FZVFORG_BLDG, $item);
        $item = str_replace("[PO]", $result->FZVFORG_PO, $item);
        $item = str_replace("[COND]", $result->FZVFORG_CONDITION, $item);
        $item = str_replace("[OWNERSHIP]", $result->FZVFORG_OWNERSHIP, $item);
        $item = str_replace("[ORGANIZATION]", $result->FZVFORG_ORGN_TITLE, $item);
        if ($result->PENDING_STATUS == 0) {
            switch ($result->STATUS) {
                case 0:
                    break;
                case 1:
                    $item = str_replace( '[STATUS]', 'Missing', $item);
                    $item = str_replace('asset-status', 'asset-status asset-missing', $item);
                    $missing = true;
                    $item = str_replace('transferModalRequested', 'modalRequestedOnMissingAsset', $item);
                    $item = str_replace('surplusModalRequested', 'modalRequestedOnMissingAsset', $item);
                    break;
                case 2:
                    $item = str_replace( '[STATUS]', 'Missing Reconciled', $item);
                    $item = str_replace('asset-status', 'asset-status asset-missing-recon', $item);
                    $item = str_replace('transferModalRequested', 'modalRequestedOnMissingAsset', $item);
                    $item = str_replace('surplusModalRequested', 'modalRequestedOnMissingAsset', $item);
                    break;
                case 3:
                    $item = str_replace('[STATUS]', 'Office Use', $item);
                    $item= str_replace('asset-status', 'asset-status asset-office', $item);
                    break;
                case 4:
                    $item = str_replace('[STATUS]', 'Office Use*', $item);
                    $item= str_replace('asset-status', 'asset-status asset-office', $item);
                    break;
                case 5:
                    $item= str_replace('[STATUS]', 'Home Use', $item);
                    $item= str_replace('asset-status', 'asset-status asset-home', $item);
                    break;
                case 6:
                    $item= str_replace('[STATUS]', 'Home Use*', $item);
                    $item= str_replace('asset-status', 'asset-status asset-home', $item);
                    break;
            }
        } else {
           switch ($result->PENDING_STATUS) {
               case 1:
                   $item = str_replace( '[STATUS]', 'Pending Transfer', $item);
                   $item = str_replace( 'value="asset-select-'.$i.'"', 'value="asset-select-'.$i.'" disabled="disabled"', $item);
                   $item = str_replace('asset-status', 'asset-status asset-pending', $item);
                   $item = str_replace('transferModalRequested', 'modalRequestedOnPendingAsset', $item);
                   $item = str_replace('surplusModalRequested', 'modalRequestedOnPendingAsset', $item);
                   break;
               case 2:
                   $item = str_replace( '[STATUS]', 'Pending Surplus', $item);
                   $item = str_replace( 'value="asset-select-'.$i.'"', 'value="asset-select-'.$i.'" disabled="disabled"', $item);
                   $item = str_replace('asset-status', 'asset-status asset-pending', $item);
                   $item = str_replace('transferModalRequested', 'modalRequestedOnPendingAsset', $item);
                   $item = str_replace('surplusModalRequested', 'modalRequestedOnPendingAsset', $item);
                   break;
               case 3:
                   $item = str_replace('[STATUS]', 'Pending Ticket', $item);
                   $item = str_replace('asset-status', 'asset-status asset-pending', $item);
                   $item = str_replace( 'value="asset-select-'.$i.'"', 'value="asset-select-'.$i.'" disabled="disabled"', $item);
                    $item = str_replace('transferModalRequested', 'modalRequestedOnPendingAsset', $item);
                   $item = str_replace('surplusModalRequested', 'modalRequestedOnPendingAsset', $item);
                   $item = str_replace('ticketModalRequested', 'modalRequestedOnPendingAsset', $item);
                   break;
           }
        }
        $output = $output.$item;
    }
    
    return $output;
}
function causfa_indv_location_report($bldg, $room) {
    global $wpdb;
    if ($room == '') {
        $results = $wpdb->get_results("SELECT * FROM causfa_banner WHERE FZVFORG_BLDG = '".$bldg."'"); 
    } else {
        $results = $wpdb->get_results("SELECT * FROM causfa_banner WHERE FZVFORG_BLDG = '".$bldg."' AND FZVFORG_ROOM = ".$room);
    }
    $output = '';
    $filler = file_get_contents( plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-wpadmin-indv-report-fill.html', true);
    for ($i = 0; $i < count($results); $i++) {
        $result = $results[$i];
        $item = str_replace("[ID]", $i, $filler);
        $item = str_replace("[VT TAG]", $result->FZVFORG_PTAG, $item);
        $item = str_replace("[S/N]", $result->FZVFORG_SERIAL_NUM, $item);
        $item = str_replace("[MANUFACTURER]", $result->FZVFORG_MANUFACTURER, $item);
        $item = str_replace("[DESCRIPTION]", $result->FZVFORG_DESCRIPTION, $item);
        $item = str_replace("[VALUE]", $result->FZVFORG_AMOUNT, $item);
        $item = str_replace("[VT SCAN]", $result->FZVFORG_LAST_INVENTORY_DATE, $item);
        $item = str_replace("[PURCHASED]", $result->FZVFORG_ACQ_DATE, $item);
        $item = str_replace("[CUSTODIAN]", $result->FZVFORG_CUSTODIAN, $item);
        $item = str_replace("[ROOM]", $result->FZVFORG_ROOM, $item);
        $item = str_replace("[BLDG]", $result->FZVFORG_BLDG, $item);
        $item = str_replace("[PO]", $result->FZVFORG_PO, $item);
        $item = str_replace("[COND]", $result->FZVFORG_CONDITION, $item);
        $item = str_replace("[OWNERSHIP]", $result->FZVFORG_OWNERSHIP, $item);
        $item = str_replace("[ORGANIZATION]", $result->FZVFORG_ORGN_TITLE, $item);
        if ($result->PENDING_STATUS == 0) {
            switch ($result->STATUS) {
                case 0:
                    break;
                case 1:
                    $item = str_replace( '[STATUS]', 'Missing', $item);
                    $item = str_replace('asset-status', 'asset-status asset-missing', $item);
                    $missing = true;
                    $item = str_replace('transferModalRequested', 'modalRequestedOnMissingAsset', $item);
                    $item = str_replace('surplusModalRequested', 'modalRequestedOnMissingAsset', $item);
                    break;
                case 2:
                    $item = str_replace( '[STATUS]', 'Missing Reconciled', $item);
                    $item = str_replace('asset-status', 'asset-status asset-missing-recon', $item);
                    $item = str_replace('transferModalRequested', 'modalRequestedOnMissingAsset', $item);
                    $item = str_replace('surplusModalRequested', 'modalRequestedOnMissingAsset', $item);
                    break;
                case 3:
                    $item = str_replace('[STATUS]', 'Office Use', $item);
                    $item= str_replace('asset-status', 'asset-status asset-office', $item);
                    break;
                case 4:
                    $item = str_replace('[STATUS]', 'Office Use*', $item);
                    $item= str_replace('asset-status', 'asset-status asset-office', $item);
                    break;
                case 5:
                    $item= str_replace('[STATUS]', 'Home Use', $item);
                    $item= str_replace('asset-status', 'asset-status asset-home', $item);
                    break;
                case 6:
                    $item= str_replace('[STATUS]', 'Home Use*', $item);
                    $item= str_replace('asset-status', 'asset-status asset-home', $item);
                    break;
            }
        } else {
           switch ($result->PENDING_STATUS) {
               case 1:
                   $item = str_replace( '[STATUS]', 'Pending Transfer', $item);
                   $item = str_replace( 'value="asset-select-'.$i.'"', 'value="asset-select-'.$i.'" disabled="disabled"', $item);
                   $item = str_replace('asset-status', 'asset-status asset-pending', $item);
                   $item = str_replace('transferModalRequested', 'modalRequestedOnPendingAsset', $item);
                   $item = str_replace('surplusModalRequested', 'modalRequestedOnPendingAsset', $item);
                   break;
               case 2:
                   $item = str_replace( '[STATUS]', 'Pending Surplus', $item);
                   $item = str_replace( 'value="asset-select-'.$i.'"', 'value="asset-select-'.$i.'" disabled="disabled"', $item);
                   $item = str_replace('asset-status', 'asset-status asset-pending', $item);
                   $item = str_replace('transferModalRequested', 'modalRequestedOnPendingAsset', $item);
                   $item = str_replace('surplusModalRequested', 'modalRequestedOnPendingAsset', $item);
                   break;
               case 3:
                   $item = str_replace('[STATUS]', 'Pending Ticket', $item);
                   $item = str_replace('asset-status', 'asset-status asset-pending', $item);
                   $item = str_replace( 'value="asset-select-'.$i.'"', 'value="asset-select-'.$i.'" disabled="disabled"', $item);
                    $item = str_replace('transferModalRequested', 'modalRequestedOnPendingAsset', $item);
                   $item = str_replace('surplusModalRequested', 'modalRequestedOnPendingAsset', $item);
                   $item = str_replace('ticketModalRequested', 'modalRequestedOnPendingAsset', $item);
                   break;
           }
        }
        $output = $output.$item;
    }
    
    return $output;
}
function causfa_org_report($org) {
    global $wpdb;
    $results = $wpdb->get_results("SELECT * FROM causfa_banner WHERE FZVFORG_ORGN_CODE = ".$org);
    $output = '';
    $filler = file_get_contents( plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-wpadmin-indv-report-fill.html', true);
    for ($i = 0; $i < count($results); $i++) {
        $result = $results[$i];
        $item = str_replace("[ID]", $i, $filler);
        $item = str_replace("[VT TAG]", $result->FZVFORG_PTAG, $item);
        $item = str_replace("[S/N]", $result->FZVFORG_SERIAL_NUM, $item);
        $item = str_replace("[MANUFACTURER]", $result->FZVFORG_MANUFACTURER, $item);
        $item = str_replace("[DESCRIPTION]", $result->FZVFORG_DESCRIPTION, $item);
        $item = str_replace("[VALUE]", $result->FZVFORG_AMOUNT, $item);
        $item = str_replace("[VT SCAN]", $result->FZVFORG_LAST_INVENTORY_DATE, $item);
        $item = str_replace("[PURCHASED]", $result->FZVFORG_ACQ_DATE, $item);
        $item = str_replace("[CUSTODIAN]", $result->FZVFORG_CUSTODIAN, $item);
        $item = str_replace("[ROOM]", $result->FZVFORG_ROOM, $item);
        $item = str_replace("[BLDG]", $result->FZVFORG_BLDG, $item);
        $item = str_replace("[PO]", $result->FZVFORG_PO, $item);
        $item = str_replace("[COND]", $result->FZVFORG_CONDITION, $item);
        $item = str_replace("[OWNERSHIP]", $result->FZVFORG_OWNERSHIP, $item);
        $item = str_replace("[ORGANIZATION]", $result->FZVFORG_ORGN_TITLE, $item);
        if ($result->PENDING_STATUS == 0) {
            switch ($result->STATUS) {
                case 0:
                    break;
                case 1:
                    $item = str_replace( '[STATUS]', 'Missing', $item);
                    $item = str_replace('asset-status', 'asset-status asset-missing', $item);
                    $missing = true;
                    $item = str_replace('transferModalRequested', 'modalRequestedOnMissingAsset', $item);
                    $item = str_replace('surplusModalRequested', 'modalRequestedOnMissingAsset', $item);
                    break;
                case 2:
                    $item = str_replace( '[STATUS]', 'Missing Reconciled', $item);
                    $item = str_replace('asset-status', 'asset-status asset-missing-recon', $item);
                    $item = str_replace('transferModalRequested', 'modalRequestedOnMissingAsset', $item);
                    $item = str_replace('surplusModalRequested', 'modalRequestedOnMissingAsset', $item);
                    break;
                case 3:
                    $item = str_replace('[STATUS]', 'Office Use', $item);
                    $item= str_replace('asset-status', 'asset-status asset-office', $item);
                    break;
                case 4:
                    $item = str_replace('[STATUS]', 'Office Use*', $item);
                    $item= str_replace('asset-status', 'asset-status asset-office', $item);
                    break;
                case 5:
                    $item= str_replace('[STATUS]', 'Home Use', $item);
                    $item= str_replace('asset-status', 'asset-status asset-home', $item);
                    break;
                case 6:
                    $item= str_replace('[STATUS]', 'Home Use*', $item);
                    $item= str_replace('asset-status', 'asset-status asset-home', $item);
                    break;
            }
        } else {
           switch ($result->PENDING_STATUS) {
               case 1:
                   $item = str_replace( '[STATUS]', 'Pending Transfer', $item);
                   $item = str_replace( 'value="asset-select-'.$i.'"', 'value="asset-select-'.$i.'" disabled="disabled"', $item);
                   $item = str_replace('asset-status', 'asset-status asset-pending', $item);
                   $item = str_replace('transferModalRequested', 'modalRequestedOnPendingAsset', $item);
                   $item = str_replace('surplusModalRequested', 'modalRequestedOnPendingAsset', $item);
                   break;
               case 2:
                   $item = str_replace( '[STATUS]', 'Pending Surplus', $item);
                   $item = str_replace( 'value="asset-select-'.$i.'"', 'value="asset-select-'.$i.'" disabled="disabled"', $item);
                   $item = str_replace('asset-status', 'asset-status asset-pending', $item);
                   $item = str_replace('transferModalRequested', 'modalRequestedOnPendingAsset', $item);
                   $item = str_replace('surplusModalRequested', 'modalRequestedOnPendingAsset', $item);
                   break;
               case 3:
                   $item = str_replace('[STATUS]', 'Pending Ticket', $item);
                   $item = str_replace('asset-status', 'asset-status asset-pending', $item);
                   $item = str_replace( 'value="asset-select-'.$i.'"', 'value="asset-select-'.$i.'" disabled="disabled"', $item);
                    $item = str_replace('transferModalRequested', 'modalRequestedOnPendingAsset', $item);
                   $item = str_replace('surplusModalRequested', 'modalRequestedOnPendingAsset', $item);
                   $item = str_replace('ticketModalRequested', 'modalRequestedOnPendingAsset', $item);
                   break;
           }
        }
        $output = $output.$item;
    }
    
    return $output;
}
function causfa_missing_report($org) {
    global $wpdb;
    $results = $wpdb->get_results("SELECT * FROM causfa_banner WHERE (Status = 1 OR Status = 2) AND FZVFORG_ORGN_CODE = ".$org);
    $output = '';
    $filler = file_get_contents( plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/html/faa-wpadmin-indv-report-fill.html', true);
    for ($i = 0; $i < count($results); $i++) {
        $result = $results[$i];
        $item = str_replace("[ID]", $i, $filler);
        $item = str_replace("[VT TAG]", $result->FZVFORG_PTAG, $item);
        $item = str_replace("[S/N]", $result->FZVFORG_SERIAL_NUM, $item);
        $item = str_replace("[MANUFACTURER]", $result->FZVFORG_MANUFACTURER, $item);
        $item = str_replace("[DESCRIPTION]", $result->FZVFORG_DESCRIPTION, $item);
        $item = str_replace("[VALUE]", $result->FZVFORG_AMOUNT, $item);
        $item = str_replace("[VT SCAN]", $result->FZVFORG_LAST_INVENTORY_DATE, $item);
        $item = str_replace("[PURCHASED]", $result->FZVFORG_ACQ_DATE, $item);
        $item = str_replace("[CUSTODIAN]", $result->FZVFORG_CUSTODIAN, $item);
        $item = str_replace("[ROOM]", $result->FZVFORG_ROOM, $item);
        $item = str_replace("[BLDG]", $result->FZVFORG_BLDG, $item);
        $item = str_replace("[PO]", $result->FZVFORG_PO, $item);
        $item = str_replace("[COND]", $result->FZVFORG_CONDITION, $item);
        $item = str_replace("[OWNERSHIP]", $result->FZVFORG_OWNERSHIP, $item);
        $item = str_replace("[ORGANIZATION]", $result->FZVFORG_ORGN_TITLE, $item);
        if ($result->PENDING_STATUS == 0) {
            switch ($result->STATUS) {
                case 0:
                    break;
                case 1:
                    $item = str_replace( '[STATUS]', 'Missing', $item);
                    $item = str_replace('asset-status', 'asset-status asset-missing', $item);
                    $missing = true;
                    $item = str_replace('transferModalRequested', 'modalRequestedOnMissingAsset', $item);
                    $item = str_replace('surplusModalRequested', 'modalRequestedOnMissingAsset', $item);
                    break;
                case 2:
                    $item = str_replace( '[STATUS]', 'Missing Reconciled', $item);
                    $item = str_replace('asset-status', 'asset-status asset-missing-recon', $item);
                    $item = str_replace('transferModalRequested', 'modalRequestedOnMissingAsset', $item);
                    $item = str_replace('surplusModalRequested', 'modalRequestedOnMissingAsset', $item);
                    break;
                case 3:
                    $item = str_replace('[STATUS]', 'Office Use', $item);
                    $item= str_replace('asset-status', 'asset-status asset-office', $item);
                    break;
                case 4:
                    $item = str_replace('[STATUS]', 'Office Use*', $item);
                    $item= str_replace('asset-status', 'asset-status asset-office', $item);
                    break;
                case 5:
                    $item= str_replace('[STATUS]', 'Home Use', $item);
                    $item= str_replace('asset-status', 'asset-status asset-home', $item);
                    break;
                case 6:
                    $item= str_replace('[STATUS]', 'Home Use*', $item);
                    $item= str_replace('asset-status', 'asset-status asset-home', $item);
                    break;
            }
        } else {
           switch ($result->PENDING_STATUS) {
               case 1:
                   $item = str_replace( '[STATUS]', 'Pending Transfer', $item);
                   $item = str_replace( 'value="asset-select-'.$i.'"', 'value="asset-select-'.$i.'" disabled="disabled"', $item);
                   $item = str_replace('asset-status', 'asset-status asset-pending', $item);
                   $item = str_replace('transferModalRequested', 'modalRequestedOnPendingAsset', $item);
                   $item = str_replace('surplusModalRequested', 'modalRequestedOnPendingAsset', $item);
                   break;
               case 2:
                   $item = str_replace( '[STATUS]', 'Pending Surplus', $item);
                   $item = str_replace( 'value="asset-select-'.$i.'"', 'value="asset-select-'.$i.'" disabled="disabled"', $item);
                   $item = str_replace('asset-status', 'asset-status asset-pending', $item);
                   $item = str_replace('transferModalRequested', 'modalRequestedOnPendingAsset', $item);
                   $item = str_replace('surplusModalRequested', 'modalRequestedOnPendingAsset', $item);
                   break;
               case 3:
                   $item = str_replace('[STATUS]', 'Pending Ticket', $item);
                   $item = str_replace('asset-status', 'asset-status asset-pending', $item);
                   $item = str_replace( 'value="asset-select-'.$i.'"', 'value="asset-select-'.$i.'" disabled="disabled"', $item);
                    $item = str_replace('transferModalRequested', 'modalRequestedOnPendingAsset', $item);
                   $item = str_replace('surplusModalRequested', 'modalRequestedOnPendingAsset', $item);
                   $item = str_replace('ticketModalRequested', 'modalRequestedOnPendingAsset', $item);
                   break;
           }
        }
        $output = $output.$item;
    }
    
    return $output;
}

function causfa_report_data() {
    global $wpdb;
    $type = $_POST['type'];
    $input1 = $_POST['input1'];
    $input2 = $_POST['input2'];
    switch ($type) {
        case 0:
            $result = $wpdb->get_row("SELECT * FROM causfa_banner WHERE FZVFORG_PTAG = '".$input1."'");
            break;
        case 1:
            $results = $wpdb->get_results("SELECT * FROM causfa_banner WHERE FZVFORG_CUSTODIAN = '".$input1."'");
            break;
        case 2:
            if ($room == '') {
                $results = $wpdb->get_results("SELECT * FROM causfa_banner WHERE FZVFORG_BLDG = '".$$input1."'"); 
            } else {
                $results = $wpdb->get_results("SELECT * FROM causfa_banner WHERE FZVFORG_BLDG = '".$input1."' AND FZVFORG_ROOM = ".$input2);
            }
            break;
        case 3:
            $results = $wpdb->get_results("SELECT * FROM causfa_banner WHERE FZVFORG_ORGN_CODE = ".$input1);
            break;
        case 4:
            $results = $wpdb->get_results("SELECT * FROM causfa_banner WHERE (Status = 1 OR Status = 2) AND FZVFORG_ORGN_CODE = ".$input1);
            break;
    }
    $output = array(
        'status'=>1,
        'data'=>$results
    );
    wp_send_json($output);
    
}