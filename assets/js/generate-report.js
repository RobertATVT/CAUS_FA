function generatePrintedReport(assets) {
    var numPages = Math.ceil(assets.length / 11);
        
    var doc = new jsPDF('landscape','pt',[612,792]);

    for (var index=0; index < numPages; index++){
 
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

        if (assets.length %11 > 0){
            //----------------- FIRST ENTRY -----------------------//
            doc.setFont("helvetica");
            doc.setFontSize(9);
            doc.setFontType("bold");
            doc.text(15, group_a, 'TAG NUMBER');

            doc.setFontType("normal");
            doc.text(90, group_a, assets[i*11+0][ptag]);

            doc.setFontType("bold");
            doc.text(153, group_a, 'MANUFACTURER');

            doc.setFontType("normal");
            doc.text(245, group_a,  assets[i*11+0][manufacturer]);

            doc.setFontType("bold");
            doc.text(372, group_a, 'DESCRIPTION');

            doc.setFontType("normal");
            var descText = assets[i*11+0][description];
            var splitDesc = doc.splitTextToSize(descText, 180);
            doc.text(splitDesc[0],450, group_a,);

            doc.setFontType("bold");
            doc.text(635, group_a, 'VALUE');

            doc.setFontType("normal");
            doc.text(695, group_a, assets[i*11+0][value];

            //----------------- ROW 2-----------------------//
            doc.setFontType("bold");
            doc.text(15, group_a+11, 'PURCHASED');

            doc.setFontType("normal");
            doc.text(90, group_a+11, assets[i*11+0][purchased]);

            doc.setFontType("bold");
            doc.text(153, group_a+11, 'LAST VT SCAN');

            doc.setFontType("normal");
            doc.text(245, group_a+11, assets[i*11+0][vtscan]);

            doc.setFontType("bold");
            doc.text(372, group_a+11, 'SERIAL');

            doc.setFontType("normal");
            var serialText = assets[i*11+0][serial_num];
            var splitSerial = doc.splitTextToSize(serialText, 180);
            doc.text(splitSerial[0],450, group_a+11);

            doc.setFontType("bold");
            doc.text(635, group_a+11, 'BUILDING');

            doc.setFontType("normal");
            doc.text(695, group_a+11, assets[i*11+0][bldg]);

            //----------------- ROW 3-----------------------//
            doc.setFontType("bold");
            doc.text(15, group_a+22, 'PO NUMBER');

            doc.setFontType("normal");
            doc.text(90, group_a+22, assets[i*11+0][po]);

            doc.setFontType("bold");
            doc.text(153, group_a+22, 'CONDITION');

            doc.setFontType("normal");
            doc.text(245, group_a+22, assets[i*11+0][condition]);

            doc.setFontType("bold");
            doc.text(372, group_a+22, 'ORGANIZATION');

            doc.setFontType("normal");
            var orgText = assets[i*11+0][org_code];
            var splitORG = doc.splitTextToSize(orgText, 180);
            doc.text(splitORG[0],450, group_a+22);

            doc.setFontType("bold");
            doc.text(635, group_a+22, 'ROOM');

            doc.setFontType("normal");
            doc.text(695, group_a+22, assets[i*11+0][room]);

            //----------------- ROW 4 -----------------------//
            doc.setFontType("bold");
            doc.text(15, group_a+33, 'STATUS');

            doc.setFontType("normal");
            doc.text(90, group_a+33, assets[i*11+0][status]);

            doc.setFontType("bold");
            doc.text(153, group_a+33, 'OWNERSHIP');

            doc.setFontType("normal");
            doc.text(245, group_a+33, assets[i*11+0][owner]);

            doc.setFontType("bold");
            doc.text(372, group_a+33, 'CUSTODIAN');

            doc.setFontType("normal");
            var custText = assets[i*11+0][custodian];
            var splitCust = doc.splitTextToSize(custText, 180);
            doc.text(splitCust[0],450, group_a+33);

            doc.setFontType("bold");
            doc.text(635, group_a+33, '');

            doc.setFontType("normal");
            doc.text(695, group_a+33, '');

            doc.setLineWidth(0.25);
            doc.line(15, group_a+38, 777, group_a+38);
        }
        if (assets.length %11 > 1){
            //----------------- SECOND ENTRY -----------------------//
            doc.setFont("helvetica");
            doc.setFontSize(9);
            doc.setFontType("bold");
            doc.text(15, group_b, 'TAG NUMBER');

            doc.setFontType("normal");
            doc.text(90, group_b, assets[i*11+1][ptag]);

            doc.setFontType("bold");
            doc.text(153, group_b, 'MANUFACTURER');

            doc.setFontType("normal");
            doc.text(245, group_b, assets[i*11+1][manufacturer]');

            doc.setFontType("bold");
            doc.text(372, group_b, 'DESCRIPTION');

            doc.setFontType("normal");
            var descText = assets[i*11+1][description];
            var splitDesc = doc.splitTextToSize(descText, 180);
            doc.text(splitDesc[0],450, group_b,);

            doc.setFontType("bold");
            doc.text(635, group_b, 'VALUE');

            doc.setFontType("normal");
            doc.text(695, group_b, assets[i*11+1][value]);

            //----------------- ROW 2-----------------------//
            doc.setFontType("bold");
            doc.text(15, group_b+11, 'PURCHASED');

            doc.setFontType("normal");
            doc.text(90, group_b+11, assets[i*11+1][purchased]);

            doc.setFontType("bold");
            doc.text(153, group_b+11, 'LAST VT SCAN');

            doc.setFontType("normal");
            doc.text(245, group_b+11, assets[i*11+1][vtscan]);

            doc.setFontType("bold");
            doc.text(372, group_b+11, 'SERIAL');

            doc.setFontType("normal");
            var serialText = assets[i*11+1][serial_num];
            var splitSerial = doc.splitTextToSize(serialText, 180);
            doc.text(splitSerial[0],450, group_b+11);

            doc.setFontType("bold");
            doc.text(635, group_b+11, 'BUILDING');

            doc.setFontType("normal");
            doc.text(695, group_b+11, assets[i*11+1][bldg]);

            //----------------- ROW 3-----------------------//
            doc.setFontType("bold");
            doc.text(15, group_b+22, 'PO NUMBER');

            doc.setFontType("normal");
            doc.text(90, group_b+22, assets[i*11+1][po]);

            doc.setFontType("bold");
            doc.text(153, group_b+22, 'CONDITION');

            doc.setFontType("normal");
            doc.text(245, group_b+22, assets[i*11+1][condition]);

            doc.setFontType("bold");
            doc.text(372, group_b+22, 'ORGANIZATION');

            doc.setFontType("normal");
            var orgText = assets[i*11+1][orgn];
            var splitORG = doc.splitTextToSize(orgText, 180);
            doc.text(splitORG[0],450, group_b+22);

            doc.setFontType("bold");
            doc.text(635, group_b+22, 'ROOM');

            doc.setFontType("normal");
            doc.text(695, group_b+22, assets[i*11+1][room]);

            //----------------- ROW 4 -----------------------//
            doc.setFontType("bold");
            doc.text(15, group_b+33, 'STATUS');

            doc.setFontType("normal");
            doc.text(90, group_b+33, assets[i*11+1][status]);

            doc.setFontType("bold");
            doc.text(153, group_b+33, 'OWNERSHIP');

            doc.setFontType("normal");
            doc.text(245, group_b+33, assets[i*11+1][owner]);

            doc.setFontType("bold");
            doc.text(372, group_b+33, 'CUSTODIAN');

            doc.setFontType("normal");
            var custText = assets[i*11+1][custodian];
            var splitCust = doc.splitTextToSize(custText, 180);
            doc.text(splitCust[0],450, group_b+33);

            doc.setFontType("bold");
            doc.text(635, group_b+33, '');

            doc.setFontType("normal");
            doc.text(695, group_b+33, '');

            doc.setLineWidth(0.25);
            doc.line(15, group_b+38, 777, group_b+38);
        }
        if (assets.length %11 > 2){
            //----------------- THIRD ENTRY -----------------------//
            doc.setFont("helvetica");
            doc.setFontSize(9);
            doc.setFontType("bold");
            doc.text(15, group_c, 'TAG NUMBER');

            doc.setFontType("normal");
            doc.text(90, group_c, assets[i*11+2][ptag]);

            doc.setFontType("bold");
            doc.text(153, group_c, 'MANUFACTURER');

            doc.setFontType("normal");
            doc.text(245, group_c, assets[i*11+2][manufacturer]);

            doc.setFontType("bold");
            doc.text(372, group_c, 'DESCRIPTION');

            doc.setFontType("normal");
            var descText = assets[i*11+2][description];
            var splitDesc = doc.splitTextToSize(descText, 180);
            doc.text(splitDesc[0],450, group_c,);

            doc.setFontType("bold");
            doc.text(635, group_c, 'VALUE');

            doc.setFontType("normal");
            doc.text(695, group_c, assets[i*11+2][value]);

            //----------------- ROW 2-----------------------//
            doc.setFontType("bold");
            doc.text(15, group_c+11, 'PURCHASED');

            doc.setFontType("normal");
            doc.text(90, group_c+11, assets[i*11+2][purchased]);

            doc.setFontType("bold");
            doc.text(153, group_c+11, 'LAST VT SCAN');

            doc.setFontType("normal");
            doc.text(245, group_c+11, assets[i*11+2][vtscan]);

            doc.setFontType("bold");
            doc.text(372, group_c+11, 'SERIAL');

            doc.setFontType("normal");
            var serialText = assets[i*11+2][serial_num];
            var splitSerial = doc.splitTextToSize(serialText, 180);
            doc.text(splitSerial[0],450, group_c+11);

            doc.setFontType("bold");
            doc.text(635, group_c+11, 'BUILDING');

            doc.setFontType("normal");
            doc.text(695, group_c+11, assets[i*11+2][bldg]);

            //----------------- ROW 3-----------------------//
            doc.setFontType("bold");
            doc.text(15, group_c+22, 'PO NUMBER');

            doc.setFontType("normal");
            doc.text(90, group_c+22, assets[i*11+2][po]);

            doc.setFontType("bold");
            doc.text(153, group_c+22, 'CONDITION');

            doc.setFontType("normal");
            doc.text(245, group_c+22, assets[i*11+2][condition]);

            doc.setFontType("bold");
            doc.text(372, group_c+22, 'ORGANIZATION');

            doc.setFontType("normal");
            var orgText = assets[i*11+2][orgn];
            var splitORG = doc.splitTextToSize(orgText, 180);
            doc.text(splitORG[0],450, group_c+22);

            doc.setFontType("bold");
            doc.text(635, group_c+22, 'ROOM');

            doc.setFontType("normal");
            doc.text(695, group_c+22, assets[i*11+2][room]);

            //----------------- ROW 4 -----------------------//
            doc.setFontType("bold");
            doc.text(15, group_c+33, 'STATUS');

            doc.setFontType("normal");
            doc.text(90, group_c+33, assets[i*11+2][status]);

            doc.setFontType("bold");
            doc.text(153, group_c+33, 'OWNERSHIP');

            doc.setFontType("normal");
            doc.text(245, group_c+33, assets[i*11+2][owner]);

            doc.setFontType("bold");
            doc.text(372, group_c+33, 'CUSTODIAN');

            doc.setFontType("normal");
            var custText = assets[i*11+2][custodian];
            var splitCust = doc.splitTextToSize(custText, 180);
            doc.text(splitCust[0],450, group_c+33);

            doc.setFontType("bold");
            doc.text(635, group_c+33, '');

            doc.setFontType("normal");
            doc.text(695, group_c+33, '');

            doc.setLineWidth(0.25);
            doc.line(15, group_c+38, 777, group_c+38);
        }
        if (assets.length %11 > 3){
            //----------------- FOURTH ENTRY -----------------------//
            doc.setFont("helvetica");
            doc.setFontSize(9);
            doc.setFontType("bold");
            doc.text(15, group_d, 'TAG NUMBER');

            doc.setFontType("normal");
            doc.text(90, group_d, assets[i*11+3][ptag]);

            doc.setFontType("bold");
            doc.text(153, group_d, 'MANUFACTURER');

            doc.setFontType("normal");
            doc.text(245, group_d, assets[i*11+3][manufacturer]);

            doc.setFontType("bold");
            doc.text(372, group_d, 'DESCRIPTION');

            doc.setFontType("normal");
            var descText = assets[i*11+3][description];
            var splitDesc = doc.splitTextToSize(descText, 180);
            doc.text(splitDesc[0],450, group_d,);

            doc.setFontType("bold");
            doc.text(635, group_d, 'VALUE');

            doc.setFontType("normal");
            doc.text(695, group_d, assets[i*11+3][value]);

            //----------------- ROW 2-----------------------//
            doc.setFontType("bold");
            doc.text(15, group_d+11, 'PURCHASED');

            doc.setFontType("normal");
            doc.text(90, group_d+11, assets[i*11+3][purchased]);

            doc.setFontType("bold");
            doc.text(153, group_d+11, 'LAST VT SCAN');

            doc.setFontType("normal");
            doc.text(245, group_d+11, assets[i*11+3][vtscan]);

            doc.setFontType("bold");
            doc.text(372, group_d+11, 'SERIAL');

            doc.setFontType("normal");
            var serialText = assets[i*11+3][serial_num];
            var splitSerial = doc.splitTextToSize(serialText, 180);
            doc.text(splitSerial[0],450, group_d+11);

            doc.setFontType("bold");
            doc.text(635, group_d+11, 'BUILDING');

            doc.setFontType("normal");
            doc.text(695, group_d+11, assets[i*11+3][bldg]);

            //----------------- ROW 3-----------------------//
            doc.setFontType("bold");
            doc.text(15, group_d+22, 'PO NUMBER');

            doc.setFontType("normal");
            doc.text(90, group_d+22, assets[i*11+3][po]);

            doc.setFontType("bold");
            doc.text(153, group_d+22, 'CONDITION');

            doc.setFontType("normal");
            doc.text(245, group_d+22, assets[i*11+3][condition]);

            doc.setFontType("bold");
            doc.text(372, group_d+22, 'ORGANIZATION');

            doc.setFontType("normal");
            var orgText = assets[i*11+3][orgn];
            var splitORG = doc.splitTextToSize(orgText, 180);
            doc.text(splitORG[0],450, group_d+22);

            doc.setFontType("bold");
            doc.text(635, group_d+22, 'ROOM');

            doc.setFontType("normal");
            doc.text(695, group_d+22, assets[i*11+3][room]);

            //----------------- ROW 4 -----------------------//
            doc.setFontType("bold");
            doc.text(15, group_d+33, 'STATUS');

            doc.setFontType("normal");
            doc.text(90, group_d+33, assets[i*11+3][status]);

            doc.setFontType("bold");
            doc.text(153, group_d+33, 'OWNERSHIP');

            doc.setFontType("normal");
            doc.text(245, group_d+33, assets[i*11+3][owner]);

            doc.setFontType("bold");
            doc.text(372, group_d+33, 'CUSTODIAN');

            doc.setFontType("normal");
            var custText = assets[i*11+3][custodian];
            var splitCust = doc.splitTextToSize(custText, 180);
            doc.text(splitCust[0],450, group_d+33);

            doc.setFontType("bold");
            doc.text(635, group_d+33, '');

            doc.setFontType("normal");
            doc.text(695, group_d+33, '');

            doc.setLineWidth(0.25);
            doc.line(15, group_d+38, 777, group_d+38);
        }
        if (assets.length %11 > 4){
            //----------------- FIFTH ENTRY -----------------------//
            doc.setFont("helvetica");
            doc.setFontSize(9);
            doc.setFontType("bold");
            doc.text(15, group_e, 'TAG NUMBER');

            doc.setFontType("normal");
            doc.text(90, group_e, assets[i*11+4][ptag]);

            doc.setFontType("bold");
            doc.text(153, group_e, 'MANUFACTURER');

            doc.setFontType("normal");
            doc.text(245, group_e, assets[i*11+4][manufacturer]);

            doc.setFontType("bold");
            doc.text(372, group_e, 'DESCRIPTION');

            doc.setFontType("normal");
            var descText = assets[i*11+4][description];
            var splitDesc = doc.splitTextToSize(descText, 180);
            doc.text(splitDesc[0],450, group_e,);

            doc.setFontType("bold");
            doc.text(635, group_e, 'VALUE');

            doc.setFontType("normal");
            doc.text(695, group_e, assets[i*11+4][value]);

            //----------------- ROW 2-----------------------//
            doc.setFontType("bold");
            doc.text(15, group_e+11, 'PURCHASED');

            doc.setFontType("normal");
            doc.text(90, group_e+11, assets[i*11+4][purchased]);

            doc.setFontType("bold");
            doc.text(153, group_e+11, 'LAST VT SCAN');

            doc.setFontType("normal");
            doc.text(245, group_e+11, assets[i*11+4][vtscan]);

            doc.setFontType("bold");
            doc.text(372, group_e+11, 'SERIAL');

            doc.setFontType("normal");
            var serialText = assets[i*11+4][serial_num];
            var splitSerial = doc.splitTextToSize(serialText, 180);
            doc.text(splitSerial[0],450, group_e+11);

            doc.setFontType("bold");
            doc.text(635, group_e+11, 'BUILDING');

            doc.setFontType("normal");
            doc.text(695, group_e+11, assets[i*11+4][bldg]);

            //----------------- ROW 3-----------------------//
            doc.setFontType("bold");
            doc.text(15, group_e+22, 'PO NUMBER');

            doc.setFontType("normal");
            doc.text(90, group_e+22, assets[i*11+4][po]);

            doc.setFontType("bold");
            doc.text(153, group_e+22, 'CONDITION');

            doc.setFontType("normal");
            doc.text(245, group_e+22, assets[i*11+4][condition]);

            doc.setFontType("bold");
            doc.text(372, group_e+22, 'ORGANIZATION');

            doc.setFontType("normal");
            var orgText = assets[i*11+4][orgn];
            var splitORG = doc.splitTextToSize(orgText, 180);
            doc.text(splitORG[0],450, group_e+22);

            doc.setFontType("bold");
            doc.text(635, group_e+22, 'ROOM');

            doc.setFontType("normal");
            doc.text(695, group_e+22, assets[i*11+4][room]);

            //----------------- ROW 4 -----------------------//
            doc.setFontType("bold");
            doc.text(15, group_e+33, 'STATUS');

            doc.setFontType("normal");
            doc.text(90, group_e+33, assets[i*11+4][status]);

            doc.setFontType("bold");
            doc.text(153, group_e+33, 'OWNERSHIP');

            doc.setFontType("normal");
            doc.text(245, group_e+33, assets[i*11+4][owner]);

            doc.setFontType("bold");
            doc.text(372, group_e+33, 'CUSTODIAN');

            doc.setFontType("normal");
            var custText = assets[i*11+4][custodian];
            var splitCust = doc.splitTextToSize(custText, 180);
            doc.text(splitCust[0],450, group_e+33);

            doc.setFontType("bold");
            doc.text(635, group_e+33, '');

            doc.setFontType("normal");
            doc.text(695, group_e+33, '');

            doc.setLineWidth(0.25);
            doc.line(15, group_e+38, 777, group_e+38);
        }
        if (assets.length %11 > 5){
            //----------------- SIXTH ENTRY -----------------------//
            doc.setFont("helvetica");
            doc.setFontSize(9);
            doc.setFontType("bold");
            doc.text(15, group_f, 'TAG NUMBER');

            doc.setFontType("normal");
            doc.text(90, group_f, assets[i*11+5][ptag]);

            doc.setFontType("bold");
            doc.text(153, group_f, 'MANUFACTURER');

            doc.setFontType("normal");
            doc.text(245, group_f, assets[i*11+5][manufacturer]);

            doc.setFontType("bold");
            doc.text(372, group_f, 'DESCRIPTION');

            doc.setFontType("normal");
            var descText = assets[i*11+5][description];
            var splitDesc = doc.splitTextToSize(descText, 180);
            doc.text(splitDesc[0],450, group_f,);

            doc.setFontType("bold");
            doc.text(635, group_f, 'VALUE');

            doc.setFontType("normal");
            doc.text(695, group_f, assets[i*11+5][value]);

            //----------------- ROW 2-----------------------//
            doc.setFontType("bold");
            doc.text(15, group_f+11, 'PURCHASED');

            doc.setFontType("normal");
            doc.text(90, group_f+11, assets[i*11+5][purchased]);

            doc.setFontType("bold");
            doc.text(153, group_f+11, 'LAST VT SCAN');

            doc.setFontType("normal");
            doc.text(245, group_f+11, assets[i*11+5][vtscan]);

            doc.setFontType("bold");
            doc.text(372, group_f+11, 'SERIAL');

            doc.setFontType("normal");
            var serialText = assets[i*11+5][serial_num];
            var splitSerial = doc.splitTextToSize(serialText, 180);
            doc.text(splitSerial[0],450, group_f+11);

            doc.setFontType("bold");
            doc.text(635, group_f+11, 'BUILDING');

            doc.setFontType("normal");
            doc.text(695, group_f+11, assets[i*11+5][bldg]);

            //----------------- ROW 3-----------------------//
            doc.setFontType("bold");
            doc.text(15, group_f+22, 'PO NUMBER');

            doc.setFontType("normal");
            doc.text(90, group_f+22, assets[i*11+5][po]);

            doc.setFontType("bold");
            doc.text(153, group_f+22, 'CONDITION');

            doc.setFontType("normal");
            doc.text(245, group_f+22, assets[i*11+5][condition]);

            doc.setFontType("bold");
            doc.text(372, group_f+22, 'ORGANIZATION');

            doc.setFontType("normal");
            var orgText = assets[i*11+5][orgn];
            var splitORG = doc.splitTextToSize(orgText, 180);
            doc.text(splitORG[0],450, group_f+22);

            doc.setFontType("bold");
            doc.text(635, group_f+22, 'ROOM');

            doc.setFontType("normal");
            doc.text(695, group_f+22, assets[i*11+5][room]);

            //----------------- ROW 4 -----------------------//
            doc.setFontType("bold");
            doc.text(15, group_f+33, 'STATUS');

            doc.setFontType("normal");
            doc.text(90, group_f+33, assets[i*11+5][status]);

            doc.setFontType("bold");
            doc.text(153, group_f+33, 'OWNERSHIP');

            doc.setFontType("normal");
            doc.text(245, group_f+33, assets[i*11+5][owner]);

            doc.setFontType("bold");
            doc.text(372, group_f+33, 'CUSTODIAN');

            doc.setFontType("normal");
            var custText = assets[i*11+5][custodian];
            var splitCust = doc.splitTextToSize(custText, 180);
            doc.text(splitCust[0],450, group_f+33);

            doc.setFontType("bold");
            doc.text(635, group_f+33, '');

            doc.setFontType("normal");
            doc.text(695, group_f+33, '');

            doc.setLineWidth(0.25);
            doc.line(15, group_f+38, 777, group_f+38);
        }
        if (assets.length %11 > 6){
            //----------------- SEVENTH ENTRY -----------------------//
            doc.setFont("helvetica");
            doc.setFontSize(9);
            doc.setFontType("bold");
            doc.text(15, group_g, 'TAG NUMBER');

            doc.setFontType("normal");
            doc.text(90, group_g, assets[i*11+6][ptag]);

            doc.setFontType("bold");
            doc.text(153, group_g, 'MANUFACTURER');

            doc.setFontType("normal");
            doc.text(245, group_g, assets[i*11+6][manufacturer]);

            doc.setFontType("bold");
            doc.text(372, group_g, 'DESCRIPTION');

            doc.setFontType("normal");
            var descText = assets[i*11+6][description];
            var splitDesc = doc.splitTextToSize(descText, 180);
            doc.text(splitDesc[0],450, group_g,);

            doc.setFontType("bold");
            doc.text(635, group_g, 'VALUE');

            doc.setFontType("normal");
            doc.text(695, group_g, assets[i*11+6][value]);

            //----------------- ROW 2-----------------------//
            doc.setFontType("bold");
            doc.text(15, group_g+11, 'PURCHASED');

            doc.setFontType("normal");
            doc.text(90, group_g+11, assets[i*11+6][purchased]);

            doc.setFontType("bold");
            doc.text(153, group_g+11, 'LAST VT SCAN');

            doc.setFontType("normal");
            doc.text(245, group_g+11, assets[i*11+6][vtscan]);

            doc.setFontType("bold");
            doc.text(372, group_g+11, 'SERIAL');

            doc.setFontType("normal");
            var serialText = assets[i*11+6][serial_num];
            var splitSerial = doc.splitTextToSize(serialText, 180);
            doc.text(splitSerial[0],450, group_g+11);

            doc.setFontType("bold");
            doc.text(635, group_g+11, 'BUILDING');

            doc.setFontType("normal");
            doc.text(695, group_g+11, assets[i*11+6][bldg]);

            //----------------- ROW 3-----------------------//
            doc.setFontType("bold");
            doc.text(15, group_g+22, 'PO NUMBER');

            doc.setFontType("normal");
            doc.text(90, group_g+22, assets[i*11+6][po]);

            doc.setFontType("bold");
            doc.text(153, group_g+22, 'CONDITION');

            doc.setFontType("normal");
            doc.text(245, group_g+22, assets[i*11+6][condition]);

            doc.setFontType("bold");
            doc.text(372, group_g+22, 'ORGANIZATION');

            doc.setFontType("normal");
            var orgText = assets[i*11+6][orgn];
            var splitORG = doc.splitTextToSize(orgText, 180);
            doc.text(splitORG[0],450, group_g+22);

            doc.setFontType("bold");
            doc.text(635, group_g+22, 'ROOM');

            doc.setFontType("normal");
            doc.text(695, group_g+22, assets[i*11+6][room]);

            //----------------- ROW 4 -----------------------//
            doc.setFontType("bold");
            doc.text(15, group_g+33, 'STATUS');

            doc.setFontType("normal");
            doc.text(90, group_g+33, assets[i*11+6][status]);

            doc.setFontType("bold");
            doc.text(153, group_g+33, 'OWNERSHIP');

            doc.setFontType("normal");
            doc.text(245, group_g+33, assets[i*11+6][owner]);

            doc.setFontType("bold");
            doc.text(372, group_g+33, 'CUSTODIAN');

            doc.setFontType("normal");
            var custText = assets[i*11+6][custodian];
            var splitCust = doc.splitTextToSize(custText, 180);
            doc.text(splitCust[0],450, group_g+33);

            doc.setFontType("bold");
            doc.text(635, group_g+33, '');

            doc.setFontType("normal");
            doc.text(695, group_g+33, '');

            doc.setLineWidth(0.25);
            doc.line(15, group_g+38, 777, group_g+38);
        }
        if (assets.length %11 > 7){
            //----------------- EIGTH ENTRY -----------------------//
            doc.setFont("helvetica");
            doc.setFontSize(9);
            doc.setFontType("bold");
            doc.text(15, group_h, 'TAG NUMBER');

            doc.setFontType("normal");
            doc.text(90, group_h, assets[i*11+7][ptag]);

            doc.setFontType("bold");
            doc.text(153, group_h, 'MANUFACTURER');

            doc.setFontType("normal");
            doc.text(245, group_h, assets[i*11+7][manufacturer]);

            doc.setFontType("bold");
            doc.text(372, group_h, 'DESCRIPTION');

            doc.setFontType("normal");
            var descText = assets[i*11+7][description];
            var splitDesc = doc.splitTextToSize(descText, 180);
            doc.text(splitDesc[0],450, group_h,);

            doc.setFontType("bold");
            doc.text(635, group_h, 'VALUE');

            doc.setFontType("normal");
            doc.text(695, group_h, assets[i*11+7][value]);

            //----------------- ROW 2-----------------------//
            doc.setFontType("bold");
            doc.text(15, group_h+11, 'PURCHASED');

            doc.setFontType("normal");
            doc.text(90, group_h+11, assets[i*11+7][purchased]);

            doc.setFontType("bold");
            doc.text(153, group_h+11, 'LAST VT SCAN');

            doc.setFontType("normal");
            doc.text(245, group_h+11, assets[i*11+7][vtscan]);

            doc.setFontType("bold");
            doc.text(372, group_h+11, 'SERIAL');

            doc.setFontType("normal");
            var serialText = assets[i*11+7][serial_num];
            var splitSerial = doc.splitTextToSize(serialText, 180);
            doc.text(splitSerial[0],450, group_h+11);

            doc.setFontType("bold");
            doc.text(635, group_h+11, 'BUILDING');

            doc.setFontType("normal");
            doc.text(695, group_h+11, assets[i*11+7][bldg]);

            //----------------- ROW 3-----------------------//
            doc.setFontType("bold");
            doc.text(15, group_h+22, 'PO NUMBER');

            doc.setFontType("normal");
            doc.text(90, group_h+22, assets[i*11+7][po]);

            doc.setFontType("bold");
            doc.text(153, group_h+22, 'CONDITION');

            doc.setFontType("normal");
            doc.text(245, group_h+22, assets[i*11+7][condition]);

            doc.setFontType("bold");
            doc.text(372, group_h+22, 'ORGANIZATION');

            doc.setFontType("normal");
            var orgText = assets[i*11+7][orgn];
            var splitORG = doc.splitTextToSize(orgText, 180);
            doc.text(splitORG[0],450, group_h+22);

            doc.setFontType("bold");
            doc.text(635, group_h+22, 'ROOM');

            doc.setFontType("normal");
            doc.text(695, group_h+22, assets[i*11+7][room]);

            //----------------- ROW 4 -----------------------//
            doc.setFontType("bold");
            doc.text(15, group_h+33, 'STATUS');

            doc.setFontType("normal");
            doc.text(90, group_h+33, assets[i*11+7][status]);

            doc.setFontType("bold");
            doc.text(153, group_h+33, 'OWNERSHIP');

            doc.setFontType("normal");
            doc.text(245, group_h+33, assets[i*11+7][owner]);

            doc.setFontType("bold");
            doc.text(372, group_h+33, 'CUSTODIAN');

            doc.setFontType("normal");
            var custText = assets[i*11+7][custodian];
            var splitCust = doc.splitTextToSize(custText, 180);
            doc.text(splitCust[0],450, group_h+33);

            doc.setFontType("bold");
            doc.text(635, group_h+33, '');

            doc.setFontType("normal");
            doc.text(695, group_h+33, '');

            doc.setLineWidth(0.25);
            doc.line(15, group_h+38, 777, group_h+38);
        }
        if (assets.length %11 > 8){
            //----------------- NINTH ENTRY -----------------------//
            doc.setFont("helvetica");
            doc.setFontSize(9);
            doc.setFontType("bold");
            doc.text(15, group_i, 'TAG NUMBER');

            doc.setFontType("normal");
            doc.text(90, group_i, assets[i*11+8][ptag]);

            doc.setFontType("bold");
            doc.text(153, group_i, 'MANUFACTURER');

            doc.setFontType("normal");
            doc.text(245, group_i, assets[i*11+8][manufacturer]);

            doc.setFontType("bold");
            doc.text(372, group_i, 'DESCRIPTION');

            doc.setFontType("normal");
            var descText = assets[i*11+8][description];
            var splitDesc = doc.splitTextToSize(descText, 180);
            doc.text(splitDesc[0],450, group_i,);

            doc.setFontType("bold");
            doc.text(635, group_i, 'VALUE');

            doc.setFontType("normal");
            doc.text(695, group_i, assets[i*11+8][value]);

            //----------------- ROW 2-----------------------//
            doc.setFontType("bold");
            doc.text(15, group_i+11, 'PURCHASED');

            doc.setFontType("normal");
            doc.text(90, group_i+11, assets[i*11+8][purchased]);

            doc.setFontType("bold");
            doc.text(153, group_i+11, 'LAST VT SCAN');

            doc.setFontType("normal");
            doc.text(245, group_i+11, assets[i*11+8][vtscan]);

            doc.setFontType("bold");
            doc.text(372, group_i+11, 'SERIAL');

            doc.setFontType("normal");
            var serialText = assets[i*11+8][serial_num];
            var splitSerial = doc.splitTextToSize(serialText, 180);
            doc.text(splitSerial[0],450, group_i+11);

            doc.setFontType("bold");
            doc.text(635, group_i+11, 'BUILDING');

            doc.setFontType("normal");
            doc.text(695, group_i+11, assets[i*11+8][bldg]);

            //----------------- ROW 3-----------------------//
            doc.setFontType("bold");
            doc.text(15, group_i+22, 'PO NUMBER');

            doc.setFontType("normal");
            doc.text(90, group_i+22, assets[i*11+8][po]);

            doc.setFontType("bold");
            doc.text(153, group_i+22, 'CONDITION');

            doc.setFontType("normal");
            doc.text(245, group_i+22, assets[i*11+8][condition]);

            doc.setFontType("bold");
            doc.text(372, group_i+22, 'ORGANIZATION');

            doc.setFontType("normal");
            var orgText = assets[i*11+8][orgn];
            var splitORG = doc.splitTextToSize(orgText, 180);
            doc.text(splitORG[0],450, group_i+22);

            doc.setFontType("bold");
            doc.text(635, group_i+22, 'ROOM');

            doc.setFontType("normal");
            doc.text(695, group_i+22, assets[i*11+8][room]);

            //----------------- ROW 4 -----------------------//
            doc.setFontType("bold");
            doc.text(15, group_i+33, 'STATUS');

            doc.setFontType("normal");
            doc.text(90, group_i+33, assets[i*11+8][status]);

            doc.setFontType("bold");
            doc.text(153, group_i+33, 'OWNERSHIP');

            doc.setFontType("normal");
            doc.text(245, group_i+33, assets[i*11+8][owner]);

            doc.setFontType("bold");
            doc.text(372, group_i+33, 'CUSTODIAN');

            doc.setFontType("normal");
            var custText = assets[i*11+8][custodian];
            var splitCust = doc.splitTextToSize(custText, 180);
            doc.text(splitCust[0],450, group_i+33);

            doc.setFontType("bold");
            doc.text(635, group_i+33, '');

            doc.setFontType("normal");
            doc.text(695, group_i+33, '');

            doc.setLineWidth(0.25);
            doc.line(15, group_i+38, 777, group_i+38);
        }
        if (assets.length %11 > 9){
            //----------------- TENTH ENTRY -----------------------//
            doc.setFont("helvetica");
            doc.setFontSize(9);
            doc.setFontType("bold");
            doc.text(15, group_j, 'TAG NUMBER');

            doc.setFontType("normal");
            doc.text(90, group_j, assets[i*11+9][ptag]);

            doc.setFontType("bold");
            doc.text(153, group_j, 'MANUFACTURER');

            doc.setFontType("normal");
            doc.text(245, group_j, assets[i*11+9][manufacturer]);

            doc.setFontType("bold");
            doc.text(372, group_j, 'DESCRIPTION');

            doc.setFontType("normal");
            var descText = assets[i*11+9][description];
            var splitDesc = doc.splitTextToSize(descText, 180);
            doc.text(splitDesc[0],450, group_j,);

            doc.setFontType("bold");
            doc.text(635, group_j, 'VALUE');

            doc.setFontType("normal");
            doc.text(695, group_j, assets[i*11+9][value]);

            //----------------- ROW 2-----------------------//
            doc.setFontType("bold");
            doc.text(15, group_j+11, 'PURCHASED');

            doc.setFontType("normal");
            doc.text(90, group_j+11, assets[i*11+9][purchased]);

            doc.setFontType("bold");
            doc.text(153, group_j+11, 'LAST VT SCAN');

            doc.setFontType("normal");
            doc.text(245, group_j+11, assets[i*11+9][vtscan]);

            doc.setFontType("bold");
            doc.text(372, group_j+11, 'SERIAL');

            doc.setFontType("normal");
            var serialText = assets[i*11+9][serial_num];
            var splitSerial = doc.splitTextToSize(serialText, 180);
            doc.text(splitSerial[0],450, group_j+11);

            doc.setFontType("bold");
            doc.text(635, group_j+11, 'BUILDING');

            doc.setFontType("normal");
            doc.text(695, group_j+11, assets[i*11+9][bldg]);

            //----------------- ROW 3-----------------------//
            doc.setFontType("bold");
            doc.text(15, group_j+22, 'PO NUMBER');

            doc.setFontType("normal");
            doc.text(90, group_j+22, assets[i*11+9][po]);

            doc.setFontType("bold");
            doc.text(153, group_j+22, 'CONDITION');

            doc.setFontType("normal");
            doc.text(245, group_j+22, assets[i*11+9][condition]);

            doc.setFontType("bold");
            doc.text(372, group_j+22, 'ORGANIZATION');

            doc.setFontType("normal");
            var orgText = assets[i*11+9][orgn];
            var splitORG = doc.splitTextToSize(orgText, 180);
            doc.text(splitORG[0],450, group_j+22);

            doc.setFontType("bold");
            doc.text(635, group_j+22, 'ROOM');

            doc.setFontType("normal");
            doc.text(695, group_j+22, assets[i*11+9][room]);

            //----------------- ROW 4 -----------------------//
            doc.setFontType("bold");
            doc.text(15, group_j+33, 'STATUS');

            doc.setFontType("normal");
            doc.text(90, group_j+33, assets[i*11+9][status]);

            doc.setFontType("bold");
            doc.text(153, group_j+33, 'OWNERSHIP');

            doc.setFontType("normal");
            doc.text(245, group_j+33, assets[i*11+9][owner]);

            doc.setFontType("bold");
            doc.text(372, group_j+33, 'CUSTODIAN');

            doc.setFontType("normal");
            var custText = assets[i*11+9][custodian];
            var splitCust = doc.splitTextToSize(custText, 180);
            doc.text(splitCust[0],450, group_j+33);

            doc.setFontType("bold");
            doc.text(635, group_j+33, '');

            doc.setFontType("normal");
            doc.text(695, group_j+33, '');

            doc.setLineWidth(0.25);
            doc.line(15, group_j+38, 777, group_j+38);
        }
        if (assets.length %11 > 10){
            //----------------- ELEVENTH ENTRY -----------------------//
            doc.setFont("helvetica");
            doc.setFontSize(9);
            doc.setFontType("bold");
            doc.text(15, group_k, 'TAG NUMBER');

            doc.setFontType("normal");
            doc.text(90, group_k, assets[i*11+10][ptag]);

            doc.setFontType("bold");
            doc.text(153, group_k, 'MANUFACTURER');

            doc.setFontType("normal");
            doc.text(245, group_k, assets[i*11+1][manufacturer]);

            doc.setFontType("bold");
            doc.text(372, group_k, 'DESCRIPTION');

            doc.setFontType("normal");
            var descText = assets[i*11+10][description];
            var splitDesc = doc.splitTextToSize(descText, 180);
            doc.text(splitDesc[0],450, group_k,);

            doc.setFontType("bold");
            doc.text(635, group_k, 'VALUE');

            doc.setFontType("normal");
            doc.text(695, group_k, assets[i*11+10][value]);

            //----------------- ROW 2-----------------------//
            doc.setFontType("bold");
            doc.text(15, group_k+11, 'PURCHASED');

            doc.setFontType("normal");
            doc.text(90, group_k+11, assets[i*11+10][purchased]);

            doc.setFontType("bold");
            doc.text(153, group_k+11, 'LAST VT SCAN');

            doc.setFontType("normal");
            doc.text(245, group_k+11, assets[i*11+10][vtscan]);

            doc.setFontType("bold");
            doc.text(372, group_k+11, 'SERIAL');

            doc.setFontType("normal");
            var serialText = assets[i*11+10][serial_num];
            var splitSerial = doc.splitTextToSize(serialText, 180);
            doc.text(splitSerial[0],450, group_k+11);

            doc.setFontType("bold");
            doc.text(635, group_k+11, 'BUILDING');

            doc.setFontType("normal");
            doc.text(695, group_k+11, assets[i*11+10][bldg]);

            //----------------- ROW 3-----------------------//
            doc.setFontType("bold");
            doc.text(15, group_k+22, 'PO NUMBER');

            doc.setFontType("normal");
            doc.text(90, group_k+22, assets[i*11+10][po]);

            doc.setFontType("bold");
            doc.text(153, group_k+22, 'CONDITION');

            doc.setFontType("normal");
            doc.text(245, group_k+22, assets[i*11+10][condition]);

            doc.setFontType("bold");
            doc.text(372, group_k+22, 'ORGANIZATION');

            doc.setFontType("normal");
            var orgText = assets[i*11+10][orgn];
            var splitORG = doc.splitTextToSize(orgText, 180);
            doc.text(splitORG[0],450, group_k+22);

            doc.setFontType("bold");
            doc.text(635, group_k+22, 'ROOM');

            doc.setFontType("normal");
            doc.text(695, group_k+22, assets[i*11+10][room]);

            //----------------- ROW 4 -----------------------//
            doc.setFontType("bold");
            doc.text(15, group_k+33, 'STATUS');

            doc.setFontType("normal");
            doc.text(90, group_k+33, assets[i*11+10][status]);

            doc.setFontType("bold");
            doc.text(153, group_k+33, 'OWNERSHIP');

            doc.setFontType("normal");
            doc.text(245, group_k+33, assets[i*11+10][owner]);

            doc.setFontType("bold");
            doc.text(372, group_k+33, 'CUSTODIAN');

            doc.setFontType("normal");
            var custText = assets[i*11+10][custodian];
            var splitCust = doc.splitTextToSize(custText, 180);
            doc.text(splitCust[0],450, group_k+33);

            doc.setFontType("bold");
            doc.text(635, group_k+33, '');

            doc.setFontType("normal");
            doc.text(695, group_k+33, '');

            doc.setLineWidth(0.25);
            doc.line(15, group_k+38, 777, group_k+38);
        }
        
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
    }
    
   

    var filename = 'Individual_Assets.pdf';
    doc.save(filename);
}