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
	transferModalLoad();
    document.getElementById('recipient-name').value = '';
    jQuery('#transferModal').find('#transferIndex').val(id);
    jQuery('#transferModal').find('.asset-tag').html(tag);
    jQuery('#transferModal').find('.asset-description').html(desc);
    jQuery('#transferModal').modal();
    jQuery('#transferModal').modal('open');

}
function transferModalLoad(elementID) {
	var form = {
            action: 'causfa_autocomplete_PID',
        }
        jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
            var PID_options = data['PIDs'];
            var Name_options = data['Names'];
			var input = document.getElementById("recipient-name");
			var list_fill = new Array();
			for (var i = 0; i < PID_options.length; i++) {
				var list_item = new Array();
				list_item[0] = Name_options[i];
				list_item[1] = Name_options[i];
				list_fill.push(list_item);
				var option = document.createElement('option');
                option.value = Name_options[i];
                option.setAttribute('data_value', PID_options[i]);
                PIDs.appendChild(option);
			}
			// alert(JSON.stringify(list_fill));
			new Awesomplete(input, {
				list: list_fill
			})
        });
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
            $('#imageCount').val(data['count']);
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
    if ($('#imageCount').val() == 0) {
        $('.slider-nav').empty();
        $('.slider-for').empty();
    }
    $('.slider-nav').append(item);
    $('.slider-for').append(item2);
    slickInit();
}
function slickInit() {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-nav',
        arrows: true,
        fade: true,
        autoplay: true
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
function addAssetModalRequested(elementID) {
    jQuery('#addAssetPTAG').val('');
    jQuery('#addAssetSerial').val('');
    jQuery('#addAssetDesc').val('');
    jQuery('#addAssetNotes').val('');
    jQuery('#addAssetsModal').modal();
    jQuery('#addAssetsModal').modal('open');
}
function ticketModalRequested(elementID) {
    var id = elementID.split('-')[1];
    jQuery('#ticketModal').find('#reportIndex').val(id);
    var tag = document.getElementById(('asset-tag-' + id)).innerHTML;
    var serial = document.getElementById(('asset-serial-' + id)).innerHTML;
    var desc = document.getElementById(('asset-desc-' + id)).innerHTML;
    jQuery('#addTicketNotes').val('');
    jQuery('#ticketSelect').val('not-missing');
    jQuery('#ticketPtag').text(tag);
    jQuery('#ticketSerial').text(serial);
    jQuery('#ticketDescription').text(desc);
    jQuery('#ticketModal').modal();
    jQuery('#ticketModal').modal('open');
}
function custodianModalRequested() {
    var form = {
        action: 'causfa_get_custodian'
    };
    jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
        jQuery('#Office').val(data['Office']);
        jQuery('#Phone').val(data['Phone']);
        jQuery('#org').val(data['Org']);
        jQuery('#custodianModal').modal();
        jQuery('#custodianModal').modal('open');
    });
}
function modalRequestedOnPendingAsset(elementID) {
    var id = elementID.split('-')[1];
    var tag = document.getElementById(('asset-tag-' + id)).innerHTML ;
    var form = {
        action: 'causfa_pending_action',
        ptag: tag
    };
    jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
        jQuery('#responseModal').find('#modal-response-title').text('Asset Status Pending');
        jQuery('#responseModal').find('#modal-response-alert').text(data);
        jQuery('#responseModal').modal();
        jQuery('#responseModal').modal('open');
    });
}
function modalRequestedOnMissingAsset(elementID) {
    jQuery('#responseModal').find('#modal-response-title').text('Asset Missing');
    jQuery('#responseModal').find('#modal-response-alert').text('You can not perform actions on this asset because it is currently on the missing list');
    jQuery('#responseModal').modal();
    jQuery('#responseModal').modal('open');
}
$(document).ready(function() {
	$('select#ticketSelect').change(function() {
		var sel_value = $('option:selected').val();
			if (sel_value == "other") {
				document.getElementById('addTicketNotes').style.display = "block";
			} else {
			    document.getElementById('addTicketNotes').style.display = "none";
            }
			})
	});