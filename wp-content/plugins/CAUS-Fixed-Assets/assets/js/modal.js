// JavaScript Document
function transferModalRequested(elementID) {
    var id = elementID.split('-')[1];
    var tag = document.getElementById(('asset-tag-' + id)).innerHTML ;
    var desc = document.getElementById(('asset-desc-' + id)).innerHTML;
    $('#transferModal').find('.modal-body').find('.asset-tag').html(tag);
    $('#transferModal').find('.modal-body').find('.asset-description').html(desc);
    $('#transferModal').modal('show');
}
function surplusModalRequested(elementID) {
    var id = elementID.split('-')[1];
    var tag = document.getElementById(('asset-tag-' + id)).innerHTML;
    var desc = document.getElementById(('asset-desc-' + id)).innerHTML;
    $('#surplusModal').find('.modal-body').find('.asset-tag').html(tag);
    $('#surplusModal').find('.modal-body').find('.asset-description').html(desc);
    $('#surplusModal').modal('show');
}
function galleryModalRequested(elementID) {
    var id = elementID.split('-')[1];
    var tag = document.getElementById(('asset-tag-' + id)).innerHTML;
    $('#galleryModal').modal('show');
}
function formsModalRequested(elementID) {
    var id = elementID.split('-')[1];
    var tag = document.getElementById(('asset-tag-' + id)).innerHTML;
    $('#formsModal').modal('show');
}