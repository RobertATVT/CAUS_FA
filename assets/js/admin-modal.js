function openModal(process, element, data, step) {
    event.preventDefault();
    switch (process) {
        case 'transfer':
            var tag = $('#transfer-ptag-' + data).html();
            if (tag === jQuery('#transfer-stage-' + element.split('-')[2] + '-ptag').val()) {
                jQuery('#' + element).modal();
                jQuery('#' + element).modal('open');
            } else {
                switch(element) {
                    case 'transfer-stage-1':
                        $("#transfer-pickupdate").datepicker();
                        jQuery('#transfer-stage-1-ptag').val(jQuery('#transfer-ptag-' + data).html());
                        jQuery('#transfer-stage-1-id').val(data);
                        if (step) {
                            processStep('transfer','1','3');
                        } else {
                            processStep('transfer','1','1');
                        }
                        $('#transfer-stage-1-submit').removeAttr('value');
                        $("#transfer-pickupdate").val('');
                        $('#transfer-stage-1-notes').val('');
                        $('#it-select').val('null');
                        break;
                    case 'transfer-stage-2':
                        $("#recieve-pickupdate").datepicker();
                        jQuery('#transfer-stage-2-ptag').val(jQuery('#transfer-ptag-' + data).html());
                        jQuery('#transfer-stage-2-id').val(data);
                        setProcessStage('transfer','2','a','on');
                        setProcessStage('transfer','2','b','off');
                        $("#recieve-pickupdate").val('');
                        $('#transfer-stage-2-notes').val('');
                        break;
                    case 'transfer-stage-3':
                        $("#deployed-date").datepicker();
                        jQuery('#transfer-stage-3-ptag').val(jQuery('#transfer-ptag-' + data).html());
                        jQuery('#transfer-stage-3-id').val(data);
                        setProcessStage('transfer','3','a','on');
                        setProcessStage('transfer','3','b','off');
                        $("#deployed-date").val('');
                        $('#transfer-stage-3-notes').val('');
                        break;
                    case 'transfer-stage-4':
                        $("#banner-date").datepicker();
                        jQuery('#transfer-stage-4-ptag').val(jQuery('#transfer-ptag-' + data).html());
                        jQuery('#transfer-stage-4-id').val(data);
                        setProcessStage('transfer','4','a','on');
                        setProcessStage('transfer','4','b','off');
                        $("#banner-date").val('');
                        $('#transfer-stage-4-notes').val();
                        break;
                    case 'transfer-stage-5':
                        jQuery('#transfer-stage-5-ptag').val(jQuery('#transfer-ptag-' + data).html());
                        jQuery('#transfer-stage-5-id').val(data);
                        $('#officeFormToUpload').val('');
                        $('#homeFormToUpload').val('');
                        break;
                }
            }
            break;
        case 'surplus':
            var tag = $('#surplus-ptag-' + data).html();
            if (tag === jQuery('#surplus-stage-' + element.split('-')[2] + '-ptag').val()) {
                jQuery('#' + element).modal();
                jQuery('#' + element).modal('open');
            } else {
                switch (element) {
                    case 'surplus-stage-1':
                        $("#surplus-contactdate").datepicker();
                        setProcessStage('surplus','1','a','on');
                        setProcessStage('surplus','1','b','off');
                        setProcessStage('surplus','1','c','off');
                        setProcessStage('surplus','1','d','off');
                        activateButtons('surplus', 'stage1','off');
                        $('#surplus-stage-1-ptag').val(jQuery('#surplus-ptag-' + data).html());
                        $('#surplus-stage-1-id').val(data);
                        break;
                    case 'surplus-stage-2':
                        $("#surplus-receivedate").datepicker();
                        break;
                    case 'surplus-stage-3':
                        $("#surplus-pickupdate").datepicker();
                        break;
                    case 'surplus-stage-4':
                        break;
                }
                break;
            }
    }
    jQuery('#' + element).modal();
    jQuery('#' + element).modal('open');
}
function activateButtons(process, stage, state){
    switch (process) {
        case 'transfer':
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
            }
            break;
        case 'surplus':
            switch (stage) {
                case "stage1":
                    if (state === "on") {
                        $("#surplus-stage-1-submit").removeAttr("disabled");
                    } else if (state === "off") {
                        $("#surplus-stage-1-submit").attr("disabled", "disabled");
                    }
                    break;
                case "stage2":
                    if (state === "on") {
                        $("#surplus-stage-2-submit").removeAttr("disabled");
                    } else if (state === "off") {
                        $("#surplus-stage-2-submit").attr("disabled", "disabled");
                    }
                    break;
                case "stage3":
                    if (state === "on") {
                        $("#surplus-stage-3-submit").removeAttr("disabled");
                    } else if (state === "off") {
                        $("#surplus-stage-3-submit").attr("disabled", "disabled");
                    }
                    break;
                case "stage4":
                    if (state === "on") {
                        $("#surplus-stage-4-submit").removeAttr("disabled");
                    } else if (state === "off") {
                        $("#surplus-stage-4-submit").attr("disabled", "disabled");
                    }
                    break;
                case "stage5":
                    break;
            }
            break;
    }
};
function setProcessStage(process, stage, step, state) {
    switch (process) {
        case 'transfer':
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
                        case "f":
                            if (state == "on") {
                                $("#transfer-stage-1f").css("display", "");
                            } else if (state === "off") {
                                $("#transfer-stage-1f").css("display", "none");
                            }
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
                        case "c":
                            if (state === "on") {
                                $("#transfer-stage-2c").css("display", "");
                            } else if (state === "off") {
                                $("#transfer-stage-2c").css("display", "none");
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
            break;
        case 'surplus':
            switch (stage) {
                case "1":
                    switch (step) {
                        case "a":
                            if (state === "on") {
                                $("#surplus-stage-1a").css("display", "");
                            } else if (state === "off") {
                                $("#surplus-stage-1a").css("display", "none");
                            }
                            ;
                            break;
                        case "b":
                            if (state === "on") {
                                $("#surplus-stage-1b").css("display", "");
                            } else if (state === "off") {
                                $("#surplus-stage-1b").css("display", "none");
                            }
                            ;
                            break;
                        case "c":
                            if (state === "on") {
                                $("#surplus-stage-1c").css("display", "");
                            } else if (state === "off") {
                                $("#surplus-stage-1c").css("display", "none");
                            }
                            ;
                            break;
                        case "d":
                            if (state === "on") {
                                $("#surplus-stage-1d").css("display", "");
                            } else if (state === "off") {
                                $("#surplus-stage-1d").css("display", "none");
                            }
                            ;
                            break;
                        case "e":
                            if (state === "on") {
                                $("#surplus-stage-1e").css("display", "");
                            } else if (state === "off") {
                                $("#surplus-stage-1e").css("display", "none");
                            }
                            ;
                            break;
                    }
                    break;
                case "2":
                    switch (step) {
                        case "a":
                            if (state === "on") {
                                $("#surplus-stage-2a").css("display", "");
                            } else if (state === "off") {
                                $("#surplus-stage-2a").css("display", "none");
                            }
                            ;
                            break;
                        case "b":
                            if (state === "on") {
                                $("#surplus-stage-2b").css("display", "");
                            } else if (state === "off") {
                                $("#surplus-stage-2b").css("display", "none");
                            }
                            ;
                            break;
                        case "c":
                            if (state === "on") {
                                $("#surplus-stage-2c").css("display", "");
                            } else if (state === "off") {
                                $("#surplus-stage-2c").css("display", "none");
                            }
                            ;
                            break;
                        case "d":
                            if (state === "on") {
                                $("#surplus-stage-2d").css("display", "");
                            } else if (state === "off") {
                                $("#surplus-stage-2d").css("display", "none");
                            }
                            ;
                            break;
                        case "e":
                            if (state === "on") {
                                $("#surplus-stage-2e").css("display", "");
                            } else if (state === "off") {
                                $("#surplus-stage-2e").css("display", "none");
                            }
                            ;
                            break;
                    }
                    break;
                case "3":
                    switch (step) {
                        case "a":
                            if (state === "on") {
                                $("#surplus-stage-3a").css("display", "");
                            } else if (state === "off") {
                                $("#surplus-stage-3a").css("display", "none");
                            }
                            ;
                            break;
                        case "b":
                            if (state === "on") {
                                $("#surplus-stage-3b").css("display", "");
                            } else if (state === "off") {
                                $("#surplus-stage-3b").css("display", "none");
                            }
                            ;
                            break;
                        case "c":
                            if (state === "on") {
                                $("#surplus-stage-3a").css("display", "");
                            } else if (state === "off") {
                                $("#surplus-stage-3a").css("display", "none");
                            }
                            ;
                            break;
                        case "d":
                            if (state === "on") {
                                $("#surplus-stage-3b").css("display", "");
                            } else if (state === "off") {
                                $("#surplus-stage-3b").css("display", "none");
                            }
                            ;
                            break;
                        case "e":
                            if (state === "on") {
                                $("#surplus-stage-3a").css("display", "");
                            } else if (state === "off") {
                                $("#surplus-stage-3a").css("display", "none");
                            }
                            ;
                            break;
                    }
                    break;
                case "4":
                    switch (step) {
                        case "a":
                            if (state === "on") {
                                $("#surplus-stage-4a").css("display", "");
                            } else if (state === "off") {
                                $("#surplus-stage-4a").css("display", "none");
                            }
                            ;
                            break;
                        case "b":
                            if (state === "on") {
                                $("#surplus-stage-4b").css("display", "");
                            } else if (state === "off") {
                                $("#surplus-stage-4b").css("display", "none");
                            }
                            ;
                            break;
                    }
                    break;
            }
            break;
    }
}
function processStep(process, stage, step) {
    $("#recieve-pickupdate").datepicker();
    $("#deployed-date").datepicker();
    $("#banner-date").datepicker();
    $("#surplus-contactdate").datepicker();
    $("#surplus-receivedate").datepicker();
    $("#surplus-pickupdate").datepicker();
    switch (process){
        case "transfer":
            switch (stage){
                case "1":
                    switch (step){
                        case "1":
                            $("#transfer-stage-1a").css("display", "");
                            $("#transfer-stage-1b").css("display", "none");
                            $("#transfer-stage-1c").css("display", "none");
                            $("#transfer-stage-1d").css("display", "none");
                            $("#transfer-stage-1e").css("display", "none");
                            $("#transfer-stage-1f").css("display", "none");
                            $("#transfer-stage-1g").css("display", "none");
                            $('#transfer-stage-1-back').val('1');
                            $('#transfer-stage-1-back').css("display", "none");
                            activateButtons('transfer','stage1','off');
                            break;
                        case "2":
                            $("#transfer-stage-1a").css("display", "none");
                            $("#transfer-stage-1b").css("display", "");
                            $("#transfer-stage-1c").css("display", "none");
                            $("#transfer-stage-1d").css("display", "none");
                            $("#transfer-stage-1e").css("display", "none");
                            $("#transfer-stage-1f").css("display", "none");
                            $("#transfer-stage-1g").css("display", "none");
                            $('#transfer-stage-1-back').val("2");
                            $('#transfer-stage-1-back').css("display", "");
                            $('#transfer-stage-1-submit').html('Continue');
                            $('#transfer-stage-1-submit-small').html('Continue');
                            if ($('#it-select').val() === 'null') {
                                activateButtons('transfer','stage1','off');
                            } else {
                                activateButtons('transfer','stage1','on');
                            }
                            break;
                        case "3":
                            $("#transfer-stage-1a").css("display", "none");
                            $("#transfer-stage-1b").css("display", "none");
                            $("#transfer-stage-1c").css("display", "");
                            $("#transfer-stage-1d").css("display", "none");
                            $("#transfer-stage-1e").css("display", "none");
                            $("#transfer-stage-1f").css("display", "none");
                            $("#transfer-stage-1g").css("display", "none");
                            $('#transfer-stage-1-back').val('3');
                            $('#transfer-stage-1-back').css("display", "");
                            activateButtons('transfer','stage1','off');
                            break;
                        case "4":
                            $("#transfer-stage-1a").css("display", "none");
                            $("#transfer-stage-1b").css("display", "none");
                            $("#transfer-stage-1c").css("display", "none");
                            $("#transfer-stage-1d").css("display", "");
                            $("#transfer-stage-1e").css("display", "none");
                            $("#transfer-stage-1f").css("display", "none");
                            $("#transfer-stage-1g").css("display", "none");
                            $('#transfer-stage-1-back').val('4');
                            $('#transfer-stage-1-back').css("display", "");
                            activateButtons('transfer','stage1','off');
                            break;
                        case "5":
                            $("#transfer-stage-1a").css("display", "none");
                            $("#transfer-stage-1b").css("display", "none");
                            $("#transfer-stage-1c").css("display", "none");
                            $("#transfer-stage-1d").css("display", "");
                            $("#transfer-stage-1e").css("display", "");
                            $("#transfer-stage-1f").css("display", "none");
                            $("#transfer-stage-1g").css("display", "none");
                            $('#transfer-stage-1-back').val('5');
                            $('#transfer-stage-1-back').css("display", "");
                            break;
                        case "6":
                            $("#transfer-stage-1a").css("display", "none");
                            $("#transfer-stage-1b").css("display", "none");
                            $("#transfer-stage-1c").css("display", "none");
                            $("#transfer-stage-1d").css("display", "none");
                            $("#transfer-stage-1e").css("display", "none");
                            $("#transfer-stage-1f").css("display", "");
                            $("#transfer-stage-1g").css("display", "none");
                            $('#transfer-stage-1-back').val('6');
                            $('#transfer-stage-1-back').css("display", "");
                            break;
                        case "7":
                            $("#transfer-stage-1a").css("display", "none");
                            $("#transfer-stage-1b").css("display", "none");
                            $("#transfer-stage-1c").css("display", "none");
                            $("#transfer-stage-1d").css("display", "none");
                            $("#transfer-stage-1e").css("display", "none");
                            $("#transfer-stage-1f").css("display", "none");
                            $("#transfer-stage-1g").css("display", "");
                            $('#transfer-stage-1-back').val('7');
                            $('#transfer-stage-1-back').css("display", "");
                            break;
                    }
                    break;
                case "2":
                    switch (step){
                        case "1":
                            $("#transfer-stage-1a").css("display", "");
                            $("#transfer-stage-1b").css("display", "none");
                            $("#transfer-stage-1c").css("display", "none");
                            $("#transfer-stage-1d").css("display", "none");
                            $("#transfer-stage-1e").css("display", "none");
                            $('#transfer-stage-1-back').val('1');
                            break;
                        case "2":
                            $("#transfer-stage-1a").css("display", "");
                            $("#transfer-stage-1b").css("display", "");
                            $("#transfer-stage-1c").css("display", "none");
                            $("#transfer-stage-1d").css("display", "none");
                            $("#transfer-stage-1e").css("display", "none");
                            $('#transfer-stage-1-back').val("2");
                            $('#transfer-stage-1-back').css("display", "");
                            break;
                        case "3":
                            $("#transfer-stage-1a").css("display", "none");
                            $("#transfer-stage-1b").css("display", "none");
                            $("#transfer-stage-1c").css("display", "");
                            $("#transfer-stage-1d").css("display", "none");
                            $("#transfer-stage-1e").css("display", "none");
                            $('#transfer-stage-1-back').val('3');
                            $('#transfer-stage-1-back').css("display", "");
                            break;
                        case "4":
                            $("#transfer-stage-1a").css("display", "none");
                            $("#transfer-stage-1b").css("display", "none");
                            $("#transfer-stage-1c").css("display", "none");
                            $("#transfer-stage-1d").css("display", "");
                            $("#transfer-stage-1e").css("display", "none");
                            $('#transfer-stage-1-back').val('4');
                            $('#transfer-stage-1-back').css("display", "");
                            break;
                        case "5":
                            $("#transfer-stage-1a").css("display", "none");
                            $("#transfer-stage-1b").css("display", "none");
                            $("#transfer-stage-1c").css("display", "none");
                            $("#transfer-stage-1d").css("display", "none");
                            $("#transfer-stage-1e").css("display", "");
                            $('#transfer-stage-1-back').val('5');
                            $('#transfer-stage-1-back').css("display", "");
                            break;
                    }
                    break;
            }
            break;
        case "surplus":
            break;
    }
}
function backButton(process, stage, value){
    switch (process) {
        case "transfer":
            switch (stage){
                case "1":
                    if (value === "1") {
                        processStep("transfer","1","1");
                    } else if (value === "2") {
                        processStep("transfer","1","1");
                        $('#transfer-stage-1-submit').html('Submit Step');
                        $('#transfer-stage-1-submit-small').html('Submit Step');
                    } else if (value === "3") {
                        processStep("transfer","1","1")
                    } else if (value === "4") {
                        processStep("transfer","1","3")
                    } else if (value === "5") {
                        processStep("transfer","1","4")
                    } else if (value === "6") {
                        processStep("transfer","1","3")
                    } else if (value === '7') {
                        processStep('transfer','1','2');
                    };
                    break;
                case "2":
                    break;
            }
            break;
        case "surplus":
            break;
    }
}
function submitRequest(process, stage, index) {
    switch (process) {
        case 'transfer':
            var id = $('#transfer-stage-' + stage + '-id').val();
            switch(stage) {
                case 1:
                    if ($('#transfer-stage-1-submit').val() === 'send-IT') {
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
                                $('#transfer-stage-1-submit').html('Submit Step');
                                $('#transfer-stage-1-submit-small').html('Submit Step');
                                processStep('transfer','1','3');
                                $('#transfer-stage-1-submit').removeAttr('value');
                            } else {
                                $('#transfer-stage-1').modal('close');
                                var element = document.getElementById('transfer-' + $('#transfer-stage-1-id').val());
                                var grandParent = element.parentNode.parentNode;
                                grandParent.parentNode.removeChild(grandParent);
                            }
                        });
                    } else if ($('#transfer-stage-1-submit').val() === 'confirm-IT') {
                        document.getElementById('transfer-stage-1-submit').value = 'send-IT';
                        processStep('transfer', '1', '7');
                        if ($('#it-select').val() === $('#transfer-stage-1-pid').val()) {
                            $('#transfer-stage-1g-body').html('You have indicated that this asset needs to be transferred to IT and that you will be serving as the IT personnel responsible for this ticket. <br />If this is correct click Continue');
                        } else {
                            $('#transfer-stage-1-submit').html('Submit Step');
                            $('#transfer-stage-1-submit-small').html('Submit Step');
                            $('#transfer-stage-1g-body').html('You are requesting to transfer this ticket to IT. This ticket will be transferred to ' + $('#it-select').find('option:selected').html() + '.<br /> If you submit this request you will no longer have access to this ticket');
                        }
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
                            'act': 'Transfer-Contacted',
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
                                $('#transfer-stage-1').modal('close');
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
                        'act': 'Transfer-Received',
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
                            if(data['changeOrg'] === 1) {
                                var element = document.getElementById('transfer-' + $('#transfer-stage-2-id').val());
                                var grandParent = element.parentNode.parentNode;
                                grandParent.parentNode.removeChild(grandParent);
                                setProcessStage('transfer', '2','c','on');
                                setProcessStage('transfer', '2','b','off');
                                setProcessStage('transfer', '2','a','off');
                                activateButtons('transfer','stage2','off');
                                $('#transfer-stage-2c-text').html('This ticket will be transferred to the following org -' + data['assignedOrg'] + ' because the recipient is in another org');
                            } else {
                                $('#transfer-stage-2').modal('close');
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
                        'act': 'Transfer-Deployed',
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
                        'act': 'Transfer-Banner-Update',
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
                            $('#transfer-stage-4-' + id).attr('disabled', 'disabled');
                            $('#transfer-stage-5-' + id).removeClass('disabled')
                        }
                    });
                    break;
                case 7:
                    index = index.split('-')[3];
                    var form = {
                        'action': 'causfa_update_transfer',
                        'state': 8,
                        'assignee': '',
                        'ptag': jQuery('#transfer-ptag-' + index).html()
                    };
                    jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
                        if (data['status'] ===1) {
                            $('#transfer-stage-6-' + index).addClass('disabled');
                            $('#transfer-stage-6-' + index).val('Processing');
                        }
                    });
                    break;
            }
            break;
        case 'surplus':
            var id = $('#surplus-stage-' + stage + '-id').val();
            switch (stage) {
                case 1:
                    var form = {
                        'action': 'causfa_add_note',
                        'act': 'Surplus-Contacted',
                        'ptag': jQuery('#surplus-stage-1-ptag').val(),
                        'note': 'Submitting note'
                    };
                    break;
                case 2:
                    break;
                case 3:
                    break;
                case 4:
                    break;
            }
            break;
    }
}
function cancelRequest(process, stage) {
    switch (process) {
        case 'transfer':
            switch (stage) {
                case '1':
                    processStep('transfer','1','1');
                    $('#it-select').val('null');
                    $('#transfer-stage-1-notes').val('');
                    $('#transfer-pickupdate').val('');
                    break;
                case '2':
                    break;
                case '3':
                    break;
                case '4':
                    break;
                case '5':
                    break;
            }
            break;
        case 'surplus':
            break;
    }
}
function admin_uploadFormHome() {
    var fileInput = jQuery('#homeFormToUpload');
    var file = fileInput.prop('files')[0];
    if (!file) {
        alert('Please select a file to upload');
    } else {
        var ptag = jQuery('#transfer-stage-5-ptag').val();
        var form = new FormData();
        form.append('action', 'causfa_upload_form_home');
        form.append('ptag', ptag);
        form.append('homeFormToUpload', file);
        jQuery.ajax({
            url: causfa_action_obj.ajax_url,
            type: 'post',
            contentType: false,
            processData: false,
            data: form,
            success: function (data) {
                if (data['status'] == 0) {
                    alert(data['message']);
                } else {
                    alert(data['message']);
                    $('#homeFormToUpload').val('');
                }
            }
        });
        var form = {
            'action': 'causfa_update_transfer',
            'state': 7,
            'assignee': '',
            'ptag': ptag
        };
        jQuery.post(causfa_action_obj.ajax_url, form, function(data){
            if (data['status'] === 1) {
                $('#transfer-stage-5').modal('close');
                var id = $('#transfer-stage-5-id').val();
                $('#transfer-stage-5-' + id).addClass('disabled');
                $('#transfer-stage-6-' + id).removeClass('disabled');
            }
        });
    }
}
function admin_uploadFormOffice() {
    var fileInput = jQuery('#officeFormToUpload');
    var file = fileInput.prop('files')[0];
    if (!file) {
        alert('Please select a file to upload');
    } else {
        var ptag = jQuery('#transfer-stage-5-ptag').val();
        var form = new FormData();
        form.append('action', 'causfa_upload_form_office');
        form.append('ptag', ptag);
        form.append('officeFormToUpload', file);
        jQuery.ajax({
            url: causfa_action_obj.ajax_url,
            type: 'post',
            contentType: false,
            processData: false,
            data: form,
            success: function (data) {
                if (data['status'] == 0) {
                    alert(data['message']);
                } else {
                    alert(data['message']);
                    $('#officeFormToUpload').val('');
                    $('#transfer-stage-5').modal('close');
                    var id = $('#transfer-stage-5-id').val();
                    $('#transfer-stage-5-' + id).addClass('disabled');
                    $('#transfer-stage-6-' + id).removeClass('disabled');
                }
            }
        });
        var form = {
            'action': 'causfa_update_transfer',
            'state': 7,
            'assignee': '',
            'ptag': ptag
        };
        jQuery.post(causfa_action_obj.ajax_url, form, function(data){
            if (data['status'] === 1) {
                $('#transfer-stage-5').modal('close');
                var id = $('#transfer-stage-5-id').val();
                $('#transfer-stage-5-' + id).addClass('disabled');
                $('#transfer-stage-6-' + id).removeClass('disabled');
            }
        });
    }
}