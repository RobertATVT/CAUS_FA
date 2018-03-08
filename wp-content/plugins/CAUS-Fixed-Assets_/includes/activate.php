<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 3/7/18
 * Time: 2:01 AM
 */

function causfa_activate_plugin() {
    if( version_compare( get_bloginfo('version'), '4.5', '<' )) {
        wp_die(__('You must update WordPress to use this plugin', 'CAUS Fixed Assets Application'));
    }
}