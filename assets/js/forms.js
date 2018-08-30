// Forms Modal Functions
function formsModalRequested(elementID) {
    $('#last-form').html('');
    var id = elementID.split('-')[1];
    var tag = document.getElementById(('asset-tag-' + id)).innerHTML;
    var form = {
        action: 'causfa_set_session',
        Name: 'ptag',
        Input: tag
    };
    jQuery.post(causfa_action_obj.ajax_url, form, function(data) {});
    getLastForm(tag);
    jQuery('#formsModal').find('#formsPtag').val(tag);
    jQuery('#homeFormToUpload').val('');
    jQuery('#officeFormToUpload').val('');
    jQuery('#formsModal').modal();
    jQuery('#formsModal').modal('open');
}
function getLastForm(tag) {
    var form ={
        action: 'causfa_get_last_form',
        ptag: tag
    };
    jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
        if (data['status'] === 0) {
            $('#last-form').html('No form on record');
        } else if(data['type'] === 0) {
            $('#last-form').html('<a target="_blank" href="' + data['url'] + '">OfficeUse-' + data['date'] + '</a>');
        } else {
            $('#last-form').html('<a target="_blank" href="' + data['url'] + '">HomeUse-' + data['date'] + '</a>');
        }

    });
}
// END Forms Modal Functions
// Bulk Forms Modal Functions
function bulkFormsModalRequested() {
    var input = jQuery("input:checkbox:checked")[0].id.split('-');
    formsModalRequested(input[1] + "-" + input[2]);
}
// END Bulk Forms Modal Functions
// Forms Data Process Functions
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
                    $('#homeFormToUpload').val('');
                    $('#formsModal').modal('close');
                    $('#modal-response-title').html('File Upload Successful');
                    $('#modal-response-alert').html(data['message']);
                    var modal = $('#responseModal').modal();
                    modal.modal('open');
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
                    $('#officeFormToUpload').val('');
                    $('#formsModal').modal('close');
                    $('#modal-response-title').html('File Upload Successful');
                    $('#modal-response-alert').html(data['message']);
                    var modal = $('#responseModal').modal();
                    modal.modal('open');
                }
            }
        });
    }
}
// END Forms Data Process Functions