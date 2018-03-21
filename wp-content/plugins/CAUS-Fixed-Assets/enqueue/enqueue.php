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
    wp_register_style('caus_bootstrap', plugins_url( 'assets/css/bootstrap.css', CAUSFA_PLUGIN_URL));
    wp_register_style('caus_bootstrap_style', plugins_url('assets/css/style.css', CAUSFA_PLUGIN_URL));
    wp_register_style('caus_bootstrap_style4', plugins_url('assets/css/style4.css', CAUSFA_PLUGIN_URL));
    wp_register_style('caus_materialize_style', plugins_url('assets/css/materialize.min.css', CAUSFA_PLUGIN_URL));
    wp_register_style('caus_material_icons_style', 'https://fonts.googleapis.com/icon?family=Material+Icons');
    wp_register_style('caus_purecss_style', 'https://unpkg.com/purecss@1.0.0/build/pure-min.css');
    wp_register_style('caus_animate_style', 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css');

    wp_enqueue_style('caus_bootstrap');
    wp_enqueue_style('caus_bootstrap_style');
    wp_enqueue_style('caus_bootstrap_style4');
    wp_enqueue_style('caus_meterialize_style');
    wp_enqueue_style('caus_meterial_icons_style');
    wp_enqueue_style('caus_purecss_style');
    wp_enqueue_style('caus_animate_style');

    //Scripts
    wp_register_script('caus_bootstrap_script', plugins_url( 'assets/js/bootstrap.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
    wp_register_script('caus_toggle', plugins_url( 'assets/js/toggle.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
    wp_register_script('caus_modal', plugins_url('assets/js/modal.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
    wp_register_script('caus_main', plugins_url('assets/js/main.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
    wp_register_script('caus_autocomplete', plugins_url('assets/js/autocomplete.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
    wp_register_script('caus_materialize', plugins_url('assets/js/materialize.min.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
    wp_register_script('caus_SideNav', plugins_url('assets/js/sidenav.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);

    wp_enqueue_script('jquery');
    wp_enqueue_script('caus_toggle');
    wp_enqueue_script('caus_bootstrap_script');
    wp_enqueue_script('caus_modal');
    wp_enqueue_script('caus_main');
    wp_enqueue_script('caus_autocomplete');
    wp_enqueue_script('caus_materialize');
    wp_enqueue_script('caus_sidenav');


    //This line creates a causfa_action_obj object that passes the ajax url to the front end scripts
    wp_localize_script('causfa_main', 'causfa_action_obj', array(
        'ajax_url' => admin_url('admin-ajax.php')
    ));

}

