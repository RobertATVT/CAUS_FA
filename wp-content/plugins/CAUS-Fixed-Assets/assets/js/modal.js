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
    jQuery('#galleryModal').modal('show');
}
function formsModalRequested(elementID) {
    var id = elementID.split('-')[1];
    var tag = document.getElementById(('asset-tag-' + id)).innerHTML;
    jQuery('#formsModal').modal('show');
}