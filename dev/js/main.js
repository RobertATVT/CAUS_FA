function surplusAsset(element, PID) {
    ptag = $('#surplusModal').find('.modal-body').find('.asset-tag').html();
    alert(ptag);
    var form = {
        action: 'causfa_surplus',
        ptag: ptag,
        origin:  PID.toString(),
        type: 1
    };
    $.post(causfa_action_obj.ajax_url, form, function(data) {

    });
}
