function notesModalRequested() {
    var index = jQuery("input:checkbox:checked")[0].id.split('-')[2];
    var ptag = jQuery("#asset-tag-" + index).html();
    var form = {
        action: 'causfa_pull_notes',
        ptag: ptag
    };
    jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
        jQuery('#notesContent').html(data);
        jQuery('#noteText').val('');
        jQuery('#notesModal-1').modal();
        jQuery('#notesModal-1').modal('open');
    })
    
    
}

function addNoteFromNoteModal() {
   var index = jQuery("input:checkbox:checked")[0].id.split('-')[2];
    var ptag = jQuery("#asset-tag-" + index).html();
    var note = jQuery("#noteText").val();
    if (note != '') {
        var form = {
            act: 'Admin Note',
            action: 'causfa_add_note',
            ptag: ptag,
            note: note
        };
        jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
            alert("Note Submitted");
            jQuery('#notesModal-1').modal();
            jQuery('#notesModal-1').modal('close');
        });    
    } else {
        alert("Please add a note before submitting");
    }

}