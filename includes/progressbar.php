<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 9/11/18
 * Time: 3:14 PM
 */
function causfa_progressbar() {

    ini_set('zlib.output_compression',0);
    ini_set('implicit_flush',1);
    header('Content-Type: text/event-stream');
// recommended to prevent caching of event data.
    header('Cache-Control: no-cache');
    ob_implicit_flush(1);
//LONG RUNNING TASK
    for($i = 1; $i <= 10; $i++) {
        send_message($i, 'on iteration ' . $i . ' of 10' , $i*10);

        sleep(1);
    }

    send_message('CLOSE', 'Process complete');

}
function send_message($id, $message, $progress) {
    $d = array('message' => $message , 'progress' => $progress);

    //echo "id: $id" . PHP_EOL;
    echo "data: " . json_encode($d) . PHP_EOL;
    //echo PHP_EOL;
    echo str_repeat(' ',1024*64);
//    ob_flush();
//    flush();
}