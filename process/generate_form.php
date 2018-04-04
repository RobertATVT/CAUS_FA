<?php
/**
 * Created by PhpStorm.
 * User: mattwj6
 * Date: 3/17/18
 * Time: 11:37 PM
 */
function causfa_generate_form_Home() {
    global $wpdb;
    $ptag = $_POST['ptag'];
    $result = $wpdb->get_row("SELECT * FROM causfa_banner WHERE FZVFORG_PTAG = ".$ptag.";");
    $model = $result->FZVFORG_MODEL;
    $manufacturer = $result->FZVFORG_MANUFACTURER;
    $custodian = $result->FZVFORG_CUSTODIAN;
    $serial = $result->FZVFORG_SERIAL_NUM;
    $desc = $result->FZVFORG_DESCRIPTION;
    require_once(plugin_dir_path(CAUSFA_PLUGIN_URL).'assets/fpdf181/fpdf.php');
    require_once(plugin_dir_path(CAUSFA_PLUGIN_URL).'assets/FPDI-2.0.2/src/autoload.php');
    require_once(plugin_dir_path(CAUSFA_PLUGIN_URL).'assets/FPDI-2.0.2/src/Fpdi.php');
    $pdf = new \setasign\Fpdi\FPDI();
    $pdf->setSourceFile(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/CAUS_Home_Use_Form.pdf');
    $templateID = $pdf->importPage(1);
    $size = $pdf->getTemplateSize($templateID);
    if ($size['width'] > $size['height']) {
        $pdf->AddPage('L', array($size['width'], $size['height']));
    } else {
        $pdf->AddPage('P', array($size['width'], $size['height']));
    }
    $pdf->useTemplate($templateID);
    $pdf->setXY(24, 118);
    $pdf->SetFont('Times', '', 12);
    $pdf->SetFontSize(10);
    $pdf->Cell(40,4,$manufacturer, 0, 0, 'L', false);
    $pdf->Cell(35,4,$model, 0, 0, 'L', false);
    $pdf->Cell(44,4,$serial, 0, 0, 'L', false);
    $pdf->Cell(37,4,$ptag, 0, 0, 'L', false);
    $pdf->setXY(64, 123);
    $pdf->Cell(115,4, $desc, 0, 0, 'L', false);
    $pdf->SetXY(28, 134);
    $pdf->Cell(40, 4, $custodian, 0,0,'L', false);
    $pdf->Output('F', plugin_dir_path(CAUSFA_PLUGIN_URL).'CAUS_Home_Use_Form.pdf');
    $output = array(
        'status' => 1,
        'url' => plugin_dir_url(CAUSFA_PLUGIN_URL).'/CAUS_Home_Use_Form.pdf'
    );
    wp_send_json($output);
}

function causfa_generate_form_Office() {
    require_once(plugin_dir_path(CAUSFA_PLUGIN_URL).'assets/fpdf181/fpdf.php');
    require_once(plugin_dir_path(CAUSFA_PLUGIN_URL).'assets/FPDI-2.0.2/src/autoload.php');
    require_once(plugin_dir_path(CAUSFA_PLUGIN_URL).'assets/FPDI-2.0.2/src/Fpdi.php');
    $pdf = new \setasign\Fpdi\FPDI();
    $pdf->setSourceFile(plugin_dir_path(CAUSFA_PLUGIN_URL).'/assets/CAUS_Office_Use_Form.pdf');
    $templateID = $pdf->importPage(1);
    $size = $pdf->getTemplateSize($templateID);
    if ($size['width'] > $size['height']) {
        $pdf->AddPage('L', array($size['width'], $size['height']));
    } else {
        $pdf->AddPage('P', array($size['width'], $size['height']));
    }
    $pdf->useTemplate($templateID);
    $pdf->Output('D', 'CAUS_Office_Use_Form.pdf');
}
