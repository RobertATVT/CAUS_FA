// Report Problem Modal Functions
function ticketModalRequested(elementID) {
    var id = elementID.split('-')[1];
    jQuery('#ticketModal').find('#reportIndex').val(id);
    var tag = document.getElementById(('asset-tag-' + id)).innerHTML;
    var serial = document.getElementById(('asset-serial-' + id)).innerHTML;
    var desc = document.getElementById(('asset-desc-' + id)).innerHTML;
    jQuery('#addTicketNotes').val('');
    jQuery('#ticketSelect').val('not-missing');
    jQuery('#ticketPtag').text(tag);
    jQuery('#ticketSerial').text(serial);
    jQuery('#ticketDescription').text(desc);
    jQuery('#ticketModal').modal();
	document.getElementById('ticketModal').style.maxWidth = "1024px";
    jQuery('#ticketModal').modal('open');
}
// END Report Problem Modal Functions
// Bulk Report Problem Modal Functions
function bulkTicketModalRequested() {
    var input = jQuery("input:checkbox:checked")[0].id.split('-');
    ticketModalRequested(input[1] + "-" + input[2]);
}
// END Bulk Report Problem Modal Functions
// Report Problem Data Process Functions
function addTicket() {
    var ptag = $('#ticketPtag').text();
    var serial = $('#ticketSerial').text();
    var desc = $('#ticketDescription').text();
    var notes = $('#ticketSelect').val();
    var status = 1;
    if (notes == 'other') {
        notes = jQuery('#addTicketNotes').val();
        if (notes.length == 0) {
            status = 0;
        }
    }
    if (status != 0) {
        var form = {
            action: 'causfa_add_ticket',
            ptag: ptag,
            serial: serial,
            desc: desc,
            note: notes,
            type: 1
        };
        jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
            if (data['status'] == 1) {
                jQuery('#ticketModal').modal('close');
                jQuery('#responseModal').find('#modal-response-title').text('Add Asset Request Submitted');
                jQuery('#responseModal').find('#modal-response-alert').text(data['message']);
                jQuery('#responseModal').modal();
                jQuery('#responseModal').modal('open');
                var id = jQuery('#reportIndex').val();
                var status = jQuery(('#status-' + id))
                status.html('<div class="asset-status asset-pending">Pending Ticket</div>');
                jQuery(('#transfer-' + id)).attr('onclick', 'modalRequestedOnPendingAsset(this.id)');
                jQuery(('#surplus-' + id)).attr('onclick', 'modalRequestedOnPendingAsset(this.id)');
                jQuery(('#problem-' + id)).attr('onclick', 'modalRequestedOnPendingAsset(this.id)');
                var checkbox = jQuery(('#asset-select-' + id));
                checkbox.attr('disabled', 'disabled');
                checkbox.attr('checked', false);
            } else {
                jQuery('#ticketModal').modal('close');
                jQuery('#responseModal').find('#modal-response-title').text('Ticket Rejected');
                jQuery('#responseModal').find('#modal-response-alert').text(data['message']);
                jQuery('#responseModal').modal();
                jQuery('#responseModal').modal('open');
            }
        });
    }
}
// END Report Problem Data Process Functions