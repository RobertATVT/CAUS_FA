<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 3/7/18
 * Time: 9:16 AM
 */


function causfa_enqueue() {

    //Styles
    wp_register_style('causfa_bootstrap', plugins_url( 'assets/css/bootstrap.css', CAUSFA_PLUGIN_URL));
    wp_register_style('causfa_custom', plugins_url('assets/css/custom.css', CAUSFA_PLUGIN_URL));
    wp_register_style('caus_bootstrap_style', plugins_url('assets/css/style.css', CAUSFA_PLUGIN_URL));

    wp_enqueue_style('causfa_bootstrap');
    wp_enqueue_style('causfa_custom');
    wp_enqueue_style('caus_bootstrap_style');

    //Scripts
    wp_register_script('causfa_bootstrap_script', plugins_url( 'assets/js/bootstrap.js', CAUSFA_PLUGIN_URL), array(), false, true);
    wp_register_script('causfa_toggle', plugins_url( 'assets/js/toggle.js', CAUSFA_PLUGIN_URL), array(), false, true);

    wp_enqueue_script('jquery');
    wp_enqueue_script('causfa_toggle');
    wp_enqueue_script('causfa_bootstrap_script');

}

