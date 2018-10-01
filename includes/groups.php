<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 3/8/18
 * Time: 9:42 PM
 */


function causfa_groups_FAL($PID = null) {
    global $wpdb;
    $output = array();
    if ($PID != null) {
        if (causfa_groups_is_admin($PID)) {
            $current_user = new Groups_User(get_user_by('email', $PID.'@vt.edu')->ID);
            $FAL = array(
                'Name' => $current_user->user_nicename,
                'Email' => $current_user->user_email,
                'PID' => $PID,
                'Phone' => ''
            );
            $output[] = $FAL;
            return $output;
        } else {
            $current_user = new Groups_User(get_user_by('email', $PID.'@vt.edu')->ID);
        }
    } else {
        $current_user = new Groups_User( get_current_user_id() );
    }
    $liaison = Groups_Group::read_by_name('Fixed Assets Liaison');
    $liaison_group = new Groups_Group( $liaison->group_id);
    $current_user_groups = $current_user->groups;
    for ($i = 0; $i < count($current_user_groups); $i++) {
        $current_user_group = $current_user_groups[$i];
        $can_org = $current_user_group->__get('capabilities');
        if($can_org) {
            $users_in_group = $current_user_group->users;
            for ($j=0; $j < count($users_in_group); $j++) {
                for($k=0; $k < count($liaison_group->users); $k++) {
                    if ($liaison_group->users[$k]->ID == $users_in_group[$j]->ID) {
                        $isInList = false;
                        for($l=0; $l < count($output); $l++) {
                            if($output[$l]['Name'] == $liaison_group->users[$k]->display_name) {
                                $isInList = true;
                            }
                        }
                        if (!$isInList) {
                            $phone = $wpdb->get_var('SELECT Phone FROM causfa_custodians WHERE Email = "'.$liaison_group->users[$k]->user_email.'";');
                            if ($phone === null) {
                                $phone = '';
                            }
                            $FAL = array(
                                'Name' => $liaison_group->users[$k]->display_name,
                                'Email' => $liaison_group->users[$k]->user_email,
                                'PID' => $liaison_group->users[$k]->user_nicename,
                                'Phone' => $phone
                            );
                            $output[] = $FAL;
                        }
                    }
                }
            }
        }
    }
    return $output;
}

function causfa_groups_IT($PID = null) {
    global $wpdb;
    $output = array();
    if ($PID != null) {
        if (causfa_groups_is_admin($PID)) {
            $current_user = new Groups_User(get_user_by('email', $PID.'@vt.edu')->ID);
            $FAL = array(
                'Name' => $current_user->user_nicename,
                'Email' => $current_user->user_email,
                'PID' => $PID,
                'Phone' => ''
            );
            $output[] = $FAL;
            return $output;
        } else {
            $current_user = new Groups_User(get_user_by('email', $PID.'@vt.edu')->ID);
        }
    } else {
        $current_user = new Groups_User( get_current_user_id() );
    }
    $it = Groups_Group::read_by_name('IT');
    $it_group = new Groups_Group( $it->group_id);
    $current_user_groups = $current_user->groups;
    for ($i = 0; $i < count($current_user_groups); $i++) {
        $current_user_group = $current_user_groups[$i];
        $can_org = $current_user_group->__get('capabilities');
        if($can_org) {
            $users_in_group = $current_user_group->users;
            for ($j=0; $j < count($users_in_group); $j++) {
                for($k=0; $k < count($it_group->users); $k++) {
                    if ($it_group->users[$k]->ID == $users_in_group[$j]->ID) {
                        $isInList = false;
                        for($l=0; $l < count($output); $l++) {
                            if($output[$l]['Name'] == $it_group->users[$k]->display_name) {
                                $isInList = true;
                            }
                        }
                        if (!$isInList) {
                            $phone = $wpdb->get_var('SELECT Phone FROM causfa_custodians WHERE Email = "'.$it_group->users[$k]->user_email.'";');
                            if ($phone === null) {
                                $phone = '';
                            }
                            $FAL = array(
                                'Name' => $it_group->users[$k]->display_name,
                                'Email' => $it_group->users[$k]->user_email,
                                'PID' => $it_group->users[$k]->user_nicename,
                                'Phone' => $phone
                            );
                            $output[] = $FAL;
                        }
                    }
                }
            }
        }
    }
    return $output;
}

function causfa_groups_FAC() {
    global $wpdb;
    $output = array();
//    $current_user = new Groups_User( get_current_user_id() );
    $coordinator = Groups_Group::read_by_name('Fixed Assets Coordinator');
    $coordinator_group = new Groups_Group( $coordinator->group_id);
    for ($i = 0; $i < count($coordinator_group->users); $i++) {
        $phone = $wpdb->get_var('SELECT Phone FROM causfa_custodians WHERE Email = "'.$coordinator_group->users[$i]->user_email.'";');
        if ($phone === null) {
            $phone = '';
        }
        $FAC = array(
            'Name' => $coordinator_group->users[$i]->display_name,
            'Email' => $coordinator_group->users[$i]->user_email,
            'Phone' => $phone
        );
        $output[] = $FAC;
    }
//    $current_user_groups = $current_user->groups;
//    for ($i = 0; $i < count($current_user_groups); $i++) {
//        $current_user_group = $current_user_groups[$i];
//        $can_org = $current_user_group->__get('capabilities');
//        if($can_org) {
//            $users_in_group = $current_user_group->users;
//            for ($j=0; $j < count($users_in_group); $j++) {
//                for($k=0; $k < count($coordinator_group->users); $k++) {
//                    if ($coordinator_group->users[$k]->ID == $users_in_group[$j]->ID) {
//                        $isInList = false;
//                        for($l=0; $l < count($output); $l++) {
//                            if($output[$l]['Name'] == $coordinator_group->users[$k]->display_name) {
//                                $isInList = true;
//                            }
//                        }
//                        if (!$isInList) {
//                            $phone = $wpdb->get_var('SELECT Phone FROM causfa_custodians WHERE Email = "'.$coordinator_group->users[$k]->user_email.'";');
//                            if ($phone === null) {
//                                $phone = '';
//                            }
//                            $FAC = array(
//                                'Name' => $coordinator_group->users[$k]->display_name,
//                                'Email' => $coordinator_group->users[$k]->user_email,
//                                'Phone' => $phone
//                            );
//                            $output[] = $FAC;
//                        }
//                    }
//                }
//            }
//        }
//    }
    return $output;
}


function causfa_groups_BM($PID = null) {
    global $wpdb;
    $output = array();
    if($PID != null) {
        $current_user = new Groups_User(get_user_by('email', $PID.'@vt.edu')->ID);
    } else {
        $current_user = new Groups_User( get_current_user_id() );
    }
    $business_manager = Groups_Group::read_by_name('Business Manager');
    $business_manager_group = new Groups_Group( $business_manager->group_id);
    $current_user_groups = $current_user->groups;
    for ($i = 0; $i < count($current_user_groups); $i++) {
        $current_user_group = $current_user_groups[$i];
        $can_org = $current_user_group->__get('capabilities');
        if($can_org) {
            $users_in_group = $current_user_group->users;
            for ($j=0; $j < count($users_in_group); $j++) {
                for($k=0; $k < count($business_manager_group->users); $k++) {
                    if ($business_manager_group->users[$k]->ID == $users_in_group[$j]->ID) {
                        $isInList = false;
                        for($l=0; $l < count($output); $l++) {
                            if($output[$l]['Name'] == $business_manager_group->users[$k]->display_name) {
                                $isInList = true;
                            }
                        }
                        if(!$isInList) {
                            $phone = $wpdb->get_var('SELECT Phone FROM causfa_custodians WHERE Email = "'.$business_manager_group->users[$k]->user_email.'";');
                            if ($phone === null) {
                                $phone = '';
                            }
                            $BM = array(
                                'Name' => $business_manager_group->users[$k]->display_name,
                                'Email' => $business_manager_group->users[$k]->user_email,
                                'Phone' => $phone
                            );
                            $output[] = $BM;
                        }
                    }
                }
            }
        }
    }
    return $output;
}

function causfa_groups_management_code($PID = null) {
    if($PID != null) {
        $current_user = new Groups_User(get_user_by('email', $PID.'@vt.edu')->ID);
    } else {
        $current_user = new Groups_User( get_current_user_id() );
    }
    $current_user_groups = $current_user->groups;
    for ($i = 0; $i < count($current_user_groups); $i++) {
        $current_user_group = $current_user_groups[$i];
        $can_org = $current_user_group->__get('capabilities');
        if($can_org) {
            return $can_org[0]->capability->capability;

        }
    }
}

function causfa_groups_is_admin($PID = null) {
    $is_admin = false;
    if($PID != null) {
        $current_user = new Groups_User(get_user_by('email', $PID.'@vt.edu')->ID);
    } else {
        $current_user = new Groups_User( get_current_user_id() );
    }
    $current_user_groups = $current_user->groups;
    for ($i = 0; $i < count($current_user_groups); $i++) {
        $current_user_group = $current_user_groups[$i];
        if (strpos($current_user_group->group->name, 'Fixed Assets Liaison') !== false) {
            $is_admin = true;
        } else if (strpos($current_user_group->group->name, 'Fixed Assets Coordinator') !== false) {
            $is_admin = true;
        } else if (strpos($current_user_group->group->name, 'Business Manager') !== false) {
            $is_admin = true;
        }
    }
    return $is_admin;
}

function causfa_groups_add($name) {
    global $wpdb;
    $group_id = $wpdb->get_var('SELECT group_id FROM '.$wpdb->prefix.'groups_group WHERE name = "'.$name.'";');
    Groups_User_Group::create( array( 'user_id' => get_current_user_id(), 'group_id' =>  $group_id) );
    $employeeGroup = Groups_Group::read_by_name('Employee');
    Groups_User_Group::create( array( 'user_id' => get_current_user_id(), 'group_id' =>  $employeeGroup->group_id) );
}
function causfa_groups_remove($name) {
    global $wpdb;
    $groups_id = $wpdb->get_var('SELECT group_id FROM '.$wpdb->prefix.'groups_group WHERE name ="'.$name.'";');
    Groups_User_Group::delete(get_current_user_id(), $groups_id);
}
