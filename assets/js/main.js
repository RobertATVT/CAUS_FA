function surplusAsset() {
    ptag = jQuery('#surplusModal').find('.asset-tag').html();
    var form = {
        action: 'causfa_surplus',
        type: 1
    };
    jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
        if(data['status'] == 1) {
            var id = jQuery('#surplusModal').find('#surplusIndex').val();
            var status = jQuery(('#status-' + id));
            /*status.addClass('asset-pending');*/
            status.html('<div class="asset-status asset-pending">Pending Surplus</div>');
            jQuery(('#transfer-' + id)).attr('onclick', 'modalRequestedOnPendingAsset(this.id)');
            jQuery(('#surplus-' + id)).attr('onclick', 'modalRequestedOnPendingAsset(this.id)');
            jQuery('#surplusModal').modal('close');
            jQuery('#responseModal').find('#modal-response-title').text('Surplus Request Submitted');
            jQuery('#responseModal').find('#modal-response-alert').text(data['message']);
            jQuery('#responseModal').modal();
            jQuery('#responseModal').modal('open');
        }
    });
}

function transferAsset(PID_dest) {
    var form = {
        action: 'causfa_transfer_asset',
        dest: PID_dest,
        type: 0
    };
    jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
        if(data['status'] == 1) {
            var id = jQuery('#transferModal').find('#transferIndex').val();
            var status = jQuery(('#status-' + id));
            /*status.addClass('asset-pending');*/
            status.html('<div class="asset-status asset-pending">Pending Transfer</div>');
            jQuery(('#transfer-' + id)).attr('onclick', 'modalRequestedOnPendingAsset(this.id)');
            jQuery(('#surplus-' + id)).attr('onclick', 'modalRequestedOnPendingAsset(this.id)');
            jQuery('#transferModal').modal('close');
            jQuery('#responseModal').find('#modal-response-title').text('Transfer Request Submitted');
            jQuery('#responseModal').find('#modal-response-alert').text(data['message']);
            jQuery('#responseModal').modal();
            jQuery('#responseModal').modal('open');
        }
    });
}
function generateForm(element, action) {
    var ptag = jQuery('#formsModal').find('#formsPtag').val();
    var form = {
        action: 'causfa_form_fill_data',
        ptag: ptag
    };
    jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
        if (data['status'] == 1) {
            if (action == 1) {
                generateOffieUse(data);
            } else {
                generateHomeUse(data);
            }
        }
    });
}
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
    jQUery.post(causfa_action_obj.ajax_url, form, function(data) {
        if (data != 1) {
            alert('Something went wrong');
        }
    });
}
function uploadImage() {
    var fileInput = jQuery('#imageFileToUpload');
    var file = fileInput.prop('files')[0];
    var desc = jQuery('#imageDescription').val();
    if (!file) {
        alert('Please select a file to upload');
    } else if (!desc) {
        alert('Please enter a image description');
    } else {
        var ptag = jQuery('#galleryPtag').val();
        var form = new FormData();
        form.append('action', 'causfa_upload_image');
        form.append('ptag', ptag);
        form.append('imageFileToUpload', file);
        form.append('desc', desc);
        jQuery.ajax({
            url: causfa_action_obj.ajax_url,
            type: 'post',
            contentType: false,
            processData: false,
            data: form,
            success: function (data) {
                if (data['status'] == 0) {
                    alert(data['message']);
                } else {
                    alert(data['message']);
                    $('#imageDescription').val('');
                    $('#imageFileToUpload').val('');
                    //var index = $('#slider-nav').slick('slickCurrentSlide');
                    //index++;
                    //$('#slider-nav').slick('slickGoTo', index);
                    addImages(data['src'], data['desc'], data['date']);
                }
            }
        });
    }
}
function uploadFormHome(){
    var fileInput = jQuery('#homeFormToUpload');
    var file = fileInput.prop('files')[0];
    if (!file) {
        alert('Please select a file to upload');
    } else {
        var ptag = jQuery('#formsPtag').val();
        var form = new FormData();
        form.append('action', 'causfa_upload_form_home');
        form.append('ptag', ptag);
        form.append('homeFormToUpload', file);
        jQuery.ajax({
            url: causfa_action_obj.ajax_url,
            type: 'post',
            contentType: false,
            processData: false,
            data: form,
            success: function (data) {
                if (data['status'] == 0) {
                    alert(data['message']);
                } else {
                    alert(data['message']);
                    $('#homeFormToUpload').val('');
                    getLastForm(ptag);
                }
            }
        });
    }
}
function uploadFormOffice(){
    var fileInput = jQuery('#officeFormToUpload');
    var file = fileInput.prop('files')[0];
    if (!file) {
        alert('Please select a file to upload');
    } else {
        var ptag = jQuery('#formsPtag').val();
        var form = new FormData();
        form.append('action', 'causfa_upload_form_office');
        form.append('ptag', ptag);
        form.append('officeFormToUpload', file);
        jQuery.ajax({
            url: causfa_action_obj.ajax_url,
            type: 'post',
            contentType: false,
            processData: false,
            data: form,
            success: function (data) {
                if (data['status'] == 0) {
                    alert(data['message']);
                } else {
                    alert(data['message']);
                    $('#officeFormToUpload').val('');
                    getLastForm(ptag);
                }
            }
        });
    }
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
        alert('Please enter the PTag for the asset');
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
function addTicket() {
    var ptag = $('#ticketPtag').text();
    var serial = $('#ticketSerial').text();
    var desc = $('#ticketDescription').text();
    var notes = $('#ticketSelect').val();
    var status = 1;
    if (notes == 'other') {
        notes = jQuery('#addTicketNotes').val();
        if (notes.length == 0) {
            status = 0;
        }
    }
    if (status != 0) {
        var form = {
            action: 'causfa_add_ticket',
            ptag: ptag,
            serial: serial,
            desc: desc,
            note: notes,
            type: 1
        };
        jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
            if (data['status'] == 1) {
                jQuery('#ticketModal').modal('close');
                jQuery('#responseModal').find('#modal-response-title').text('Add Asset Request Submitted');
                jQuery('#responseModal').find('#modal-response-alert').text(data['message']);
                jQuery('#responseModal').modal();
                jQuery('#responseModal').modal('open');
                var id = jQuery('#reportIndex').val();
                var status = jQuery(('#status-' + id))
                status.addClass('asset-pending');
                status.html("Pending Ticket");
                jQuery(('#transfer-' + id)).attr('onclick', 'modalRequestedOnPendingAsset(this.id)');
                jQuery(('#surplus-' + id)).attr('onclick', 'modalRequestedOnPendingAsset(this.id)');
                jQuery(('#problem-' + id)).attr('onclick', 'modalRequestedOnPendingAsset(this.id)');
            } else {
                jQuery('#ticketModal').modal('close');
                jQuery('#responseModal').find('#modal-response-title').text('Ticket Rejected');
                jQuery('#responseModal').find('#modal-response-alert').text(data['message']);
                jQuery('#responseModal').modal();
                jQuery('#responseModal').modal('open');
            }
        });
    }
}
function loadView(n) {
	var form = {
        action: 'causfa_set_session',
        Name: 'admin_view',
        Input: n
    };
    jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
		location.reload();
	});
}