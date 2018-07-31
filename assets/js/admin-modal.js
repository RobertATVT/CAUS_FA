function openModal(element, data, step) {
    event.preventDefault();
    $("#transfer-pickupdate").datepicker();
    $("#recieve-pickupdate").datepicker();
    $("#deployed-date").datepicker();
    $("#banner-date").datepicker();
    if (step) {
        $("#transfer-stage-1a").css("display", "none");
        $("#transfer-stage-1b").css("display", "none");
        $("#transfer-stage-1c").css("display", "");

    }
    jQuery('#' + element).modal();
    jQuery('#' + element).modal('open');
    jQuery('#transfer-stage-1-ptag').val(jQuery('#transfer-ptag-' + data).html());
    jQuery('#transfer-stage-1-id').val(data);
    jQuery('#transfer-stage-2-ptag').val(jQuery('#transfer-ptag-' + data).html());
    jQuery('#transfer-stage-2-id').val(data);
    jQuery('#transfer-stage-3-ptag').val(jQuery('#transfer-ptag-' + data).html());
    jQuery('#transfer-stage-3-id').val(data);
    jQuery('#transfer-stage-4-ptag').val(jQuery('#transfer-ptag-' + data).html());
    jQuery('#transfer-stage-4-id').val(data);
}

function activateButtons(stage, state){
    switch (stage) {
        case "stage1":
            if (state === "on") {
                $("#transfer-stage-1-submit").removeAttr("disabled");
                $("#transfer-stage-1-submit-small").removeAttr("disabled");

            } else if (state === "off") {
                $("#transfer-stage-1-submit").attr("disabled", "disabled");
                $("#transfer-stage-1-submit-small").attr("disabled", "disabled");
            }
            break;
        case "stage2":
            if (state === "on") {
                $("#transfer-stage-2-submit").removeAttr("disabled");
            } else if (state === "off") {
                $("#transfer-stage-2-submit").attr("disabled", "disabled");
            }
            break;
        case "stage3":
            if (state === "on") {
                $("#transfer-stage-3-submit").removeAttr("disabled");
            } else if (state === "off") {
                $("#transfer-stage-3-submit").attr("disabled", "disabled");
            }
            break;
        case "stage4":
            if (state === "on") {
                $("#transfer-stage-4-submit").removeAttr("disabled");
            } else if (state === "off") {
                $("#transfer-stage-4-submit").attr("disabled", "disabled");
            }
            break;
        case "stage5":
            break;
    }
};
function setTransferStage(stage, step, state) {
    switch (stage) {
        case "1":
            switch (step) {
                case "a":
                    if (state === "on") {
                        $("#transfer-stage-1a").css("display", "");
                    } else if (state === "off") {
                        $("#transfer-stage-1a").css("display", "none");
                    }
                    ;
                    break;
                case "b":
                    if (state === "on") {
                        $("#transfer-stage-1b").css("display", "");
                    } else if (state === "off") {
                        $("#transfer-stage-1b").css("display", "none");
                    }
                    ;
                    break;
                case "c":
                    if (state === "on") {
                        $("#transfer-stage-1c").css("display", "");
                    } else if (state === "off") {
                        $("#transfer-stage-1c").css("display", "none");
                    }
                    ;
                    break;
                case "d":
                    if (state === "on") {
                        $("#transfer-stage-1d").css("display", "");
                    } else if (state === "off") {
                        $("#transfer-stage-1d").css("display", "none");
                    }
                    ;
                    break;
                case "e":
                    if (state === "on") {
                        $("#transfer-stage-1e").css("display", "");
                    } else if (state === "off") {
                        $("#transfer-stage-1e").css("display", "none");
                    }
                    ;
                    break;
            }
            break;
        case "2":
            switch (step) {
                case "a":
                    if (state === "on") {
                        $("#transfer-stage-2a").css("display", "");
                    } else if (state === "off") {
                        $("#transfer-stage-2a").css("display", "none");
                    }
                    ;
                    break;
                case "b":
                    if (state === "on") {
                        $("#transfer-stage-2b").css("display", "");
                    } else if (state === "off") {
                        $("#transfer-stage-2b").css("display", "none");
                    }
                    ;
                    break;
            }
            break;
        case "3":
            switch (step) {
                case "a":
                    if (state === "on") {
                        $("#transfer-stage-3a").css("display", "");
                    } else if (state === "off") {
                        $("#transfer-stage-3a").css("display", "none");
                    }
                    ;
                    break;
                case "b":
                    if (state === "on") {
                        $("#transfer-stage-3b").css("display", "");
                    } else if (state === "off") {
                        $("#transfer-stage-3b").css("display", "none");
                    }
                    ;
                    break;
            }
            break;
        case "4":
            switch (step) {
                case "a":
                    if (state === "on") {
                        $("#transfer-stage-4a").css("display", "");
                    } else if (state === "off") {
                        $("#transfer-stage-4a").css("display", "none");
                    }
                    ;
                    break;
                case "b":
                    if (state === "on") {
                        $("#transfer-stage-4b").css("display", "");
                    } else if (state === "off") {
                        $("#transfer-stage-4b").css("display", "none");
                    }
                    ;
                    break;
            }
            break;

    };
}

function submitRequest(stage) {
    var id = $('#transfer-stage-1-id').val()
    switch(stage) {
        case 1:
            if ($('#transfer-stage-1-submit').val()) {
                var form = {
                    'action': 'causfa_add_note',
                    'act': 'Transfer-IT',
                    'ptag': jQuery('#transfer-stage-1-ptag').val(),
                    'note': ('Asset falls under IT influence. Transferring to ' + $('#it-select').val())
                };
                jQuery.post(causfa_action_obj.ajax_url, form, function(data) {});
                var form = {
                    'action': 'causfa_update_transfer',
                    'state': 2,
                    'assignee': $('#it-select').val(),
                    'ptag': jQuery('#transfer-stage-1-ptag').val()
                };
                jQuery.post(causfa_action_obj.ajax_url, form, function(data){
                    if ($('#transfer-stage-1-pid').val() === $('#it-select').val()) {
                        setTransferStage('1','a','off');
                        setTransferStage('1','b','off');
                        setTransferStage('1','c','on');
                        activateButtons('stage1','off');
                        $('#transfer-stage-1-submit').removeAttr('value');
                    } else {
                        $('#transfer-stage-1').modal('close');
                        var element = document.getElementById('transfer-' + $('#transfer-stage-1-id').val());
                        var grandParent = element.parentNode.parentNode;
                        grandParent.parentNode.removeChild(grandParent);
                    }
                });
            } else {
                var note = '';
                var date = jQuery('#transfer-pickupdate').datepicker('getDate');
                if (date !== null) {
                    note  = note + 'The asset is scheduled to be picked up on ' + date + '. ';
                }
                var comments = jQuery('#transfer-stage-1-notes').val();
                if (comments !== '') {
                    note = note + 'The Admin added the following notes: ' + comments;
                }
                var form = {
                    'action': 'causfa_add_note',
                    'act': 'Contacted',
                    'ptag': jQuery('#transfer-stage-1-ptag').val(),
                    'note': note
                };
                jQuery.post(causfa_action_obj.ajax_url, form, function(data){});
                var form = {
                    'action': 'causfa_update_transfer',
                    'state': 3,
                    'assignee': '',
                    'ptag': jQuery('#transfer-stage-1-ptag').val()
                };
                jQuery.post(causfa_action_obj.ajax_url, form, function(data){
                    if (data['status'] === 1) {
                        $('#transfer-stage-1' + id).modal('close');
                        $('#transfer-stage-1-' + id).prop('checked', false);
                        $('#transfer-stage-1-' + id).attr('disabled', 'disabled');
                        $('#transfer-stage-2-' + id).removeAttr('disabled');
                        $('#transfer-stage-2-' + id).prop('checked', false);
                    }
                });
            }
            break;
        case 2:
            var date = $('#recieve-pickupdate').val();
            var comment = $('#transfer-stage-2-notes').val();
            var note = 'The asset was picked up on ' + date + '. ';
            if (comment !== '') {
                note = note + 'THe Admin added the following notes: ' + comment;
            }
            var form = {
                'action': 'causfa_add_note',
                'act': 'Received',
                'ptag': jQuery('#transfer-stage-2-ptag').val(),
                'note':  note
            };
            jQuery.post(causfa_action_obj.ajax_url, form, function(data){});
            var form = {
                'action': 'causfa_update_transfer',
                'state': 4,
                'assignee': '',
                'ptag': jQuery('#transfer-stage-2-ptag').val()
            }
            jQuery.post(causfa_action_obj.ajax_url, form, function(data){
                if (data['status'] === 1) {
                    $('#transfer-stage-2').modal('close');
                    if(data['changeOrg'] === 1) {
                        var element = document.getElementById('transfer-' + $('#transfer-stage-2-id').val());
                        var grandParent = element.parentNode.parentNode;
                        grandParent.parentNode.removeChild(grandParent);
                    } else {
                        $('#transfer-stage-2-' + id).prop('checked', false);
                        $('#transfer-stage-2-' + id).attr('disabled', 'disabled');
                        $('#transfer-stage-3-' + id).removeAttr('disabled');
                        $('#transfer-stage-3-' + id).prop('checked', false);
                    }
                }
            });
            break;
        case 3:
            var date = $('#deployed-date').val();
            var comment = $('#transfer-stage-3-notes').val();
            var note = 'The asset was deployed on ' + date + '. ';
            if (comment !== '') {
                note = note + 'The Admin added the following notes: ' + comment;
            }
            var form = {
                'action': 'causfa_add_note',
                'act': 'Deployed',
                'ptag': jQuery('#transfer-stage-3-ptag').val(),
                'note':  note
            };
            jQuery.post(causfa_action_obj.ajax_url, form, function(data){});
            var form = {
                'action': 'causfa_update_transfer',
                'state': 5,
                'assignee': '',
                'ptag': jQuery('#transfer-stage-3-ptag').val()
            };
            jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
                if (data['status'] === 1) {
                    $('#transfer-stage-3').modal('close');
                    $('#transfer-stage-3-' + id).prop('checked', false);
                    $('#transfer-stage-3-' + id).attr('disabled', 'disabled');
                    $('#transfer-stage-4-' + id).removeAttr('disabled');
                    $('#transfer-stage-4-' + id).prop('checked', false);
                }
            });
            break;
        case 4:
            var date = $('#banner-date').val();
            var comment = $('#transfer-stage-4-notes').val();
            var note = 'The asset was updated in banner on ' + date + '. ';
            if (comment != '') {
                note = note + 'The Admin added the following notes: ' + comment;
            }
            var form = {
                'action': 'causfa_add_note',
                'act': 'Banner-Update',
                'ptag': jQuery('#transfer-stage-4-ptag').val(),
                'note':  note
            };
            jQuery.post(causfa_action_obj.ajax_url, form, function(data){});
            var form = {
                'action': 'causfa_update_transfer',
                'state': 6,
                'assignee': '',
                'ptag': jQuery('#transfer-stage-4-ptag').val()
            };
            jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
                if (data['status'] === 1) {
                    $('#transfer-stage-4').modal('close');
                    $('#transfer-stage-4-' + id).prop('checked', false);
                    $('#transfer-stage-4-' + id).attr('disabled', 'disabled');
                    //$('#transfer-stage-5-' + id).removeAttr('disabled');
                    //$('#transfer-stage-5-' + id).prop('checked', false);
                }
            });
            break;
    }
}