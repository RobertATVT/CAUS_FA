<?php
/**
 * Plugin Name: CAUS Fixed Assets Application
 * Description: Fixed Asset viewing and management application
 * Version: 0.90
 * Author: VT CAUS IT
 * Author URI: http://www.caus.vt.edu
 * Text Domain: CAUS Fixed Assets Application
 * License: GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */ 

//checks if WordPress exists
if( !function_exists( 'add_action')) {
    die();
}
if (!session_id()) {
    session_start();
}

//Setup
define( 'CAUSFA_PLUGIN_URL', __FILE__);
define( 'CAUSFA_SEND_EMAIL', true);

//Includes
include('includes/activate.php');
include('enqueue/enqueue.php');
include('includes/asset_view.php');
include('process/filter-content.php');
include('includes/groups.php');
include('includes/create_tables.php');
include('process/surplus.php');
include('process/transfer.php');
include('includes/autocomplete.php');
include('process/pending_action.php');
include('process/new_custodian.php');
include('process/generate_form.php');
include('process/logger.php');
include('includes/file_upload.php');
include('process/set_session.php');
include('process/DBSerialize.php');
include('process/retrieveForms.php');
include('process/add_ticket.php');
include('includes/email.php');
include('process/alerts.php');
include('process/notes.php');
include('includes/oracle.php');
include('includes/progressbar.php');

//Hooks
add_action( 'admin_menu', 'causfa_admin_menu' );
add_action( 'admin_enqueue_scripts', 'causfa_admin_enqueue');
add_action( 'wp_enqueue_scripts', 'causfa_enqueue', 100);
add_action( 'wp_login', 'causfa_logger_login', 100, 2);
register_activation_hook( __FILE__, 'causfa_activate_plugin' );
add_filter( 'causfa_header', 'causfa_filter_header', 10, 1);
add_filter( 'causfa_impact', 'causfa_filter_impact', 10, 6);
add_filter( 'causfa_asset_info', 'causfa_filter_asset_info', 10, 2);
add_action( 'wp_ajax_causfa_surplus', 'causfa_surplus');
add_action( 'wp_ajax_causfa_transfer_asset', 'causfa_transfer_asset');
add_action( 'wp_ajax_causfa_bulk_transfer_asset', 'causfa_bulk_transfer_asset');
add_action( 'wp_ajax_causfa_bulk_surplus_asset', 'causfa_bulk_surplus');
add_action( 'wp_ajax_causfa_autocomplete_PID', 'causfa_autocomplete_PID');
add_action( 'wp_ajax_causfa_pending_action', 'causfa_pending_action');
add_action( 'wp_ajax_causfa_new_custodian', 'causfa_new_custodian');
add_action( 'wp_ajax_causfa_ajax_logger', 'causfa_ajax_logger');
add_action( 'wp_ajax_causfa_form_fill_data', 'causfa_form_fill_data');
add_action( 'wp_ajax_causfa_upload_image', 'causfa_upload_image');
add_action( 'wp_ajax_causfa_upload_form_home', 'causfa_upload_form_home');
add_action( 'wp_ajax_causfa_upload_form_office', 'causfa_upload_form_office');
add_action( 'wp_ajax_causfa_set_session', 'causfa_set_session');
add_action( 'wp_ajax_causfa_output_images', 'causfa_output_images');
add_action( 'wp_ajax_causfa_get_last_form', 'causfa_get_last_form');
add_action( 'wp_ajax_causfa_add_ticket', 'causfa_add_ticket');
add_action( 'wp_ajax_causfa_get_custodian', 'causfa_get_custodian');
add_action( 'wp_ajax_causfa_accept_reject', 'causfa_accept_reject');
add_action( 'wp_ajax_causfa_update_transfer', 'causfa_update_transfer');
add_action( 'wp_ajax_causfa_update_surplus', 'causfa_update_surplus');
add_action( 'wp_ajax_causfa_surplus_to_transfer', 'causfa_surplus_to_transfer');
add_action( 'wp_ajax_causfa_upload_surplus_form', 'causfa_upload_surplus_form');
add_action( 'wp_ajax_causfa_add_note', 'causfa_add_note');
add_action( 'wp_ajax_causfa_update_from_banner', 'causfa_oracle_full_org');
add_action( 'wp_ajax_causfa_email_to_spiceworks', 'causfa_email_to_spiceworks');
add_action( 'wp_ajax_causfa_close_ticket', 'causfa_close_ticket');
add_action( 'wp_ajax_causfa_eula', 'causfa_eula');
add_action( 'rest_api_init', function () {
    register_rest_route( 'causfa/v1', '/progressbar', array(
        'methods' => 'GET',
        'callback' => 'causfa_progressbar'
    ) );
});
add_action( 'rest_api_init', function () {
    register_rest_route( 'causfa/v1', '/oracle', array(
        'methods' => 'GET',
        'callback' => 'casufa_oracle_org_report'
    ) );
});

//Shortcode
add_shortcode( 'causfa', 'causfa_load_employee_view'); //shortcode for the main page of the app
//add_shortcode( 'causfa_test', 'causfa_oracle_full_org'); //shortcode for a dev space to test functionality
add_shortcode( 'causfa_admin', 'causfa_load_admin_view'); // shortcode for the admin page of the app
