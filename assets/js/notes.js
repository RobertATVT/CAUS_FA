function notesModalRequested() {
    var index = jQuery("input:checkbox:checked")[0].id.split('-')[2];
    var ptag = jQuery("#asset-tag-" + index).html();
    var form = {
        action: 'causfa_pull_notes',
        ptag: ptag
    };
    jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
        jQuery('#notesContent').html(data);
        jQuery('#notesModal-1').modal();
        jQuery('#notesModal-1').modal('open');
    })
    
    
}