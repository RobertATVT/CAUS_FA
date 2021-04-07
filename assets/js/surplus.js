//Surplus Modal Functions
function surplusModalRequested(elementID) {
    var id = elementID.split('-')[1];
    var tag = document.getElementById(('asset-tag-' + id)).innerHTML;
    var desc = document.getElementById(('asset-desc-' + id)).innerHTML;
    jQuery('#surplusModal').find('#surplusIndex').val(id);
    jQuery('#surplusModal').find('.asset-tag').html(tag);
    jQuery('#surplusModal').find('.asset-description').html(desc);
    jQuery('#surplusModal').modal();
    jQuery('#surplusModal').modal('open');
}
//End Surplus Modal Functions
//Bulk Surplus Modal Functions
function bulkSurplusModalRequested() {
    jQuery('#bulk-surplus-items').html('');
    var ids = [];
    var tags = [];
    var descriptions = [];
    var selected = jQuery(" input:checkbox:checked");
    for (var i = 0; i < selected.length; i++) {
        var id = selected[i].id.split('-')[2];
        ids.push(id);
        tags.push(jQuery("#asset-tag-" + id).html());
        descriptions.push(jQuery("#asset-desc-" + id).html());
    }
    var assets = '';
    for (i = 0; i < tags.length; i++) {
        var asset = '<div class="center cl t24 form-group" style="padding: 0px; margin-bottom: 3px;">' +
            '           <div class="cl t5"><span class="asset-tag-[ID]">' + tags[i] + '</span></div>' +
            '           <div class="cl t3">&nbsp;</div>' +
            '           <div class="cl t16 shorten-text text-left"><span class="asset-description-[ID]">' + descriptions[i] + '</span></div>' +
            '        </div>';
    asset = asset.split('[ID]').join(ids[i]);
    assets = assets + asset;
    }
    jQuery('#bulk-surplus-items').html(assets);
    jQuery('#bulk-surplus-ids').val(ids.join(', '));
    jQuery('#bulk-surplusModal').modal();
	document.getElementById('bulk-surplusModal').style.maxWidth = "1024px";
    jQuery('#bulk-surplusModal').modal('open');

}
//End Bulk Surplus Modal Functions
//Surplus Data Processing Functions
function surplusAsset() {
    ptag = jQuery('#surplusModal').find('.asset-tag').html();
    var form = {
        action: 'causfa_surplus',
        type: 1,
        status: 0
    };
    jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
        if(data['status'] == 1) {
            var id = jQuery('#surplusModal').find('#surplusIndex').val();
            var status = jQuery(('#status-' + id));
            /*status.addClass('asset-pending');*/
            status.html('<div class="asset-status asset-pending">Pending Surplus</div>');
            jQuery(('#transfer-' + id)).attr('onclick', 'modalRequestedOnPendingAsset(this.id)');
            jQuery(('#surplus-' + id)).attr('onclick', 'modalRequestedOnPendingAsset(this.id)');
            jQuery('#surplusModal').modal('close');
            jQuery('#responseModal').find('#modal-response-title').text('Surplus Request Submitted');
            jQuery('#responseModal').find('#modal-response-alert').text(data['message']);
            jQuery('#responseModal').modal();
            jQuery('#responseModal').modal('open');
        }
    });
}

function surplusAssetAdmin() {
    ptag = jQuery('#surplusModal').find('.asset-tag').html();
    var form = {
        action: 'causfa_surplus',
        type: 1,
        status: 2
    };
    jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
        if(data['status'] == 1) {
            var id = jQuery('#surplusModal').find('#surplusIndex').val();
            var status = jQuery(('#status-' + id));
            /*status.addClass('asset-pending');*/
            status.html('<div class="asset-status asset-pending">Pending Surplus</div>');
            jQuery(('#transfer-' + id)).attr('onclick', 'modalRequestedOnPendingAsset(this.id)');
            jQuery(('#surplus-' + id)).attr('onclick', 'modalRequestedOnPendingAsset(this.id)');
            jQuery('#surplusModal').modal('close');
            jQuery('#responseModal').find('#modal-response-title').text('Surplus Request Submitted');
            jQuery('#responseModal').find('#modal-response-alert').text(data['message']);
            jQuery('#responseModal').modal();
            jQuery('#responseModal').modal('open');
        }
    });
}

function bulkSurplusAsset() {
    var ids = jQuery('#bulk-surplus-ids').val();
    ids = ids.split(', ');
    var tags = [];
    for (var i = 0; i < ids.length; i++) {
        var tag = jQuery('#asset-tag-' + ids[i]).html();
        tags.push(tag);
    }
    var form = {
        action: 'causfa_bulk_surplus_asset',
        ptags: tags.join(','),
        type: 1,
        status:0
    };
    jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
        if (data['status'] == 1) {
            for (var i = 0; i < ids.length; i++) {
                var index = ids[i];
                var status = jQuery(('#status-' + index));
                status.html('<div class="asset-status asset-pending">Pending Surplus</div>');
                jQuery(('#transfer-' + index)).attr('onclick', 'modalRequestedOnPendingAsset(this.id)');
                jQuery(('#surplus-' + index)).attr('onclick', 'modalRequestedOnPendingAsset(this.id)');
                var checkbox = jQuery(('#asset-select-' + index));
                checkbox.attr('disabled', 'disabled');
                checkbox.attr('checked', false);
            }
            checkSelected();
            jQuery('#bulk-surplusModal').modal('close');
            jQuery('#responseModal').find('#modal-response-title').text('Surplus Request Submitted');
            jQuery('#responseModal').find('#modal-response-alert').text(data['message']);
            jQuery('#responseModal').modal();
            jQuery('#responseModal').modal('open');
        }
    });
}

function bulkSurplusAssetAdmin() {
    var ids = jQuery('#bulk-surplus-ids').val();
    ids = ids.split(', ');
    var tags = [];
    for (var i = 0; i < ids.length; i++) {
        var tag = jQuery('#asset-tag-' + ids[i]).html();
        tags.push(tag);
    }
    var form = {
        action: 'causfa_bulk_surplus_asset',
        ptags: tags.join(','),
        type: 1,
        status: 2
    };
    jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
        if (data['status'] == 1) {
            for (var i = 0; i < ids.length; i++) {
                var index = ids[i];
                var status = jQuery(('#status-' + index));
                status.html('<div class="asset-status asset-pending">Pending Surplus</div>');
                jQuery(('#transfer-' + index)).attr('onclick', 'modalRequestedOnPendingAsset(this.id)');
                jQuery(('#surplus-' + index)).attr('onclick', 'modalRequestedOnPendingAsset(this.id)');
                var checkbox = jQuery(('#asset-select-' + index));
                checkbox.attr('disabled', 'disabled');
                checkbox.attr('checked', false);
            }
            checkSelected();
            jQuery('#bulk-surplusModal').modal('close');
            jQuery('#responseModal').find('#modal-response-title').text('Surplus Request Submitted');
            jQuery('#responseModal').find('#modal-response-alert').text(data['message']);
            jQuery('#responseModal').modal();
			document.getElementById('responseModal').style.maxWidth = "1024px";
            jQuery('#responseModal').modal('open');
        }
    });
}
//End Surplus Data Processing Functions