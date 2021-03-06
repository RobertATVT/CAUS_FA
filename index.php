<?php
/**
 * Plugin Name: CAUS Fixed Assets Application
 * Description: Fixed Asset viewing and management application
 * Version: 1.0
 * Author: VT CAUS IT
 * Author URI: http://www.caus.vt.edu
 * Text Domain: CAUS Fixed Assets Application
 * License: GPL-2.0+
 * Licesne URI: http://www.gnu.org/licenses/gpl-2.0.txt
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

//Includes
include('includes/activate.php');
include('enqueue/enqueue.php');
include('includes/employee_asset_view.php');
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


//Hooks
add_action( 'wp_enqueue_scripts', 'causfa_enqueue', 100);
add_action( 'wp_login', 'causfa_logger_login', 100, 2);
register_activation_hook( __FILE__, 'causfa_activate_plugin' );
add_filter( 'causfa_header', 'causfa_filter_header', 10, 1);
add_filter( 'causfa_impact', 'causfa_filter_impact', 10, 4);
add_filter( 'causfa_asset_info', 'causfa_filter_asset_info', 10, 2);
add_action( 'wp_ajax_causfa_surplus', 'causfa_surplus');
add_action( 'wp_ajax_causfa_transfer_asset', 'causfa_transfer_asset');
add_action( 'wp_ajax_causfa_autocomplete_PID', 'causfa_autocomplete_PID');
add_action( 'wp_ajax_causfa_pending_action', 'causfa_pending_action');
add_action( 'wp_ajax_causfa_new_custodian', 'causfa_new_custodian');
add_action( 'wp_ajax_causfa_ajax_logger', 'causfa_ajax_logger');
add_action( 'wp_ajax_causfa_generate_form_Home', 'causfa_generate_form_Home');
add_action( 'wp_ajax_causfa_generate_form_Office', 'causfa_generate_form_Office');
add_action( 'wp_ajax_causfa_upload_image', 'causfa_upload_image');
add_action( 'wp_ajax_causfa_upload_form_home', 'causfa_upload_form_home');
add_action( 'wp_ajax_causfa_upload_form_office', 'causfa_upload_form_office');
add_action( 'wp_ajax_causfa_set_session', 'causfa_set_session');
add_action( 'wp_ajax_causfa_output_images', 'causfa_output_images');

//Shortcode
add_shortcode( 'causfa', 'causfa_load_employee_view'); //shortcode for the main page of the app
add_shortcode( 'causfa_test', 'causfa_groups_FAL'); //shortcode for a dev space to test functionality