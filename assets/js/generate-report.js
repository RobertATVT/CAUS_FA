function generatePrintedReport() {
var doc = new jsPDF('landscape','pt',[612,792]);

var group_a=15;
var group_b=65;
var group_c=115;
var group_d=165;
var group_e=215;
var group_f=265;
var group_g=315;
var group_h=365;
var group_i=415;
var group_j=465;
var group_k=515;
var group_l=565;

doc.setLineWidth(1);

//----------------- FIRST ENTRY -----------------------//
doc.setFont("helvetica");
doc.setFontSize(9);
doc.setFontType("bold");
doc.text(15, group_a, 'TAG NUMBER');

doc.setFontType("normal");
doc.text(90, group_a, '000000000');

doc.setFontType("bold");
doc.text(153, group_a, 'MANUFACTURER');

doc.setFontType("normal");
doc.text(245, group_a, 'MANUFACTURER NAME');

doc.setFontType("bold");
doc.text(372, group_a, 'DESCRIPTION');

doc.setFontType("normal");
var descText = 'Insert lengthy nonsens edescription here blah blah blah'
var splitDesc = doc.splitTextToSize(descText, 180);
doc.text(splitDesc[0],450, group_a,);

doc.setFontType("bold");
doc.text(635, group_a, 'VALUE');

doc.setFontType("normal");
doc.text(695, group_a, '$000,000,000');

//----------------- ROW 2-----------------------//
doc.setFontType("bold");
doc.text(15, group_a+11, 'PURCHASED');

doc.setFontType("normal");
doc.text(90, group_a+11, '00-MON-00');

doc.setFontType("bold");
doc.text(153, group_a+11, 'LAST VT SCAN');

doc.setFontType("normal");
doc.text(245, group_a+11, '00-MON-00');

doc.setFontType("bold");
doc.text(372, group_a+11, 'SERIAL');

doc.setFontType("normal");
var serialText = 'XC08918729387645287'
var splitSerial = doc.splitTextToSize(serialText, 180);
doc.text(splitSerial[0],450, group_a+11);

doc.setFontType("bold");
doc.text(635, group_a+11, 'BUILDING');

doc.setFontType("normal");
doc.text(695, group_a+11, 'Building Name Here');

//----------------- ROW 3-----------------------//
doc.setFontType("bold");
doc.text(15, group_a+22, 'PO NUMBER');

doc.setFontType("normal");
doc.text(90, group_a+22, 'P30909090');

doc.setFontType("bold");
doc.text(153, group_a+22, 'CONDITION');

doc.setFontType("normal");
doc.text(245, group_a+22, 'Good');

doc.setFontType("bold");
doc.text(372, group_a+22, 'ORGANIZATION');

doc.setFontType("normal");
var orgText = 'School of Architecture and Design';
var splitORG = doc.splitTextToSize(orgText, 180);
doc.text(splitORG[0],450, group_a+22);

doc.setFontType("bold");
doc.text(635, group_a+22, 'ROOM');

doc.setFontType("normal");
doc.text(695, group_a+22, '000-000');

//----------------- ROW 4 -----------------------//
doc.setFontType("bold");
doc.text(15, group_a+33, 'STATUS');

doc.setFontType("normal");
doc.text(90, group_a+33, 'OFFICE');

doc.setFontType("bold");
doc.text(153, group_a+33, 'OWNERSHIP');

doc.setFontType("normal");
doc.text(245, group_a+33, 'University Owned');

doc.setFontType("bold");
doc.text(372, group_a+33, 'CUSTODIAN');

doc.setFontType("normal");
var custText = 'Longstreet, Reginald';
var splitCust = doc.splitTextToSize(custText, 180);
doc.text(splitCust[0],450, group_a+33);

doc.setFontType("bold");
doc.text(635, group_a+33, '');

doc.setFontType("normal");
doc.text(695, group_a+33, '');

doc.setLineWidth(0.25);
doc.line(15, group_a+38, 777, group_a+38);

//----------------- SECOND ENTRY -----------------------//
doc.setFont("helvetica");
doc.setFontSize(9);
doc.setFontType("bold");
doc.text(15, group_b, 'TAG NUMBER');

doc.setFontType("normal");
doc.text(90, group_b, '000000000');

doc.setFontType("bold");
doc.text(153, group_b, 'MANUFACTURER');

doc.setFontType("normal");
doc.text(245, group_b, 'MANUFACTURER NAME');

doc.setFontType("bold");
doc.text(372, group_b, 'DESCRIPTION');

doc.setFontType("normal");
var descText = 'Insert lengthy nonsens edescription here blah blah blah'
var splitDesc = doc.splitTextToSize(descText, 180);
doc.text(splitDesc[0],450, group_b,);

doc.setFontType("bold");
doc.text(635, group_b, 'VALUE');

doc.setFontType("normal");
doc.text(695, group_b, '$000,000,000');

//----------------- ROW 2-----------------------//
doc.setFontType("bold");
doc.text(15, group_b+11, 'PURCHASED');

doc.setFontType("normal");
doc.text(90, group_b+11, '00-MON-00');

doc.setFontType("bold");
doc.text(153, group_b+11, 'LAST VT SCAN');

doc.setFontType("normal");
doc.text(245, group_b+11, '00-MON-00');

doc.setFontType("bold");
doc.text(372, group_b+11, 'SERIAL');

doc.setFontType("normal");
var serialText = 'XC08918729387645287'
var splitSerial = doc.splitTextToSize(serialText, 180);
doc.text(splitSerial[0],450, group_b+11);

doc.setFontType("bold");
doc.text(635, group_b+11, 'BUILDING');

doc.setFontType("normal");
doc.text(695, group_b+11, 'Building Name Here');

//----------------- ROW 3-----------------------//
doc.setFontType("bold");
doc.text(15, group_b+22, 'PO NUMBER');

doc.setFontType("normal");
doc.text(90, group_b+22, 'P30909090');

doc.setFontType("bold");
doc.text(153, group_b+22, 'CONDITION');

doc.setFontType("normal");
doc.text(245, group_b+22, 'Good');

doc.setFontType("bold");
doc.text(372, group_b+22, 'ORGANIZATION');

doc.setFontType("normal");
var orgText = 'School of Architecture and Design';
var splitORG = doc.splitTextToSize(orgText, 180);
doc.text(splitORG[0],450, group_b+22);

doc.setFontType("bold");
doc.text(635, group_b+22, 'ROOM');

doc.setFontType("normal");
doc.text(695, group_b+22, '000-000');

//----------------- ROW 4 -----------------------//
doc.setFontType("bold");
doc.text(15, group_b+33, 'STATUS');

doc.setFontType("normal");
doc.text(90, group_b+33, 'OFFICE');

doc.setFontType("bold");
doc.text(153, group_b+33, 'OWNERSHIP');

doc.setFontType("normal");
doc.text(245, group_b+33, 'University Owned');

doc.setFontType("bold");
doc.text(372, group_b+33, 'CUSTODIAN');

doc.setFontType("normal");
var custText = 'Longstreet, Reginald';
var splitCust = doc.splitTextToSize(custText, 180);
doc.text(splitCust[0],450, group_b+33);

doc.setFontType("bold");
doc.text(635, group_b+33, '');

doc.setFontType("normal");
doc.text(695, group_b+33, '');

doc.setLineWidth(0.25);
doc.line(15, group_b+38, 777, group_b+38);

//----------------- THIRD ENTRY -----------------------//
doc.setFont("helvetica");
doc.setFontSize(9);
doc.setFontType("bold");
doc.text(15, group_c, 'TAG NUMBER');

doc.setFontType("normal");
doc.text(90, group_c, '000000000');

doc.setFontType("bold");
doc.text(153, group_c, 'MANUFACTURER');

doc.setFontType("normal");
doc.text(245, group_c, 'MANUFACTURER NAME');

doc.setFontType("bold");
doc.text(372, group_c, 'DESCRIPTION');

doc.setFontType("normal");
var descText = 'Insert lengthy nonsens edescription here blah blah blah'
var splitDesc = doc.splitTextToSize(descText, 180);
doc.text(splitDesc[0],450, group_c,);

doc.setFontType("bold");
doc.text(635, group_c, 'VALUE');

doc.setFontType("normal");
doc.text(695, group_c, '$000,000,000');

//----------------- ROW 2-----------------------//
doc.setFontType("bold");
doc.text(15, group_c+11, 'PURCHASED');

doc.setFontType("normal");
doc.text(90, group_c+11, '00-MON-00');

doc.setFontType("bold");
doc.text(153, group_c+11, 'LAST VT SCAN');

doc.setFontType("normal");
doc.text(245, group_c+11, '00-MON-00');

doc.setFontType("bold");
doc.text(372, group_c+11, 'SERIAL');

doc.setFontType("normal");
var serialText = 'XC08918729387645287'
var splitSerial = doc.splitTextToSize(serialText, 180);
doc.text(splitSerial[0],450, group_c+11);

doc.setFontType("bold");
doc.text(635, group_c+11, 'BUILDING');

doc.setFontType("normal");
doc.text(695, group_c+11, 'Building Name Here');

//----------------- ROW 3-----------------------//
doc.setFontType("bold");
doc.text(15, group_c+22, 'PO NUMBER');

doc.setFontType("normal");
doc.text(90, group_c+22, 'P30909090');

doc.setFontType("bold");
doc.text(153, group_c+22, 'CONDITION');

doc.setFontType("normal");
doc.text(245, group_c+22, 'Good');

doc.setFontType("bold");
doc.text(372, group_c+22, 'ORGANIZATION');

doc.setFontType("normal");
var orgText = 'School of Architecture and Design';
var splitORG = doc.splitTextToSize(orgText, 180);
doc.text(splitORG[0],450, group_c+22);

doc.setFontType("bold");
doc.text(635, group_c+22, 'ROOM');

doc.setFontType("normal");
doc.text(695, group_c+22, '000-000');

//----------------- ROW 4 -----------------------//
doc.setFontType("bold");
doc.text(15, group_c+33, 'STATUS');

doc.setFontType("normal");
doc.text(90, group_c+33, 'OFFICE');

doc.setFontType("bold");
doc.text(153, group_c+33, 'OWNERSHIP');

doc.setFontType("normal");
doc.text(245, group_c+33, 'University Owned');

doc.setFontType("bold");
doc.text(372, group_c+33, 'CUSTODIAN');

doc.setFontType("normal");
var custText = 'Longstreet, Reginald';
var splitCust = doc.splitTextToSize(custText, 180);
doc.text(splitCust[0],450, group_c+33);

doc.setFontType("bold");
doc.text(635, group_c+33, '');

doc.setFontType("normal");
doc.text(695, group_c+33, '');

doc.setLineWidth(0.25);
doc.line(15, group_c+38, 777, group_c+38);

//----------------- FOURTH ENTRY -----------------------//
doc.setFont("helvetica");
doc.setFontSize(9);
doc.setFontType("bold");
doc.text(15, group_d, 'TAG NUMBER');

doc.setFontType("normal");
doc.text(90, group_d, '000000000');

doc.setFontType("bold");
doc.text(153, group_d, 'MANUFACTURER');

doc.setFontType("normal");
doc.text(245, group_d, 'MANUFACTURER NAME');

doc.setFontType("bold");
doc.text(372, group_d, 'DESCRIPTION');

doc.setFontType("normal");
var descText = 'Insert lengthy nonsens edescription here blah blah blah'
var splitDesc = doc.splitTextToSize(descText, 180);
doc.text(splitDesc[0],450, group_d,);

doc.setFontType("bold");
doc.text(635, group_d, 'VALUE');

doc.setFontType("normal");
doc.text(695, group_d, '$000,000,000');

//----------------- ROW 2-----------------------//
doc.setFontType("bold");
doc.text(15, group_d+11, 'PURCHASED');

doc.setFontType("normal");
doc.text(90, group_d+11, '00-MON-00');

doc.setFontType("bold");
doc.text(153, group_d+11, 'LAST VT SCAN');

doc.setFontType("normal");
doc.text(245, group_d+11, '00-MON-00');

doc.setFontType("bold");
doc.text(372, group_d+11, 'SERIAL');

doc.setFontType("normal");
var serialText = 'XC08918729387645287'
var splitSerial = doc.splitTextToSize(serialText, 180);
doc.text(splitSerial[0],450, group_d+11);

doc.setFontType("bold");
doc.text(635, group_d+11, 'BUILDING');

doc.setFontType("normal");
doc.text(695, group_d+11, 'Building Name Here');

//----------------- ROW 3-----------------------//
doc.setFontType("bold");
doc.text(15, group_d+22, 'PO NUMBER');

doc.setFontType("normal");
doc.text(90, group_d+22, 'P30909090');

doc.setFontType("bold");
doc.text(153, group_d+22, 'CONDITION');

doc.setFontType("normal");
doc.text(245, group_d+22, 'Good');

doc.setFontType("bold");
doc.text(372, group_d+22, 'ORGANIZATION');

doc.setFontType("normal");
var orgText = 'School of Architecture and Design';
var splitORG = doc.splitTextToSize(orgText, 180);
doc.text(splitORG[0],450, group_d+22);

doc.setFontType("bold");
doc.text(635, group_d+22, 'ROOM');

doc.setFontType("normal");
doc.text(695, group_d+22, '000-000');

//----------------- ROW 4 -----------------------//
doc.setFontType("bold");
doc.text(15, group_d+33, 'STATUS');

doc.setFontType("normal");
doc.text(90, group_d+33, 'OFFICE');

doc.setFontType("bold");
doc.text(153, group_d+33, 'OWNERSHIP');

doc.setFontType("normal");
doc.text(245, group_d+33, 'University Owned');

doc.setFontType("bold");
doc.text(372, group_d+33, 'CUSTODIAN');

doc.setFontType("normal");
var custText = 'Longstreet, Reginald';
var splitCust = doc.splitTextToSize(custText, 180);
doc.text(splitCust[0],450, group_d+33);

doc.setFontType("bold");
doc.text(635, group_d+33, '');

doc.setFontType("normal");
doc.text(695, group_d+33, '');

doc.setLineWidth(0.25);
doc.line(15, group_d+38, 777, group_d+38);

//----------------- FIFTH ENTRY -----------------------//
doc.setFont("helvetica");
doc.setFontSize(9);
doc.setFontType("bold");
doc.text(15, group_e, 'TAG NUMBER');

doc.setFontType("normal");
doc.text(90, group_e, '000000000');

doc.setFontType("bold");
doc.text(153, group_e, 'MANUFACTURER');

doc.setFontType("normal");
doc.text(245, group_e, 'MANUFACTURER NAME');

doc.setFontType("bold");
doc.text(372, group_e, 'DESCRIPTION');

doc.setFontType("normal");
var descText = 'Insert lengthy nonsens edescription here blah blah blah'
var splitDesc = doc.splitTextToSize(descText, 180);
doc.text(splitDesc[0],450, group_e,);

doc.setFontType("bold");
doc.text(635, group_e, 'VALUE');

doc.setFontType("normal");
doc.text(695, group_e, '$000,000,000');

//----------------- ROW 2-----------------------//
doc.setFontType("bold");
doc.text(15, group_e+11, 'PURCHASED');

doc.setFontType("normal");
doc.text(90, group_e+11, '00-MON-00');

doc.setFontType("bold");
doc.text(153, group_e+11, 'LAST VT SCAN');

doc.setFontType("normal");
doc.text(245, group_e+11, '00-MON-00');

doc.setFontType("bold");
doc.text(372, group_e+11, 'SERIAL');

doc.setFontType("normal");
var serialText = 'XC08918729387645287'
var splitSerial = doc.splitTextToSize(serialText, 180);
doc.text(splitSerial[0],450, group_e+11);

doc.setFontType("bold");
doc.text(635, group_e+11, 'BUILDING');

doc.setFontType("normal");
doc.text(695, group_e+11, 'Building Name Here');

//----------------- ROW 3-----------------------//
doc.setFontType("bold");
doc.text(15, group_e+22, 'PO NUMBER');

doc.setFontType("normal");
doc.text(90, group_e+22, 'P30909090');

doc.setFontType("bold");
doc.text(153, group_e+22, 'CONDITION');

doc.setFontType("normal");
doc.text(245, group_e+22, 'Good');

doc.setFontType("bold");
doc.text(372, group_e+22, 'ORGANIZATION');

doc.setFontType("normal");
var orgText = 'School of Architecture and Design';
var splitORG = doc.splitTextToSize(orgText, 180);
doc.text(splitORG[0],450, group_e+22);

doc.setFontType("bold");
doc.text(635, group_e+22, 'ROOM');

doc.setFontType("normal");
doc.text(695, group_e+22, '000-000');

//----------------- ROW 4 -----------------------//
doc.setFontType("bold");
doc.text(15, group_e+33, 'STATUS');

doc.setFontType("normal");
doc.text(90, group_e+33, 'OFFICE');

doc.setFontType("bold");
doc.text(153, group_e+33, 'OWNERSHIP');

doc.setFontType("normal");
doc.text(245, group_e+33, 'University Owned');

doc.setFontType("bold");
doc.text(372, group_e+33, 'CUSTODIAN');

doc.setFontType("normal");
var custText = 'Longstreet, Reginald';
var splitCust = doc.splitTextToSize(custText, 180);
doc.text(splitCust[0],450, group_e+33);

doc.setFontType("bold");
doc.text(635, group_e+33, '');

doc.setFontType("normal");
doc.text(695, group_e+33, '');

doc.setLineWidth(0.25);
doc.line(15, group_e+38, 777, group_e+38);

//----------------- SIXTH ENTRY -----------------------//
doc.setFont("helvetica");
doc.setFontSize(9);
doc.setFontType("bold");
doc.text(15, group_f, 'TAG NUMBER');

doc.setFontType("normal");
doc.text(90, group_f, '000000000');

doc.setFontType("bold");
doc.text(153, group_f, 'MANUFACTURER');

doc.setFontType("normal");
doc.text(245, group_f, 'MANUFACTURER NAME');

doc.setFontType("bold");
doc.text(372, group_f, 'DESCRIPTION');

doc.setFontType("normal");
var descText = 'Insert lengthy nonsens edescription here blah blah blah'
var splitDesc = doc.splitTextToSize(descText, 180);
doc.text(splitDesc[0],450, group_f,);

doc.setFontType("bold");
doc.text(635, group_f, 'VALUE');

doc.setFontType("normal");
doc.text(695, group_f, '$000,000,000');

//----------------- ROW 2-----------------------//
doc.setFontType("bold");
doc.text(15, group_f+11, 'PURCHASED');

doc.setFontType("normal");
doc.text(90, group_f+11, '00-MON-00');

doc.setFontType("bold");
doc.text(153, group_f+11, 'LAST VT SCAN');

doc.setFontType("normal");
doc.text(245, group_f+11, '00-MON-00');

doc.setFontType("bold");
doc.text(372, group_f+11, 'SERIAL');

doc.setFontType("normal");
var serialText = 'XC08918729387645287'
var splitSerial = doc.splitTextToSize(serialText, 180);
doc.text(splitSerial[0],450, group_f+11);

doc.setFontType("bold");
doc.text(635, group_f+11, 'BUILDING');

doc.setFontType("normal");
doc.text(695, group_f+11, 'Building Name Here');

//----------------- ROW 3-----------------------//
doc.setFontType("bold");
doc.text(15, group_f+22, 'PO NUMBER');

doc.setFontType("normal");
doc.text(90, group_f+22, 'P30909090');

doc.setFontType("bold");
doc.text(153, group_f+22, 'CONDITION');

doc.setFontType("normal");
doc.text(245, group_f+22, 'Good');

doc.setFontType("bold");
doc.text(372, group_f+22, 'ORGANIZATION');

doc.setFontType("normal");
var orgText = 'School of Architecture and Design';
var splitORG = doc.splitTextToSize(orgText, 180);
doc.text(splitORG[0],450, group_f+22);

doc.setFontType("bold");
doc.text(635, group_f+22, 'ROOM');

doc.setFontType("normal");
doc.text(695, group_f+22, '000-000');

//----------------- ROW 4 -----------------------//
doc.setFontType("bold");
doc.text(15, group_f+33, 'STATUS');

doc.setFontType("normal");
doc.text(90, group_f+33, 'OFFICE');

doc.setFontType("bold");
doc.text(153, group_f+33, 'OWNERSHIP');

doc.setFontType("normal");
doc.text(245, group_f+33, 'University Owned');

doc.setFontType("bold");
doc.text(372, group_f+33, 'CUSTODIAN');

doc.setFontType("normal");
var custText = 'Longstreet, Reginald';
var splitCust = doc.splitTextToSize(custText, 180);
doc.text(splitCust[0],450, group_f+33);

doc.setFontType("bold");
doc.text(635, group_f+33, '');

doc.setFontType("normal");
doc.text(695, group_f+33, '');

doc.setLineWidth(0.25);
doc.line(15, group_f+38, 777, group_f+38);

//----------------- SEVENTH ENTRY -----------------------//
doc.setFont("helvetica");
doc.setFontSize(9);
doc.setFontType("bold");
doc.text(15, group_g, 'TAG NUMBER');

doc.setFontType("normal");
doc.text(90, group_g, '000000000');

doc.setFontType("bold");
doc.text(153, group_g, 'MANUFACTURER');

doc.setFontType("normal");
doc.text(245, group_g, 'MANUFACTURER NAME');

doc.setFontType("bold");
doc.text(372, group_g, 'DESCRIPTION');

doc.setFontType("normal");
var descText = 'Insert lengthy nonsens edescription here blah blah blah'
var splitDesc = doc.splitTextToSize(descText, 180);
doc.text(splitDesc[0],450, group_g,);

doc.setFontType("bold");
doc.text(635, group_g, 'VALUE');

doc.setFontType("normal");
doc.text(695, group_g, '$000,000,000');

//----------------- ROW 2-----------------------//
doc.setFontType("bold");
doc.text(15, group_g+11, 'PURCHASED');

doc.setFontType("normal");
doc.text(90, group_g+11, '00-MON-00');

doc.setFontType("bold");
doc.text(153, group_g+11, 'LAST VT SCAN');

doc.setFontType("normal");
doc.text(245, group_g+11, '00-MON-00');

doc.setFontType("bold");
doc.text(372, group_g+11, 'SERIAL');

doc.setFontType("normal");
var serialText = 'XC08918729387645287'
var splitSerial = doc.splitTextToSize(serialText, 180);
doc.text(splitSerial[0],450, group_g+11);

doc.setFontType("bold");
doc.text(635, group_g+11, 'BUILDING');

doc.setFontType("normal");
doc.text(695, group_g+11, 'Building Name Here');

//----------------- ROW 3-----------------------//
doc.setFontType("bold");
doc.text(15, group_g+22, 'PO NUMBER');

doc.setFontType("normal");
doc.text(90, group_g+22, 'P30909090');

doc.setFontType("bold");
doc.text(153, group_g+22, 'CONDITION');

doc.setFontType("normal");
doc.text(245, group_g+22, 'Good');

doc.setFontType("bold");
doc.text(372, group_g+22, 'ORGANIZATION');

doc.setFontType("normal");
var orgText = 'School of Architecture and Design';
var splitORG = doc.splitTextToSize(orgText, 180);
doc.text(splitORG[0],450, group_g+22);

doc.setFontType("bold");
doc.text(635, group_g+22, 'ROOM');

doc.setFontType("normal");
doc.text(695, group_g+22, '000-000');

//----------------- ROW 4 -----------------------//
doc.setFontType("bold");
doc.text(15, group_g+33, 'STATUS');

doc.setFontType("normal");
doc.text(90, group_g+33, 'OFFICE');

doc.setFontType("bold");
doc.text(153, group_g+33, 'OWNERSHIP');

doc.setFontType("normal");
doc.text(245, group_g+33, 'University Owned');

doc.setFontType("bold");
doc.text(372, group_g+33, 'CUSTODIAN');

doc.setFontType("normal");
var custText = 'Longstreet, Reginald';
var splitCust = doc.splitTextToSize(custText, 180);
doc.text(splitCust[0],450, group_g+33);

doc.setFontType("bold");
doc.text(635, group_g+33, '');

doc.setFontType("normal");
doc.text(695, group_g+33, '');

doc.setLineWidth(0.25);
doc.line(15, group_g+38, 777, group_g+38);

//----------------- EIGTH ENTRY -----------------------//
doc.setFont("helvetica");
doc.setFontSize(9);
doc.setFontType("bold");
doc.text(15, group_h, 'TAG NUMBER');

doc.setFontType("normal");
doc.text(90, group_h, '000000000');

doc.setFontType("bold");
doc.text(153, group_h, 'MANUFACTURER');

doc.setFontType("normal");
doc.text(245, group_h, 'MANUFACTURER NAME');

doc.setFontType("bold");
doc.text(372, group_h, 'DESCRIPTION');

doc.setFontType("normal");
var descText = 'Insert lengthy nonsens edescription here blah blah blah'
var splitDesc = doc.splitTextToSize(descText, 180);
doc.text(splitDesc[0],450, group_h,);

doc.setFontType("bold");
doc.text(635, group_h, 'VALUE');

doc.setFontType("normal");
doc.text(695, group_h, '$000,000,000');

//----------------- ROW 2-----------------------//
doc.setFontType("bold");
doc.text(15, group_h+11, 'PURCHASED');

doc.setFontType("normal");
doc.text(90, group_h+11, '00-MON-00');

doc.setFontType("bold");
doc.text(153, group_h+11, 'LAST VT SCAN');

doc.setFontType("normal");
doc.text(245, group_h+11, '00-MON-00');

doc.setFontType("bold");
doc.text(372, group_h+11, 'SERIAL');

doc.setFontType("normal");
var serialText = 'XC08918729387645287'
var splitSerial = doc.splitTextToSize(serialText, 180);
doc.text(splitSerial[0],450, group_h+11);

doc.setFontType("bold");
doc.text(635, group_h+11, 'BUILDING');

doc.setFontType("normal");
doc.text(695, group_h+11, 'Building Name Here');

//----------------- ROW 3-----------------------//
doc.setFontType("bold");
doc.text(15, group_h+22, 'PO NUMBER');

doc.setFontType("normal");
doc.text(90, group_h+22, 'P30909090');

doc.setFontType("bold");
doc.text(153, group_h+22, 'CONDITION');

doc.setFontType("normal");
doc.text(245, group_h+22, 'Good');

doc.setFontType("bold");
doc.text(372, group_h+22, 'ORGANIZATION');

doc.setFontType("normal");
var orgText = 'School of Architecture and Design';
var splitORG = doc.splitTextToSize(orgText, 180);
doc.text(splitORG[0],450, group_h+22);

doc.setFontType("bold");
doc.text(635, group_h+22, 'ROOM');

doc.setFontType("normal");
doc.text(695, group_h+22, '000-000');

//----------------- ROW 4 -----------------------//
doc.setFontType("bold");
doc.text(15, group_h+33, 'STATUS');

doc.setFontType("normal");
doc.text(90, group_h+33, 'OFFICE');

doc.setFontType("bold");
doc.text(153, group_h+33, 'OWNERSHIP');

doc.setFontType("normal");
doc.text(245, group_h+33, 'University Owned');

doc.setFontType("bold");
doc.text(372, group_h+33, 'CUSTODIAN');

doc.setFontType("normal");
var custText = 'Longstreet, Reginald';
var splitCust = doc.splitTextToSize(custText, 180);
doc.text(splitCust[0],450, group_h+33);

doc.setFontType("bold");
doc.text(635, group_h+33, '');

doc.setFontType("normal");
doc.text(695, group_h+33, '');

doc.setLineWidth(0.25);
doc.line(15, group_h+38, 777, group_h+38);
//----------------- NINTH ENTRY -----------------------//
doc.setFont("helvetica");
doc.setFontSize(9);
doc.setFontType("bold");
doc.text(15, group_i, 'TAG NUMBER');

doc.setFontType("normal");
doc.text(90, group_i, '000000000');

doc.setFontType("bold");
doc.text(153, group_i, 'MANUFACTURER');

doc.setFontType("normal");
doc.text(245, group_i, 'MANUFACTURER NAME');

doc.setFontType("bold");
doc.text(372, group_i, 'DESCRIPTION');

doc.setFontType("normal");
var descText = 'Insert lengthy nonsens edescription here blah blah blah'
var splitDesc = doc.splitTextToSize(descText, 180);
doc.text(splitDesc[0],450, group_i,);

doc.setFontType("bold");
doc.text(635, group_i, 'VALUE');

doc.setFontType("normal");
doc.text(695, group_i, '$000,000,000');

//----------------- ROW 2-----------------------//
doc.setFontType("bold");
doc.text(15, group_i+11, 'PURCHASED');

doc.setFontType("normal");
doc.text(90, group_i+11, '00-MON-00');

doc.setFontType("bold");
doc.text(153, group_i+11, 'LAST VT SCAN');

doc.setFontType("normal");
doc.text(245, group_i+11, '00-MON-00');

doc.setFontType("bold");
doc.text(372, group_i+11, 'SERIAL');

doc.setFontType("normal");
var serialText = 'XC08918729387645287'
var splitSerial = doc.splitTextToSize(serialText, 180);
doc.text(splitSerial[0],450, group_i+11);

doc.setFontType("bold");
doc.text(635, group_i+11, 'BUILDING');

doc.setFontType("normal");
doc.text(695, group_i+11, 'Building Name Here');

//----------------- ROW 3-----------------------//
doc.setFontType("bold");
doc.text(15, group_i+22, 'PO NUMBER');

doc.setFontType("normal");
doc.text(90, group_i+22, 'P30909090');

doc.setFontType("bold");
doc.text(153, group_i+22, 'CONDITION');

doc.setFontType("normal");
doc.text(245, group_i+22, 'Good');

doc.setFontType("bold");
doc.text(372, group_i+22, 'ORGANIZATION');

doc.setFontType("normal");
var orgText = 'School of Architecture and Design';
var splitORG = doc.splitTextToSize(orgText, 180);
doc.text(splitORG[0],450, group_i+22);

doc.setFontType("bold");
doc.text(635, group_i+22, 'ROOM');

doc.setFontType("normal");
doc.text(695, group_i+22, '000-000');

//----------------- ROW 4 -----------------------//
doc.setFontType("bold");
doc.text(15, group_i+33, 'STATUS');

doc.setFontType("normal");
doc.text(90, group_i+33, 'OFFICE');

doc.setFontType("bold");
doc.text(153, group_i+33, 'OWNERSHIP');

doc.setFontType("normal");
doc.text(245, group_i+33, 'University Owned');

doc.setFontType("bold");
doc.text(372, group_i+33, 'CUSTODIAN');

doc.setFontType("normal");
var custText = 'Longstreet, Reginald';
var splitCust = doc.splitTextToSize(custText, 180);
doc.text(splitCust[0],450, group_i+33);

doc.setFontType("bold");
doc.text(635, group_i+33, '');

doc.setFontType("normal");
doc.text(695, group_i+33, '');

doc.setLineWidth(0.25);
doc.line(15, group_i+38, 777, group_i+38);

//----------------- TENTH ENTRY -----------------------//
doc.setFont("helvetica");
doc.setFontSize(9);
doc.setFontType("bold");
doc.text(15, group_j, 'TAG NUMBER');

doc.setFontType("normal");
doc.text(90, group_j, '000000000');

doc.setFontType("bold");
doc.text(153, group_j, 'MANUFACTURER');

doc.setFontType("normal");
doc.text(245, group_j, 'MANUFACTURER NAME');

doc.setFontType("bold");
doc.text(372, group_j, 'DESCRIPTION');

doc.setFontType("normal");
var descText = 'Insert lengthy nonsens edescription here blah blah blah'
var splitDesc = doc.splitTextToSize(descText, 180);
doc.text(splitDesc[0],450, group_j,);

doc.setFontType("bold");
doc.text(635, group_j, 'VALUE');

doc.setFontType("normal");
doc.text(695, group_j, '$000,000,000');

//----------------- ROW 2-----------------------//
doc.setFontType("bold");
doc.text(15, group_j+11, 'PURCHASED');

doc.setFontType("normal");
doc.text(90, group_j+11, '00-MON-00');

doc.setFontType("bold");
doc.text(153, group_j+11, 'LAST VT SCAN');

doc.setFontType("normal");
doc.text(245, group_j+11, '00-MON-00');

doc.setFontType("bold");
doc.text(372, group_j+11, 'SERIAL');

doc.setFontType("normal");
var serialText = 'XC08918729387645287'
var splitSerial = doc.splitTextToSize(serialText, 180);
doc.text(splitSerial[0],450, group_j+11);

doc.setFontType("bold");
doc.text(635, group_j+11, 'BUILDING');

doc.setFontType("normal");
doc.text(695, group_j+11, 'Building Name Here');

//----------------- ROW 3-----------------------//
doc.setFontType("bold");
doc.text(15, group_j+22, 'PO NUMBER');

doc.setFontType("normal");
doc.text(90, group_j+22, 'P30909090');

doc.setFontType("bold");
doc.text(153, group_j+22, 'CONDITION');

doc.setFontType("normal");
doc.text(245, group_j+22, 'Good');

doc.setFontType("bold");
doc.text(372, group_j+22, 'ORGANIZATION');

doc.setFontType("normal");
var orgText = 'School of Architecture and Design';
var splitORG = doc.splitTextToSize(orgText, 180);
doc.text(splitORG[0],450, group_j+22);

doc.setFontType("bold");
doc.text(635, group_j+22, 'ROOM');

doc.setFontType("normal");
doc.text(695, group_j+22, '000-000');

//----------------- ROW 4 -----------------------//
doc.setFontType("bold");
doc.text(15, group_j+33, 'STATUS');

doc.setFontType("normal");
doc.text(90, group_j+33, 'OFFICE');

doc.setFontType("bold");
doc.text(153, group_j+33, 'OWNERSHIP');

doc.setFontType("normal");
doc.text(245, group_j+33, 'University Owned');

doc.setFontType("bold");
doc.text(372, group_j+33, 'CUSTODIAN');

doc.setFontType("normal");
var custText = 'Longstreet, Reginald';
var splitCust = doc.splitTextToSize(custText, 180);
doc.text(splitCust[0],450, group_j+33);

doc.setFontType("bold");
doc.text(635, group_j+33, '');

doc.setFontType("normal");
doc.text(695, group_j+33, '');

doc.setLineWidth(0.25);
doc.line(15, group_j+38, 777, group_j+38);

//----------------- ELEVENTH ENTRY -----------------------//
doc.setFont("helvetica");
doc.setFontSize(9);
doc.setFontType("bold");
doc.text(15, group_k, 'TAG NUMBER');

doc.setFontType("normal");
doc.text(90, group_k, '000000000');

doc.setFontType("bold");
doc.text(153, group_k, 'MANUFACTURER');

doc.setFontType("normal");
doc.text(245, group_k, 'MANUFACTURER NAME');

doc.setFontType("bold");
doc.text(372, group_k, 'DESCRIPTION');

doc.setFontType("normal");
var descText = 'Insert lengthy nonsens edescription here blah blah blah'
var splitDesc = doc.splitTextToSize(descText, 180);
doc.text(splitDesc[0],450, group_k,);

doc.setFontType("bold");
doc.text(635, group_k, 'VALUE');

doc.setFontType("normal");
doc.text(695, group_k, '$000,000,000');

//----------------- ROW 2-----------------------//
doc.setFontType("bold");
doc.text(15, group_k+11, 'PURCHASED');

doc.setFontType("normal");
doc.text(90, group_k+11, '00-MON-00');

doc.setFontType("bold");
doc.text(153, group_k+11, 'LAST VT SCAN');

doc.setFontType("normal");
doc.text(245, group_k+11, '00-MON-00');

doc.setFontType("bold");
doc.text(372, group_k+11, 'SERIAL');

doc.setFontType("normal");
var serialText = 'XC08918729387645287'
var splitSerial = doc.splitTextToSize(serialText, 180);
doc.text(splitSerial[0],450, group_k+11);

doc.setFontType("bold");
doc.text(635, group_k+11, 'BUILDING');

doc.setFontType("normal");
doc.text(695, group_k+11, 'Building Name Here');

//----------------- ROW 3-----------------------//
doc.setFontType("bold");
doc.text(15, group_k+22, 'PO NUMBER');

doc.setFontType("normal");
doc.text(90, group_k+22, 'P30909090');

doc.setFontType("bold");
doc.text(153, group_k+22, 'CONDITION');

doc.setFontType("normal");
doc.text(245, group_k+22, 'Good');

doc.setFontType("bold");
doc.text(372, group_k+22, 'ORGANIZATION');

doc.setFontType("normal");
var orgText = 'School of Architecture and Design';
var splitORG = doc.splitTextToSize(orgText, 180);
doc.text(splitORG[0],450, group_k+22);

doc.setFontType("bold");
doc.text(635, group_k+22, 'ROOM');

doc.setFontType("normal");
doc.text(695, group_k+22, '000-000');

//----------------- ROW 4 -----------------------//
doc.setFontType("bold");
doc.text(15, group_k+33, 'STATUS');

doc.setFontType("normal");
doc.text(90, group_k+33, 'OFFICE');

doc.setFontType("bold");
doc.text(153, group_k+33, 'OWNERSHIP');

doc.setFontType("normal");
doc.text(245, group_k+33, 'University Owned');

doc.setFontType("bold");
doc.text(372, group_k+33, 'CUSTODIAN');

doc.setFontType("normal");
var custText = 'Longstreet, Reginald';
var splitCust = doc.splitTextToSize(custText, 180);
doc.text(splitCust[0],450, group_k+33);

doc.setFontType("bold");
doc.text(635, group_k+33, '');

doc.setFontType("normal");
doc.text(695, group_k+33, '');

doc.setLineWidth(0.25);
doc.line(15, group_k+38, 777, group_k+38);

//----------------- REPORT TYPE -----------------------//
doc.setFont("helvetica");
doc.setFontSize(14);
doc.setFontType("bold");
doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(15, group_k+50, 225, 25, 'FD');
doc.text(25, group_l+17, 'REPORT TYPE');

doc.setFontType("normal");
doc.setDrawColor(0);
doc.setFillColor(255,255,255);
doc.rect(240, group_k+50, 385, 25, 'FD');
doc.text(250, group_l+17, 'Search Criteria');

doc.setDrawColor(0);
doc.setFillColor(225,225,225);
doc.rect(625, group_k+50, 75, 25, 'FD');
doc.text(635, group_l+17, 'PAGES');

doc.setFontType("normal");
doc.setDrawColor(0);
doc.setFillColor(255,255,255);
doc.rect(700, group_k+50, 75, 25, 'FD');
doc.text(710, group_l+17, '000/000');

var filename = 'Individual_Assets.pdf';
doc.save(filename);
}