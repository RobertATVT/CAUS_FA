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
    //wp_register_style('causfa_bootstrap', plugins_url( 'assets/css/bootstrap.css', CAUSFA_PLUGIN_URL));
    //wp_register_style('causfa_bootstrap_style', plugins_url('assets/css/style.css', CAUSFA_PLUGIN_URL));
    //wp_register_style('causfa_animate_style', 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css');
    wp_register_style('causfa_materialize_style', plugins_url('assets/css/materialize.css', CAUSFA_PLUGIN_URL));
    wp_register_style('causfa_material_icons', 'https://fonts.googleapis.com/icon?family=Material+Icons');
    wp_register_style('causfa_flexslider', plugins_url('assets/css/flexslider.css', CAUSFA_PLUGIN_URL));
    wp_register_style('causfa_style3', plugins_url('assets/css/style3.css', CAUSFA_PLUGIN_URL));
    //wp_register_style('causfa_style4', plugins_url('assets/css/style4.css', CAUSFA_PLUGIN_URL));
    wp_register_style('causfa_paradox', plugins_url('assets/css/paradox.css', CAUSFA_PLUGIN_URL));
    wp_register_style('causfa_slick', plugins_url('assets/slick/slick.css', CAUSFA_PLUGIN_URL));
    //wp_register_style('causfa_slick_theme', plugins_url('assets/slick/slick-theme.css', CAUSFA_PLUGIN_URL));

    //wp_enqueue_style('causfa_bootstrap');
    //wp_enqueue_style('causfa_bootstrap_style');
    //wp_enqueue_style('causfa_animate_style');
    wp_enqueue_style('causfa_materialize_style');
    wp_enqueue_style('causfa_material_icons');
    wp_enqueue_style('causfa_flexslider');
    wp_enqueue_style('causfa_style3');
    //wp_enqueue_style('causfa_style4');
    wp_enqueue_style('causfa_paradox');
    wp_enqueue_style('causfa_slick');
    //wp_enqueue_style('causfa_slick_theme');

    //Scripts
    //wp_register_script('causfa_bootstrap_script', plugins_url( 'assets/js/bootstrap.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
    wp_register_script('causfa_modal', plugins_url('assets/js/modal.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
    wp_register_script('causfa_toggle', plugins_url( 'assets/js/toggle.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
    wp_register_script('causfa_main', plugins_url('assets/js/main.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
    wp_register_script('causfa_sidenav', plugins_url('assets/js/sidenav.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
    wp_register_script('causfa_autocomplete', plugins_url('assets/js/autocomplete.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
    wp_register_script('causfa_materialize', plugins_url('assets/js/materialize.min.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
    wp_register_script('causfa_flexslider_script', plugins_url('assets/js/jquery.flexslider.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
    wp_register_script('causfa_tippy_script', 'https://unpkg.com/tippy.js@2.4.1/dist/tippy.all.min.js', array('jquery'), false, true);
    wp_register_script('causfa_font_awesome_script', 'https://use.fontawesome.com/releases/v5.0.8/js/all.js', array('jquery'), false, true);
    wp_register_script('causfa_slick_script', plugins_url('assets/slick/slick.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);

    wp_enqueue_script('jquery');
    //wp_enqueue_script('causfa_bootstrap_script');
    wp_enqueue_script('causfa_modal');
    wp_enqueue_script('causfa_toggle');
    wp_enqueue_script('causfa_main');
    wp_enqueue_script('causfa_sidenav');
    wp_enqueue_script('causfa_autocomplete');
    wp_enqueue_script('causfa_materialize');
    wp_enqueue_script('causfa_flexslider_script');
    wp_enqueue_script('causfa_tippy_script');
    wp_enqueue_script('causfa_font_awesome_script');
    wp_enqueue_script('causfa_slick_script');


    //This line creates a causfa_action_obj object that passes the ajax url to the front end scripts
    wp_localize_script('causfa_main', 'causfa_action_obj', array(
        'ajax_url' => admin_url('admin-ajax.php')
    ));

}

