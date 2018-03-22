// JavaScript Document
function transferModalRequested(elementID) {
    var id = elementID.split('-')[1];
    var tag = document.getElementById(('asset-tag-' + id)).innerHTML ;
    var desc = document.getElementById(('asset-desc-' + id)).innerHTML;
    document.getElementById('recipient-name').value = '';
    jQuery('#transferModal').find('#transferIndex').val(id);
    jQuery('#transferModal').find('.asset-tag').html(tag);
    jQuery('#transferModal').find('.asset-description').html(desc);
    jQuery('#transferModal').modal();
    jQuery('#transferModal').modal('open');

}
function surplusModalRequested(elementID) {
    var id = elementID.split('-')[1];
    var tag = document.getElementById(('asset-tag-' + id)).innerHTML;
    var desc = document.getElementById(('asset-desc-' + id)).innerHTML;
    jQuery('#surplusModal').find('#surplusIndex').val(id);
    jQuery('#surplusModal').find('.asset-tag').html(tag);
    jQuery('#surplusModal').find('.asset-description').html(desc);
    jQuery('#surplusModal').modal();
    jQuery('#surplusModal').modal('open');
}
function galleryModalRequested(elementID) {
    var id = elementID.split('-')[1];
    var tag = document.getElementById(('asset-tag-' + id)).innerHTML;
    jQuery('#galleryModal').find('#galleryPtag').val(tag);
    //var PID = document.getElementById('employeePID').innerHTML;
    //jQuery('#galleryModal').find('#galleryPID').val(PID);
    jQuery('#imageFileToUpload').val('');
    jQuery('#galleryModal').modal();
    jQuery('#galleryModal').modal('open');
}
function formsModalRequested(elementID) {
    var id = elementID.split('-')[1];
    var tag = document.getElementById(('asset-tag-' + id)).innerHTML;
    //var PID = document.getElementById('employeePID').innerHTML;
    //jQuery('#formsModal').find('#formsPID').val(PID);
    jQuery('#formsModal').find('#formsPtag').val(tag);
    jQuery('#homeFormToUpload').val('');
    jQuery('#officeFormToUpload').val('');
    jQuery('#formsModal').modal();
    jQuery('.carousel').carousel()
    jQuery('#formsModal').modal('open');
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