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

}
//End Bulk Surplus Modal Functions
//Surplus Data Processing Functions
function surplusAsset() {
    ptag = jQuery('#surplusModal').find('.asset-tag').html();
    var form = {
        action: 'causfa_surplus',
        type: 1
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
    ptags = jQuery('#surplusModal').find('.asset-tag').html().split(', ');
    var form = {
        action: 'causfa_surplus',
        ptag: ptags,
        type: 1
    };
    jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
        if(data['status'] == 1) {
            var id = jQuery('#surplusModal').find('#surplusIndex').val();
            id = id.split(', ');
            for (var i = 0; i < id.length; i++) {
                var status = jQuery(('#status-' + id[i]));
                status.html('<div class="asset-status asset-pending">Pending Surplus</div>');
                jQuery(('#transfer-' + id[i])).attr('onclick', 'modalRequestedOnPendingAsset(this.id)');
                jQuery(('#surplus-' + id[i])).attr('onclick', 'modalRequestedOnPendingAsset(this.id)');
                jQuery(('#asset-select-' + id[i])).prop('checked', false);
            }
            jQuery('#surplusModal').modal('close');
            jQuery('#responseModal').find('#modal-response-title').text('Surplus Request Submitted');
            jQuery('#responseModal').find('#modal-response-alert').text(data['message']);
            jQuery('#responseModal').modal();
            jQuery('#responseModal').modal('open');
        }
    });
}
//End Surplus Data Processing Functions