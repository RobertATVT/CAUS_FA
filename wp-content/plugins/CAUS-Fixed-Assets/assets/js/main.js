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
            var status = jQuery(('#status-' + id))
            status.addClass('faa-asset-status-pending');
            status.html("Pending Surplus");
            jQuery(('#transfer-' + id)).attr('onclick', 'modalRequestedOnPendingAsset(this.id');
            jQuery(('#surplus-' + id)).attr('onclick', 'modalRequestedOnPendingAsset(this.id)');
            jQuery('#surplusModal').find('.modal-body').html('<p>An email has been sent to your Fixed Asset Liaison and Business manager contianing the infromation about your surplus request. They will contact your soon to make arrangements.</p>');
            jQuery('#surplusModal').find('.modal-footer').html('<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>');
        }
    });
}

function transferAsset(element, PID, PID_dest) {
    ptag = jQuery('#transferModal').find('.modal-body').find('.asset-tag').html();
    var form = {
        action: 'causfa_transfer_asset',
        ptag: ptag,
        origin: PID,
        dest: PID_dest,
        type: 0
    };
    jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
        if(data['status'] == 1) {
            var id = jQuery('#transferModal').find('#transferIndex').val();
            var status = jQuery(('#status-' + id))
            status.addClass('faa-asset-status-pending');
            status.html("Pending Transfer");
            jQuery(('#transfer-' + id)).attr('onclick', 'modalRequestedOnPendingAsset(this.id');
            jQuery(('#surplus-' + id)).attr('onclick', 'modalRequestedOnPendingAsset(this.id)');
            jQuery('#transferModal').find('.modal-body').html('<p>An email has been sent to your Fixed Asset Liaison and Business manager contianing the infromation about your transfer request. They will contact your soon to make arrangements.</p>');
            jQuery('#transferModal').find('.modal-footer').html('<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>');

        }
    });
}
function generateForm(element, action) {
    var ptag = jQuery('#formsModal').find('#formsPtag').val();
    var form_type = '';
    if (action == 0) {
        var form_type = 'causfa_generate_form_Home';
    } else {
        form_type = 'causfa_generate_form_Office';
    }
    var form = {
        action: form_type,
        ptag: ptag
    };
    jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
        if (data['status'] == 1) {
            window.open(data['url'])
        }
    });
}
function new_custodian_submit() {
    var office = jQuery('#Office').val();
    var phone = jQuery('#Phone').val();
    if (office == null) {
        alert('Office field cannot be empty');
    } else if (phone == null) {
        alert('Phone field cannot be empty');
    } else {
        var form = {
            action: 'causfa_new_custodian',
            office: office,
            phone: phone
        };
        jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
            if (data == 1) {
                location.reload();
            } else if (data == 2) {
                alert('Please enter your 10 digit phone number')
            }
        });
    }

}
