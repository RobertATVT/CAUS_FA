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
    $table_name = 'causfa_banner';
    $charset_collate = $wpdb->get_charset_collate();
    if ($wpdb->get_var("SHOW TABLES LIKE '".$table_name."'") != $table_name) {
        $sql = "CREATE TABLE ".$table_name." (
        FZVFORG_OWNER varchar(2),
        FZVFORG_ORGN_CODE varchar(6),
        FZVFORG_ORGN_TITLE varchar(35),
        FZVFORG_LOCN_CODE varchar(9),
        FZVFORG_ROOM varchar(35),
        FZVFORG_BLDG varchar(35),
        FZVFORG_SORT_ROOM varchar(40),
        FZVFORG_PTAG varchar(9),
        FZVFORG_MANUFACTURER varchar(35),
        FZVFORG_MODEL varchar(30),
        FZVFORG_SERIAL_NUM varchar(40),
        FZVFORG_DESCRIPTION varchar(60),
        FZVFORG_CUSTODIAN varchar(4000),
        FZVFORG_PO varchar(8),
        FZVFORG_ACQ_DATE varchar(20),
        FZVFORG_AMOUNT decimal(13,2),
        FZVFORG_OWNERSHIP varchar(35),
        FZVFORG_SCHEV_YEAR  varchar(2),
        FZVFORG_TAG_TYPE varchar(6),
        FZVFORG_ASSET_TYPE varchar(2),
        FZVFORG_CONDITION varchar(10),
        FZVFORG_ATYPE_TITLE varchar(20),
        FZVFORG_LAST_INVENTORY_DATE varchar(30),
        PRIMARY KEY (FZVFORG_PTAG)
        ) ".$charset_collate.";";
        require_once ( ABSPATH . 'wp-admin/includes/upgrade.php' );
        dbDelta( $sql );
    }
    $table_name = 'causfa_banner_missing';
    if ($wpdb->get_var("SHOW TABLES LIKE '".$table_name."'") != $table_name) {
        $sql = "CREATE TABLE ".$table_name." (
        FZVFORG_OWNER varchar(2),
        FZVFORG_ORGN_CODE varchar(6),
        FZVFORG_ORGN_TITLE varchar(35),
        FZVFORG_LOCN_CODE varchar(9),
        FZVFORG_ROOM varchar(35),
        FZVFORG_BLDG varchar(35),
        FZVFORG_SORT_ROOM varchar(40),
        FZVFORG_PTAG varchar(9),
        FZVFORG_MANUFACTURER varchar(35),
        FZVFORG_MODEL varchar(30),
        FZVFORG_SERIAL_NUM varchar(40),
        FZVFORG_DESCRIPTION varchar(60),
        FZVFORG_CUSTODIAN varchar(4000),
        FZVFORG_PO varchar(8),
        FZVFORG_ACQ_DATE varchar(20),
        FZVFORG_AMOUNT decimal(13,2),
        FZVFORG_OWNERSHIP varchar(35),
        FZVFORG_SCHEV_YEAR  varchar(2),
        FZVFORG_TAG_TYPE varchar(6),
        FZVFORG_ASSET_TYPE varchar(2),
        FZVFORG_CONDITION varchar(10),
        FZVFORG_ATYPE_TITLE varchar(20),
        FZVFORG_LAST_INVENTORY_DATE varchar(30),
        PRIMARY KEY (FZVFORG_PTAG)
        ) ".$charset_collate.";";
        require_once ( ABSPATH . 'wp-admin/includes/upgrade.php' );
        dbDelta( $sql );
    }
    $table_name = 'causfa_forms';
    if ($wpdb->get_var("SHOW TABLES LIKE '".$table_name."'") != $table_name) {
        $sql = "CREATE TABLE ".$table_name." (
        FZVFORG_PTAG varchar(9),
        OU_URL longtext,
        OU_DATE date,
        HU_URL longtext,
        HU_DATE date,
        PRIMARY KEY (FZVFORG_PTAG)
        ) ".$charset_collate.";";
        dbDelta( $sql );
    }
    $table_name = 'causfa_forms_history';
    if ($wpdb->get_var("SHOW TABLES LIKE '".$table_name."'") != $table_name) {
        $sql = "CREATE TABLE ".$table_name." (
        FZVFORG_PTAG varchar(9),
        OU_URL longtext,
        OU_DATE date,
        HU_URL longtext,
        HU_DATE date,
        PRIMARY KEY (FZVFORG_PTAG)
        ) ".$charset_collate.";";
        dbDelta( $sql );
    }
    $table_name = 'causfa_gallery';
    if ($wpdb->get_var("SHOW TABLES LIKE '".$table_name."'") != $table_name) {
        $sql = "CREATE TABLE ".$table_name." (
        FZVFORG_PTAG varchar(9),
        IMG_URL longtext,
        IMG_DESC longtext,
        IMG_DATE longtext,
        PRIMARY KEY (FZVFORG_PTAG)
        ) ".$charset_collate.";";
        dbDelta($sql);
    }
    $table_name = 'causfa_pending';
    if ($wpdb->get_var("SHOW TABLES LIKE '".$table_name."'") != $table_name) {
        $sql = "CREATE TABLE ".$table_name." (
        FZVFORG_PTAG varchar(9),
        FZVFORG_ORGN_CODE varchar(9),
        PENDING_TYPE tinyint(1),
        DATE_CREATED date,
        PID_ORIGIN varchar(32),
        PID_DESTINATION varchar(32),
        PENDING_STATUS tinyint(2),
        PRIMARY KEY (FZVFORG_PTAG)
        ) ".$charset_collate.";";
        dbDelta($sql);
    }
    $table_name = 'causfa_custodian';
    if ($wpdb->get_car("SHOW TABLE LIKE '".$table_name."'") != $table_name) {
        $sql = "CREATE TABLE ".$table_name." (
        Name varchar(1000,
        PID varchar(32),
        Email varchar(39),
        Office varchar(1000),
        Phone varchar(13)
        PRIMARY KEY (PID)
        ) ".$charset_collate.";";
        dbDelta($sql);
    }
}