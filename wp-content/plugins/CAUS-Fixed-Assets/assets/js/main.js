function surplusAsset(element, PID) {
    ptag = $('#surplusModal').find('.modal-body').find('.asset-tag').html();
    var form = {
        action: 'causfa_surplus',
        ptag: ptag,
        origin:  PID,
        type: 1
    };
    $.post(causfa_action_obj.ajax_url, form, function(data) {

    });
}

function transferAsset(element, PID) {
    ptag = $('#transferModal').find('.modal-body').find('.asset-tag').html();
    var form = {
        action: 'causfa_transfer',
        ptag: ptag,
        origin: PID,
        dest: 'placeholder',
        type: 0
    };
    $.post(causfa_action_obj.ajax_url, form, function(data) {

    });
}
