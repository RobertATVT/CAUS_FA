<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 3/8/18
 * Time: 9:42 PM
 */
function causfa_groups() {
    $output = new stdClass();
    $output->FAL = causfa_groups_FAL();
    $output->FAC = causfa_groups_FAC();
    $output->BM = causfa_groups_BM();
    $output->code = causfa_groups_management_code();

    return $output;
}
function causfa_groups_FAL() {
    $output = '';
    $current_user = new Groups_User( get_current_user_id() );
    $liaison = Groups_Group::read_by_name('Fixed Assets Liaison');
    $liaison_group = new Groups_Group( $liaison->group_id);
    $current_user_groups = $current_user->groups;
    for ($i = 0; $i < count($current_user_groups); $i++) {
        $current_user_group = $current_user_groups[$i];
        $can_org = $current_user_group->__get('capabilities');
        if($can_org) {
            $FAL_count = 0;
            $users_in_group = $current_user_group->users;
            for ($j=0; $j < count($users_in_group); $j++) {
                for($k=0; $k < count($liaison_group->users); $k++) {
                    if ($liaison_group->users[$k]->ID == $users_in_group[$j]->ID) {
                        if ($FAL_count == 0) {
                            $output = $liaison_group->users[$k]->display_name;
                        } else {
                            $output = $output.(' and '.$liaison_group->users[$k]->display_name);
                        }
                        $FAL_count++;
                    }
                }
            }
        }
    }
    return $output;
}
function causfa_groups_FAC() {
    $output = '';
    $current_user = new Groups_User( get_current_user_id() );
    $coordinator = Groups_Group::read_by_name('Fixed Assets Coordinator');
    $coordinator_group = new Groups_Group( $coordinator->group_id);
    $current_user_groups = $current_user->groups;
    for ($i = 0; $i < count($current_user_groups); $i++) {
        $current_user_group = $current_user_groups[$i];
        $can_org = $current_user_group->__get('capabilities');
        if($can_org) {
            $FAC_count = 0;
            $users_in_group = $current_user_group->users;
            for ($j=0; $j < count($users_in_group); $j++) {
                for($k=0; $k < count($coordinator_group->users); $k++) {
                    if ($coordinator_group->users[$k]->ID == $users_in_group[$j]->ID) {
                        if ($FAC_count == 0) {
                            $output =  $coordinator_group->users[$k]->display_name;
                        } else {
                            $output = $output.(' and '.$coordinator_group->users[$k]->display_name);
                        }
                        $FAC_count++;
                    }
                }
            }
        }
    }
    return $output;
}
function causfa_groups_BM() {
    $output = '';
    $current_user = new Groups_User( get_current_user_id() );
    $business_manager = Groups_Group::read_by_name('Business Manager');
    $business_manager_group = new Groups_Group( $business_manager->group_id);
    $current_user_groups = $current_user->groups;
    for ($i = 0; $i < count($current_user_groups); $i++) {
        $current_user_group = $current_user_groups[$i];
        $can_org = $current_user_group->__get('capabilities');
        if($can_org) {
            $BM_count = 0;
            $users_in_group = $current_user_group->users;
            for ($j=0; $j < count($users_in_group); $j++) {
                for($k=0; $k < count($business_manager_group->users); $k++) {
                    if ($business_manager_group->users[$k]->ID == $users_in_group[$j]->ID) {
                        if ($BM_count == 0) {
                            $output = $business_manager_group->users[$k]->user_email;
                        } else {
                            $output = $output.(' and '.$business_manager_group->users[$k]->display_name);
                        }
                        $BM_count++;
                    }
                }
            }
        }
    }
    return $output;
}
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
