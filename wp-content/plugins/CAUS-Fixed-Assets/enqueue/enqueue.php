<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 3/7/18
 * Time: 9:16 AM
 * This file enqueues all css styles and javascript scripts that are used by the plugin
 */


function causfa_enqueue() {

    //Styles
    wp_register_style('causfa_bootstrap', plugins_url( 'assets/css/bootstrap.css', CAUSFA_PLUGIN_URL));
    wp_register_style('caus_bootstrap_style', plugins_url('assets/css/style.css', CAUSFA_PLUGIN_URL));

    wp_enqueue_style('causfa_bootstrap');
    wp_enqueue_style('caus_bootstrap_style');

    //Scripts
    wp_register_script('causfa_bootstrap_script', plugins_url( 'assets/js/bootstrap.js', CAUSFA_PLUGIN_URL), array(), false, true);
    wp_register_script('causfa_toggle', plugins_url( 'assets/js/toggle.js', CAUSFA_PLUGIN_URL), array(), false, true);
    wp_register_script('causfa_modal', plugins_url('assets/js/modal.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
    wp_register_script('causfa_main', plugins_url('assets/js/main.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
    wp_register_script('causfa_autocomplete', plugins_url('assets/js/autocomplete.js', CAUSFA_PLUGIN_URL), array(), false, true);

    wp_enqueue_script('jquery');
    wp_enqueue_script('causfa_toggle');
    wp_enqueue_script('causfa_bootstrap_script');
    wp_enqueue_script('causfa_modal');
    wp_enqueue_script('causfa_main');
    wp_enqueue_script('causfa_autocomplete');


    //This line creates a causfa_action_obj object that passes the ajax url to the front end scripts
    wp_localize_script('causfa_main', 'causfa_action_obj', array(
        'ajax_url' => admin_url('admin-ajax.php')
    ));

}

