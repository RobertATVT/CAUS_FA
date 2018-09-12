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
    $upload_dir_surplus = $upload_dir.'/surplus';
    if(! is_dir($upload_dir_surplus)) {
        mkdir($upload_dir_surplus, 0755);
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

function causfa_admin_menu() {
	add_menu_page( 'CAUS Fixed Assets Administration', 'CAUS Fixed Assets', 'edit_others_posts', 'causfa_admin_menu', 'causfa_admin_options' );
    add_submenu_page( 'causfa_admin_menu', 'Transfers', 'Transfers', 'edit_others_posts', 'causfa_admin_transfers', 'causfa_admin_tran');
    add_submenu_page( 'causfa_admin_menu', 'Surplus', 'Surplus', 'edit_others_posts', 'causfa_admin_Surplus', 'causfa_admin_surp');
    add_submenu_page( 'causfa_admin_menu', 'Tickets', 'Tickets', 'edit_others_posts', 'causfa_admin_Tickets', 'causfa_admin_tick');
    add_submenu_page( 'causfa_admin_menu', 'Reports', 'Reports', 'edit_others_posts', 'causfa_admin_Reports', 'causfa_admin_repo');
}

function causfa_admin_options() {
	if ( !current_user_can( 'edit_others_posts' ) )  {
		wp_die( __( 'You do not have sufficient permissions to access this page.' ) );
	}
    global $wpdb;
	$output = (file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'assets\html\faa-wpadmin-header.html', true));
	$output = $output.(file_get_contents(plugin_dir_path(CAUSFA_PLUGIN_URL).'assets\html\faa-wpadmin-impact.html', true));
    
    $transfers = causfa_transfer_number();
	$output = str_replace('[TRANSFER#]', $transfers['total'], $output);
    $output = str_replace('[TRANSFER OLD]', $transfers['old'], $output);
    $output = str_replace('[TRANSFER NEW]', $transfers['new'], $output);
    $surpluses = causfa_surplus_number();
    $output = str_replace('[SURPLUS#]', $surpluses['total'], $output);
    $output = str_replace('[SURPLUS OLD]', $surpluses['old'], $output);
    $output = str_replace('[SURPLUS NEW]', $surpluses['new'], $output);
    $tickets = causfa_ticket_number();
    $output = str_replace('[TICKET#]', $tickets['total'], $output);
    $output = str_replace('[TICKET OLD]', $tickets['old'], $output);
    $output = str_replace('[TICKET NEW]', $tickets['new'], $output);
    
    echo $output;
//	echo '
//    <div class="rw">
//		<div class="cl t20" style="margin-bottom: 10px; background: #75787B; text-align: center; padding: 10px; color: #fff; font-weight: 700; font-size: 135%;">ADMIN DASHBOARD</div>
//    </div>
//    <div id="Dashboard" class="rw">
//        <div class="rw" style="margin:0px !important; display: block;">
//            <div class="cl m7 t20" style="padding:7px;">
//                <div class="cl t20 vt-teal vt-txt-white asset-block">
//                    <div class="cl t20" style="min-height: 10px; max-height: 10px">&nbsp;</div>
//                    <div class="cl m10 t8 biggertext">[TRANSFER#]</div>
//                    <div class="cl m10 t12 subtext-right">Total Pending Transfers</div>
//                    <div class="cl m10 t8 bigtext">[TRANSFER OLD]</div>
//                    <div class="cl m10 t12 subtext-right">Total Transfers over 14 days</div>
//                    <div class="cl m10 t8 bigtext">[TRANSFER NEW]</div>
//                    <div class="cl m10 t12 subtext-right">Total Transfers under 7 days</div>
//                    <div class="cl t20" style="min-height: 10px; max-height: 10px">&nbsp;</div>
//                </div>
//            </div>
//            <div class="cl m6 t20" style="padding:7px;">
//                <div class="cl t20 vt-maroon vt-txt-white asset-block">
//                    <div class="cl t20" style="min-height: 10px; max-height: 10px">&nbsp;</div>
//                    <div class="cl m10 t8 biggertext">[SURPLUS#]</div>
//                    <div class="cl m10 t12 subtext-right">Total Pending Surplus Requests</div>
//                    <div class="cl m10 t8 bigtext">[SURPLUS OLD]</div>
//                    <div class="cl m10 t12 subtext-right">Total Surplus over 14 days</div>
//                    <div class="cl m10 t8 bigtext">[SURPLUS NEW]</div>
//                    <div class="cl m10 t12 subtext-right">Total Surplus under 7 days</div>
//                    <div class="cl t20" style="min-height: 10px; max-height: 10px">&nbsp;</div>
//                </div>
//            </div>
//            <div class="cl m7 t20" style="padding:7px;">
//                <div class="cl t20 vt-dk-orange vt-txt-white asset-block">
//                    <div class="cl t20" style="min-height: 10px; max-height: 10px">&nbsp;</div>
//                    <div class="cl m10 t8 biggertext">[TICKET#]</div>
//                    <div class="cl m10 t12 subtext-right">Total Pending Tickets</div>
//                    <div class="cl m10 t8 bigtext">[TICKET OLD]</div>
//                    <div class="cl m10 t12 subtext-right">Total Tickets over 14 days</div>
//                    <div class="cl m10 t8 bigtext">[TICKET NEW]</div>
//                    <div class="cl m10 t12 subtext-right">Total Tickets under 7 days</div>
//                    <div class="cl t20" style="min-height: 10px; max-height: 10px">&nbsp;</div>
//                </div>
//            </div>
//        </div>
//    </div>    
//    ';
}
function causfa_admin_tran() {
	if ( !current_user_can( 'edit_others_posts' ) )  {
		wp_die( __( 'You do not have sufficient permissions to access this page.' ) );
	}
	echo '<div class="wrap">';
    echo '<h1>Fixed Assets Administration Transfers</h1>';
	echo '<p>Here is where the form would go if I actually had options.</p>';
	echo '</div>';
}
function causfa_admin_surp() {
	if ( !current_user_can( 'edit_others_posts' ) )  {
		wp_die( __( 'You do not have sufficient permissions to access this page.' ) );
	}
	echo '<div class="wrap">';
    echo '<h1>Fixed Assets Administration Surplus</h1>';
	echo '<p>Here is where the form would go if I actually had options.</p>';
	echo '</div>';
}
function causfa_admin_tick() {
	if ( !current_user_can( 'edit_others_posts' ) )  {
		wp_die( __( 'You do not have sufficient permissions to access this page.' ) );
	}
	echo '<div class="wrap">';
    echo '<h1>Fixed Assets Administration Tickets</h1>';
	echo '<p>Here is where the form would go if I actually had options.</p>';
	echo '</div>';
}
function causfa_admin_repo() {
	if ( !current_user_can( 'edit_others_posts' ) )  {
		wp_die( __( 'You do not have sufficient permissions to access this page.' ) );
	}
	echo '<div class="wrap">';
    echo '<h1>Fixed Assets Administration Reports</h1>';
	echo '<p>Here is where the form would go if I actually had options.</p>';
	echo '</div>';
}
?>