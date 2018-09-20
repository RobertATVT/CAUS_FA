function new_custodian_submit() {
    var building = jQuery('#Building').val();
    var office = jQuery('#Office').val();
    var phone = jQuery('#Phone').val();
    var org = jQuery('#org').val();
    if (office == null) {
        alert('Office field cannot be empty');
    } else if (phone == null) {
        alert('Phone field cannot be empty');
    } else if (building == null) {
        alert('Building field cannot be empty');
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
    var input = $('.tablesorter').find( "input:checkbox:checked" );
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
        if (status.children().html() === 'Missing') {
            jQuery("#transfer-ribbon").removeClass("ribbon-active");
            jQuery("#transfer-ribbon").addClass("ribbon-disabled");
            jQuery("#transfer-ribbon-button").attr('onClick', '');
            jQuery("#surplus-ribbon").removeClass("ribbon-active");
            jQuery("#surplus-ribbon").addClass("ribbon-disabled");
            jQuery("#surplus-ribbon-button").attr('onClick', '');
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
            $('#fa-progress').modal();
            $('#fa-progress').modal('open');
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


