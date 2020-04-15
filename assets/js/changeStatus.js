function changeStatusModalRequested() {
    var index = jQuery("input:checkbox:checked")[0].id.split('-')[2];
    var ptag = jQuery("#asset-tag-" + index).html();
    jQuery("#changeStatusPtag").val(ptag);
    jQuery("#changeStatusIndex").val(index);
    jQuery("#statusModal").modal();
    jQuery("#statusModal").modal("open");    
}

function submitStatusChange() {
    var status = jQuery("#status").val();
    var note = jQuery("#changeReason").val();
    var ptag = jQuery("#changeStatusPtag").val();
    if (note != '' && status != '') {
        var form = {
            action: 'causfa_change_status',
            act: "Change Status",
            ptag: ptag,
            status: status, 
            note: note
        };
        jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
            if (data['status'] == 1) {
                var index = jQuery("#changeStatusIndex").val();
                var statusLabel = jQuery("#status-" + index);
                if(status == 1) {   
                    statusLabel.html("Missing");
                    statusLabel.removeClass();
                    statusLabel.addClass('asset-status');
                    statusLabel.addClass('asset-missing');
                } else if(status == 2) {
                    statusLabel.removeClass();
                    statusLabel.addClass('asset-status');
                    statusLabel.addClass('asset-missing-recon');
                    statusLabel.html("Missing Reconciled");
                }
                alert("Status upadted");
                jQuery("#statusModal").modal();
                jQuery("#statusModal").modal("close"); 
            }
        });
    } else {
        alert("Please select a status to change to and provide a note");
    }
}