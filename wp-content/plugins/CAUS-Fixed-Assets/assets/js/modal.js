// JavaScript Document
function transferModalRequested(elementID) {
    var id = elementID.split('-')[1];
    var tag = document.getElementById(('asset-tag-' + id)).innerHTML ;
    var desc = document.getElementById(('asset-desc-' + id)).innerHTML;
    document.getElementById('recipient-name').value = '';
    jQuery('#transferModal').find('#transferIndex').val(id);
    jQuery('#transferModal').find('.modal-body').find('.asset-tag').html(tag);
    jQuery('#transferModal').find('.modal-body').find('.asset-description').html(desc);
    jQuery('#transferModal').modal('show');
}
function surplusModalRequested(elementID) {
    var id = elementID.split('-')[1];
    var tag = document.getElementById(('asset-tag-' + id)).innerHTML;
    var desc = document.getElementById(('asset-desc-' + id)).innerHTML;
    jQuery('#surplusModal').find('#surplusIndex').val(id);
    jQuery('#surplusModal').find('.modal-body').find('.asset-tag').html(tag);
    jQuery('#surplusModal').find('.modal-body').find('.asset-description').html(desc);
    jQuery('#surplusModal').modal('show');
}
function galleryModalRequested(elementID) {
    var id = elementID.split('-')[1];
    var tag = document.getElementById(('asset-tag-' + id)).innerHTML;
    jQuery('#galleryModal').find('#galleryPtag').val(tag);
    var PID = document.getElementById('employeePID').innerHTML;
    jQuery('#galleryModal').find('#galleryPID').val(PID);
    jQuery('#imageFileToUpload').val('');
    jQuery('#galleryModal').modal('show');
}
function formsModalRequested(elementID) {
    var id = elementID.split('-')[1];
    var tag = document.getElementById(('asset-tag-' + id)).innerHTML;
    jQuery('#formsModal').find('#formsPtag').val(tag);
    jQuery('#formsModal').modal('show');
}
function modalRequestedOnPendingAsset(elementID) {
    var id = elementID.split('-')[1];
    var tag = document.getElementById(('asset-tag-' + id)).innerHTML ;
    var form = {
        action: 'causfa_pending_action',
        ptag: tag
    };
    jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
        alert(JSON.stringify(data));
    });
}