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
    //document.getElementById('slides').innerHTML ='';
    var loaded = jQuery('#loaded').val();
    //alert(loaded.length);
    jQuery('#loaded').val(tag);
    if (!loaded.length) {
        $('.slider-nav').empty();
        $('.slider-for').empty();
        slickInit();
        var form = {
            action: 'causfa_output_images'
        };
        jQuery.post(causfa_action_obj.ajax_url, form, function (data) {
            for (i = 0; i < data['src'].length; i++) {
                addImages(data['src'][i], data['desc'][i], data['date'][i]);

            }
        });
    } else if (loaded != tag) {
        slickDisable();
        $('.slider-nav').empty();
        $('.slider-for').empty();
        slickInit();
        var form = {
            action: 'causfa_output_images'
        };
        jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
            for (i = 0; i < data['src'].length; i++) {
                addImages(data['src'][i], data['desc'][i], data['date'][i]);

            }
        });
    }
    jQuery('#galleryModal').modal();
    jQuery('#galleryModal').modal('open');
}
function addImages(image, desc, date) {
    var item = document.createElement('div');
    var item2 = document.createElement('div');
    var img = document.createElement('img');
    var img2 = document.createElement('img');
    img.src = image;
    img2.src = image;
    if (date === '') {
        var text = document.createTextNode(desc);
    } else {
        var text = document.createTextNode(desc + "  Uploaded on: " + date);
    }
    item.appendChild(img);
    item2.appendChild(img2)
    slickDisable()
    $('.slider-nav').append(item);
    $('.slider-for').append(item2);
    slickInit();
}
function slickInit() {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        autoplay: true,
        adaptiveHeight: true
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });
}
function slickDisable() {
    $('.slider-nav').slick('unslick');
    $('.slider-for').slick('unslick');
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