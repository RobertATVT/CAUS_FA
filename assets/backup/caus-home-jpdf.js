function generatePrintedReport() {
var doc = new jsPDF('landscape','pt',[612,792]);

doc.setLineWidth(1);
// Line Coords (startX, starty, endx, endy)
doc.line(15, 15, 777, 15); // Top Line
doc.line(15, 593, 777, 593); // Bottom Line
doc.line(15, 15, 15, 593); // Left Side Line
doc.line(777, 15, 777, 593); // Right Side Line

doc.setLineWidth(0.25);
doc.line(15, 62, 777, 62); // Section Bottom Line
doc.setFont("helvetica");
doc.setFontSize(9);
doc.setFontType("bold");
doc.text(25, 28, 'TAG NUMBER:');
doc.setFontType("normal");
doc.text(100, 28, '000000000');
doc.setFontType("bold");
doc.text(165, 28, 'MANUFACTURER:');
doc.setFontType("normal");
doc.text(260, 28, 'MANUFACTURER NAME');
doc.setFontType("bold");
doc.text(385, 28, 'DESCRIPTION:');
doc.setFontType("normal");
doc.text(460, 28, 'Insert lengthy nonsens edescription here');
doc.setFontType("bold");
doc.text(655, 28, 'VALUE:');
doc.setFontType("normal");
doc.text(700, 28, '$000,000,000');

doc.setFontType("bold");
doc.text(25, 42, 'PURCHASED:');
doc.setFontType("normal");
doc.text(100, 42, '00-MON-00');
doc.setFontType("bold");
doc.text(165, 42, 'PO NUMBER:');
doc.setFontType("normal");
doc.text(235, 42, 'P30909090');
doc.setFontType("bold");
doc.text(300, 42, 'LAST VT SCAN:');
doc.setFontType("normal");
doc.text(385, 42, '00-MON-00');
doc.setFontType("bold");
doc.text(455, 42, 'BUILDING:');
doc.setFontType("normal");
doc.text(520, 42, 'Building Name Here');
doc.setFontType("bold");
doc.text(620, 42, 'Room:');
doc.setFontType("normal");
doc.text(660, 42, '000-000');

doc.setFontType("bold");
doc.text(25, 56, 'CUSTODIAN:');
doc.setFontType("normal");
doc.text(100, 56, 'Last Name Long, First Name Long');
doc.setFontType("bold");
doc.text(270, 56, 'ORGANIZATION:');
doc.setFontType("normal");
doc.text(350, 56, 'School of Architecture and Design');
doc.setFontType("bold");
doc.text(520, 56, 'CONDITION:');
doc.setFontType("normal");
doc.text(585, 56, 'Good');

doc.setLineWidth(0.25);
doc.line(15, 109, 777, 109); // Section Bottom Line
doc.setFontType("bold");
doc.text(25, 75, 'TAG NUMBER:');
doc.setFontType("normal");
doc.text(100, 75, '000000000');
doc.setFontType("bold");
doc.text(165, 75, 'MANUFACTURER:');
doc.setFontType("normal");
doc.text(260, 75, 'MANUFACTURER NAME');
doc.setFontType("bold");
doc.text(385, 75, 'DESCRIPTION:');
doc.setFontType("normal");
doc.text(460, 75, 'Insert lengthy nonsens edescription here');
doc.setFontType("bold");
doc.text(655, 75, 'VALUE:');
doc.setFontType("normal");
doc.text(700, 75, '$000,000,000');

doc.setFontType("bold");
doc.text(25, 89, 'PURCHASED:');
doc.setFontType("normal");
doc.text(100, 89, '00-MON-00');
doc.setFontType("bold");
doc.text(165, 89, 'PO NUMBER:');
doc.setFontType("normal");
doc.text(235, 89, 'P30909090');
doc.setFontType("bold");
doc.text(300, 89, 'LAST VT SCAN:');
doc.setFontType("normal");
doc.text(385, 89, '00-MON-00');
doc.setFontType("bold");
doc.text(455, 89, 'BUILDING:');
doc.setFontType("normal");
doc.text(520, 89, 'Building Name Here');
doc.setFontType("bold");
doc.text(620, 89, 'Room:');
doc.setFontType("normal");
doc.text(660, 89, '000-000');

doc.setFontType("bold");
doc.text(25, 103, 'CUSTODIAN:');
doc.setFontType("normal");
doc.text(100, 103, 'Last Name Long, First Name Long');
doc.setFontType("bold");
doc.text(270, 103, 'ORGANIZATION:');
doc.setFontType("normal");
doc.text(350, 103, 'School of Architecture and Design');
doc.setFontType("bold");
doc.text(520, 103, 'CONDITION:');
doc.setFontType("normal");
doc.text(585, 103, 'Good');

doc.rect(20, 20, 10, 10);

doc.setDrawColor(0);
doc.setFillColor(255,0,0);
doc.rect(120, 20, 10, 10, 'FD');
    
var filename = 'Individual_Assets.pdf';
doc.save(filename);
}