function surplusAsset(element, PID) {
    ptag = jQuery('#surplusModal').find('.modal-body').find('.asset-tag').html();
    var form = {
        action: 'causfa_surplus',
        ptag: ptag,
        origin:  PID,
        type: 1
    };
    jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
        if(data['status'] == 1) {
            var id = jQuery('#surplusModal').find('#surplusIndex').val();
            alert(id);
            var status = jQuery(('#status-' + id))
            status.addClass('faa-asset-status-pending');
            status.html("Pending");
            jQuery('#surplusModal').find('.modal-body').html('<p>An email has been sent to your Fixed Asset Liaison and Business manager contianing the infromation about your surplus request. They will contact your soon to make arrangements.</p>');
            jQuery('#surplusModal').find('.modal-footer').html('<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>');
        }
    });
}

function transferAsset(element, PID) {
    ptag = jQuery('#transferModal').find('.modal-body').find('.asset-tag').html();
    dest = document.getElementById('recipient-name').value;
    var form = {
        action: 'causfa_transfer_asset',
        ptag: ptag,
        origin: PID,
        dest: dest,
        type: 0
    };
    jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
        if(data['status'] == 1) {
            var id = jQuery('#transferModal').find('#transferIndex').val();
            alert(id);
            var status = jQuery(('#status-' + id))
            status.addClass('faa-asset-status-pending');
            status.html("Pending");
            jQuery('#transferModal').find('.modal-body').html('<p>An email has been sent to your Fixed Asset Liaison and Business manager contianing the infromation about your transfer request. They will contact your soon to make arrangements.</p>');
            jQuery('#transferModal').find('.modal-footer').html('<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>');

        }
    });
}
