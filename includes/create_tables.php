<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 3/9/18
 * Time: 10:36 PM
 */

/**
 * This function checks for the existence of each of the tables required by the plugin and if they do not
 * exist then they are created
 */
function create_tables() {
    global $wpdb;
    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
    $table_name = 'causfa_banner';
    $charset_collate = $wpdb->get_charset_collate();
    if ($wpdb->get_var("SHOW TABLES LIKE '".$table_name."'") != $table_name) {
        $sql = "CREATE TABLE ".$table_name." (
        FZVFORG_OWNER varchar(2) NOT NULL,
        FZVFORG_ORGN_CODE varchar(6) NOT NULL,
        FZVFORG_ORGN_TITLE varchar(35) NOT NULL,
        FZVFORG_LOCN_CODE varchar(9) NOT NULL,
        FZVFORG_ROOM varchar(35) NOT NULL,
        FZVFORG_BLDG varchar(35) NOT NULL,
        FZVFORG_SORT_ROOM varchar(40) NOT NULL,
        FZVFORG_PTAG varchar(9) NOT NULL,
        FZVFORG_MANUFACTURER varchar(35) NOT NULL,
        FZVFORG_MODEL varchar(30) NOT NULL,
        FZVFORG_SERIAL_NUM varchar(40) NOT NULL,
        FZVFORG_DESCRIPTION varchar(60) NOT NULL,
        FZVFORG_CUSTODIAN varchar(4000) NOT NULL,
        FZVFORG_PO varchar(8) NOT NULL,
        FZVFORG_ACQ_DATE varchar(20) NOT NULL,
        FZVFORG_AMOUNT decimal(13,2) NOT NULL,
        FZVFORG_OWNERSHIP varchar(35) NOT NULL,
        FZVFORG_SCHEV_YEAR  varchar(2) NOT NULL,
        FZVFORG_TAG_TYPE varchar(6) NOT NULL,
        FZVFORG_ASSET_TYPE varchar(2) NOT NULL,
        FZVFORG_CONDITION varchar(10) NOT NULL,
        FZVFORG_ATYPE_TITLE varchar(20) NOT NULL,
        FZVFORG_LAST_INVENTORY_DATE varchar(30) NOT NULL,
        PRIMARY KEY  (FZVFORG_PTAG)
        ) ".$charset_collate.";";
        dbDelta( $sql );
    }
    $table_name = 'causfa_banner_missing';
    if ($wpdb->get_var("SHOW TABLES LIKE '".$table_name."'") != $table_name) {
        $sql = "CREATE TABLE ".$table_name." (
        FZVFORG_OWNER varchar(2) NOT NULL,
        FZVFORG_ORGN_CODE varchar(6) NOT NULL,
        FZVFORG_ORGN_TITLE varchar(35) NOT NULL,
        FZVFORG_LOCN_CODE varchar(9) NOT NULL,
        FZVFORG_ROOM varchar(35) NOT NULL,
        FZVFORG_BLDG varchar(35) NOT NULL,
        FZVFORG_SORT_ROOM varchar(40) NOT NULL,
        FZVFORG_PTAG varchar(9) NOT NULL,
        FZVFORG_MANUFACTURER varchar(35) NOT NULL,
        FZVFORG_MODEL varchar(30) NOT NULL,
        FZVFORG_SERIAL_NUM varchar(40) NOT NULL,
        FZVFORG_DESCRIPTION varchar(60) NOT NULL,
        FZVFORG_CUSTODIAN varchar(4000) NOT NULL,
        FZVFORG_PO varchar(8) NOT NULL,
        FZVFORG_ACQ_DATE varchar(20) NOT NULL,
        FZVFORG_AMOUNT decimal(13,2) NOT NULL,
        FZVFORG_OWNERSHIP varchar(35) NOT NULL,
        FZVFORG_SCHEV_YEAR  varchar(2) NOT NULL,
        FZVFORG_TAG_TYPE varchar(6) NOT NULL,
        FZVFORG_ASSET_TYPE varchar(2) NOT NULL,
        FZVFORG_CONDITION varchar(10) NOT NULL,
        FZVFORG_ATYPE_TITLE varchar(20) NOT NULL,
        FZVFORG_LAST_INVENTORY_DATE varchar(30) NOT NULL,
        PRIMARY KEY  (FZVFORG_PTAG)
        ) ".$charset_collate.";";
        dbDelta( $sql );
    }
    $table_name = 'causfa_forms';
    if ($wpdb->get_var("SHOW TABLES LIKE '".$table_name."'") != $table_name) {
        $sql = "CREATE TABLE ".$table_name." (
        FZVFORG_PTAG varchar(9) NOT NULL,
        OU_URL longtext NOT NULL,
        OU_DATE date NOT NULL,
        HU_URL longtext NOT NULL,
        HU_DATE date NOT NULL,
        PRIMARY KEY  (FZVFORG_PTAG)
        ) ".$charset_collate.";";
        dbDelta( $sql );
    }
    $table_name = 'causfa_forms_history';
    if ($wpdb->get_var("SHOW TABLES LIKE '".$table_name."'") != $table_name) {
        $sql = "CREATE TABLE ".$table_name." (
        FZVFORG_PTAG varchar(9) NOT NULL,
        OU_URL longtext NOT NULL,
        OU_DATE date NOT NULL,
        HU_URL longtext NOT NULL,
        HU_DATE date NOT NULL,
        PRIMARY KEY  (FZVFORG_PTAG)
        ) ".$charset_collate.";";
        dbDelta( $sql );
    }
    $table_name = 'causfa_gallery';
    if ($wpdb->get_var("SHOW TABLES LIKE '".$table_name."'") != $table_name) {
        $sql = "CREATE TABLE ".$table_name." (
        FZVFORG_PTAG varchar(9) NOT NULL,
        IMG_URL longtext NOT NULL,
        IMG_DESC longtext NOT NULL,
        IMG_DATE longtext NOT NULL,
        PRIMARY KEY  (FZVFORG_PTAG)
        ) ".$charset_collate.";";
        dbDelta($sql);
    }
    $table_name = 'causfa_pending';
    if ($wpdb->get_var("SHOW TABLES LIKE '".$table_name."'") != $table_name) {
        $sql = "CREATE TABLE ".$table_name." (
        FZVFORG_PTAG varchar(9) NOT NULL,
        FZVFORG_ORGN_CODE varchar(9) NOT NULL,
        PENDING_TYPE tinyint(1) NOT NULL,
        DATE_CREATED date NOT NULL,
        PID_ORIGIN varchar(32) NOT NULL,
        PID_DESTINATION varchar(32) NOT NULL,
        PENDING_STATUS tinyint(2) NOT NULL,
        ASSIGNEE varchar(32) NOT NULL,
        PRIMARY KEY  (FZVFORG_PTAG)
        ) ".$charset_collate.";";
        dbDelta($sql);
    }
    $table_name = 'causfa_custodians';
    if ($wpdb->get_var("SHOW TABLES LIKE '".$table_name."'") != $table_name) {
        $sql = "CREATE TABLE ".$table_name." (
        Name varchar(1000) NOT NULL,
        PID varchar(32) NOT NULL,
        Email varchar(39) NOT NULL,
        Building varchar(1000) NOT NULL,
        Office varchar(1000) NOT NULL,
        Phone varchar(13) NOT NULL,
        Org varchar(6) NOT NULL,
        PRIMARY KEY  (PID)
        ) ".$charset_collate.";";
        dbDelta($sql);
    }
    $table_name = 'causfa_logs';
    if ($wpdb->get_var("SHOW TABLES LIKE '".$table_name."'") != $table_name) {
        $sql = "CREATE TABLE ".$table_name." (
        ID INT NOT NULL AUTO_INCREMENT,
        TIMESTAMP TIMESTAMP NOT NULL,
        PID VARCHAR(32) NOT NULL,
        Action TINYINT NOT NULL,
        FZVFORG_PTAG varchar(9) NULL,
        PID_dest LONGTEXT NULL,
        Info LONGTEXT NULL, 
        PRIMARY KEY  (ID)
        ) ".$charset_collate.";";
        dbDelta($sql);
    }
    $table_name = 'causfa_tickets';
    if ($wpdb->get_var("SHOW TABLES LIKE '".$table_name."'") != $table_name) {
        $sql = "CREATE TABLE ".$table_name." (
        ID INT NOT NULL AUTO_INCREMENT,
        DATE_CREATED date NOT NULL,
        FZVFORG_ORGN_CODE varchar(9) NOT NULL,
        PID_Submit varchar(32) NOT NULL,
        PID_Assigned LONGTEXT NOT NULL,
        FZVFORG_PTAG varchar(9) NOT NULL,
        FZVFORG_SERIAL_NUM varchar(40),
        FZVFORG_DESCRIPTION varchar(1000),
        Notes LONGTEXT,
        Type tinyint,
        PRIMARY KEY (ID)
        )".$charset_collate.";";
        dbDelta($sql);
    }
    $table_name = 'causfa_alerts';
    if ($wpdb->get_var("SHOW TABLES LIKE '".$table_name."'") != $table_name) {
        $sql = "CREATE TABLE ".$table_name." (
        ID INT NOT NULL AUTO_INCREMENT,
        ORG varchar(32) NOT NULL,
        CREATION_DATE TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        EXP_DATE TIMESTAMP NOT NULL,
        CREATOR varchar(32) NOT NULL,
        PRIORITY INT NOT NULL,
        BODY LONGTEXT NOT NULL,
        PRIMARY KEY (ID)
        )".$charset_collate.";";
        dbDelta($sql);
    }
}