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
    wp_register_style('causfa_materialize_style', plugins_url('assets/css/materialize.css', CAUSFA_PLUGIN_URL));
    wp_register_style('causfa_material_icons', 'https://fonts.googleapis.com/icon?family=Material+Icons');
    wp_register_style('causfa_style', plugins_url('assets/css/style.css', CAUSFA_PLUGIN_URL));
    wp_register_style('causfa_paradox', plugins_url('assets/css/paradox.css', CAUSFA_PLUGIN_URL));
    wp_register_style('causfa_slick', plugins_url('assets/slick/slick.css', CAUSFA_PLUGIN_URL));
	wp_register_style('causfa_awesomplete', plugins_url('assets/css/awesomplete.css', CAUSFA_PLUGIN_URL));

    wp_enqueue_style('causfa_materialize_style');
    wp_enqueue_style('causfa_material_icons');
    wp_enqueue_style('causfa_style');
    wp_enqueue_style('causfa_paradox');
    wp_enqueue_style('causfa_slick');
	wp_enqueue_style('causfa_awesomplete');

    //Scripts
    wp_register_script('causfa_modal', plugins_url('assets/js/modal.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
    wp_register_script('causfa_admin_modal', plugins_url('assets/js/admin-modal.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
    wp_register_script('causfa_main', plugins_url('assets/js/main.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
    wp_register_script('causfa_transfer', plugins_url('assets/js/transfer.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
    wp_register_script('causfa_surplus', plugins_url('assets/js/surplus.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
    wp_register_script('causfa_gallery', plugins_url('assets/js/gallery.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
    wp_register_script('causfa_forms', plugins_url('assets/js/forms.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
    wp_register_script('causfa_report_problem', plugins_url('assets/js/report_problem.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
    wp_register_script('causfa_sidenav', plugins_url('assets/js/sidenav.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
    wp_register_script('causfa_materialize', plugins_url('assets/js/materialize.min.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
    wp_register_script('causfa_tippy_script', 'https://unpkg.com/tippy.js@2.4.1/dist/tippy.all.min.js', array('jquery'), false, true);
    wp_register_script('causfa_font_awesome_script', 'https://use.fontawesome.com/releases/v5.0.8/js/all.js', array('jquery'), false, true);
    wp_register_script('causfa_slick_script', plugins_url('assets/slick/slick.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
	wp_register_script('causfa_awesomplete_script', plugins_url('assets/js/awesomplete.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
	wp_register_script('causfa_tablesorter_script', plugins_url('assets/js/jquery.tablesorter.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
	wp_register_script('causfa_tablesort_script', plugins_url('assets/js/tablesort.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
	wp_register_script('causfa_tabs_script', plugins_url('assets/js/tabs.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
    wp_register_script('causfa_forms_script', plugins_url('assets/js/generate-form.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
    wp_register_script('jspdf_script', plugins_url('assets/js/jsPDF-master/dist/jspdf.debug.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
    wp_register_script('jquery_ui_script', plugins_url('assets/js/jquery-ui.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);

    wp_enqueue_script('jquery');
    wp_enqueue_script('causfa_modal');
    wp_enqueue_script('causfa_admin_modal');
    wp_enqueue_script('causfa_main');
    wp_enqueue_script('causfa_transfer');
    wp_enqueue_script('causfa_surplus');
    wp_enqueue_script('causfa_gallery');
    wp_enqueue_script('causfa_forms');
    wp_enqueue_script('causfa_report_problem');
    wp_enqueue_script('causfa_sidenav');
    wp_enqueue_script('causfa_materialize');
    wp_enqueue_script('causfa_tippy_script');
    wp_enqueue_script('causfa_font_awesome_script');
    wp_enqueue_script('causfa_slick_script');
	wp_enqueue_script('causfa_awesomplete_script');
	wp_enqueue_script('causfa_tablesorter_script');
	wp_enqueue_script('causfa_tablesort_script');
	wp_enqueue_script('causfa_tabs_script');
	wp_enqueue_script('causfa_forms_script');
	wp_enqueue_script('jspdf_script');
	wp_enqueue_script('jquery_ui_script');


    //This line creates a causfa_action_obj object that passes the ajax url to the front end scripts
    wp_localize_script('causfa_main', 'causfa_action_obj', array(
        'ajax_url' => admin_url('admin-ajax.php')
    ));

}

function causfa_admin_enqueue() {
    wp_register_style('causadmin_materialize', plugins_url('assets/css/materialize.css', CAUSFA_PLUGIN_URL));
    wp_register_style('causadmin_material_icons', 'https://fonts.googleapis.com/icon?family=Material+Icons');
    wp_register_style('causadmin_style', plugins_url('assets/css/style.css', CAUSFA_PLUGIN_URL));
    wp_register_style('causadmin_paradox', plugins_url('assets/css/paradox.css', CAUSFA_PLUGIN_URL));
    wp_register_style('causadmin_awesomplete', plugins_url('assets/css/awesomplete.css', CAUSFA_PLUGIN_URL));
    
    wp_enqueue_style('causadmin_materialize');
    wp_enqueue_style('causadmin_material_icons');
    wp_enqueue_style('causadmin_style');
    wp_enqueue_style('causadmin_paradox');
	wp_enqueue_style('causadmin_awesomplete');
    
    wp_register_script('causadmin_materialize_script', plugins_url('assets/js/materialize.min.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
    wp_register_script('causadmin_paradox_script', plugins_url('assets/js/paradox.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
    wp_register_script('causadmin_modal', plugins_url('assets/js/admin-modal.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
    wp_register_script('causadmin_main', plugins_url('assets/js/main.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
    wp_register_script('causadmin_transfer', plugins_url('assets/js/transfer.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
    wp_register_script('causadmin_surplus', plugins_url('assets/js/surplus.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
    wp_register_script('causadmin_report_problem', plugins_url('assets/js/report_problem.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
    wp_register_script('causadmin_awesomplete_script', plugins_url('assets/js/awesomplete.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
    wp_register_script('causadmin_jquery_ui_script', plugins_url('assets/js/jquery-ui.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
    wp_register_script('causadmin_generate_report_script', plugins_url('assets/js/generate-report.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
    wp_register_script('causadmin_jspdf_script', plugins_url('assets/js/jsPDF-master/dist/jspdf.debug.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
    wp_register_script('causadmin_transfer_script', plugins_url('assets/js/transfer.js', CAUSFA_PLUGIN_URL), array('jquery'), false, true);
    
    wp_enqueue_script('jquery');
    wp_enqueue_script('causadmin_materialize_script');
    wp_enqueue_script('causadmin_paradox_script');
    wp_enqueue_script('causadmin_modal');
    wp_enqueue_script('causadmin_main');
    wp_enqueue_script('causadmin_transfer');
    wp_enqueue_script('causadmin_surplus');
    wp_enqueue_script('causadmin_report_problem');
    wp_enqueue_script('causadmin_awesomplete_script');
    wp_enqueue_script('causadmin_jquery_ui_script');
    wp_enqueue_script('causadmin_generate_report_script');
    wp_enqueue_script('causadmin_jspdf_script');
    wp_enqueue_script('causadmin_transfer_script');
    
    //This line creates a causfa_action_obj object that passes the ajax url to the front end scripts
    wp_localize_script('causadmin_main', 'causfa_action_obj', array(
        'ajax_url' => admin_url('admin-ajax.php')
    ));
}
