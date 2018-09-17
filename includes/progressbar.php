<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 9/11/18
 * Time: 3:14 PM
 */
include 'oracle.php';
session_start();

ini_set('max_execution_time', 0); // to get unlimited php script execution time

if(empty($_SESSION['i'])){
    $_SESSION['i'] = 0;
}

$total = 100;
for($i=$_SESSION['i'];$i<$total;$i++)
{
    $_SESSION['i'] = $i;
    $percent = intval($i/$total * 100)."%";
    $percent = causfa_oracle_test($percent);

    sleep(1); // Here call your time taking function like sending bulk sms etc.

    echo '<script>
    parent.document.getElementById("progressbar").innerHTML="<div style=\"width:'.$percent.';background:linear-gradient(to bottom, rgba(125,126,125,1) 0%,rgba(14,14,14,1) 100%); ;height:35px;\">&nbsp;</div>";
    parent.document.getElementById("FA_LoadPercent").innerHTML="'.$percent.'";</script>';


    ob_flush();
    flush();
}
session_destroy();