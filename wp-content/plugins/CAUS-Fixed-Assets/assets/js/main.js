function surplusAsset() {
    ptag = jQuery('#surplusModal').find('.asset-tag').html();
    var form = {
        action: 'causfa_surplus',
        type: 1
    };
    jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
        if(data['status'] == 1) {
            var id = jQuery('#surplusModal').find('#surplusIndex').val();
            var status = jQuery(('#status-' + id))
            status.addClass('faa-asset-status-pending');
            status.html("Pending Surplus");
            jQuery(('#transfer-' + id)).attr('onclick', 'modalRequestedOnPendingAsset(this.id)');
            jQuery(('#surplus-' + id)).attr('onclick', 'modalRequestedOnPendingAsset(this.id)');
            jQuery('#surplusModal').modal('close');
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
            var status = jQuery(('#status-' + id))
            status.addClass('faa-asset-status-pending');
            status.html("Pending Transfer");
            jQuery(('#transfer-' + id)).attr('onclick', 'modalRequestedOnPendingAsset(this.id)');
            jQuery(('#surplus-' + id)).attr('onclick', 'modalRequestedOnPendingAsset(this.id)');
            jQuery('#transferModal').modal('close');
            jQuery('#responseModal').modal();
            jQuery('#responseModal').modal('open');
        }
    });
}
function generateForm(element, action) {
    var ptag = jQuery('#formsModal').find('#formsPtag').val();
    var form_type = '';
    if (action == 0) {
        var form_type = 'causfa_generate_form_Home';
    } else {
        form_type = 'causfa_generate_form_Office';
    }
    var form = {
        action: form_type,
        ptag: ptag
    };
    jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
        if (data['status'] == 1) {
            window.open(data['url'])
        }
    });
}
function new_custodian_submit() {
    var office = jQuery('#Office').val();
    var phone = jQuery('#Phone').val();
    if (office == null) {
        alert('Office field cannot be empty');
    } else if (phone == null) {
        alert('Phone field cannot be empty');
    } else {
        var form = {
            action: 'causfa_new_custodian',
            office: office,
            phone: phone
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
                    alert (data['src']);
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
                }
            }
        });
    }
}