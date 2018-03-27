<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 3/22/18
 * Time: 7:20 PM
 */
function causfa_set_session() {
    $name  = $_POST['Name'];
    $name = sanitize_text_field($name);
    $input = $_POST['Input'];
    $input = sanitize_text_field($input);
    $_SESSION[$name] = $input;
    wp_send_json(1);
}