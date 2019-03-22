function generatePrintedReport() {
var doc = new jsPDF('landscape','pt',[612,792]);

doc.setLineWidth(1);
// Line Coords (startX, starty, endx, endy)
//doc.line(15, 15, 777, 15); // Top Line
//doc.line(15, 593, 777, 593); // Bottom Line
//doc.line(15, 15, 15, 593); // Left Side Line
//doc.line(777, 15, 777, 593); // Right Side Line

//----------------- ROW 1-----------------------//

doc.setLineWidth(0.25);
//doc.line(15, 59, 777, 59); // Section Bottom Line
doc.setFont("helvetica");
doc.setFontSize(9);
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(15, 15, 80, 15, 'FD');
doc.setFontType("bold");
doc.text(25, 26, 'TAG NUMBER');

doc.setFontType("normal");
doc.rect(95, 15, 60, 15,);
doc.text(100, 26, '000000000');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(155, 15, 95, 15, 'FD');
doc.text(163, 26, 'MANUFACTURER');

doc.setFontType("normal");
doc.rect(250, 15, 125, 15,);
doc.text(255, 26, 'MANUFACTURER NAME');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(375, 15, 80, 15, 'FD');
doc.text(382, 26, 'DESCRIPTION');

doc.setFontType("normal");
doc.rect(455, 15, 170, 15,);
var descText = 'Insert lengthy nonsens edescription here blah blah blah'
var splitDesc = doc.splitTextToSize(descText, 170);
doc.text(splitDesc[0],460, 26,);

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(625, 15, 55, 15, 'FD');
doc.text(630, 26, 'VALUE');

doc.setFontType("normal");
doc.rect(680, 15, 97, 15,);
doc.text(690, 26, '$000,000,000');

//----------------- ROW 2-----------------------//

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(15, 30, 80, 15, 'FD');
doc.text(25, 41, 'PURCHASED');

doc.setFontType("normal");
doc.rect(95, 30, 60, 15,);
doc.text(100, 41, '00-MON-00');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(155, 30, 95, 15, 'FD');
doc.text(163, 41, 'LAST VT SCAN');

doc.setFontType("normal");
doc.rect(250, 30, 125, 15,);
doc.text(255, 41, '00-MON-00');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(375, 30, 80, 15, 'FD');
doc.text(382, 41, 'SERIAL');

doc.setFontType("normal");
doc.rect(455, 30, 170, 15,);
doc.text(460, 41, 'XC08918729387645287');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(625, 30, 55, 15, 'FD');
doc.text(630, 41, 'BUILDING');

doc.setFontType("normal");
doc.rect(680, 30, 97, 15,);
doc.text(690, 41, 'Building Name Here');

//----------------- ROW 3-----------------------//

doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(15, 45, 80, 15, 'FD');
doc.setFontType("bold");
doc.text(25, 56, 'PO NUMBER');

doc.setFontType("normal");
doc.rect(95, 45, 60, 15,);
doc.text(100, 56, 'P30909090');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(155, 45, 95, 15, 'FD');
doc.text(163, 56, 'CONDITION');

doc.setFontType("normal");
doc.rect(250, 45, 125, 15,);
doc.text(255, 56, 'Good');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(375, 45, 80, 15, 'FD');
doc.text(382, 56, 'ORGANIZATION');

doc.setFontType("normal");
doc.rect(455, 45, 170, 15,);
doc.text(460, 56, 'School of Architecture and Design');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(625, 45, 55, 15, 'FD');
doc.text(630, 56, 'ROOM');

doc.setFontType("normal");
doc.rect(680, 45, 97, 15,);
doc.text(690, 56, '000-000');

//----------------- ROW 4 -----------------------//

doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(15, 60, 80, 15, 'FD');
doc.setFontType("bold");
doc.text(25, 71, 'STATUS');

doc.setFontType("normal");
doc.rect(95, 60, 60, 15,);
doc.text(100, 71, 'OFFICE');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(155, 60, 95, 15, 'FD');
doc.text(163, 71, 'OWNERSHIP');

doc.setFontType("normal");
doc.rect(250, 60, 125, 15,);
doc.text(255, 71, 'University Owned');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(375, 60, 80, 15, 'FD');
doc.text(382, 71, 'CUSTODIAN');

doc.setFontType("normal");
doc.rect(455, 60, 170, 15,);
doc.text(460, 71, 'Longstreet, Reginald');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(625, 60, 55, 15, 'FD');
doc.text(630, 71, '');

doc.setFontType("normal");
doc.rect(680, 60, 97, 15,);
doc.text(690, 71, '');

//----------------- SECOND ENTRY -----------------------//

doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(15, 85, 80, 15, 'FD');
doc.setFontType("bold");
doc.text(25, 96, 'TAG NUMBER');

doc.setFontType("normal");
doc.rect(95, 85, 60, 15,);
doc.text(100, 96, '000000000');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(155, 85, 95, 15, 'FD');
doc.text(163, 96, 'MANUFACTURER');

doc.setFontType("normal");
doc.rect(250, 85, 125, 15,);
doc.text(255, 96, 'MANUFACTURER NAME');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(375, 85, 80, 15, 'FD');
doc.text(382, 96, 'DESCRIPTION');

doc.setFontType("normal");
doc.rect(455, 85, 170, 15,);
var descText2 = 'Insert lengthy nonsens edescription here blah blah blah'
var splitDesc2 = doc.splitTextToSize(descText2, 170);
doc.text(splitDesc2[0],460, 96);

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(625, 85, 55, 15, 'FD');
doc.text(630, 96, 'VALUE');

doc.setFontType("normal");
doc.rect(680, 85, 97, 15,);
doc.text(690, 96, '$000,000,000');

//----------------- ROW 2-----------------------//

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(15, 100, 80, 15, 'FD');
doc.text(25, 111, 'PURCHASED');

doc.setFontType("normal");
doc.rect(95, 100, 60, 15,);
doc.text(100, 111, '00-MON-00');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(155, 100, 95, 15, 'FD');
doc.text(163, 111, 'LAST VT SCAN');

doc.setFontType("normal");
doc.rect(250, 100, 125, 15,);
doc.text(255, 111, '00-MON-00');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(375, 100, 80, 15, 'FD');
doc.text(382, 111, 'SERIAL');

doc.setFontType("normal");
doc.rect(455, 100, 170, 15,);
doc.text(460, 111, 'XC08918729387645287');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(625, 100, 55, 15, 'FD');
doc.text(630, 111, 'BUILDING');

doc.setFontType("normal");
doc.rect(680, 100, 97, 15,);
doc.text(690, 111, 'Building Name Here');

//----------------- ROW 3-----------------------//

doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(15, 115, 80, 15, 'FD');
doc.setFontType("bold");
doc.text(25, 126, 'PO NUMBER');

doc.setFontType("normal");
doc.rect(95, 115, 60, 15,);
doc.text(100, 126, 'P30909090');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(155, 115, 95, 15, 'FD');
doc.text(163, 126, 'CONDITION');

doc.setFontType("normal");
doc.rect(250, 115, 125, 15,);
doc.text(255, 126, 'Good');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(375, 115, 80, 15, 'FD');
doc.text(382, 126, 'ORGANIZATION');

doc.setFontType("normal");
doc.rect(455, 115, 170, 15,);
doc.text(460, 126, 'School of Architecture and Design');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(625, 115, 55, 15, 'FD');
doc.text(630, 126, 'ROOM');

doc.setFontType("normal");
doc.rect(680, 115, 97, 15,);
doc.text(690, 126, '000-000');;

//----------------- ROW 4 -----------------------//

doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(15, 130, 80, 15, 'FD');
doc.setFontType("bold");
doc.text(25, 141, 'STATUS');

doc.setFontType("normal");
doc.rect(95, 130, 60, 15,);
doc.text(100, 141, 'OFFICE');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(155, 130, 95, 15, 'FD');
doc.text(163, 141, 'OWNERSHIP');

doc.setFontType("normal");
doc.rect(250, 130, 125, 15,);
doc.text(255, 141, 'University Owned');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(375, 130, 80, 15, 'FD');
doc.text(382, 141, 'CUSTODIAN');

doc.setFontType("normal");
doc.rect(455, 130, 170, 15,);
doc.text(460, 141, 'Longstreet, Reginald');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(625, 130, 55, 15, 'FD');
doc.text(630, 141, '');

doc.setFontType("normal");
doc.rect(680, 130, 97, 15,);
doc.text(690, 141, '');

//----------------- THIRD ENTRY -----------------------//

doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(15, 155, 80, 15, 'FD');
doc.setFontType("bold");
doc.text(25, 166, 'TAG NUMBER');

doc.setFontType("normal");
doc.rect(95, 155, 60, 15,);
doc.text(100, 166, '000000000');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(155, 155, 95, 15, 'FD');
doc.text(163, 166, 'MANUFACTURER');

doc.setFontType("normal");
doc.rect(250, 155, 125, 15,);
doc.text(255, 166, 'MANUFACTURER NAME');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(375, 155, 80, 15, 'FD');
doc.text(382, 166, 'DESCRIPTION');

doc.setFontType("normal");
doc.rect(455, 155, 170, 15,);
var descText2 = 'Insert lengthy nonsens edescription here blah blah blah'
var splitDesc2 = doc.splitTextToSize(descText2, 170);
doc.text(splitDesc2[0],460, 166);

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(625, 155, 55, 15, 'FD');
doc.text(630, 166, 'VALUE');

doc.setFontType("normal");
doc.rect(680, 155, 97, 15,);
doc.text(690, 166, '$000,000,000');

//----------------- ROW 2-----------------------//

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(15, 170, 80, 15, 'FD');
doc.text(25, 181, 'PURCHASED');

doc.setFontType("normal");
doc.rect(95, 170, 60, 15,);
doc.text(100, 181, '00-MON-00');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(155, 170, 95, 15, 'FD');
doc.text(163, 181, 'LAST VT SCAN');

doc.setFontType("normal");
doc.rect(250, 170, 125, 15,);
doc.text(255, 181, '00-MON-00');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(375, 170, 80, 15, 'FD');
doc.text(382, 181, 'SERIAL');

doc.setFontType("normal");
doc.rect(455, 170, 170, 15,);
doc.text(460, 181, 'XC08918729387645287');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(625, 170, 55, 15, 'FD');
doc.text(630, 181, 'BUILDING');

doc.setFontType("normal");
doc.rect(680, 170, 97, 15,);
doc.text(690, 181, 'Building Name Here');

//----------------- ROW 3-----------------------//

doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(15, 185, 80, 15, 'FD');
doc.setFontType("bold");
doc.text(25, 196, 'PO NUMBER');

doc.setFontType("normal");
doc.rect(95, 185, 60, 15,);
doc.text(100, 196, 'P30909090');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(155, 185, 95, 15, 'FD');
doc.text(163, 196, 'CONDITION');

doc.setFontType("normal");
doc.rect(250, 185, 125, 15,);
doc.text(255, 196, 'Good');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(375, 185, 80, 15, 'FD');
doc.text(382, 196, 'ORGANIZATION');

doc.setFontType("normal");
doc.rect(455, 185, 170, 15,);
doc.text(460, 196, 'School of Architecture and Design');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(625, 185, 55, 15, 'FD');
doc.text(630, 196, 'ROOM');

doc.setFontType("normal");
doc.rect(680, 185, 97, 15,);
doc.text(690, 196, '000-000');;

//----------------- ROW 4 -----------------------//

doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(15, 200, 80, 15, 'FD');
doc.setFontType("bold");
doc.text(25, 211, 'STATUS');

doc.setFontType("normal");
doc.rect(95, 200, 60, 15,);
doc.text(100, 211, 'OFFICE');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(155, 200, 95, 15, 'FD');
doc.text(163, 211, 'OWNERSHIP');

doc.setFontType("normal");
doc.rect(250, 200, 125, 15,);
doc.text(255, 211, 'University Owned');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(375, 200, 80, 15, 'FD');
doc.text(382, 211, 'CUSTODIAN');

doc.setFontType("normal");
doc.rect(455, 200, 170, 15,);
doc.text(460, 211, 'Longstreet, Reginald');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(625, 200, 55, 15, 'FD');
doc.text(630, 211, '');

doc.setFontType("normal");
doc.rect(680, 200, 97, 15,);
doc.text(690, 211, '');

//----------------- FOURTH ENTRY -----------------------//

doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(15, 225, 80, 15, 'FD');
doc.setFontType("bold");
doc.text(25, 236, 'TAG NUMBER');

doc.setFontType("normal");
doc.rect(95, 225, 60, 15,);
doc.text(100, 236, '000000000');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(155, 225, 95, 15, 'FD');
doc.text(163, 236, 'MANUFACTURER');

doc.setFontType("normal");
doc.rect(250, 225, 125, 15,);
doc.text(255, 236, 'MANUFACTURER NAME');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(375, 225, 80, 15, 'FD');
doc.text(382, 236, 'DESCRIPTION');

doc.setFontType("normal");
doc.rect(455, 225, 170, 15,);
var descText2 = 'Insert lengthy nonsens edescription here blah blah blah'
var splitDesc2 = doc.splitTextToSize(descText2, 170);
doc.text(splitDesc2[0],460, 236);

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(625, 225, 55, 15, 'FD');
doc.text(630, 236, 'VALUE');

doc.setFontType("normal");
doc.rect(680, 225, 97, 15,);
doc.text(690, 236, '$000,000,000');

//----------------- ROW 2-----------------------//

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(15, 240, 80, 15, 'FD');
doc.text(25, 251, 'PURCHASED');

doc.setFontType("normal");
doc.rect(95, 240, 60, 15,);
doc.text(100, 251, '00-MON-00');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(155, 240, 95, 15, 'FD');
doc.text(163, 251, 'LAST VT SCAN');

doc.setFontType("normal");
doc.rect(250, 240, 125, 15,);
doc.text(255, 251, '00-MON-00');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(375, 240, 80, 15, 'FD');
doc.text(382, 251, 'SERIAL');

doc.setFontType("normal");
doc.rect(455, 240, 170, 15,);
doc.text(460, 251, 'XC08918729387645287');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(625, 240, 55, 15, 'FD');
doc.text(630, 251, 'BUILDING');

doc.setFontType("normal");
doc.rect(680, 240, 97, 15,);
doc.text(690, 251, 'Building Name Here');

//----------------- ROW 3-----------------------//

doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(15, 255, 80, 15, 'FD');
doc.setFontType("bold");
doc.text(25, 266, 'PO NUMBER');

doc.setFontType("normal");
doc.rect(95, 255, 60, 15,);
doc.text(100, 266, 'P30909090');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(155, 255, 95, 15, 'FD');
doc.text(163, 266, 'CONDITION');

doc.setFontType("normal");
doc.rect(250, 255, 125, 15,);
doc.text(255, 266, 'Good');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(375, 255, 80, 15, 'FD');
doc.text(382, 266, 'ORGANIZATION');

doc.setFontType("normal");
doc.rect(455, 255, 170, 15,);
doc.text(460, 266, 'School of Architecture and Design');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(625, 255, 55, 15, 'FD');
doc.text(630, 266, 'ROOM');

doc.setFontType("normal");
doc.rect(680, 255, 97, 15,);
doc.text(690, 266, '000-000');;

//----------------- ROW 4 -----------------------//

doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(15, 270, 80, 15, 'FD');
doc.setFontType("bold");
doc.text(25, 281, 'STATUS');

doc.setFontType("normal");
doc.rect(95, 270, 60, 15,);
doc.text(100, 281, 'OFFICE');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(155, 270, 95, 15, 'FD');
doc.text(163, 281, 'OWNERSHIP');

doc.setFontType("normal");
doc.rect(250, 270, 125, 15,);
doc.text(255, 281, 'University Owned');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(375, 270, 80, 15, 'FD');
doc.text(382, 281, 'CUSTODIAN');

doc.setFontType("normal");
doc.rect(455, 270, 170, 15,);
doc.text(460, 281, 'Longstreet, Reginald');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(625, 270, 55, 15, 'FD');
doc.text(630, 281, '');

doc.setFontType("normal");
doc.rect(680, 270, 97, 15,);
doc.text(690, 281, '');

//----------------- FIFTH ENTRY -----------------------//

doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(15, 295, 80, 15, 'FD');
doc.setFontType("bold");
doc.text(25, 306, 'TAG NUMBER');

doc.setFontType("normal");
doc.rect(95, 295, 60, 15,);
doc.text(100, 306, '000000000');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(155, 295, 95, 15, 'FD');
doc.text(163, 306, 'MANUFACTURER');

doc.setFontType("normal");
doc.rect(250, 295, 125, 15,);
doc.text(255, 306, 'MANUFACTURER NAME');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(375, 295, 80, 15, 'FD');
doc.text(382, 306, 'DESCRIPTION');

doc.setFontType("normal");
doc.rect(455, 295, 170, 15,);
var descText2 = 'Insert lengthy nonsens edescription here blah blah blah'
var splitDesc2 = doc.splitTextToSize(descText2, 170);
doc.text(splitDesc2[0],460, 306);

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(625, 295, 55, 15, 'FD');
doc.text(630, 306, 'VALUE');

doc.setFontType("normal");
doc.rect(680, 295, 97, 15,);
doc.text(690, 306, '$000,000,000');

//----------------- ROW 2-----------------------//

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(15, 310, 80, 15, 'FD');
doc.text(25, 321, 'PURCHASED');

doc.setFontType("normal");
doc.rect(95, 310, 60, 15,);
doc.text(100, 321, '00-MON-00');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(155, 310, 95, 15, 'FD');
doc.text(163, 321, 'LAST VT SCAN');

doc.setFontType("normal");
doc.rect(250, 310, 125, 15,);
doc.text(255, 321, '00-MON-00');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(375, 310, 80, 15, 'FD');
doc.text(382, 321, 'SERIAL');

doc.setFontType("normal");
doc.rect(455, 310, 170, 15,);
doc.text(460, 321, 'XC08918729387645287');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(625, 310, 55, 15, 'FD');
doc.text(630, 321, 'BUILDING');

doc.setFontType("normal");
doc.rect(680, 310, 97, 15,);
doc.text(690, 321, 'Building Name Here');

//----------------- ROW 3-----------------------//

doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(15, 325, 80, 15, 'FD');
doc.setFontType("bold");
doc.text(25, 336, 'PO NUMBER');

doc.setFontType("normal");
doc.rect(95, 325, 60, 15,);
doc.text(100, 336, 'P30909090');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(155, 325, 95, 15, 'FD');
doc.text(163, 336, 'CONDITION');

doc.setFontType("normal");
doc.rect(250, 325, 125, 15,);
doc.text(255, 336, 'Good');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(375, 325, 80, 15, 'FD');
doc.text(382, 336, 'ORGANIZATION');

doc.setFontType("normal");
doc.rect(455, 325, 170, 15,);
doc.text(460, 336, 'School of Architecture and Design');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(625, 325, 55, 15, 'FD');
doc.text(630, 336, 'ROOM');

doc.setFontType("normal");
doc.rect(680, 325, 97, 15,);
doc.text(690, 336, '000-000');;

//----------------- ROW 4 -----------------------//

doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(15, 340, 80, 15, 'FD');
doc.setFontType("bold");
doc.text(25, 351, 'STATUS');

doc.setFontType("normal");
doc.rect(95, 340, 60, 15,);
doc.text(100, 351, 'OFFICE');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(155, 340, 95, 15, 'FD');
doc.text(163, 351, 'OWNERSHIP');

doc.setFontType("normal");
doc.rect(250, 340, 125, 15,);
doc.text(255, 351, 'University Owned');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(375, 340, 80, 15, 'FD');
doc.text(382, 351, 'CUSTODIAN');

doc.setFontType("normal");
doc.rect(455, 340, 170, 15,);
doc.text(460, 351, 'Longstreet, Reginald');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(625, 340, 55, 15, 'FD');
doc.text(630, 351, '');

doc.setFontType("normal");
doc.rect(680, 340, 97, 15,);
doc.text(690, 351, '');

//----------------- SIXT ENTRY -----------------------//

doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(15, 365, 80, 15, 'FD');
doc.setFontType("bold");
doc.text(25, 376, 'TAG NUMBER');

doc.setFontType("normal");
doc.rect(95, 365, 60, 15,);
doc.text(100, 376, '000000000');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(155, 365, 95, 15, 'FD');
doc.text(163, 376, 'MANUFACTURER');

doc.setFontType("normal");
doc.rect(250, 365, 125, 15,);
doc.text(255, 376, 'MANUFACTURER NAME');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(375, 365, 80, 15, 'FD');
doc.text(382, 376, 'DESCRIPTION');

doc.setFontType("normal");
doc.rect(455, 365, 170, 15,);
var descText2 = 'Insert lengthy nonsens edescription here blah blah blah'
var splitDesc2 = doc.splitTextToSize(descText2, 170);
doc.text(splitDesc2[0],460, 376);

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(625, 365, 55, 15, 'FD');
doc.text(630, 376, 'VALUE');

doc.setFontType("normal");
doc.rect(680, 365, 97, 15,);
doc.text(690, 376, '$000,000,000');

//----------------- ROW 2-----------------------//

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(15, 380, 80, 15, 'FD');
doc.text(25, 391, 'PURCHASED');

doc.setFontType("normal");
doc.rect(95, 380, 60, 15,);
doc.text(100, 391, '00-MON-00');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(155, 380, 95, 15, 'FD');
doc.text(163, 391, 'LAST VT SCAN');

doc.setFontType("normal");
doc.rect(250, 380, 125, 15,);
doc.text(255, 391, '00-MON-00');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(375, 380, 80, 15, 'FD');
doc.text(382, 391, 'SERIAL');

doc.setFontType("normal");
doc.rect(455, 380, 170, 15,);
doc.text(460, 391, 'XC08918729387645287');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(625, 380, 55, 15, 'FD');
doc.text(630, 391, 'BUILDING');

doc.setFontType("normal");
doc.rect(680, 380, 97, 15,);
doc.text(690, 391, 'Building Name Here');

//----------------- ROW 3-----------------------//

doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(15, 395, 80, 15, 'FD');
doc.setFontType("bold");
doc.text(25, 406, 'PO NUMBER');

doc.setFontType("normal");
doc.rect(95, 395, 60, 15,);
doc.text(100, 406, 'P30909090');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(155, 395, 95, 15, 'FD');
doc.text(163, 406, 'CONDITION');

doc.setFontType("normal");
doc.rect(250, 395, 125, 15,);
doc.text(255, 406, 'Good');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(375, 395, 80, 15, 'FD');
doc.text(382, 406, 'ORGANIZATION');

doc.setFontType("normal");
doc.rect(455, 395, 170, 15,);
doc.text(460, 406, 'School of Architecture and Design');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(625, 395, 55, 15, 'FD');
doc.text(630, 406, 'ROOM');

doc.setFontType("normal");
doc.rect(680, 395, 97, 15,);
doc.text(690, 406, '000-000');;

//----------------- ROW 4 -----------------------//

doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(15, 410, 80, 15, 'FD');
doc.setFontType("bold");
doc.text(25, 421, 'STATUS');

doc.setFontType("normal");
doc.rect(95, 410, 60, 15,);
doc.text(100, 421, 'OFFICE');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(155, 410, 95, 15, 'FD');
doc.text(163, 421, 'OWNERSHIP');

doc.setFontType("normal");
doc.rect(250, 410, 125, 15,);
doc.text(255, 421, 'University Owned');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(375, 410, 80, 15, 'FD');
doc.text(382, 421, 'CUSTODIAN');

doc.setFontType("normal");
doc.rect(455, 410, 170, 15,);
doc.text(460, 421, 'Longstreet, Reginald');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(625, 410, 55, 15, 'FD');
doc.text(630, 421, '');

doc.setFontType("normal");
doc.rect(680, 410, 97, 15,);
doc.text(690, 421, '');

//----------------- SEVENTH ENTRY -----------------------//

doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(15, 435, 80, 15, 'FD');
doc.setFontType("bold");
doc.text(25, 446, 'TAG NUMBER');

doc.setFontType("normal");
doc.rect(95, 435, 60, 15,);
doc.text(100, 446, '000000000');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(155, 435, 95, 15, 'FD');
doc.text(163, 446, 'MANUFACTURER');

doc.setFontType("normal");
doc.rect(250, 435, 125, 15,);
doc.text(255, 446, 'MANUFACTURER NAME');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(375, 435, 80, 15, 'FD');
doc.text(382, 446, 'DESCRIPTION');

doc.setFontType("normal");
doc.rect(455, 435, 170, 15,);
var descText2 = 'Insert lengthy nonsens edescription here blah blah blah'
var splitDesc2 = doc.splitTextToSize(descText2, 170);
doc.text(splitDesc2[0],460, 446);

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(625, 435, 55, 15, 'FD');
doc.text(630, 446, 'VALUE');

doc.setFontType("normal");
doc.rect(680, 435, 97, 15,);
doc.text(690, 446, '$000,000,000');

//----------------- ROW 2-----------------------//

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(15, 450, 80, 15, 'FD');
doc.text(25, 461, 'PURCHASED');

doc.setFontType("normal");
doc.rect(95, 450, 60, 15,);
doc.text(100, 461, '00-MON-00');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(155, 450, 95, 15, 'FD');
doc.text(163, 461, 'LAST VT SCAN');

doc.setFontType("normal");
doc.rect(250, 450, 125, 15,);
doc.text(255, 461, '00-MON-00');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(375, 450, 80, 15, 'FD');
doc.text(382, 461, 'SERIAL');

doc.setFontType("normal");
doc.rect(455, 450, 170, 15,);
doc.text(460, 461, 'XC08918729387645287');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(625, 450, 55, 15, 'FD');
doc.text(630, 461, 'BUILDING');

doc.setFontType("normal");
doc.rect(680, 450, 97, 15,);
doc.text(690, 461, 'Building Name Here');

//----------------- ROW 3-----------------------//

doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(15, 465, 80, 15, 'FD');
doc.setFontType("bold");
doc.text(25, 476, 'PO NUMBER');

doc.setFontType("normal");
doc.rect(95, 465, 60, 15,);
doc.text(100, 476, 'P30909090');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(155, 465, 95, 15, 'FD');
doc.text(163, 476, 'CONDITION');

doc.setFontType("normal");
doc.rect(250, 465, 125, 15,);
doc.text(255, 476, 'Good');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(375, 465, 80, 15, 'FD');
doc.text(382, 476, 'ORGANIZATION');

doc.setFontType("normal");
doc.rect(455, 465, 170, 15,);
doc.text(460, 476, 'School of Architecture and Design');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(625, 465, 55, 15, 'FD');
doc.text(630, 476, 'ROOM');

doc.setFontType("normal");
doc.rect(680, 465, 97, 15,);
doc.text(690, 476, '000-000');;

//----------------- ROW 4 -----------------------//

doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(15, 480, 80, 15, 'FD');
doc.setFontType("bold");
doc.text(25, 491, 'STATUS');

doc.setFontType("normal");
doc.rect(95, 480, 60, 15,);
doc.text(100, 491, 'OFFICE');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(155, 480, 95, 15, 'FD');
doc.text(163, 491, 'OWNERSHIP');

doc.setFontType("normal");
doc.rect(250, 480, 125, 15,);
doc.text(255, 491, 'University Owned');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(375, 480, 80, 15, 'FD');
doc.text(382, 491, 'CUSTODIAN');

doc.setFontType("normal");
doc.rect(455, 480, 170, 15,);
doc.text(460, 491, 'Longstreet, Reginald');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(625, 480, 55, 15, 'FD');
doc.text(630, 491, '');

doc.setFontType("normal");
doc.rect(680, 480, 97, 15,);
doc.text(690, 491, '');

//----------------- EIGTH ENTRY -----------------------//

doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(15, 505, 80, 15, 'FD');
doc.setFontType("bold");
doc.text(25, 516, 'TAG NUMBER');

doc.setFontType("normal");
doc.rect(95, 505, 60, 15,);
doc.text(100, 516, '000000000');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(155, 505, 95, 15, 'FD');
doc.text(163, 516, 'MANUFACTURER');

doc.setFontType("normal");
doc.rect(250, 505, 125, 15,);
doc.text(255, 516, 'MANUFACTURER NAME');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(375, 505, 80, 15, 'FD');
doc.text(382, 516, 'DESCRIPTION');

doc.setFontType("normal");
doc.rect(455, 505, 170, 15,);
var descText2 = 'Insert lengthy nonsens edescription here blah blah blah'
var splitDesc2 = doc.splitTextToSize(descText2, 170);
doc.text(splitDesc2[0],460, 516);

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(625, 505, 55, 15, 'FD');
doc.text(630, 516, 'VALUE');

doc.setFontType("normal");
doc.rect(680, 505, 97, 15,);
doc.text(690, 516, '$000,000,000');

//----------------- ROW 2-----------------------//

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(15, 520, 80, 15, 'FD');
doc.text(25, 531, 'PURCHASED');

doc.setFontType("normal");
doc.rect(95, 520, 60, 15,);
doc.text(100, 531, '00-MON-00');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(155, 520, 95, 15, 'FD');
doc.text(163, 531, 'LAST VT SCAN');

doc.setFontType("normal");
doc.rect(250, 520, 125, 15,);
doc.text(255, 531, '00-MON-00');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(375, 520, 80, 15, 'FD');
doc.text(382, 531, 'SERIAL');

doc.setFontType("normal");
doc.rect(455, 520, 170, 15,);
doc.text(460, 531, 'XC08918729387645287');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(625, 520, 55, 15, 'FD');
doc.text(630, 531, 'BUILDING');

doc.setFontType("normal");
doc.rect(680, 520, 97, 15,);
doc.text(690, 531, 'Building Name Here');

//----------------- ROW 3-----------------------//

doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(15, 535, 80, 15, 'FD');
doc.setFontType("bold");
doc.text(25, 546, 'PO NUMBER');

doc.setFontType("normal");
doc.rect(95, 535, 60, 15,);
doc.text(100, 546, 'P30909090');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(155, 535, 95, 15, 'FD');
doc.text(163, 546, 'CONDITION');

doc.setFontType("normal");
doc.rect(250, 535, 125, 15,);
doc.text(255, 546, 'Good');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(375, 535, 80, 15, 'FD');
doc.text(382, 546, 'ORGANIZATION');

doc.setFontType("normal");
doc.rect(455, 535, 170, 15,);
doc.text(460, 546, 'School of Architecture and Design');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(625, 535, 55, 15, 'FD');
doc.text(630, 546, 'ROOM');

doc.setFontType("normal");
doc.rect(680, 535, 97, 15,);
doc.text(690, 546, '000-000');;

//----------------- ROW 4 -----------------------//

doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(15, 550, 80, 15, 'FD');
doc.setFontType("bold");
doc.text(25, 561, 'STATUS');

doc.setFontType("normal");
doc.rect(95, 550, 60, 15,);
doc.text(100, 561, 'OFFICE');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(155, 550, 95, 15, 'FD');
doc.text(163, 561, 'OWNERSHIP');

doc.setFontType("normal");
doc.rect(250, 550, 125, 15,);
doc.text(255, 561, 'University Owned');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(375, 550, 80, 15, 'FD');
doc.text(382, 561, 'CUSTODIAN');

doc.setFontType("normal");
doc.rect(455, 550, 170, 15,);
doc.text(460, 561, 'Longstreet, Reginald');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(625, 550, 55, 15, 'FD');
doc.text(630, 561, '');

doc.setFontType("normal");
doc.rect(680, 550, 97, 15,);
doc.text(690, 561, '');

//----------------- Report Type -----------------------//

doc.setLineWidth(1);
doc.rect(15, 575, 762, 20,);

doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(15, 575, 240, 20, 'FD');
doc.setFontSize(16);
doc.setFontType("bold");
doc.text(25, 591, 'ORGANIZATIONAL REPORT');

doc.setFontSize(12);
doc.setFontType("normal");
doc.rect(255, 575, 370, 20,);
doc.text(260, 589, 'SEARCH CRITERIA');

doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(625, 575, 55, 20, 'FD');
doc.text(630, 589, 'PAGES');

doc.setFontType("normal");
doc.rect(680, 575, 97, 20);
doc.text(700, 589, '000 / 000');


    var filename = 'Individual_Assets.pdf';
    doc.save(filename);
}