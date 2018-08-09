
//Transfer Modal Functions

/**
 * @param elementID
 **/
function transferModalRequested(elementID) {
    var id = elementID.split('-')[1];
    var tag = document.getElementById(('asset-tag-' + id)).innerHTML ;
    var desc = document.getElementById(('asset-desc-' + id)).innerHTML;
    var element = ['recipient-name'];
    transferModalLoad(element);
    document.getElementById('recipient-name').value = '';
    jQuery('#transferModal').find('#transferIndex').val(id);
    jQuery('#transferModal').find('.asset-tag').html(tag);
    jQuery('#transferModal').find('.asset-description').html(desc);
    jQuery('#transferModal').modal();
    jQuery('#transferModal').modal('open');

}
function transferModalLoad(elementID) {
    var PIDs = jQuery('#PIDs');
    var listBuilt = false;
    if (PIDs.children().length > 0) {
        listBuilt = true;
    }
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
            if (!listBuilt) {
                PIDs.appendChild(option);
            }
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
        ids.push(id);
        tags.push(jQuery("#asset-tag-" + id).html());
        descriptions.push(jQuery("#asset-desc-" + id).html());
    }
    var assets = '';
    for (i = 0; i < tags.length; i++) {
        var asset = '<div class="center cl t20 form-group" style="padding: 0px;">' +
            '    <div class="cl m3 t20"><span id="bulk-asset-tag-[ID]">' + tags[i] + '</span></div>' +
            '    <div class="cl m7 t20 shorten-text"><span class="asset-description-[ID]">' + descriptions[i] + '</span></div>' +
            '    <div class="cl m7 t20">' +
            '        <input type="text" class="awesomplete" id="recipient-name-[ID]" list="PIDs">' +
            '        <input type="hidden" id="transferIndex" value="" />' +
            '    </div>' +
            '    <div class="cl m3 t20">' +
            '        <input id="same-reciever-[ID]" type="checkbox" value="same-reciever-[ID]" class="filled-in admin-block-line-b" disabled="disabled">' +
            '        <label for="same-reciever-[ID]"></label>' +
            '    </div>' +
            '</div>';
        asset = asset.split('[ID]').join(ids[i]);
        assets = assets + asset;
    }
    jQuery('#bulk-transfer-items').html(assets);
    var recipients = jQuery("[id^=recipient-name-]");
    var selectors = [];
    for (i = 0; i < recipients.length; i++) {
        var recipient = recipients[i];
        var selector = recipient.id;
        document.getElementById(selector).addEventListener("awesomplete-select", function() {
            activateCheckboxes();
        });
        document.getElementById(selector).addEventListener('keyup', function() {
            inputBoxChange(this);
        });
        selectors.push(selector);
    }
    transferModalLoad(selectors);
    jQuery('#bulk-transfer-ids').val(ids.join(', '));
    jQuery('#bulk-transferModal').modal();
    jQuery('#bulk-transferModal').modal('open');

}

function inputBoxChange(element) {
    if(!element.value) {
        var ids = jQuery('#bulk-transfer-ids').val().split(', ');
        var allEmpty = true;
        for (var i = 0; i < ids.length; i++) {
            if (jQuery('#recipient-name-' + ids[i]).val()) {
                allEmpty = false;
            }
        }
        if (allEmpty) {
            var checkboxes = jQuery("#bulk-transfer-items").find("input:checkbox");
            for (var i = 0; i < checkboxes.length; i++) {
                checkboxes[i].disabled = true;
                checkboxes[i].onclick = '';
            }
        }
    }
}

function activateCheckboxes() {
    var checkboxes = jQuery("#bulk-transfer-items").find("input:checkbox");
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].disabled = '';
        checkboxes[i].onclick =  function() {sameReceiver(this.id);};
    }
}

function sameReceiver(id) {
    id = id.split('-')[2];
    var name = jQuery('#recipient-name-' + id).val();
    var checkboxes = jQuery("#bulk-transfer-items").find("input:checkbox");
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = true;
        checkboxes[i].onclick = function() {changeReceiver(this.id, name)};
        var index = checkboxes[i].id.split('-')[2];
        var nameInput = jQuery('#recipient-name-' + index);
        nameInput.val(name);
        nameInput.prop('disabled', true);
    }
}

function changeReceiver(id, name) {
    var checkboxes = jQuery("#bulk-transfer-items").find("input:checkbox:checked");
    id = id.split('-')[2];
    if(checkboxes.length) {
        var checkbox = jQuery('#same-reciever-' + id);
        var nameInput = jQuery('#recipient-name-' + id);
        if (nameInput.prop('disabled')) {
            nameInput.val('');
            nameInput.prop('disabled', '');
        } else {
            nameInput.val(name);
            nameInput.prop('disabled', true);
        }
    } else {
        var nameInput = jQuery('#recipient-name-' + id);
        nameInput.val('');
        nameInput.prop('disabled', '');
        var checkboxes = jQuery("#bulk-transfer-items").find("input:checkbox");
        for (var i = 0; i < checkboxes.length; i++) {
            checkboxes[i].disabled = true;
            checkboxes[i].onclick = '';
        }
    }
}
//End Bulk Transfer Modal Functions
//Transfer Data Processing Functions
function validateForm() {
    // Get the input element
    var input = document.getElementById('recipient-name');
    // Get the datalist
    var PIDs = jQuery('#PIDs');


    // If we find the input inside our list, we submit the form
    var children = PIDs.children();
    for(var i = 0; i < children.length; i++){
        if(children[i].value == input.value) {
            var PID_dest = children[i].getAttribute('data_value');
            return PID_dest;
        }
    }

    // we send an error message
    alert("Name input is invalid")
    return false;
}
function validateFormBulk(element) {
    var input = document.getElementById('recipient-name-' + element);
    var PIDs = jQuery('#PIDs');
    var children = PIDs.children();
    for(var i = 0; i < children.length; i++){
        if(children[i].value == input.value) {
            var PID_dest = children[i].getAttribute('data_value');
            return PID_dest;
        }
    }
    return false;

}
function transferAsset() {
    var id = jQuery('#transferIndex').val();
    var tag = jQuery('#asset-tag-' + id).html();
    var PID_dest = validateForm();
    if (PID_dest !== false) {
        var form = {
            action: 'causfa_transfer_asset',
            dest: PID_dest,
            ptag: tag,
            type: 0,
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
}

function bulkTransferAsset() {
    var ids = jQuery('#bulk-transfer-ids').val();
    ids = ids.split(', ');
    var ids_successful = [];
    var tags = [];
    var PID_dests = [];
    for (var i = 0; i < ids.length; i++) {
        var tag = jQuery('#asset-tag-' + ids[i]).html();
        var PID_dest = validateFormBulk(ids[i]);
        if (PID_dest !== false) {
            ids_successful.push(ids[i]);
            tags.push(tag);
            PID_dests.push(PID_dest);
        }
    }
    var form = {
        action: 'causfa_bulk_transfer_asset',
        dests: PID_dests.join(','),
        ptags: tags.join(','),
        type: 0
    };
    jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
        if (data['status'] == 1) {
            for (var i = 0; i < ids_successful.length; i++) {
                var index = ids_successful[i];
                var status = jQuery(('#status-' + index));
                status.html('<div class="asset-status asset-pending">Pending Transfer</div>');
                jQuery(('#transfer-' + index)).attr('onclick', 'modalRequestedOnPendingAsset(this.id)');
                jQuery(('#surplus-' + index)).attr('onclick', 'modalRequestedOnPendingAsset(this.id)');
                var checkbox = jQuery(('#asset-select-' + index));
                checkbox.attr('disabled', 'disabled');
                checkbox.attr('checked', false);
            }
            checkSelected();
            if (ids_successful.length == ids.length) {
                    jQuery('#bulk-transferModal').modal('close');
                    jQuery('#responseModal').find('#modal-response-title').text('Transfer Request Submitted');
                    jQuery('#responseModal').find('#modal-response-alert').text(data['message']);
                    jQuery('#responseModal').modal();
                    jQuery('#responseModal').modal('open');
                } else {
                    for (i = 0; i < ids_successful.length; i++) {
                        var asset = document.getElementById('bulk-asset-tag-' + ids_successful[i]).parentNode.parentNode;
                        asset.parentNode.removeChild(asset);
                        ids.splice(ids.indexOf(ids_successful[i]), 1);
                        jQuery('#bulk-transfer-ids').val(ids);

                    }
                    var checkboxes = jQuery("#bulk-transfer-items").find("input:checkbox");
                    for (i = 0; i < checkboxes.length; i++) {
                        checkboxes[i].checked = false;
                        checkboxes[i].disabled = true;
                        checkboxes[i].onclick = '';
                        jQuery('#recipient-name-' + checkboxes[i].id.split('-')[2]).val('');
                    }
                }
        }
    })


}


function causfa_acceptTransfer(ptag, id) {
    var form = {
        action: 'causfa_accept_reject',
        type: 0,
        ptag: ptag
    };
    jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
        if (data['status'] === 1) {
            $("#alert-body-" + id).remove();
            if ($("#asset-alerts").children().length === 1) {
                $("#asset-alerts").remove();
            }
        }
    });
}

function causfa_denyTransfer(ptag, id) {
    var form = {
        action: 'causfa_accept_reject',
        type: 1,
        ptag: ptag
    };
    jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
        if (data['status'] === 1) {
            $("#alert-body-" + id).remove();
            if ($("#asset-alerts").children().length === 1) {
                $("#asset-alerts").remove();
            }
        }
    });
}

//End Transfer Data Processing Functions