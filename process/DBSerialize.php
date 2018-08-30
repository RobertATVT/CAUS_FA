<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 3/23/18
 * Time: 9:52 AM
 */
function causfa_DB_Serialize_Images($file, $ptag, $desc) {
    global $wpdb;
    $date = current_time('mysql');
    $result  = $wpdb->get_row('SELECT * FROM causfa_gallery WHERE FZVFORG_PTAG = '.$ptag.';');
    if (is_null($result)) {
        $file_input = array($file);
        $desc_input = array($desc);
        $date_input = array($date);
        $file_input_s = maybe_serialize($file_input);
        $desc_input_s = maybe_serialize($desc_input);
        $date_input_s = maybe_serialize($date_input);
        $output = $wpdb->insert(
            'causfa_gallery',
            array(
                'FZVFORG_PTAG' => $ptag,
                'IMG_URL' => $file_input_s,
                'IMG_DESC' => $desc_input_s,
                'IMG_DATE' => $date_input_s
            ), array('%s','%s','%s','%s')
        );
        return $output;
    } else {
        $file_input = unserialize($result->IMG_URL);
        array_push($file_input, $file);
        $desc_input = unserialize($result->IMG_DESC);
        array_push($desc_input, $desc);
        $date_input = unserialize($result->IMG_DATE);
        array_push($date_input, $date);
        $file_input_s = maybe_serialize($file_input);
        $desc_input_s = maybe_serialize($desc_input);
        $date_input_s = maybe_serialize($date_input);
        $output = $wpdb->update(
            'causfa_gallery',
            array(
                'FZVFORG_PTAG' => $ptag,
                'IMG_URL' => $file_input_s,
                'IMG_DESC' => $desc_input_s,
                'IMG_DATE' => $date_input_s
            ), array('FZVFORG_PTAG' => $ptag),
            array('%s','%s','%s','%s'),
            array('%s')
        );
        return $output;
    }
}

function causfa_DB_Serialize_Form_Home($file, $ptag) {
    global $wpdb;
    $date = current_time('mysql');
    $wpdb->replace(
        'causfa_forms',
        array(
            'FZVFORG_PTAG' => $ptag,
            'HU_URL' => $file,
            'HU_DATE' => $date
        ), array('%s','%s','%s')
    );
    $result = $wpdb->get_row('SELECT * FROM causfa_forms_history WHERE FZVFORG_PTAG = '.$ptag.';');
    if (is_null($result)) {
        $file_input = array($file);
        $date_input = array($date);
        $file_input_s = maybe_serialize($file_input);
        $date_input_s = maybe_serialize($date_input);
        $output = $wpdb->insert(
            'causfa_forms_history',
            array(
                'FZVFORG_PTAG' => $ptag,
                'HU_URL' => $file_input_s,
                'HU_DATE' => $date_input_s,
            ), array('%s','%s','%s')
        );
        return $output;
    } else {
        if (is_null($result->HU_URL)) {
            $file_input = array($file);
            $date_input = array($date);
        } else {
            $file_input = unserialize($result->HU_URL);
            array_push($file_input, $file);
            $date_input = unserialize($result->HU_DATE);
            array_push($date_input, $date);
        }
        $file_input_s = maybe_serialize($file_input);
        $date_input_s = maybe_serialize($date_input);
        $output = $wpdb->update(
            'causfa_forms_history',
            array(
                'FZVFORG_PTAG' => $ptag,
                'HU_URL' => $file_input_s,
                'HU_DATE' => $date_input_s
            ), array('FZVFORG_PTAG' => $ptag),
            array('%s','%s','%s','%s'),
            array('%s')
        );
        return $output;
    }
}

function causfa_DB_Serialize_Form_Office($file, $ptag) {
    global $wpdb;
    $date = current_time('mysql');
    $wpdb->replace(
        'causfa_forms',
        array(
            'FZVFORG_PTAG' => $ptag,
            'OU_URL' => $file,
            'OU_DATE' => $date
        ), array('%s','%s','%s')
    );
    $result = $wpdb->get_row('SELECT * FROM causfa_forms_history WHERE FZVFORG_PTAG = '.$ptag.';');
    if (is_null($result)) {
        $file_input = array($file);
        $date_input = array($date);
        $file_input_s = maybe_serialize($file_input);
        $date_input_s = maybe_serialize($date_input);
        $output = $wpdb->insert(
            'causfa_forms_history',
            array(
                'FZVFORG_PTAG' => $ptag,
                'OU_URL' => $file_input_s,
                'OU_DATE' => $date_input_s,
            ), array('%s','%s','%s')
        );
        return $output;
    } else {
        if (is_null($result->OU_URL)) {
            $file_input = array($file);
            $date_input = array($date);
        } else {
            $file_input = unserialize($result->OU_URL);
            array_push($file_input, $file);
            $date_input = unserialize($result->OU_DATE);
            array_push($date_input, $date);
        }
        $file_input_s = maybe_serialize($file_input);
        $date_input_s = maybe_serialize($date_input);
        $output = $wpdb->update(
            'causfa_forms_history',
            array(
                'FZVFORG_PTAG' => $ptag,
                'OU_URL' => $file_input_s,
                'OU_DATE' => $date_input_s
            ), array('FZVFORG_PTAG' => $ptag),
            array('%s','%s','%s','%s'),
            array('%s')
        );
        return $output;
    }
}
