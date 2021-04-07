// Gallery Modal Functions
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
        jQuery('.slider-nav').empty();
        jQuery('.slider-for').empty();
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
        jQuery('.slider-nav').empty();
        jQuery('.slider-for').empty();
        slickInit();
        var form = {
            action: 'causfa_output_images'
        };
        jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
            for (i = 0; i < data['src'].length; i++) {
                addImages(data['src'][i], data['desc'][i], data['date'][i]);

            }
            jQuery('#imageCount').val(data['count']);
        });
    }
    jQuery('#galleryModal').modal();
	document.getElementById('galleryModal').style.maxWidth = "1024px";
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
    if (jQuery('#imageCount').val() == 0) {
        jQuery('.slider-nav').empty();
        jQuery('.slider-for').empty();
    }
    jQuery('.slider-nav').append(item);
    jQuery('.slider-for').append(item2);
    jQuery('#imageCount').val(jQuery('#imageCount').val() + 1);
    slickInit();
}

function slickInit() {
    jQuery('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-nav',
        arrows: true,
        fade: true,
        autoplay: true,
    });
    jQuery('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });
}

function slickDisable() {
    jQuery('.slider-nav').slick('unslick');
    jQuery('.slider-for').slick('unslick');
}
// END Gallery Modal Functions
// Bulk Gallery Modal Functions
function bulkGalleryModalRequested() {
    var input = jQuery("input:checkbox:checked")[0].id.split('-');
    galleryModalRequested(input[1] + "-" + input[2]);
}
// END Bulk Gallery Modal Functions
// Gallery Data Process Functions
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
                    jQuery('#imageDescription').val('');
                    jQuery('#imageFileToUpload').val('');
                    //var index = jQuery('#slider-nav').slick('slickCurrentSlide');
                    //index++;
                    //jQuery('#slider-nav').slick('slickGoTo', index);
                    addImages(data['src'], data['desc'], data['date']);
                }
            }
        });
    }
}
// END Gallery Data Process Functions