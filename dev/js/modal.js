// JavaScript Document
function transferModalRequested(element) {
    var tag = $(element).closest('.col-lg-12').find('.faa-asset').find('.row1').find('.asset-tag').html();
    var desc = $(element).closest('.col-lg-12').find('.faa-asset').find('.row2').find('.asset-description').html();
    $('#transferModal').find('.modal-body').find('.asset-tag').html(tag);
    $('#transferModal').find('.modal-body').find('.asset-description').html(desc);
    $('#transferModal').modal('show');
}
function surplusModalRequested(element) {
    var tag = $(element).closest('.col-lg-12').find('.faa-asset').find('.row1').find('.asset-tag').html();
    var desc = $(element).closest('.col-lg-12').find('.faa-asset').find('.row2').find('.asset-description').html();
    $('#surplusModal').find('.modal-body').find('.asset-tag').html(tag);
    $('#surplusModal').find('.modal-body').find('.asset-description').html(desc);
    $('#surplusModal').modal('show');
}
function galleryModalRequested(element) {
    var tag = $(element).closest('.col-lg-12').find('.faa-asset').find('.row1').find('.asset-tag').html();
    $('#galleryModal').modal('show');
}
function formsModalRequested(element) {
    var tag = $(element).closest('.col-lg-12').find('faa-asset').find('.row1').find('.asset-tag').html();
    $('#formsModal').modal('show');
}