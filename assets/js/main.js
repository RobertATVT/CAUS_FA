function acceptEULA(status) {
    var form = {
        'action': 'causfa_eula',
        'status': status
    };
    jQuery.post(causfa_action_obj.ajax_url, form, function(data){
        if (data['status']) {
            $('#eulaModal').modal('close');
        } else {
            location.replace('/');

        }
    });

}
function new_custodian_submit() {
    var building = jQuery('#Building').val();
    var office = jQuery('#Office').val();
    var phone = jQuery('#Phone').val();
    var org = jQuery('#org').val();
    if (office == '') {
        alert('Office field cannot be empty');
    } else if (phone == '') {
        alert('Phone field cannot be empty');
    } else if (building == '') {
        alert('Building field cannot be empty');
    } else if (org == '') {
        alert('Please select your school from the dropdown');
    } else {
        var form = {
            'action': 'causfa_new_custodian',
            'building': building,
            'office': office,
            'phone': phone,
            'org': org
        };
        jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
            if (data == 1) {
                location.reload();
            } else if (data == 2) {
                alert('Please enter your 10 digit phone number')
            }
        });
    }
}
function submitSVar(obj) {
    var form = {
        action: 'causfa_set_session',
        name: obj['Name'],
        input: obj['Input']
    };
    jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
        if (data != 1) {
            alert('Something went wrong');
        }
    });
}

function addAsset() {
    var ptag = $('#addAssetPTAG').val();
    var serial = $('#addAssetSerial').val();
    var desc = $('#addAssetDesc').val();
    var notes = $('#addAssetNotes').val();
    var form = {
        action: 'causfa_add_ticket',
        ptag: ptag,
        serial: serial,
        desc: desc,
        note: notes,
        type: 0
    };
    if (ptag == null) {
        alert('Please enter the Ptag for the asset');
    } else if (serial == null) {
        alert('Please enter the Serial number for the asset');
    } else if (desc == null) {
        alert('Please enter a description of the asset');
    } else {
        jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
            if (data['status'] == 1) {
                jQuery('#addAssetsModal').modal('close');
                jQuery('#responseModal').find('#modal-response-title').text('Add Asset Request Submitted');
                jQuery('#responseModal').find('#modal-response-alert').text(data['message']);
                jQuery('#responseModal').modal();
                jQuery('#responseModal').modal('open');
            } else {
                jQuery('#addAssetsModal').modal('close');
                jQuery('#responseModal').find('#modal-response-title').text('Add Asset Request Rejected');
                jQuery('#responseModal').find('#modal-response-alert').text(data['message']);
                jQuery('#responseModal').modal();
                jQuery('#responseModal').modal('open');
            }
        });
    }
}

function checkSelected() {
    var input = jQuery('.tablesorter').find('.asset-select').find( "input:checkbox:checked" );
    if (input.length > 1) {
        jQuery("#transfer-ribbon").removeClass("ribbon-disabled");
        jQuery("#transfer-ribbon").addClass("ribbon-active");
        jQuery("#transfer-ribbon-button").attr('onClick', 'bulkTransferModalRequested()');
        jQuery("#surplus-ribbon").removeClass("ribbon-disabled");
        jQuery("#surplus-ribbon").addClass("ribbon-active");
        jQuery("#surplus-ribbon-button").attr('onClick', 'bulkSurplusModalRequested()');
        jQuery("#gallery-ribbon").removeClass("ribbon-active");
        jQuery("#gallery-ribbon").addClass("ribbon-disabled");
        jQuery("#gallery-ribbon-button").attr('onClick', '');
        jQuery("#forms-ribbon").removeClass("ribbon-active");
        jQuery("#forms-ribbon").addClass("ribbon-disabled");
        jQuery("#forms-ribbon-button").attr('onClick', '');
        jQuery("#report-ribbon").removeClass("ribbon-active");
        jQuery("#report-ribbon").addClass("ribbon-disabled");
        jQuery("#problem-ribbon-button").attr('onClick', '');
    } else if (input.length > 0) {
        jQuery("#transfer-ribbon").removeClass("ribbon-disabled");
        jQuery("#transfer-ribbon").addClass("ribbon-active");
        jQuery("#transfer-ribbon-button").attr('onClick', 'bulkTransferModalRequested()');
        jQuery("#surplus-ribbon").removeClass("ribbon-disabled");
        jQuery("#surplus-ribbon").addClass("ribbon-active");
        jQuery("#surplus-ribbon-button").attr('onClick', 'bulkSurplusModalRequested()');
        jQuery("#gallery-ribbon").removeClass("ribbon-disabled");
        jQuery("#gallery-ribbon").addClass("ribbon-active");
        jQuery("#gallery-ribbon-button").attr('onClick', 'bulkGalleryModalRequested()');
        jQuery("#forms-ribbon").removeClass("ribbon-disabled");
        jQuery("#forms-ribbon").addClass("ribbon-active");
        jQuery("#forms-ribbon-button").attr('onClick', 'bulkFormsModalRequested()');
        jQuery("#report-ribbon").removeClass("ribbon-disabled");
        jQuery("#report-ribbon").addClass("ribbon-active");
        jQuery("#problem-ribbon-button").attr('onClick', 'bulkTicketModalRequested()');
    } else {
        jQuery("#transfer-ribbon").removeClass("ribbon-active");
        jQuery("#transfer-ribbon").addClass("ribbon-disabled");
        jQuery("#transfer-ribbon-button").attr('onClick', '');
        jQuery("#surplus-ribbon").removeClass("ribbon-active");
        jQuery("#surplus-ribbon").addClass("ribbon-disabled");
        jQuery("#surplus-ribbon-button").attr('onClick', '');
        jQuery("#gallery-ribbon").removeClass("ribbon-active");
        jQuery("#gallery-ribbon").addClass("ribbon-disabled");
        jQuery("#gallery-ribbon-button").attr('onClick', '');
        jQuery("#forms-ribbon").removeClass("ribbon-active");
        jQuery("#forms-ribbon").addClass("ribbon-disabled");
        jQuery("#forms-ribbon-button").attr('onClick', '');
        jQuery("#report-ribbon").removeClass("ribbon-active");
        jQuery("#report-ribbon").addClass("ribbon-disabled");
        jQuery("#problem-ribbon-button").attr('onClick', '');
    }
    for (var i = 0; i < input.length; i++) {
        var id = input[i].id;
        id = id.split('-')[2];
        var status = jQuery('#status-' + id);
        if (status.children().html() === 'Missing' || status.children().html() === 'Missing Reconciled') {
            jQuery("#transfer-ribbon").removeClass("ribbon-active");
            jQuery("#transfer-ribbon").addClass("ribbon-disabled");
            jQuery("#transfer-ribbon-button").attr('onClick', '');
            jQuery("#surplus-ribbon").removeClass("ribbon-active");
            jQuery("#surplus-ribbon").addClass("ribbon-disabled");
            jQuery("#surplus-ribbon-button").attr('onClick', '');
            jQuery("#forms-ribbon").removeClass("ribbon-active");
            jQuery("#forms-ribbon").addClass("ribbon-disabled");
            jQuery("#forms-ribbon-button").attr('onClick', '');
        }
    }
}

function causfa_run_full_org() {
    es = new EventSource('https://inside.caus.vt.edu/wp-json/causfa/v1/oracle');
    es.addEventListener('message', function(e) {
        var result = JSON.parse( e.data );
        if (result.message === 'CLOSE') {
            es.close();
            var pBar = document.getElementById('FA_LoadProgress');
            pBar.style.width = '100%';
        } else if (result.message === 'START') {
            jQuery('#fa-progress').modal();
            jQuery('#fa-progress').modal('open');
            var msg = document.getElementById('FA_LoadMessage');
            msg.innerHTML = result.message;
        } else {
            var pBar = document.getElementById('FA_LoadProgress');
            pBar.style.width = result.progress + '%';
            var perc = document.getElementById('FA_LoadPercent');
            perc.innerHTML   = result.progress;
            var msg = document.getElementById('FA_LoadMessage');
            msg.innerHTML = result.message;
        }
    });
    es.addEventListener('error', function(e) {
        alert('Error occurred');
        es.close();
    });
}
function causfa_run_full_org_dev() {
    es = new EventSource('https://dev1.caus.vt.edu/wp-json/causfa/v1/oracle');
    es.addEventListener('message', function(e) {
        var result = JSON.parse( e.data );
        if (result.message === 'CLOSE') {
            es.close();
            var pBar = document.getElementById('FA_LoadProgress');
            pBar.style.width = '100%';
        } else if (result.message === 'START') {
            jQuery('#fa-progress').modal();
            jQuery('#fa-progress').modal('open');
            var msg = document.getElementById('FA_LoadMessage');
            msg.innerHTML = result.message;
        } else {
            var pBar = document.getElementById('FA_LoadProgress');
            pBar.style.width = result.progress + '%';
            var perc = document.getElementById('FA_LoadPercent');
            perc.innerHTML   = result.progress;
            var msg = document.getElementById('FA_LoadMessage');
            msg.innerHTML = result.message;
        }
    });
    es.addEventListener('error', function(e) {
        alert('Error occurred');
        es.close();
    });
}
function asset_toggle(id) {
    id = id.split('-')[1];
    if (document.getElementById('asset-more-'+id+'').style.display) {
        document.getElementById('asset-more-'+id+'').style.display="";
    } else {
        document.getElementById('asset-more-'+id+'').style.display="inline";
    }
    
}
function admin_reports(type, inputBox, inputBox2) {
    jQuery("#reportType").val(type);
    switch (type) {
        case 2:
            var input = jQuery(inputBox).val();
            jQuery("#reportInput1").val(input);
            var input2 = jQuery(inputBox2).val();
            jQUery("#reportInput2").val(input2);
            var form = {
                'action': 'causfa_get_report',
                'type': type,
                'input': input,
                'input2': input2
            }
            break;
        case 1:
            var PID = validateFormIndvEmployee();
            jQuery("#reportInput1").val(PID);
            jQuery("#reportInput2").val("");
            var form = {
                'action': 'causfa_get_report',
                'type': type,
                'input': PID
            }
            break;
        default:
            var input = jQuery(inputBox).val();
            jQuery("#reportInput1").val(input);
            jQuery("#reportInput2").val("");
            var form = {
                'action': 'causfa_get_report',
                'type': type,
                'input': input
            }
            break;
        
    }
    jQuery.post(causfa_action_obj.ajax_url, form, function(data){
        if (data['status'] === 1 ) {
            jQuery('#reportContent').html(data['report']);
            jQuery('#reportContent').show();
            jQuery('#reportContentControls').show();
            jQuery('#reportOptions').hide();
        }
    })
}
function admin_report_enter_in_input(input) {
    switch(input) {
        case 'report-indv-asset-input':
            jQuery("#" + input).on("keypress", function(e) {
                if (e.keyCode == 13) {
                    admin_reports(0, '#report-indv-asset-input');
                    return false; // prevent the button click from happening
                }
            });
            break;
        case 'report-org-input':
            jQuery("#" + input).on("keypress", function(e) {
                if (e.keyCode == 13) {
                    admin_reports(3, '#report-org-input');                    
                    return false; // prevent the button click from happening
                }
            });
            break;
        case 'report-indv-employee-input':
            jQuery("#" + input).on("keypress", function(e) {
                if (e.keyCode == 13) {
                    admin_reports(1, '#report-indv-employee-input');                   
                    return false; // prevent the button click from happening
                }
            });
            break;
        case 'report-missing-input':
            jQuery("#" + input).on("keypress", function(e) {
                if (e.keyCode == 13) {
                    admin_reports(4, '#report-missing-input');
                    return false; // prevent the button click from happening
                }
            });
            break;
        case 'report-indv-location-input':
            jQuery("#" + input).on("keypress", function(e) {
                if (e.keyCode == 13) {
                    admin_reports(2, '#report-indv-location-input', '#report-indv-location-input2');
                    return false; // prevent the button click from happening
                }
            });
            break;
        case 'report-indv-location-input2':
            jQuery("#" + input).on("keypress", function(e) {
                if (e.keyCode == 13) {
                    admin_reports(2, '#report-indv-location-input', '#report-indv-location-input2');
                    return false; // prevent the button click from happening
                }
            });
            break;
    }
}
function admin_report_return() {
    jQuery('#reportContent').html('');
    jQuery('#reportContent').hide();
    jQuery('#reportContentControls').hide();
    jQuery('#reportOptions').show();
}
function printDiv(divName){
    var printContents = document.getElementById(divName).innerHTML;	
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
	//document.body.innerHTML = originalContents;
}
if(document.getElementById("report-indv-asset-input")) {
    admin_report_enter_in_input("report-indv-asset-input");
    admin_report_enter_in_input("report-org-input");
    admin_report_enter_in_input("report-indv-employee-input");
    admin_report_enter_in_input("report-missing-input");
    admin_report_enter_in_input("report-indv-location-input");
    admin_report_enter_in_input("report-indv-location-input2");
}

function getReportData(){
    var form = {
        'action': 'causfa_report_data',
        'type': jQuery("#reportType").val(),
        'input1': jQuery("#reportInput1").val(),
        'input2': jQuery("#reportInput2").val()
    };
    jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
        generatePrintedReport(data["data"], data["criteria"]);
    });
}

function validateFormIndvEmployee() {
    // Get the input element
    var input = document.getElementById('report-indv-employee-input');
    // Get the datalist
    var PIDs = jQuery('#PIDs');


    // If we find the input inside our list, we submit the form
    var children = PIDs.children();
    for(var i = 0; i < children.length; i++){
        if(children[i].value == input.value) {
            var PID_dest = children[i].getAttribute('data_value');
            return PID_dest;
        }
    }

    // we send an error message
    alert("Name input is invalid")
    return false;
}