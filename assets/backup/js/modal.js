// JavaScript Document


function addAssetModalRequested(elementID) {
    jQuery('#addAssetPTAG').val('');
    jQuery('#addAssetSerial').val('');
    jQuery('#addAssetDesc').val('');
    jQuery('#addAssetNotes').val('');
    jQuery('#addAssetsModal').modal();
    jQuery('#addAssetsModal').modal('open');
}

function custodianModalRequested() {
    var form = {
        action: 'causfa_get_custodian'
    };
    jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
        jQuery('#Building').val(data['Building']);
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