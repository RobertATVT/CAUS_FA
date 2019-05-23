function generatePrintedReport(assets, searchCriteria) {
    var numPages = Math.ceil(assets.length / 11);
    var doc = new jsPDF('landscape','pt',[612,792]);
    for (var i=0; i < numPages; i++){
        var remainingAssets = assets.length - (i*11);
        
        if (i > 0) {
            doc.addPage();
        }
        
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
        if (remainingAssets > 0){
            //----------------- FIRST ENTRY -----------------------//
            doc.setFont("helvetica");
            doc.setFontSize(9);
            doc.setFontType("bold");
            doc.text(15, group_a, 'TAG NUMBER');

            doc.setFontType("normal");
            doc.text(90, group_a, assets[i*11+0]['FZVFORG_PTAG']);

            doc.setFontType("bold");
            doc.text(153, group_a, 'MANUFACTURER');

            doc.setFontType("normal");
            doc.text(245, group_a,  assets[i*11+0]['FZVFORG_MANUFACTURER']);

            doc.setFontType("bold");
            doc.text(372, group_a, 'DESCRIPTION');

            doc.setFontType("normal");
            var descText = assets[i*11+0]['FZVFORG_DESCRIPTION'];
            var splitDesc = doc.splitTextToSize(descText, 180);
            doc.text(450, group_a, splitDesc[0]);

            doc.setFontType("bold");
            doc.text(635, group_a, 'VALUE');

            doc.setFontType("normal");
            doc.text(695, group_a, '$'+assets[i*11+0]['FZVFORG_AMOUNT']);

            //----------------- ROW 2-----------------------//
            doc.setFontType("bold");
            doc.text(15, group_a+11, 'PURCHASED');

            doc.setFontType("normal");
            doc.text(90, group_a+11, assets[i*11+0]['FZVFORG_ACQ_DATE']);

            doc.setFontType("bold");
            doc.text(153, group_a+11, 'LAST VT SCAN');

            doc.setFontType("normal");
            doc.text(245, group_a+11, assets[i*11+0]['FZVFORG_LAST_INVENTORY_DATE']);

            doc.setFontType("bold");
            doc.text(372, group_a+11, 'SERIAL');

            doc.setFontType("normal");
            var serialText = assets[i*11+0]['FZVFORG_SERIAL_NUM'];
            var splitSerial = doc.splitTextToSize(serialText, 180);
            doc.text(splitSerial[0],450, group_a+11);

            doc.setFontType("bold");
            doc.text(635, group_a+11, 'CONDITION');

            doc.setFontType("normal");
            doc.text(695, group_a+11, assets[i*11+0]['FZVFORG_CONDITION']);
            
            //----------------- ROW 3-----------------------//
            doc.setFontType("bold");
            doc.text(15, group_a+22, 'PO NUMBER');

            doc.setFontType("normal");
            doc.text(90, group_a+22, assets[i*11+0]['FZVFORG_PO']);

            doc.setFontType("bold");
            doc.text(153, group_a+22, 'ORGANIZATION');

            doc.setFontType("normal");
            var orgText = assets[i*11+0]['FZVFORG_ORGN_TITLE'];
            var splitORG = doc.splitTextToSize(orgText, 128);
            doc.text(splitORG[0],245, group_a+22);

            doc.setFontType("bold");
            doc.text(372, group_a+22, 'BUILDING');

            doc.setFontType("normal");
            /*doc.text(450, group_a+22, assets[i*11+0]['FZVFORG_BLDG']);*/
            var bldgText = assets[i*11+0]['FZVFORG_BLDG'];
            var splitBLDG = doc.splitTextToSize(bldgText, 180);
            doc.text(splitBLDG[0],450, group_a+22);

            doc.setFontType("bold");
            doc.text(635, group_a+22, 'ROOM');

            doc.setFontType("normal");
            doc.text(695, group_a+22, assets[i*11+0]['FZVFORG_ROOM']);

            //----------------- ROW 4 -----------------------//
            doc.setFontType("bold");
            doc.text(15, group_a+33, 'STATUS');

            doc.setFontType("normal");
            doc.text(90, group_a+33, assets[i*11+0]['STATUS']);

            doc.setFontType("bold");
            doc.text(153, group_a+33, 'OWNERSHIP');

            doc.setFontType("normal");
            doc.text(245, group_a+33, assets[i*11+0]['FZVFORG_OWNERSHIP']);

            doc.setFontType("bold");
            doc.text(372, group_a+33, 'CUSTODIAN');

            doc.setFontType("normal");
            var custText = assets[i*11+0]['FZVFORG_CUSTODIAN'];
            var splitCust = doc.splitTextToSize(custText, 180);
            doc.text(splitCust[0],450, group_a+33);

            doc.setFontType("bold");
            doc.text(635, group_a+33, '');

            doc.setFontType("normal");
            doc.text(695, group_a+33, '');

            doc.setLineWidth(0.25);
            doc.line(15, group_a+38, 777, group_a+38);
        }
        if (remainingAssets > 1){
            //----------------- SECOND ENTRY -----------------------//
            doc.setFont("helvetica");
            doc.setFontSize(9);
            doc.setFontType("bold");
            doc.text(15, group_b, 'TAG NUMBER');

            doc.setFontType("normal");
            doc.text(90, group_b, assets[i*11+1]['FZVFORG_PTAG']);

            doc.setFontType("bold");
            doc.text(153, group_b, 'MANUFACTURER');

            doc.setFontType("normal");
            doc.text(245, group_b, assets[i*11+1]['FZVFORG_MANUFACTURER']);

            doc.setFontType("bold");
            doc.text(372, group_b, 'DESCRIPTION');

            doc.setFontType("normal");
            descText = assets[i*11+1]['FZVFORG_DESCRIPTION'];
            splitDesc = doc.splitTextToSize(descText, 180);
            doc.text(450, group_b,splitDesc[0]);

            doc.setFontType("bold");
            doc.text(635, group_b, 'VALUE');

            doc.setFontType("normal");
            doc.text(695, group_b, '$'+assets[i*11+1]['FZVFORG_AMOUNT']);

           //----------------- ROW 2-----------------------//
            doc.setFontType("bold");
            doc.text(15, group_b+11, 'PURCHASED');

            doc.setFontType("normal");
            doc.text(90, group_b+11, assets[i*11+0]['FZVFORG_ACQ_DATE']);

            doc.setFontType("bold");
            doc.text(153, group_b+11, 'LAST VT SCAN');

            doc.setFontType("normal");
            doc.text(245, group_b+11, assets[i*11+0]['FZVFORG_LAST_INVENTORY_DATE']);

            doc.setFontType("bold");
            doc.text(372, group_b+11, 'SERIAL');

            doc.setFontType("normal");
            var serialText = assets[i*11+0]['FZVFORG_SERIAL_NUM'];
            var splitSerial = doc.splitTextToSize(serialText, 180);
            doc.text(splitSerial[0],450, group_b+11);

            doc.setFontType("bold");
            doc.text(635, group_b+11, 'CONDITION');

            doc.setFontType("normal");
            doc.text(695, group_b+11, assets[i*11+0]['FZVFORG_CONDITION']);
            
            //----------------- ROW 3-----------------------//
            doc.setFontType("bold");
            doc.text(15, group_b+22, 'PO NUMBER');

            doc.setFontType("normal");
            doc.text(90, group_b+22, assets[i*11+0]['FZVFORG_PO']);

            doc.setFontType("bold");
            doc.text(153, group_b+22, 'ORGANIZATION');

            doc.setFontType("normal");
            var orgText = assets[i*11+0]['FZVFORG_ORGN_TITLE'];
            var splitORG = doc.splitTextToSize(orgText, 128);
            doc.text(splitORG[0],245, group_b+22);

            doc.setFontType("bold");
            doc.text(372, group_b+22, 'BUILDING');

            doc.setFontType("normal");
            /*doc.text(450, group_b+22, assets[i*11+0]['FZVFORG_BLDG']);*/
            var bldgText = assets[i*11+0]['FZVFORG_BLDG'];
            var splitBLDG = doc.splitTextToSize(bldgText, 180);
            doc.text(splitBLDG[0],450, group_b+22);

            doc.setFontType("bold");
            doc.text(635, group_b+22, 'ROOM');

            doc.setFontType("normal");
            doc.text(695, group_b+22, assets[i*11+0]['FZVFORG_ROOM']);

            //----------------- ROW 4 -----------------------//
            doc.setFontType("bold");
            doc.text(15, group_b+33, 'STATUS');

            doc.setFontType("normal");
            doc.text(90, group_b+33, assets[i*11+1]['STATUS']);

            doc.setFontType("bold");
            doc.text(153, group_b+33, 'OWNERSHIP');

            doc.setFontType("normal");
            doc.text(245, group_b+33, assets[i*11+1]['FZVFORG_OWNERSHIP']);

            doc.setFontType("bold");
            doc.text(372, group_b+33, 'CUSTODIAN');

            doc.setFontType("normal");
            custText = assets[i*11+1]['FZVFORG_CUSTODIAN'];
            splitCust = doc.splitTextToSize(custText, 180);
            doc.text(splitCust[0],450, group_b+33);

            doc.setFontType("bold");
            doc.text(635, group_b+33, '');

            doc.setFontType("normal");
            doc.text(695, group_b+33, '');

            doc.setLineWidth(0.25);
            doc.line(15, group_b+38, 777, group_b+38);
        }
        if (remainingAssets > 2){
            //----------------- THIRD ENTRY -----------------------//
            doc.setFont("helvetica");
            doc.setFontSize(9);
            doc.setFontType("bold");
            doc.text(15, group_c, 'TAG NUMBER');

            doc.setFontType("normal");
            doc.text(90, group_c, assets[i*11+2]['FZVFORG_PTAG']);

            doc.setFontType("bold");
            doc.text(153, group_c, 'MANUFACTURER');

            doc.setFontType("normal");
            doc.text(245, group_c, assets[i*11+2]['FZVFORG_MANUFACTURER']);

            doc.setFontType("bold");
            doc.text(372, group_c, 'DESCRIPTION');

            doc.setFontType("normal");
            descText = assets[i*11+2]['FZVFORG_DESCRIPTION'];
            splitDesc = doc.splitTextToSize(descText, 180);
            doc.text(450, group_c,splitDesc[0]);

            doc.setFontType("bold");
            doc.text(635, group_c, 'VALUE');

            doc.setFontType("normal");
            doc.text(695, group_c, '$'+assets[i*11+2]['FZVFORG_AMOUNT']);

            //----------------- ROW 2-----------------------//
            doc.setFontType("bold");
            doc.text(15, group_c+11, 'PURCHASED');

            doc.setFontType("normal");
            doc.text(90, group_c+11, assets[i*11+0]['FZVFORG_ACQ_DATE']);

            doc.setFontType("bold");
            doc.text(153, group_c+11, 'LAST VT SCAN');

            doc.setFontType("normal");
            doc.text(245, group_c+11, assets[i*11+0]['FZVFORG_LAST_INVENTORY_DATE']);

            doc.setFontType("bold");
            doc.text(372, group_c+11, 'SERIAL');

            doc.setFontType("normal");
            var serialText = assets[i*11+0]['FZVFORG_SERIAL_NUM'];
            var splitSerial = doc.splitTextToSize(serialText, 180);
            doc.text(splitSerial[0],450, group_c+11);

            doc.setFontType("bold");
            doc.text(635, group_c+11, 'CONDITION');

            doc.setFontType("normal");
            doc.text(695, group_c+11, assets[i*11+0]['FZVFORG_CONDITION']);
            
            //----------------- ROW 3-----------------------//
            doc.setFontType("bold");
            doc.text(15, group_c+22, 'PO NUMBER');

            doc.setFontType("normal");
            doc.text(90, group_c+22, assets[i*11+0]['FZVFORG_PO']);

            doc.setFontType("bold");
            doc.text(153, group_c+22, 'ORGANIZATION');

            doc.setFontType("normal");
            var orgText = assets[i*11+0]['FZVFORG_ORGN_TITLE'];
            var splitORG = doc.splitTextToSize(orgText, 128);
            doc.text(splitORG[0],245, group_c+22);

            doc.setFontType("bold");
            doc.text(372, group_c+22, 'BUILDING');

            doc.setFontType("normal");
            /*doc.text(450, group_c+22, assets[i*11+0]['FZVFORG_BLDG']);*/
            var bldgText = assets[i*11+0]['FZVFORG_BLDG'];
            var splitBLDG = doc.splitTextToSize(bldgText, 180);
            doc.text(splitBLDG[0],450, group_c+22);

            doc.setFontType("bold");
            doc.text(635, group_c+22, 'ROOM');

            doc.setFontType("normal");
            doc.text(695, group_c+22, assets[i*11+0]['FZVFORG_ROOM']);

            //----------------- ROW 4 -----------------------//
            doc.setFontType("bold");
            doc.text(15, group_c+33, 'STATUS');

            doc.setFontType("normal");
            doc.text(90, group_c+33, assets[i*11+2]['STATUS']);

            doc.setFontType("bold");
            doc.text(153, group_c+33, 'OWNERSHIP');

            doc.setFontType("normal");
            doc.text(245, group_c+33, assets[i*11+2]['FZVFORG_OWNERSHIP']);

            doc.setFontType("bold");
            doc.text(372, group_c+33, 'CUSTODIAN');

            doc.setFontType("normal");
            custText = assets[i*11+2]['FZVFORG_CUSTODIAN'];
            splitCust = doc.splitTextToSize(custText, 180);
            doc.text(splitCust[0],450, group_c+33);

            doc.setFontType("bold");
            doc.text(635, group_c+33, '');

            doc.setFontType("normal");
            doc.text(695, group_c+33, '');

            doc.setLineWidth(0.25);
            doc.line(15, group_c+38, 777, group_c+38);
        }
        if (remainingAssets > 3){
            //----------------- FOURTH ENTRY -----------------------//
            doc.setFont("helvetica");
            doc.setFontSize(9);
            doc.setFontType("bold");
            doc.text(15, group_d, 'TAG NUMBER');

            doc.setFontType("normal");
            doc.text(90, group_d, assets[i*11+3]['FZVFORG_PTAG']);

            doc.setFontType("bold");
            doc.text(153, group_d, 'MANUFACTURER');

            doc.setFontType("normal");
            doc.text(245, group_d, assets[i*11+3]['FZVFORG_MANUFACTURER']);

            doc.setFontType("bold");
            doc.text(372, group_d, 'DESCRIPTION');

            doc.setFontType("normal");
            descText = assets[i*11+3]['FZVFORG_DESCRIPTION'];
            splitDesc = doc.splitTextToSize(descText, 180);
            doc.text(450, group_d,splitDesc[0]);

            doc.setFontType("bold");
            doc.text(635, group_d, 'VALUE');

            doc.setFontType("normal");
            doc.text(695, group_d, '$'+assets[i*11+3]['FZVFORG_AMOUNT']);

            //----------------- ROW 2-----------------------//
            doc.setFontType("bold");
            doc.text(15, group_d+11, 'PURCHASED');

            doc.setFontType("normal");
            doc.text(90, group_d+11, assets[i*11+0]['FZVFORG_ACQ_DATE']);

            doc.setFontType("bold");
            doc.text(153, group_d+11, 'LAST VT SCAN');

            doc.setFontType("normal");
            doc.text(245, group_d+11, assets[i*11+0]['FZVFORG_LAST_INVENTORY_DATE']);

            doc.setFontType("bold");
            doc.text(372, group_d+11, 'SERIAL');

            doc.setFontType("normal");
            var serialText = assets[i*11+0]['FZVFORG_SERIAL_NUM'];
            var splitSerial = doc.splitTextToSize(serialText, 180);
            doc.text(splitSerial[0],450, group_d+11);

            doc.setFontType("bold");
            doc.text(635, group_d+11, 'CONDITION');

            doc.setFontType("normal");
            doc.text(695, group_d+11, assets[i*11+0]['FZVFORG_CONDITION']);
            
            //----------------- ROW 3-----------------------//
            doc.setFontType("bold");
            doc.text(15, group_d+22, 'PO NUMBER');

            doc.setFontType("normal");
            doc.text(90, group_d+22, assets[i*11+0]['FZVFORG_PO']);

            doc.setFontType("bold");
            doc.text(153, group_d+22, 'ORGANIZATION');

            doc.setFontType("normal");
            var orgText = assets[i*11+0]['FZVFORG_ORGN_TITLE'];
            var splitORG = doc.splitTextToSize(orgText, 128);
            doc.text(splitORG[0],245, group_d+22);

            doc.setFontType("bold");
            doc.text(372, group_d+22, 'BUILDING');

            doc.setFontType("normal");
            /*doc.text(450, group_d+22, assets[i*11+0]['FZVFORG_BLDG']);*/
            var bldgText = assets[i*11+0]['FZVFORG_BLDG'];
            var splitBLDG = doc.splitTextToSize(bldgText, 180);
            doc.text(splitBLDG[0],450, group_d+22);

            doc.setFontType("bold");
            doc.text(635, group_d+22, 'ROOM');

            doc.setFontType("normal");
            doc.text(695, group_d+22, assets[i*11+0]['FZVFORG_ROOM']);

            //----------------- ROW 4 -----------------------//
            doc.setFontType("bold");
            doc.text(15, group_d+33, 'STATUS');

            doc.setFontType("normal");
            doc.text(90, group_d+33, assets[i*11+3]['STATUS']);

            doc.setFontType("bold");
            doc.text(153, group_d+33, 'OWNERSHIP');

            doc.setFontType("normal");
            doc.text(245, group_d+33, assets[i*11+3]['FZVFORG_OWNERSHIP']);

            doc.setFontType("bold");
            doc.text(372, group_d+33, 'CUSTODIAN');

            doc.setFontType("normal");
            custText = assets[i*11+3]['FZVFORG_CUSTODIAN'];
            splitCust = doc.splitTextToSize(custText, 180);
            doc.text(splitCust[0],450, group_d+33);

            doc.setFontType("bold");
            doc.text(635, group_d+33, '');

            doc.setFontType("normal");
            doc.text(695, group_d+33, '');

            doc.setLineWidth(0.25);
            doc.line(15, group_d+38, 777, group_d+38);
        }
        if (remainingAssets > 4){
            //----------------- FIFTH ENTRY -----------------------//
            doc.setFont("helvetica");
            doc.setFontSize(9);
            doc.setFontType("bold");
            doc.text(15, group_e, 'TAG NUMBER');

            doc.setFontType("normal");
            doc.text(90, group_e, assets[i*11+4]['FZVFORG_PTAG']);

            doc.setFontType("bold");
            doc.text(153, group_e, 'MANUFACTURER');

            doc.setFontType("normal");
            doc.text(245, group_e, assets[i*11+4]['FZVFORG_MANUFACTURER']);

            doc.setFontType("bold");
            doc.text(372, group_e, 'DESCRIPTION');

            doc.setFontType("normal");
            descText = assets[i*11+4]['FZVFORG_DESCRIPTION'];
            splitDesc = doc.splitTextToSize(descText, 180);
            doc.text(450, group_e,splitDesc[0]);

            doc.setFontType("bold");
            doc.text(635, group_e, 'VALUE');

            doc.setFontType("normal");
            doc.text(695, group_e, '$'+assets[i*11+4]['FZVFORG_AMOUNT']);

            //----------------- ROW 2-----------------------//
            doc.setFontType("bold");
            doc.text(15, group_e+11, 'PURCHASED');

            doc.setFontType("normal");
            doc.text(90, group_e+11, assets[i*11+0]['FZVFORG_ACQ_DATE']);

            doc.setFontType("bold");
            doc.text(153, group_e+11, 'LAST VT SCAN');

            doc.setFontType("normal");
            doc.text(245, group_e+11, assets[i*11+0]['FZVFORG_LAST_INVENTORY_DATE']);

            doc.setFontType("bold");
            doc.text(372, group_e+11, 'SERIAL');

            doc.setFontType("normal");
            var serialText = assets[i*11+0]['FZVFORG_SERIAL_NUM'];
            var splitSerial = doc.splitTextToSize(serialText, 180);
            doc.text(splitSerial[0],450, group_e+11);

            doc.setFontType("bold");
            doc.text(635, group_e+11, 'CONDITION');

            doc.setFontType("normal");
            doc.text(695, group_e+11, assets[i*11+0]['FZVFORG_CONDITION']);
            
            //----------------- ROW 3-----------------------//
            doc.setFontType("bold");
            doc.text(15, group_e+22, 'PO NUMBER');

            doc.setFontType("normal");
            doc.text(90, group_e+22, assets[i*11+0]['FZVFORG_PO']);

            doc.setFontType("bold");
            doc.text(153, group_e+22, 'ORGANIZATION');

            doc.setFontType("normal");
            var orgText = assets[i*11+0]['FZVFORG_ORGN_TITLE'];
            var splitORG = doc.splitTextToSize(orgText, 128);
            doc.text(splitORG[0],245, group_e+22);

            doc.setFontType("bold");
            doc.text(372, group_e+22, 'BUILDING');

            doc.setFontType("normal");
            /*doc.text(450, group_e+22, assets[i*11+0]['FZVFORG_BLDG']);*/
            var bldgText = assets[i*11+0]['FZVFORG_BLDG'];
            var splitBLDG = doc.splitTextToSize(bldgText, 180);
            doc.text(splitBLDG[0],450, group_e+22);

            doc.setFontType("bold");
            doc.text(635, group_e+22, 'ROOM');

            doc.setFontType("normal");
            doc.text(695, group_e+22, assets[i*11+0]['FZVFORG_ROOM']);

            //----------------- ROW 4 -----------------------//
            doc.setFontType("bold");
            doc.text(15, group_e+33, 'STATUS');

            doc.setFontType("normal");
            doc.text(90, group_e+33, assets[i*11+4]['STATUS']);

            doc.setFontType("bold");
            doc.text(153, group_e+33, 'OWNERSHIP');

            doc.setFontType("normal");
            doc.text(245, group_e+33, assets[i*11+4]['FZVFORG_OWNERSHIP']);

            doc.setFontType("bold");
            doc.text(372, group_e+33, 'CUSTODIAN');

            doc.setFontType("normal");
            custText = assets[i*11+4]['FZVFORG_CUSTODIAN'];
            splitCust = doc.splitTextToSize(custText, 180);
            doc.text(splitCust[0],450, group_e+33);

            doc.setFontType("bold");
            doc.text(635, group_e+33, '');

            doc.setFontType("normal");
            doc.text(695, group_e+33, '');

            doc.setLineWidth(0.25);
            doc.line(15, group_e+38, 777, group_e+38);
        }
        if (remainingAssets > 5){
            //----------------- SIXTH ENTRY -----------------------//
            doc.setFont("helvetica");
            doc.setFontSize(9);
            doc.setFontType("bold");
            doc.text(15, group_f, 'TAG NUMBER');

            doc.setFontType("normal");
            doc.text(90, group_f, assets[i*11+5]['FZVFORG_PTAG']);

            doc.setFontType("bold");
            doc.text(153, group_f, 'MANUFACTURER');

            doc.setFontType("normal");
            doc.text(245, group_f, assets[i*11+5]['FZVFORG_MANUFACTURER']);

            doc.setFontType("bold");
            doc.text(372, group_f, 'DESCRIPTION');

            doc.setFontType("normal");
            descText = assets[i*11+5]['FZVFORG_DESCRIPTION'];
            splitDesc = doc.splitTextToSize(descText, 180);
            doc.text(450, group_f,splitDesc[0]);

            doc.setFontType("bold");
            doc.text(635, group_f, 'VALUE');

            doc.setFontType("normal");
            doc.text(695, group_f, '$'+assets[i*11+5]['FZVFORG_AMOUNT']);

            //----------------- ROW 2-----------------------//
            doc.setFontType("bold");
            doc.text(15, group_f+11, 'PURCHASED');

            doc.setFontType("normal");
            doc.text(90, group_f+11, assets[i*11+0]['FZVFORG_ACQ_DATE']);

            doc.setFontType("bold");
            doc.text(153, group_f+11, 'LAST VT SCAN');

            doc.setFontType("normal");
            doc.text(245, group_f+11, assets[i*11+0]['FZVFORG_LAST_INVENTORY_DATE']);

            doc.setFontType("bold");
            doc.text(372, group_f+11, 'SERIAL');

            doc.setFontType("normal");
            var serialText = assets[i*11+0]['FZVFORG_SERIAL_NUM'];
            var splitSerial = doc.splitTextToSize(serialText, 180);
            doc.text(splitSerial[0],450, group_f+11);

            doc.setFontType("bold");
            doc.text(635, group_f+11, 'CONDITION');

            doc.setFontType("normal");
            doc.text(695, group_f+11, assets[i*11+0]['FZVFORG_CONDITION']);
            
            //----------------- ROW 3-----------------------//
            doc.setFontType("bold");
            doc.text(15, group_f+22, 'PO NUMBER');

            doc.setFontType("normal");
            doc.text(90, group_f+22, assets[i*11+0]['FZVFORG_PO']);

            doc.setFontType("bold");
            doc.text(153, group_f+22, 'ORGANIZATION');

            doc.setFontType("normal");
            var orgText = assets[i*11+0]['FZVFORG_ORGN_TITLE'];
            var splitORG = doc.splitTextToSize(orgText, 128);
            doc.text(splitORG[0],245, group_f+22);

            doc.setFontType("bold");
            doc.text(372, group_f+22, 'BUILDING');

            doc.setFontType("normal");
            /*doc.text(450, group_f+22, assets[i*11+0]['FZVFORG_BLDG']);*/
            var bldgText = assets[i*11+0]['FZVFORG_BLDG'];
            var splitBLDG = doc.splitTextToSize(bldgText, 180);
            doc.text(splitBLDG[0],450, group_f+22);

            doc.setFontType("bold");
            doc.text(635, group_f+22, 'ROOM');

            doc.setFontType("normal");
            doc.text(695, group_f+22, assets[i*11+0]['FZVFORG_ROOM']);

            //----------------- ROW 4 -----------------------//
            doc.setFontType("bold");
            doc.text(15, group_f+33, 'STATUS');

            doc.setFontType("normal");
            doc.text(90, group_f+33, assets[i*11+5]['STATUS']);

            doc.setFontType("bold");
            doc.text(153, group_f+33, 'OWNERSHIP');

            doc.setFontType("normal");
            doc.text(245, group_f+33, assets[i*11+5]['FZVFORG_OWNERSHIP']);

            doc.setFontType("bold");
            doc.text(372, group_f+33, 'CUSTODIAN');

            doc.setFontType("normal");
            custText = assets[i*11+5]['FZVFORG_CUSTODIAN'];
            splitCust = doc.splitTextToSize(custText, 180);
            doc.text(splitCust[0],450, group_f+33);

            doc.setFontType("bold");
            doc.text(635, group_f+33, '');

            doc.setFontType("normal");
            doc.text(695, group_f+33, '');

            doc.setLineWidth(0.25);
            doc.line(15, group_f+38, 777, group_f+38);
        }
        if (remainingAssets > 6){
            //----------------- SEVENTH ENTRY -----------------------//
            doc.setFont("helvetica");
            doc.setFontSize(9);
            doc.setFontType("bold");
            doc.text(15, group_g, 'TAG NUMBER');

            doc.setFontType("normal");
            doc.text(90, group_g, assets[i*11+6]['FZVFORG_PTAG']);

            doc.setFontType("bold");
            doc.text(153, group_g, 'MANUFACTURER');

            doc.setFontType("normal");
            doc.text(245, group_g, assets[i*11+6]['FZVFORG_MANUFACTURER']);

            doc.setFontType("bold");
            doc.text(372, group_g, 'DESCRIPTION');

            doc.setFontType("normal");
            descText = assets[i*11+6]['FZVFORG_DESCRIPTION'];
            splitDesc = doc.splitTextToSize(descText, 180);
            doc.text(450, group_g,splitDesc[0]);

            doc.setFontType("bold");
            doc.text(635, group_g, 'VALUE');

            doc.setFontType("normal");
            doc.text(695, group_g, '$'+assets[i*11+6]['FZVFORG_AMOUNT']);

            //----------------- ROW 2-----------------------//
            doc.setFontType("bold");
            doc.text(15, group_g+11, 'PURCHASED');

            doc.setFontType("normal");
            doc.text(90, group_g+11, assets[i*11+0]['FZVFORG_ACQ_DATE']);

            doc.setFontType("bold");
            doc.text(153, group_g+11, 'LAST VT SCAN');

            doc.setFontType("normal");
            doc.text(245, group_g+11, assets[i*11+0]['FZVFORG_LAST_INVENTORY_DATE']);

            doc.setFontType("bold");
            doc.text(372, group_g+11, 'SERIAL');

            doc.setFontType("normal");
            var serialText = assets[i*11+0]['FZVFORG_SERIAL_NUM'];
            var splitSerial = doc.splitTextToSize(serialText, 180);
            doc.text(splitSerial[0],450, group_g+11);

            doc.setFontType("bold");
            doc.text(635, group_g+11, 'CONDITION');

            doc.setFontType("normal");
            doc.text(695, group_g+11, assets[i*11+0]['FZVFORG_CONDITION']);
            
            //----------------- ROW 3-----------------------//
            doc.setFontType("bold");
            doc.text(15, group_g+22, 'PO NUMBER');

            doc.setFontType("normal");
            doc.text(90, group_g+22, assets[i*11+0]['FZVFORG_PO']);

            doc.setFontType("bold");
            doc.text(153, group_g+22, 'ORGANIZATION');

            doc.setFontType("normal");
            var orgText = assets[i*11+0]['FZVFORG_ORGN_TITLE'];
            var splitORG = doc.splitTextToSize(orgText, 128);
            doc.text(splitORG[0],245, group_g+22);

            doc.setFontType("bold");
            doc.text(372, group_g+22, 'BUILDING');

            doc.setFontType("normal");
            /*doc.text(450, group_g+22, assets[i*11+0]['FZVFORG_BLDG']);*/
            var bldgText = assets[i*11+0]['FZVFORG_BLDG'];
            var splitBLDG = doc.splitTextToSize(bldgText, 180);
            doc.text(splitBLDG[0],450, group_g+22);

            doc.setFontType("bold");
            doc.text(635, group_g+22, 'ROOM');

            doc.setFontType("normal");
            doc.text(695, group_g+22, assets[i*11+0]['FZVFORG_ROOM']);

            //----------------- ROW 4 -----------------------//
            doc.setFontType("bold");
            doc.text(15, group_g+33, 'STATUS');

            doc.setFontType("normal");
            doc.text(90, group_g+33, assets[i*11+6]['STATUS']);

            doc.setFontType("bold");
            doc.text(153, group_g+33, 'OWNERSHIP');

            doc.setFontType("normal");
            doc.text(245, group_g+33, assets[i*11+6]['FZVFORG_OWNERSHIP']);

            doc.setFontType("bold");
            doc.text(372, group_g+33, 'CUSTODIAN');

            doc.setFontType("normal");
            custText = assets[i*11+6]['FZVFORG_CUSTODIAN'];
            splitCust = doc.splitTextToSize(custText, 180);
            doc.text(splitCust[0],450, group_g+33);

            doc.setFontType("bold");
            doc.text(635, group_g+33, '');

            doc.setFontType("normal");
            doc.text(695, group_g+33, '');

            doc.setLineWidth(0.25);
            doc.line(15, group_g+38, 777, group_g+38);
        }
        if (remainingAssets > 7){
            //----------------- EIGTH ENTRY -----------------------//
            doc.setFont("helvetica");
            doc.setFontSize(9);
            doc.setFontType("bold");
            doc.text(15, group_h, 'TAG NUMBER');

            doc.setFontType("normal");
            doc.text(90, group_h, assets[i*11+7]['FZVFORG_PTAG']);

            doc.setFontType("bold");
            doc.text(153, group_h, 'MANUFACTURER');

            doc.setFontType("normal");
            doc.text(245, group_h, assets[i*11+7]['FZVFORG_MANUFACTURER']);

            doc.setFontType("bold");
            doc.text(372, group_h, 'DESCRIPTION');

            doc.setFontType("normal");
            descText = assets[i*11+7]['FZVFORG_DESCRIPTION'];
            splitDesc = doc.splitTextToSize(descText, 180);
            doc.text(450, group_h,splitDesc[0]);

            doc.setFontType("bold");
            doc.text(635, group_h, 'VALUE');

            doc.setFontType("normal");
            doc.text(695, group_h, '$'+assets[i*11+7]['FZVFORG_AMOUNT']);

            //----------------- ROW 2-----------------------//
            doc.setFontType("bold");
            doc.text(15, group_h+11, 'PURCHASED');

            doc.setFontType("normal");
            doc.text(90, group_h+11, assets[i*11+0]['FZVFORG_ACQ_DATE']);

            doc.setFontType("bold");
            doc.text(153, group_h+11, 'LAST VT SCAN');

            doc.setFontType("normal");
            doc.text(245, group_h+11, assets[i*11+0]['FZVFORG_LAST_INVENTORY_DATE']);

            doc.setFontType("bold");
            doc.text(372, group_h+11, 'SERIAL');

            doc.setFontType("normal");
            var serialText = assets[i*11+0]['FZVFORG_SERIAL_NUM'];
            var splitSerial = doc.splitTextToSize(serialText, 180);
            doc.text(splitSerial[0],450, group_h+11);

            doc.setFontType("bold");
            doc.text(635, group_h+11, 'CONDITION');

            doc.setFontType("normal");
            doc.text(695, group_h+11, assets[i*11+0]['FZVFORG_CONDITION']);
            
            //----------------- ROW 3-----------------------//
            doc.setFontType("bold");
            doc.text(15, group_h+22, 'PO NUMBER');

            doc.setFontType("normal");
            doc.text(90, group_h+22, assets[i*11+0]['FZVFORG_PO']);

            doc.setFontType("bold");
            doc.text(153, group_h+22, 'ORGANIZATION');

            doc.setFontType("normal");
            var orgText = assets[i*11+0]['FZVFORG_ORGN_TITLE'];
            var splitORG = doc.splitTextToSize(orgText, 128);
            doc.text(splitORG[0],245, group_h+22);

            doc.setFontType("bold");
            doc.text(372, group_h+22, 'BUILDING');

            doc.setFontType("normal");
            /*doc.text(450, group_h+22, assets[i*11+0]['FZVFORG_BLDG']);*/
            var bldgText = assets[i*11+0]['FZVFORG_BLDG'];
            var splitBLDG = doc.splitTextToSize(bldgText, 180);
            doc.text(splitBLDG[0],450, group_h+22);

            doc.setFontType("bold");
            doc.text(635, group_h+22, 'ROOM');

            doc.setFontType("normal");
            doc.text(695, group_h+22, assets[i*11+0]['FZVFORG_ROOM']);

            //----------------- ROW 4 -----------------------//
            doc.setFontType("bold");
            doc.text(15, group_h+33, 'STATUS');

            doc.setFontType("normal");
            doc.text(90, group_h+33, assets[i*11+7]['STATUS']);

            doc.setFontType("bold");
            doc.text(153, group_h+33, 'OWNERSHIP');

            doc.setFontType("normal");
            doc.text(245, group_h+33, assets[i*11+7]['FZVFORG_OWNERSHIP']);

            doc.setFontType("bold");
            doc.text(372, group_h+33, 'CUSTODIAN');

            doc.setFontType("normal");
            custText = assets[i*11+7]['FZVFORG_CUSTODIAN'];
            splitCust = doc.splitTextToSize(custText, 180);
            doc.text(splitCust[0],450, group_h+33);

            doc.setFontType("bold");
            doc.text(635, group_h+33, '');

            doc.setFontType("normal");
            doc.text(695, group_h+33, '');

            doc.setLineWidth(0.25);
            doc.line(15, group_h+38, 777, group_h+38);
        }
        if (remainingAssets > 8){
            //----------------- NINTH ENTRY -----------------------//
            doc.setFont("helvetica");
            doc.setFontSize(9);
            doc.setFontType("bold");
            doc.text(15, group_i, 'TAG NUMBER');

            doc.setFontType("normal");
            doc.text(90, group_i, assets[i*11+8]['FZVFORG_PTAG']);

            doc.setFontType("bold");
            doc.text(153, group_i, 'MANUFACTURER');

            doc.setFontType("normal");
            doc.text(245, group_i, assets[i*11+8]['FZVFORG_MANUFACTURER']);

            doc.setFontType("bold");
            doc.text(372, group_i, 'DESCRIPTION');

            doc.setFontType("normal");
            descText = assets[i*11+8]['FZVFORG_DESCRIPTION'];
            splitDesc = doc.splitTextToSize(descText, 180);
            doc.text(450, group_i,splitDesc[0]);

            doc.setFontType("bold");
            doc.text(635, group_i, 'VALUE');

            doc.setFontType("normal");
            doc.text(695, group_i, '$'+assets[i*11+8]['FZVFORG_AMOUNT']);

            //----------------- ROW 2-----------------------//
            doc.setFontType("bold");
            doc.text(15, group_i+11, 'PURCHASED');

            doc.setFontType("normal");
            doc.text(90, group_i+11, assets[i*11+0]['FZVFORG_ACQ_DATE']);

            doc.setFontType("bold");
            doc.text(153, group_i+11, 'LAST VT SCAN');

            doc.setFontType("normal");
            doc.text(245, group_i+11, assets[i*11+0]['FZVFORG_LAST_INVENTORY_DATE']);

            doc.setFontType("bold");
            doc.text(372, group_i+11, 'SERIAL');

            doc.setFontType("normal");
            var serialText = assets[i*11+0]['FZVFORG_SERIAL_NUM'];
            var splitSerial = doc.splitTextToSize(serialText, 180);
            doc.text(splitSerial[0],450, group_i+11);

            doc.setFontType("bold");
            doc.text(635, group_i+11, 'CONDITION');

            doc.setFontType("normal");
            doc.text(695, group_i+11, assets[i*11+0]['FZVFORG_CONDITION']);
            
            //----------------- ROW 3-----------------------//
            doc.setFontType("bold");
            doc.text(15, group_i+22, 'PO NUMBER');

            doc.setFontType("normal");
            doc.text(90, group_i+22, assets[i*11+0]['FZVFORG_PO']);

            doc.setFontType("bold");
            doc.text(153, group_i+22, 'ORGANIZATION');

            doc.setFontType("normal");
            var orgText = assets[i*11+0]['FZVFORG_ORGN_TITLE'];
            var splitORG = doc.splitTextToSize(orgText, 128);
            doc.text(splitORG[0],245, group_i+22);

            doc.setFontType("bold");
            doc.text(372, group_i+22, 'BUILDING');

            doc.setFontType("normal");
            /*doc.text(450, group_i+22, assets[i*11+0]['FZVFORG_BLDG']);*/
            var bldgText = assets[i*11+0]['FZVFORG_BLDG'];
            var splitBLDG = doc.splitTextToSize(bldgText, 180);
            doc.text(splitBLDG[0],450, group_i+22);

            doc.setFontType("bold");
            doc.text(635, group_i+22, 'ROOM');

            doc.setFontType("normal");
            doc.text(695, group_i+22, assets[i*11+0]['FZVFORG_ROOM']);

            //----------------- ROW 4 -----------------------//
            doc.setFontType("bold");
            doc.text(15, group_i+33, 'STATUS');

            doc.setFontType("normal");
            doc.text(90, group_i+33, assets[i*11+8]['STATUS']);

            doc.setFontType("bold");
            doc.text(153, group_i+33, 'OWNERSHIP');

            doc.setFontType("normal");
            doc.text(245, group_i+33, assets[i*11+8]['FZVFORG_OWNERSHIP']);

            doc.setFontType("bold");
            doc.text(372, group_i+33, 'CUSTODIAN');

            doc.setFontType("normal");
            custText = assets[i*11+8]['FZVFORG_CUSTODIAN'];
            splitCust = doc.splitTextToSize(custText, 180);
            doc.text(splitCust[0],450, group_i+33);

            doc.setFontType("bold");
            doc.text(635, group_i+33, '');

            doc.setFontType("normal");
            doc.text(695, group_i+33, '');

            doc.setLineWidth(0.25);
            doc.line(15, group_i+38, 777, group_i+38);
        }
        if (remainingAssets > 9){
            //----------------- TENTH ENTRY -----------------------//
            doc.setFont("helvetica");
            doc.setFontSize(9);
            doc.setFontType("bold");
            doc.text(15, group_j, 'TAG NUMBER');

            doc.setFontType("normal");
            doc.text(90, group_j, assets[i*11+9]['FZVFORG_PTAG']);

            doc.setFontType("bold");
            doc.text(153, group_j, 'MANUFACTURER');

            doc.setFontType("normal");
            doc.text(245, group_j, assets[i*11+9]['FZVFORG_MANUFACTURER']);

            doc.setFontType("bold");
            doc.text(372, group_j, 'DESCRIPTION');

            doc.setFontType("normal");
            descText = assets[i*11+9]['FZVFORG_DESCRIPTION'];
            splitDesc = doc.splitTextToSize(descText, 180);
            doc.text(450, group_j,splitDesc[0]);

            doc.setFontType("bold");
            doc.text(635, group_j, 'VALUE');

            doc.setFontType("normal");
            doc.text(695, group_j, '$'+assets[i*11+9]['FZVFORG_AMOUNT']);

            //----------------- ROW 2-----------------------//
            doc.setFontType("bold");
            doc.text(15, group_j+11, 'PURCHASED');

            doc.setFontType("normal");
            doc.text(90, group_j+11, assets[i*11+0]['FZVFORG_ACQ_DATE']);

            doc.setFontType("bold");
            doc.text(153, group_j+11, 'LAST VT SCAN');

            doc.setFontType("normal");
            doc.text(245, group_j+11, assets[i*11+0]['FZVFORG_LAST_INVENTORY_DATE']);

            doc.setFontType("bold");
            doc.text(372, group_j+11, 'SERIAL');

            doc.setFontType("normal");
            var serialText = assets[i*11+0]['FZVFORG_SERIAL_NUM'];
            var splitSerial = doc.splitTextToSize(serialText, 180);
            doc.text(splitSerial[0],450, group_j+11);

            doc.setFontType("bold");
            doc.text(635, group_j+11, 'CONDITION');

            doc.setFontType("normal");
            doc.text(695, group_j+11, assets[i*11+0]['FZVFORG_CONDITION']);
            
            //----------------- ROW 3-----------------------//
            doc.setFontType("bold");
            doc.text(15, group_j+22, 'PO NUMBER');

            doc.setFontType("normal");
            doc.text(90, group_j+22, assets[i*11+0]['FZVFORG_PO']);

            doc.setFontType("bold");
            doc.text(153, group_j+22, 'ORGANIZATION');

            doc.setFontType("normal");
            var orgText = assets[i*11+0]['FZVFORG_ORGN_TITLE'];
            var splitORG = doc.splitTextToSize(orgText, 128);
            doc.text(splitORG[0],245, group_j+22);

            doc.setFontType("bold");
            doc.text(372, group_j+22, 'BUILDING');

            doc.setFontType("normal");
            /*doc.text(450, group_j+22, assets[i*11+0]['FZVFORG_BLDG']);*/
            var bldgText = assets[i*11+0]['FZVFORG_BLDG'];
            var splitBLDG = doc.splitTextToSize(bldgText, 180);
            doc.text(splitBLDG[0],450, group_j+22);

            doc.setFontType("bold");
            doc.text(635, group_j+22, 'ROOM');

            doc.setFontType("normal");
            doc.text(695, group_j+22, assets[i*11+0]['FZVFORG_ROOM']);

            //----------------- ROW 4 -----------------------//
            doc.setFontType("bold");
            doc.text(15, group_j+33, 'STATUS');

            doc.setFontType("normal");
            doc.text(90, group_j+33, assets[i*11+9]['STATUS']);

            doc.setFontType("bold");
            doc.text(153, group_j+33, 'OWNERSHIP');

            doc.setFontType("normal");
            doc.text(245, group_j+33, assets[i*11+9]['FZVFORG_OWNERSHIP']);

            doc.setFontType("bold");
            doc.text(372, group_j+33, 'CUSTODIAN');

            doc.setFontType("normal");
            custText = assets[i*11+9]['FZVFORG_CUSTODIAN'];
            splitCust = doc.splitTextToSize(custText, 180);
            doc.text(splitCust[0],450, group_j+33);

            doc.setFontType("bold");
            doc.text(635, group_j+33, '');

            doc.setFontType("normal");
            doc.text(695, group_j+33, '');

            doc.setLineWidth(0.25);
            doc.line(15, group_j+38, 777, group_j+38);
        }
        if (remainingAssets > 10){
            //----------------- ELEVENTH ENTRY -----------------------//
            doc.setFont("helvetica");
            doc.setFontSize(9);
            doc.setFontType("bold");
            doc.text(15, group_k, 'TAG NUMBER');

            doc.setFontType("normal");
            doc.text(90, group_k, assets[i*11+10]['FZVFORG_PTAG']);

            doc.setFontType("bold");
            doc.text(153, group_k, 'MANUFACTURER');

            doc.setFontType("normal");
            doc.text(245, group_k, assets[i*11+1]['FZVFORG_MANUFACTURER']);

            doc.setFontType("bold");
            doc.text(372, group_k, 'DESCRIPTION');

            doc.setFontType("normal");
            descText = assets[i*11+10]['FZVFORG_DESCRIPTION'];
            splitDesc = doc.splitTextToSize(descText, 180);
            doc.text(450, group_k,splitDesc[0]);

            doc.setFontType("bold");
            doc.text(635, group_k, 'VALUE');

            doc.setFontType("normal");
            doc.text(695, group_k, '$'+assets[i*11+10]['FZVFORG_AMOUNT']);

            //----------------- ROW 2-----------------------//
            doc.setFontType("bold");
            doc.text(15, group_k+11, 'PURCHASED');

            doc.setFontType("normal");
            doc.text(90, group_k+11, assets[i*11+0]['FZVFORG_ACQ_DATE']);

            doc.setFontType("bold");
            doc.text(153, group_k+11, 'LAST VT SCAN');

            doc.setFontType("normal");
            doc.text(245, group_k+11, assets[i*11+0]['FZVFORG_LAST_INVENTORY_DATE']);

            doc.setFontType("bold");
            doc.text(372, group_k+11, 'SERIAL');

            doc.setFontType("normal");
            var serialText = assets[i*11+0]['FZVFORG_SERIAL_NUM'];
            var splitSerial = doc.splitTextToSize(serialText, 180);
            doc.text(splitSerial[0],450, group_k+11);

            doc.setFontType("bold");
            doc.text(635, group_k+11, 'CONDITION');

            doc.setFontType("normal");
            doc.text(695, group_k+11, assets[i*11+0]['FZVFORG_CONDITION']);
            
            //----------------- ROW 3-----------------------//
            doc.setFontType("bold");
            doc.text(15, group_k+22, 'PO NUMBER');

            doc.setFontType("normal");
            doc.text(90, group_k+22, assets[i*11+0]['FZVFORG_PO']);

            doc.setFontType("bold");
            doc.text(153, group_k+22, 'ORGANIZATION');

            doc.setFontType("normal");
            var orgText = assets[i*11+0]['FZVFORG_ORGN_TITLE'];
            var splitORG = doc.splitTextToSize(orgText, 128);
            doc.text(splitORG[0],245, group_k+22);

            doc.setFontType("bold");
            doc.text(372, group_k+22, 'BUILDING');

            doc.setFontType("normal");
            /*doc.text(450, group_k+22, assets[i*11+0]['FZVFORG_BLDG']);*/
            var bldgText = assets[i*11+0]['FZVFORG_BLDG'];
            var splitBLDG = doc.splitTextToSize(bldgText, 180);
            doc.text(splitBLDG[0],450, group_k+22);

            doc.setFontType("bold");
            doc.text(635, group_k+22, 'ROOM');

            doc.setFontType("normal");
            doc.text(695, group_k+22, assets[i*11+0]['FZVFORG_ROOM']);

            //----------------- ROW 4 -----------------------//
            doc.setFontType("bold");
            doc.text(15, group_k+33, 'STATUS');

            doc.setFontType("normal");
            doc.text(90, group_k+33, assets[i*11+10]['STATUS']);

            doc.setFontType("bold");
            doc.text(153, group_k+33, 'OWNERSHIP');

            doc.setFontType("normal");
            doc.text(245, group_k+33, assets[i*11+10]['FZVFORG_OWNERSHIP']);

            doc.setFontType("bold");
            doc.text(372, group_k+33, 'CUSTODIAN');

            doc.setFontType("normal");
            custText = assets[i*11+10]['FZVFORG_CUSTODIAN'];
            splitCust = doc.splitTextToSize(custText, 180);
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
        doc.text(250, group_l+17, searchCriteria);

        doc.setDrawColor(0);
        doc.setFillColor(225,225,225);
        doc.rect(625, group_k+50, 75, 25, 'FD');
        doc.text(635, group_l+17, 'PAGES');

        doc.setFontType("normal");
        doc.setDrawColor(0);
        doc.setFillColor(255,255,255);
        doc.rect(700, group_k+50, 75, 25, 'FD');
        doc.text(710, group_l+17, (i + 1) + '/' + numPages);
    }
    
    var thisDate = getDate();
    
    var reportType = getReportType(searchCriteria);
    
    var criteriaClean = searchCriteria.split('-')[1];
    var criteriaClean = criteriaClean.replace(", ","-");
    var criteriaClean = criteriaClean.trim();
    
    /*alert(thisDate+'-'+reportType+'-'+criteriaClean+'.pdf');*/
    var filename = thisDate+'-'+reportType+'-'+criteriaClean+'.pdf';
    doc.save(filename);
}