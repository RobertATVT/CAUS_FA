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


//Hooks
add_action( 'wp_enqueue_scripts', 'causfa_enqueue', 100);
add_action( 'wp_login', 'causfa_logger_login', 100, 2);
register_activation_hook( __FILE__, 'causfa_activate_plugin' );
add_filter( 'causfa_employee_info', 'causfa_filter_employee_info', 10, 1);
add_filter( 'causfa_employee_asset_info', 'causfa_filter_employee_asset_info', 10, 2);
add_filter( 'causfa_employee_asset_total', 'causfa_filter_employee_asset_total', 10, 2);
add_action( 'wp_ajax_causfa_surplus', 'causfa_surplus');
add_action( 'wp_ajax_causfa_transfer_asset', 'causfa_transfer_asset');
add_action( 'wp_ajax_causfa_autocomplete_PID', 'causfa_autocomplete_PID');
add_action( 'wp_ajax_causfa_pending_action', 'causfa_pending_action');
add_action( 'wp_ajax_causfa_new_custodian', 'causfa_new_custodian');
add_action( 'wp_ajax_causfa_ajax_logger', 'causfa_ajax_logger');
add_action( 'wp_ajax_causfa_generate_form_Home', 'causfa_generate_form_Home');
add_action( 'wp_ajax_causfa_generate_form_Office', 'causfa_generate_form_Office');

//Shortcode
add_shortcode( 'causfa', 'causfa_load_employee_view'); //shortcode for the main page of the app
add_shortcode( 'causfa_test', 'causfa_generate_form_Home'); //shortcode for a dev space to test functionality