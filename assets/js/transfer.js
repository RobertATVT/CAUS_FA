
//Transfer Modal Functions

/**
 * @param elementID
 **/
function transferModalRequested(elementID) {
    var id = elementID.split('-')[1];
    var tag = document.getElementById(('asset-tag-' + id)).innerHTML ;
    var desc = document.getElementById(('asset-desc-' + id)).innerHTML;
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
        action: 'causfa_autocomplete_PID'
    };
    jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
        var PID_options = data['PIDs'];
        var Name_options = data['Names'];
        var list_fill = new Array();
        var PIDs = document.getElementById('PIDs');
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
        transferModalLoadFill(elementID, list_fill);
        // RN_# For Loop goes here
    });
}
function transferModalLoadFill(element,list_fill) {
    for (var i = 0; i < element.length; i++) {
        new Awesomplete(document.getElementById(element[i]), {list:list_fill});
    }
}

// End Transfer Modal Functions
//Bulk Transfer Modal Functions
function bulkTransferModalRequested() {
    jQuery('#bulk-transfer-items').html('');
    var ids = [];
    var tags = [];
    var descriptions = [];
    var selected = jQuery(" input:checkbox:checked");
    for( var i = 0; i < selected.length; i++) {
        var id = selected[i].id.split('-')[2];
        tags.push(jQuery("#asset-tag-" + id).html());
        descriptions.push(jQuery("#asset-desc-" + id).html());
    }
    var assets = '';
    for (i = 0; i < tags.length; i++) {
        var asset = '<div class="center cl t20 form-group" style="padding: 0px;">' +
            '    <div class="cl m3 t20"><span class="asset-tag-[ID]">' + tags[i] + '</span></div>' +
            '    <div class="cl m7 t20 shorten-text"><span class="asset-description-[ID]">' + descriptions[i] + '</span></div>' +
            '    <div class="cl m7 t20">' +
            '        <input type="text" class="awesomplete" id="recipient-name-[ID]" list="PIDs">' +
            '        <input type="hidden" id="transferIndex" value="" />' +
            '    </div>' +
            '    <div class="cl m3 t20">' +
            '        <input id="same-reciever-[ID]" type="checkbox" value="same-reciever-[ID]" class="filled-in admin-block-line-b">' +
            '        <label for="same-reciever-[ID]"></label>' +
            '    </div>' +
            '</div>';
        asset = asset.split('[ID]').join(i);
        assets = assets + asset;
    }
    jQuery('#bulk-transfer-items').html(assets);
    var recipients = jQuery("[id^=recipient-name-]");
    for (i = 0; i < recipients.length; i++) {
        var recipient = recipients[i];
        var id = recipient.id;
        ids.push(id);
    }
    transferModalLoad(ids);
    jQuery('#bulk-transferModal').modal();
    jQuery('#bulk-transferModal').modal('open');

}
//End Bulk Transfer Modal Functions

//Transfer Data Processing Functions
function transferAsset(PID_dest) {
    var form = {
        action: 'causfa_transfer_asset',
        dest: PID_dest,
        type: 0
    };
    jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
        if(data['status'] == 1) {
            var id = jQuery('#transferModal').find('#transferIndex').val();
            var status = jQuery(('#status-' + id));
            /*status.addClass('asset-pending');*/
            status.html('<div class="asset-status asset-pending">Pending Transfer</div>');
            jQuery(('#transfer-' + id)).attr('onclick', 'modalRequestedOnPendingAsset(this.id)');
            jQuery(('#surplus-' + id)).attr('onclick', 'modalRequestedOnPendingAsset(this.id)');
            jQuery('#transferModal').modal('close');
            jQuery('#responseModal').find('#modal-response-title').text('Transfer Request Submitted');
            jQuery('#responseModal').find('#modal-response-alert').text(data['message']);
            jQuery('#responseModal').modal();
            jQuery('#responseModal').modal('open');
        }
    });
}

function bulkTransferAsset(PID_dest) {

}


function acceptTransfer(ptag, id) {
    var form = {
        action: 'causfa_update_transfer',
        type: 0,
        ptag: ptag
    };
    jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
        if (data['status'] === 1) {
            $("#alert-body-" + id).remove();
            $("#alert-header-" + id).remove();
            if ($("#asset-alerts").children().length === 0) {
                $("#asset-alerts").remove();
            }
        }
    });
}

function denyTransfer(ptag, id) {
    var form = {
        action: 'causfa_update_transfer',
        type: 1,
        ptag: ptag
    };
    jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
        if (data['status'] === 1) {
            $("#alert-body-" + id).remove();
            $("#alert-header-" + id).remove();
            if ($("#asset-alerts").children().length === 0) {
                $("#asset-alerts").remove();
            }
        }
    });
}

//End Transfer Data Processing Functions