function surplusAsset(element, PID) {
    ptag = $('#surplusModal').find('.modal-body').find('.asset-tag').html();
    var form = {
        action: 'causfa_surplus',
        ptag: ptag,
        origin:  PID,
        type: 1
    };
    $.post(causfa_action_obj.ajax_url, form, function(data) {
        if(data['status'] == 1) {
            $('#surplusModal').find('.modal-body').html('<p>An email has been sent to your Fixed Asset Liaison and Business manager contianing the infromation about your surplus request. They will contact your soon to make arrangements.</p>');
            $('#surplusModal').find('.modal-footer').html('<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>');

        }
    });
}

function transferAsset(element, PID) {
    ptag = $('#transferModal').find('.modal-body').find('.asset-tag').html();
    dest = document.getElementById('recipient-name').value;
    var form = {
        action: 'causfa_transfer',
        ptag: ptag,
        origin: PID,
        dest: dest,
        type: 0
    };
    $.post(causfa_action_obj.ajax_url, form, function(data) {
        if(data['status'] == 1) {
            $('#transferModal').find('.modal-body').html('<p>An email has been sent to your Fixed Asset Liaison and Business manager contianing the infromation about your transfer request. They will contact your soon to make arrangements.</p>');
            $('#transferModal').find('.modal-footer').html('<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>');

        }
    });
}
