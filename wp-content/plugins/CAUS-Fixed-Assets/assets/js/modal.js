// JavaScript Document
function transferModalRequested(elementID) {
    var id = elementID.split('-')[1];
    var tag = document.getElementById(('asset-tag-' + id)).innerHTML ;
    var desc = document.getElementById(('asset-desc-' + id)).innerHTML;
    var form = {
        action: 'causfa_set_session',
        Name: 'ptag',
        Input: tag
    };
    jQuery.post(causfa_action_obj.ajax_url, form, function(data) {});
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
    var form = {
        action: 'causfa_set_session',
        Name: 'ptag',
        Input: tag
    };
    jQuery.post(causfa_action_obj.ajax_url, form, function(data) {});
    jQuery('#surplusModal').find('#surplusIndex').val(id);
    jQuery('#surplusModal').find('.asset-tag').html(tag);
    jQuery('#surplusModal').find('.asset-description').html(desc);
    jQuery('#surplusModal').modal();
    jQuery('#surplusModal').modal('open');
}
function galleryModalRequested(elementID) {
    var id = elementID.split('-')[1];
    var tag = document.getElementById(('asset-tag-' + id)).innerHTML;
    var form = {
        action: 'causfa_set_session',
        Name: 'ptag',
        Input: tag
    };
    jQuery.post(causfa_action_obj.ajax_url, form, function(data) {});
    jQuery('#galleryModal').find('#galleryPtag').val(tag);
    jQuery('#imageFileToUpload').val('');
    jQuery('#imageDescription').val('');
    var list = document.getElementById('slides').innerHTML ='';
    var form = {
        action: 'causfa_output_images'
    };
    jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
        for (i = 0; i < data['src'].length; i++) {
            addImages(data['src'][i], data['desc'][i], data['date'][i]);
        }
        $('.flexslider').flexslider({
            animation: "slide",
            controlNav: "thumbnails"
        });
    });
    jQuery('#galleryModal').modal();
    jQuery('#galleryModal').modal('open');
}
function addImages(image, desc, date) {
    var list = document.getElementById('slides');
    var item = document.createElement('LI');
    var img = document.createElement('img');
    img.src = image;
    var text = document.createTextNode(desc + "  Uploaded on: " + date);
    item.appendChild(img);
    item.appendChild(text);
    list.appendChild(item);
}
function formsModalRequested(elementID) {
    var id = elementID.split('-')[1];
    var tag = document.getElementById(('asset-tag-' + id)).innerHTML;
    var form = {
        action: 'causfa_set_session',
        Name: 'ptag',
        Input: tag
    };
    jQuery.post(causfa_action_obj.ajax_url, form, function(data) {});
    jQuery('#formsModal').find('#formsPtag').val(tag);
    jQuery('#homeFormToUpload').val('');
    jQuery('#officeFormToUpload').val('');
    jQuery('#formsModal').modal();
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