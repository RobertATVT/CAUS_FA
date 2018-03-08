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


//Hooks
add_action( 'wp_enqueue_scripts', 'causfa_enqueue');
register_activation_hook( __FILE__, 'causfa_activate_plugin' );
add_filter( 'causfa_employee_info', 'causfa_filter_employee_info', 10, 1);
add_filter( 'causfa_employee_asset_info', 'causfa_filter_employee_asset_info', 10, 1);
add_filter( 'causfa_employee_asset_total', 'causfa_filter_employee_asset_total', 10, 1);

//Shortcode
add_shortcode( 'causfa', 'causfa_load_employee_view');