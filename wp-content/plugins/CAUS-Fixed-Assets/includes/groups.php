<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 3/8/18
 * Time: 9:42 PM
 */

/**
 * @return string - the display name(s) of the FAL(s)
 *
 * Uses the groups plugin to determine the FAL(s) of the current users organization
 */
function causfa_groups_FAL() {
    $output = array();
    $current_user = new Groups_User( get_current_user_id() );
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
                        $FAL = array(
                            'Name' => $liaison_group->users[$k]->display_name,
                            'Email' => $liaison_group->users[$k]->user_email,
                            'Phone' => ''
                        );
                        $output[] = $FAL;
                    }
                }
            }
        }
    }
    return $output;
}

/**
 * @return string - the display name(s) of the FAC(s)
 *
 * Uses the groups plugin to determine the FAC(s) of the current users organization
 */
function causfa_groups_FAC() {
    $output = array();
    $current_user = new Groups_User( get_current_user_id() );
    $coordinator = Groups_Group::read_by_name('Fixed Assets Coordinator');
    $coordinator_group = new Groups_Group( $coordinator->group_id);
    $current_user_groups = $current_user->groups;
    for ($i = 0; $i < count($current_user_groups); $i++) {
        $current_user_group = $current_user_groups[$i];
        $can_org = $current_user_group->__get('capabilities');
        if($can_org) {
            $users_in_group = $current_user_group->users;
            for ($j=0; $j < count($users_in_group); $j++) {
                for($k=0; $k < count($coordinator_group->users); $k++) {
                    if ($coordinator_group->users[$k]->ID == $users_in_group[$j]->ID) {
                        $FAC = array(
                            'Name' => $coordinator_group->users[$k]->display_name,
                            'Email' => $coordinator_group->users[$k]->user_email,
                            'Phone' => ''
                        );
                        $output[] = $FAC;
                    }
                }
            }
        }
    }
    return $output;
}

/**
 * @return string - display name(s) of the BM(s)
 *
 * Uses the groups plugin to determine the BM(s) of the current users organization
 */
function causfa_groups_BM() {
    $output = array();
    $current_user = new Groups_User( get_current_user_id() );
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
                        $BM = array(
                            'Name' => $business_manager_group->users[$k]->display_name,
                            'Email' => $business_manager_group->users[$k]->user_email,
                            'Phone' => ''
                        );
                        $output[] = $BM;
                    }
                }
            }
        }
    }
    return $output;
}

/**
 * @return mixed - the management code tied to the current users organization
 *
 * Uses the groups plugin to get the management code that is stored in the capability of the organization group
 */
function causfa_groups_management_code() {
    $current_user = new Groups_User( get_current_user_id() );
    $current_user_groups = $current_user->groups;
    for ($i = 0; $i < count($current_user_groups); $i++) {
        $current_user_group = $current_user_groups[$i];
        $can_org = $current_user_group->__get('capabilities');
        if($can_org) {
            return $can_org[0]->capability->capability;

        }
    }
}

/**
 * @return bool - returns true or false if the current user is a admin (FAL, FAC, BM) or a standard user (Employee)
 */
function causfa_groups_is_admin() {
    $is_admin = false;
    $current_user = new Groups_User( get_current_user_id() );
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
