<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 3/7/18
 * Time: 2:01 AM
 */


/**
 * This function runs when the plugin is first activated
 */
function causfa_activate_plugin() {
    // Checks if the version of WordPress is 4.5 or higher
    if( version_compare( get_bloginfo('version'), '4.5', '<' )) {
        wp_die(__('You must update WordPress to use this plugin', 'CAUS Fixed Assets Application'));
    }
    $upload = wp_upload_dir();
    $upload_dir = $upload['basedir'];
    $upload_dir = $upload_dir.'/causfa';
    if(! is_dir($upload_dir)) {
        mkdir($upload_dir, 0755);
    }
    $upload_dir_images = $upload_dir.'/images';
    if(! is_dir($upload_dir_images)) {
        mkdir($upload_dir_images, 0755);
    }
    $upload_dir_forms = $upload_dir.'/forms';
    if(! is_dir($upload_dir_forms)) {
        mkdir($upload_dir_forms);
    }
    $upload_dir_forms_home = $upload_dir_forms.'/home';
    if(! is_dir($upload_dir_forms_home)) {
        mkdir($upload_dir_forms_home);
    }
    $upload_dir_forms_office = $upload_dir_forms.'/office';
    if(! is_dir($upload_dir_forms_office)) {
        mkdir($upload_dir_forms_office);
    }
    //Checks to make sure that the groups plugin is active and if it is then it makes sure the required groups are available
    if( is_plugin_active('groups/groups.php')) {
        $business_manager = Groups_Group::read_by_name('Business Manger');
        if ($business_manager == null) {
            $map = array('name' => 'Business Manager', 'description' => 'Business Manager Group');
            Groups_Group::create($map);
        }
        $FAL = Groups_Group::read_by_name('Fixed Assets Liaison');
        if ($FAL == null) {
            $map = array('name' => 'Fixed Asset Liaison', 'description' => 'Fixed Asset Liaison Group');
            Groups_Group::create($map);
        }
        $IT = Groups_Group::read_by_name('IT');
        if ($IT == null) {
            $map = array('name' => 'IT', 'description' => 'IT Group');
            Groups_Group::create($map);
        }
        $FAC = Groups_Group::read_by_name('Fixed Assets Coordinator');
        if ($FAC == null) {
            $map = array('name' => 'Fixed Assets Coordinator', 'description' => 'Fixed Assets Coordinator Group');
            Groups_Group::create($map);
        }
        $Employee = Groups_Group::read_by_name('Employee');
        if ($Employee == null) {
            $map = array('name' => 'Employee', 'description' => 'Employee Group');
            Groups_Group::create($map);
        }
    } else {
        wp_die(__('You must install the groups plugin to use this plugin', 'CAUS Fixed Assets Application'));
    }
    //This function creates the tables required by the plugin
    create_tables();
}