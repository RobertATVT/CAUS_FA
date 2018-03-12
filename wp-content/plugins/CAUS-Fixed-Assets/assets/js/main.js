function surplusAsset(element) {
    var form = {
        action: 'causfa_surplus',
        ptag: $(element).closest('.modal-content').find('.modal-body').find('row').find('.asset-tag').html()
    };
    $.post(causfa_action_obj.ajax_url, form, function(data) {

    });
}
