function openModal(process, element, data, step) {
    event.preventDefault();
    switch (process) {
        case 'transfer':
            var tag = jQuery('#transfer-ptag-' + data).html();
            if (tag === jQuery('#transfer-stage-' + element.split('-')[2] + '-ptag').val()) {
                jQuery('#' + element).modal();
                jQuery('#' + element).modal('open');
            } else {
                switch(element) {
                    case 'transfer-stage-1':
                        jQuery("#transfer-pickupdate").datepicker();
                        jQuery('#transfer-stage-1-ptag').val(jQuery('#transfer-ptag-' + data).html());
                        jQuery('#transfer-stage-1-id').val(data);
                        if (step) {
                            processStep('transfer','1','3');
                        } else {
                            processStep('transfer','1','1');
                        }
                        jQuery('#transfer-stage-1-submit').removeAttr('value');
                        jQuery("#transfer-pickupdate").val('');
                        jQuery('#transfer-stage-1-notes').val('');
                        jQuery('#it-select').val('null');
                        break;
                    case 'transfer-stage-2':
                        jQuery("#recieve-pickupdate").datepicker();
                        jQuery('#transfer-stage-2-ptag').val(jQuery('#transfer-ptag-' + data).html());
                        jQuery('#transfer-stage-2-id').val(data);
                        processStep('transfer','2','1');
                        jQuery("#recieve-pickupdate").val('');
                        jQuery('#transfer-stage-2-notes').val('');
                        break;
                    case 'transfer-stage-3':
                        jQuery("#deployed-date").datepicker();
                        jQuery('#transfer-stage-3-ptag').val(jQuery('#transfer-ptag-' + data).html());
                        jQuery('#transfer-stage-3-id').val(data);
                        processStep('transfer','3','1');
                        jQuery("#deployed-date").val('');
                        jQuery('#transfer-stage-3-notes').val('');
                        break;
                    case 'transfer-stage-4':
                        jQuery("#banner-date").datepicker();
                        jQuery('#transfer-stage-4-ptag').val(jQuery('#transfer-ptag-' + data).html());
                        jQuery('#transfer-stage-4-id').val(data);
                        processStep('transfer','4','1');
                        jQuery("#banner-date").val('');
                        jQuery('#transfer-stage-4-notes').val();
                        break;
                    case 'transfer-stage-5':
                        jQuery('#transfer-stage-5-ptag').val(jQuery('#transfer-ptag-' + data).html());
                        jQuery('#transfer-stage-5-id').val(data);
                        jQuery('#officeFormToUpload').val('');
                        jQuery('#homeFormToUpload').val('');
                        break;
                }
            }
            break;
        case 'surplus':
            var tag = jQuery('#surplus-ptag-' + data).html();
            if (tag === jQuery('#surplus-stage-' + element.split('-')[2] + '-ptag').val()) {
                jQuery('#' + element).modal();
                jQuery('#' + element).modal('open');
            } else {
                switch (element) {
                    case 'surplus-stage-1':
                        jQuery("#surplus-contactdate").datepicker();
                        processStep('surplus', '1', '1');
                        jQuery('#surplus-stage-1-ptag').val(tag);
                        jQuery('#surplus-stage-1-id').val(data);
                        jQuery('#surplus-contactdate').val('');
                        jQuery('#surplus-stage-1-notes').val('');
                        break;
                    case 'surplus-stage-2':
                        jQuery("#surplus-receivedate").datepicker();
                        transferModalLoad(['recipient-name']);
                        document.getElementById('recipient-name').addEventListener("awesomplete-select", function () {
                            jQuery('#surplus-stage-2-submit').val('Transfer');
                            jQuery('#surplus-stage-2-submit-small').val('Transfer');
                            activateButtons('surplus', 'stage2', 'on');
                        });
                        processStep('surplus', '2', '1');
                        jQuery('#surplus-stage-2-ptag').val(tag);
                        jQuery('#surplus-stage-2-id').val(data);
                        jQuery('#surplus-receivedate').val('');
                        jQuery('#surplus-stage-2-notes').val('');
                        break;
                    case 'surplus-stage-3':
                        jQuery("#surplus-pickupdate").datepicker();
                        processStep('surplus', '3', '1');
                        jQuery('#surplus-stage-3-ptag').val(tag);
                        jQuery('#surplus-stage-3-id').val(data);
                        jQuery('#surplus-pickupdate').val('');
                        jQuery('#surplus-stage-3-notes').val('');
                        break;
                    case 'surplus-stage-4':
                        jQuery('#surplus-stage-4-ptag').val(tag);
                        jQuery('#surplus-stage-4-id').val(data);
                        jQuery('#surplusFormToUpload').val('');
                        break;
                }
            }
            break;
        case 'tickets':
            var tag = jQuery('#tickets-ptag-' + data).html();
            if (tag === jQuery('#tickets-stage-1-ptag').val()) {
                jQuery('#' + element).modal();
                jQuery('#' + element).modal('open');
            } else {
                jQuery('#tickets-stage-1-ptag').val(tag);
                jQuery('#tickets-stage-1-id').val(data);
                jQuery('#tickets-date').datepicker();
                processStep('tickets','1','1');
                jQuery('#tickets-stage-1-notes-text').html(jQuery('#tickets-note-' + data).html());
                jQuery('#tickets-date').val('');
                jQuery('#tickets-stage-1-notes').val('');
            }
            break;
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
                        jQuery("#transfer-stage-1-submit").removeAttr("disabled");
                        jQuery("#transfer-stage-1-submit-small").removeAttr("disabled");

                    } else if (state === "off") {
                        jQuery("#transfer-stage-1-submit").attr("disabled", "disabled");
                        jQuery("#transfer-stage-1-submit-small").attr("disabled", "disabled");
                    }
                    break;
                case "stage2":
                    if (state === "on") {
                        jQuery("#transfer-stage-2-submit").removeAttr("disabled");
                    } else if (state === "off") {
                        jQuery("#transfer-stage-2-submit").attr("disabled", "disabled");
                    }
                    break;
                case "stage3":
                    if (state === "on") {
                        jQuery("#transfer-stage-3-submit").removeAttr("disabled");
                    } else if (state === "off") {
                        jQuery("#transfer-stage-3-submit").attr("disabled", "disabled");
                    }
                    break;
                case "stage4":
                    if (state === "on") {
                        jQuery("#transfer-stage-4-submit").removeAttr("disabled");
                    } else if (state === "off") {
                        jQuery("#transfer-stage-4-submit").attr("disabled", "disabled");
                    }
                    break;
            }
            break;
        case 'surplus':
            switch (stage) {
                case "stage1":
                    if (state === "on") {
                        jQuery("#surplus-stage-1-submit").removeAttr("disabled");
                    } else if (state === "off") {
                        jQuery("#surplus-stage-1-submit").attr("disabled", "disabled");
                    }
                    break;
                case "stage2":
                    if (state === "on") {
                        jQuery("#surplus-stage-2-submit").removeAttr("disabled");
                    } else if (state === "off") {
                        jQuery("#surplus-stage-2-submit").attr("disabled", "disabled");
                    }
                    break;
                case "stage3":
                    if (state === "on") {
                        jQuery("#surplus-stage-3-submit").removeAttr("disabled");
                    } else if (state === "off") {
                        jQuery("#surplus-stage-3-submit").attr("disabled", "disabled");
                    }
                    break;
                case "stage4":
                    if (state === "on") {
                        jQuery("#surplus-stage-4-submit").removeAttr("disabled");
                    } else if (state === "off") {
                        jQuery("#surplus-stage-4-submit").attr("disabled", "disabled");
                    }
                    break;
                case "stage5":
                    break;
            }
            break;
		case "tickets":
			switch (stage) {
				case "stage1":
					if (state === "on") {
						jQuery("#tickets-stage-1-submit").removeAttr("disabled");
					} else if (state === "off") {
						jQuery("#tickets-stage-1-submit").attr("disabled", "disabled");
					}
				break;
				case "stage2":
					if (state === "on") {
						jQuery("#tickets-stage-2-submit").removeAttr("disabled");
					} else if (state === "off") {
						jQuery("#tickets-stage-2-submit").attr("disabled", "disabled");
					}
				break;
			}
		break;
    }
};
function processStep(process, stage, step) {
    switch (process){
        case "transfer":
            switch (stage){
                case "1":
                    switch (step){
                        case "1":
                            jQuery("#transfer-stage-1a").css("display", "");
                            jQuery("#transfer-stage-1b").css("display", "none");
                            jQuery("#transfer-stage-1c").css("display", "none");
                            jQuery("#transfer-stage-1d").css("display", "none");
                            jQuery("#transfer-stage-1e").css("display", "none");
                            jQuery("#transfer-stage-1f").css("display", "none");
                            jQuery("#transfer-stage-1g").css("display", "none");
                            jQuery('#transfer-stage-1-back').val('1');
                            jQuery('#transfer-stage-1-back').css("display", "none");
                            activateButtons('transfer','stage1','off');
                            break;
                        case "2":
                            jQuery("#transfer-stage-1a").css("display", "none");
                            jQuery("#transfer-stage-1b").css("display", "");
                            jQuery("#transfer-stage-1c").css("display", "none");
                            jQuery("#transfer-stage-1d").css("display", "none");
                            jQuery("#transfer-stage-1e").css("display", "none");
                            jQuery("#transfer-stage-1f").css("display", "none");
                            jQuery("#transfer-stage-1g").css("display", "none");
                            jQuery('#transfer-stage-1-back').val("2");
                            jQuery('#transfer-stage-1-back').css("display", "");
                            jQuery('#transfer-stage-1-submit').html('Continue');
                            jQuery('#transfer-stage-1-submit-small').html('Continue');
                            if (jQuery('#it-select').val() === 'null') {
                                activateButtons('transfer','stage1','off');
                            } else {
                                activateButtons('transfer','stage1','on');
                            }
                            break;
                        case "3":
                            jQuery("#transfer-stage-1a").css("display", "none");
                            jQuery("#transfer-stage-1b").css("display", "none");
                            jQuery("#transfer-stage-1c").css("display", "");
                            jQuery("#transfer-stage-1d").css("display", "none");
                            jQuery("#transfer-stage-1e").css("display", "none");
                            jQuery("#transfer-stage-1f").css("display", "none");
                            jQuery("#transfer-stage-1g").css("display", "none");
                            jQuery('#transfer-stage-1-back').val('3');
                            jQuery('#transfer-stage-1-back').css("display", "none");
                            activateButtons('transfer','stage1','off');
                            break;
                        case "4":
                            jQuery("#transfer-stage-1a").css("display", "none");
                            jQuery("#transfer-stage-1b").css("display", "none");
                            jQuery("#transfer-stage-1c").css("display", "none");
                            jQuery("#transfer-stage-1d").css("display", "");
                            jQuery("#transfer-stage-1e").css("display", "none");
                            jQuery("#transfer-stage-1f").css("display", "none");
                            jQuery("#transfer-stage-1g").css("display", "none");
                            jQuery('#transfer-stage-1-back').val('4');
                            jQuery('#transfer-stage-1-back').css("display", "");
                            activateButtons('transfer','stage1','off');
                            break;
                        case "5":
                            jQuery("#transfer-stage-1a").css("display", "none");
                            jQuery("#transfer-stage-1b").css("display", "none");
                            jQuery("#transfer-stage-1c").css("display", "none");
                            jQuery("#transfer-stage-1d").css("display", "");
                            jQuery("#transfer-stage-1e").css("display", "");
                            jQuery("#transfer-stage-1f").css("display", "none");
                            jQuery("#transfer-stage-1g").css("display", "none");
                            jQuery('#transfer-stage-1-back').val('5');
                            jQuery('#transfer-stage-1-back').css("display", "");
                            break;
                        case "6":
                            jQuery("#transfer-stage-1a").css("display", "none");
                            jQuery("#transfer-stage-1b").css("display", "none");
                            jQuery("#transfer-stage-1c").css("display", "none");
                            jQuery("#transfer-stage-1d").css("display", "none");
                            jQuery("#transfer-stage-1e").css("display", "none");
                            jQuery("#transfer-stage-1f").css("display", "");
                            jQuery("#transfer-stage-1g").css("display", "none");
                            jQuery('#transfer-stage-1-back').val('6');
                            jQuery('#transfer-stage-1-back').css("display", "");
                            break;
                        case "7":
                            jQuery("#transfer-stage-1a").css("display", "none");
                            jQuery("#transfer-stage-1b").css("display", "none");
                            jQuery("#transfer-stage-1c").css("display", "none");
                            jQuery("#transfer-stage-1d").css("display", "none");
                            jQuery("#transfer-stage-1e").css("display", "none");
                            jQuery("#transfer-stage-1f").css("display", "none");
                            jQuery("#transfer-stage-1g").css("display", "");
                            jQuery('#transfer-stage-1-back').val('7');
                            jQuery('#transfer-stage-1-back').css("display", "");
                            break;
                    }
                    break;
                case "2":
                    switch (step){
                        case "1":
                            jQuery("#transfer-stage-2a").css("display", "");
                            jQuery("#transfer-stage-2b").css("display", "none");
                            jQuery("#transfer-stage-2c").css("display", "none");
                            break;
                        case "2":
                            jQuery("#transfer-stage-2a").css("display", "");
                            jQuery("#transfer-stage-2b").css("display", "");
                            jQuery("#transfer-stage-2c").css("display", "none");
                            break;
                        case '3':
                            jQuery("#transfer-stage-2a").css("display", "none");
                            jQuery("#transfer-stage-2b").css("display", "none");
                            jQuery("#transfer-stage-2c").css("display", "");
                            break;
                    }
                    break;
                case '3':
                    switch(step) {
                        case '1':
                            jQuery("#transfer-stage-3a").css("display", "");
                            jQuery("#transfer-stage-3b").css("display", "none");
                            break;
                        case '2':
                            jQuery("#transfer-stage-3a").css("display", "");
                            jQuery("#transfer-stage-3b").css("display", "");
                            break;
                    }
                    break;
                case '4':
                    switch(step) {
                        case '1':
                            jQuery("#transfer-stage-4a").css("display", "");
                            jQuery("#transfer-stage-4b").css("display", "none");
                            break;
                        case '2':
                            jQuery("#transfer-stage-4a").css("display", "");
                            jQuery("#transfer-stage-4b").css("display", "");
                            break;
                    }
                    break;
            }
            break;
        case "surplus":
            switch (stage) {
                case '1':
                    switch (step) {
                        case '1':
                            jQuery('#surplus-stage-1a').css('display', '');
                            jQuery('#surplus-stage-1b').css('display', 'none');
                            jQuery('#surplus-stage-1c').css('display', 'none');
                            jQuery('#surplus-stage-1d').css('display', 'none');
                            jQuery('#surplus-stage-1-back').css('display', 'none');
                            jQuery('#surplus-stage-1-back').val(1);
                            activateButtons('surplus','stage1','off');
                            break;
                        case '2':
                            jQuery('#surplus-stage-1a').css('display', 'none');
                            jQuery('#surplus-stage-1b').css('display', '');
                            jQuery('#surplus-stage-1c').css('display', 'none');
                            jQuery('#surplus-stage-1d').css('display', 'none');
                            jQuery('#surplus-stage-1-back').css('display', '');
                            jQuery('#surplus-stage-1-back').val(2);
                            activateButtons('surplus','stage1','off');
                            break;
                        case '3':
                            jQuery('#surplus-stage-1a').css('display', 'none');
                            jQuery('#surplus-stage-1b').css('display', 'none');
                            jQuery('#surplus-stage-1c').css('display', '');
                            jQuery('#surplus-stage-1d').css('display', 'none');
                            jQuery('#surplus-stage-1-back').css('display', '');
                            jQuery('#surplus-stage-1-back').val(3);
                            activateButtons('surplus','stage1','off');
                            break;
                        case '4':
                            jQuery('#surplus-stage-1a').css('display', 'none');
                            jQuery('#surplus-stage-1b').css('display', '');
                            jQuery('#surplus-stage-1c').css('display', 'none');
                            jQuery('#surplus-stage-1d').css('display', '');
                            jQuery('#surplus-stage-1-back').css('display', '');
                            jQuery('#surplus-stage-1-back').val(4);
                            activateButtons('surplus','stage1','on');
                            break;
                    }
                    break;
                case '2':
                    switch (step) {
                        case '1':
                            jQuery('#surplus-stage-2a').css('display', '');
                            jQuery('#surplus-stage-2b').css('display', 'none');
                            jQuery('#surplus-stage-2c').css('display', 'none');
                            jQuery('#surplus-stage-2d').css('display', 'none');
                            jQuery('#surplus-stage-2e').css('display', 'none');
                            jQuery('#surplus-stage-2-back').val('1');
                            jQuery('#surplus-stage-2-back').css('display','none');
                            activateButtons('surplus','stage2','off');
                            jQuery('#surplus-stage-2-submit').val('');
                            jQuery('#surplus-stage-2-submit-small').val('');
                            break;
                        case '2':
                            jQuery('#surplus-stage-2a').css('display', '');
                            jQuery('#surplus-stage-2b').css('display', '');
                            jQuery('#surplus-stage-2c').css('display', 'none');
                            jQuery('#surplus-stage-2d').css('display', 'none');
                            jQuery('#surplus-stage-2e').css('display', 'none');
                            jQuery('#surplus-stage-2-back').val('2');
                            jQuery('#surplus-stage-2-back').css('display','none');
                            jQuery('#surplus-stage-2-submit').val('');
                            jQuery('#surplus-stage-2-submit-small').val('');
                            activateButtons('surplus','stage2','off');
                            break;
                        case '3':
                            jQuery('#surplus-stage-2a').css('display', 'none');
                            jQuery('#surplus-stage-2b').css('display', 'none');
                            jQuery('#surplus-stage-2c').css('display', '');
                            jQuery('#surplus-stage-2d').css('display', 'none');
                            jQuery('#surplus-stage-2e').css('display', 'none');
                            jQuery('#surplus-stage-2-back').val('3');
                            jQuery('#surplus-stage-2-back').css('display','');
                            if (jQuery('#recipient-name').val() !== '') {
                                jQuery('#surplus-stage-2-submit').val('Transfer');
                                jQuery('#surplus-stage-2-submit-small').val('Transfer');
                                activateButtons('surplus','stage2','on');
                            } else {
                                activateButtons('surplus','stage2','off');

                            }
                            break;
                        case '4':
                            jQuery('#surplus-stage-2a').css('display', '');
                            jQuery('#surplus-stage-2b').css('display', 'none');
                            jQuery('#surplus-stage-2c').css('display', 'none');
                            jQuery('#surplus-stage-2d').css('display', '');
                            jQuery('#surplus-stage-2e').css('display', 'none');
                            jQuery('#surplus-stage-2-back').val('4');
                            jQuery('#surplus-stage-2-back').css('display','');

                            activateButtons('surplus','stage2','on');
                            jQuery('#surplus-stage-2-submit').val('');
                            jQuery('#surplus-stage-2-submit-small').val('');
                            break;
                        case '5':
                            jQuery('#surplus-stage-2a').css('display', 'none');
                            jQuery('#surplus-stage-2b').css('display', 'none');
                            jQuery('#surplus-stage-2c').css('display', 'none');
                            jQuery('#surplus-stage-2d').css('display', 'none');
                            jQuery('#surplus-stage-2e').css('display', '');
                            jQuery('#surplus-stage-2-back').val('5');
                            jQuery('#surplus-stage-2-back').css('display','none');
                            activateButtons('surplus','stage2','off');
                            jQuery('#surplus-stage-2-submit').val('');
                            jQuery('#surplus-stage-2-submit-small').val('');
                            break;

                    }
                    break;
                case '3':
                    switch (step) {
                        case '1':
                            jQuery('#surplus-stage-3a').css('display', '');
                            jQuery('#surplus-stage-3b').css('display', 'none');
                            activateButtons('surplus','stage3','off');
                            break;
                        case '2':
                            jQuery('#surplus-stage-3a').css('display', '');
                            jQuery('#surplus-stage-3b').css('display', '');
                            activateButtons('surplus','stage3','on');
                            break;
                    }
                    break;
            }
            break;
		case "tickets":
				switch (stage){
					case "1":
						switch (step) {
							case "1":
								jQuery("#tickets-stage-1a").css("display", "");
								jQuery("#tickets-stage-1b").css("display", "none");
								jQuery("#tickets-stage-1c").css("display", "none");
								jQuery("#tickets-stage-1d").css("display", "none");
								jQuery("#tickets-stage-1e").css("display", "none");
								jQuery("#tickets-stage-1f").css("display", "none");
								jQuery('#tickets-stage-1-back').val('1');
								jQuery('#tickets-stage-1-back').css("display", "none");
								activateButtons('tickets','stage1','off');
                                jQuery('#tickets-stage-1-submit').val('');
								break;
							case "2":
								jQuery("#tickets-stage-1a").css("display", "none");
								jQuery("#tickets-stage-1b").css("display", "");
								jQuery("#tickets-stage-1c").css("display", "none");
								jQuery("#tickets-stage-1d").css("display", "none");
								jQuery("#tickets-stage-1e").css("display", "none");
								jQuery("#tickets-stage-1f").css("display", "");
								jQuery('#tickets-stage-1-back').val('2');
								jQuery('#tickets-stage-1-back').css("display", "");
                                activateButtons('tickets','stage1','on');
                                jQuery('#tickets-stage-1-submit').val('IT');
								break;
							case "3":
								jQuery("#tickets-stage-1a").css("display", "none");
								jQuery("#tickets-stage-1b").css("display", "none");
								jQuery("#tickets-stage-1c").css("display", "");
								jQuery("#tickets-stage-1d").css("display", "none");
								jQuery("#tickets-stage-1e").css("display", "none");
								jQuery("#tickets-stage-1f").css("display", "none");
								jQuery('#tickets-stage-1-back').val('3');
								jQuery('#tickets-stage-1-back').css("display", "");
								activateButtons('tickets','stage1','off');
                                jQuery('#tickets-stage-1-submit').val('');
								break;
							case "4":
								jQuery("#tickets-stage-1a").css("display", "none");
								jQuery("#tickets-stage-1b").css("display", "none");
								jQuery("#tickets-stage-1c").css("display", "none");
								jQuery("#tickets-stage-1d").css("display", "");
								jQuery("#tickets-stage-1e").css("display", "none");
								jQuery("#tickets-stage-1f").css("display", "none");
								jQuery('#tickets-stage-1-back').val('4');
								jQuery('#tickets-stage-1-back').css("display", "");
								activateButtons('tickets','stage1','off');
                                jQuery('#tickets-stage-1-submit').val('');
								break;
							case "5":
								jQuery("#tickets-stage-1a").css("display", "none");
								jQuery("#tickets-stage-1b").css("display", "none");
								jQuery("#tickets-stage-1c").css("display", "none");
								jQuery("#tickets-stage-1d").css("display", "none");
								jQuery("#tickets-stage-1e").css("display", "");
								jQuery("#tickets-stage-1f").css("display", "none");
								jQuery('#tickets-stage-1-back').val('5');
								jQuery('#tickets-stage-1-back').css("display", "");
								activateButtons('tickets','stage1','off');
                                jQuery('#tickets-stage-1-submit').val('');
								break;
							case "6":
								jQuery("#tickets-stage-1a").css("display", "none");
								jQuery("#tickets-stage-1b").css("display", "none");
								jQuery("#tickets-stage-1c").css("display", "none");
								jQuery("#tickets-stage-1d").css("display", "");
								jQuery("#tickets-stage-1e").css("display", "none");
								jQuery("#tickets-stage-1f").css("display", "");
								jQuery('#tickets-stage-1-back').val('6');
								jQuery('#tickets-stage-1-back').css("display", "");
								activateButtons('tickets','stage1','on');
                                jQuery('#tickets-stage-1-submit').val('');
								break;
						}
							break;
						break;
					case "2":
						break;
				}
				break;
			break;
    }
}
function backButton(process, stage, value){
    switch (process) {
        case "transfer":
            if (value === "1") {
                processStep("transfer","1","1");
            } else if (value === "2") {
                processStep("transfer","1","1");
                jQuery('#transfer-stage-1-submit').html('Submit Step');
                jQuery('#transfer-stage-1-submit-small').html('Submit Step');
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
        case "surplus":
            switch (stage) {
                case '1':
                    if (value === '1') {
                        processStep('surplus','1','1');
                    } else if (value === '2') {
                        processStep('surplus','1','1');
                    } else if (value === '3') {
                        processStep('surplus','1','1');
                    } else if (value === '4') {
                        processStep('surplus','1','2');
                    }
                    break;
                case '2':
                    if (value === '1') {
                        processStep('surplus','2','1');
                    } else if (value === '2') {
                        processStep('surplus','2','1');
                    } else if (value === '3') {
                        processStep('surplus','2','2');
                    } else if (value === '4') {
                        processStep('surplus','2','2');
                    }
                    break;
            }
            break;
		case "tickets":
			switch (stage){
				case "1":
					if (value === "1") {
						processStep("tickets","1","1");
					} else if (value === "2") {
						processStep("tickets","1","1");
					} else if (value === "3") {
						processStep("tickets","1","1")
					} else if (value === "4") {
						processStep("tickets","1","3")
					} else if (value === "5") {
						processStep("tickets","1","3")
					} else if (value === "6") {
						processStep("tickets","1","3")
					};
					break;
				case "2":
					break;
			}
			break;
    }
}
function submitRequest(process, stage, index) {
    switch (process) {
        case 'transfer':
            var id = jQuery('#transfer-stage-' + stage + '-id').val();
            switch(stage) {
                case 1:
                    if (jQuery('#transfer-stage-1-submit').val() === 'send-IT') {
                        var form = {
                            'action': 'causfa_add_note',
                            'act': 'Transfer-IT',
                            'ptag': jQuery('#transfer-stage-1-ptag').val(),
                            'note': ('Asset falls under IT influence. Transferring to ' + jQuery('#it-select').val())
                        };
                        jQuery.post(causfa_action_obj.ajax_url, form, function(data) {});
                        var form = {
                            'action': 'causfa_update_transfer',
                            'state': 2,
                            'assignee': jQuery('#it-select').val(),
                            'ptag': jQuery('#transfer-stage-1-ptag').val()
                        };
                        jQuery.post(causfa_action_obj.ajax_url, form, function(data){
                            if (jQuery('#transfer-stage-1-pid').val() === jQuery('#it-select').val()) {
                                jQuery('#transfer-stage-1-submit').html('Submit Step');
                                jQuery('#transfer-stage-1-submit-small').html('Submit Step');
                                processStep('transfer','1','3');
                                jQuery('#transfer-stage-1-back').css('display','none');
                                jQuery('#transfer-stage-1-submit').removeAttr('value');
                            } else {
                                jQuery('#transfer-stage-1').modal('close');
                                var element = document.getElementById('transfer-' + jQuery('#transfer-stage-1-id').val());
                                var grandParent = element.parentNode.parentNode;
                                grandParent.parentNode.removeChild(grandParent);
                            }
                        });
                    } else if (jQuery('#transfer-stage-1-submit').val() === 'confirm-IT') {
                        document.getElementById('transfer-stage-1-submit').value = 'send-IT';
                        processStep('transfer', '1', '7');
                        if (jQuery('#it-select').val() === jQuery('#transfer-stage-1-pid').val()) {
                            jQuery('#transfer-stage-1g-body').html('You have indicated that this asset needs to be transferred to IT and that you will be serving as the IT personnel responsible for this ticket. <br />If this is correct click Continue');
                        } else {
                            jQuery('#transfer-stage-1-submit').html('Submit Step');
                            jQuery('#transfer-stage-1-submit-small').html('Submit Step');
                            jQuery('#transfer-stage-1g-body').html('You are requesting to transfer this ticket to IT. This ticket will be transferred to ' + jQuery('#it-select').find('option:selected').html() + '.<br /> If you submit this request you will no longer have access to this ticket');
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
                                jQuery('#transfer-stage-1').modal('close');
                                jQuery('#transfer-stage-1-' + id).prop('checked', false);
                                jQuery('#transfer-stage-1-' + id).attr('disabled', 'disabled');
                                jQuery('#transfer-stage-2-' + id).removeAttr('disabled');
                                jQuery('#transfer-stage-2-' + id).prop('checked', false);
                            }
                        });
                    }
                    break;
                case 2:
                    var date = jQuery('#recieve-pickupdate').val();
                    var comment = jQuery('#transfer-stage-2-notes').val();
                    var note = 'The asset was picked up on ' + date + '. ';
                    if (comment !== '') {
                        note = note + 'The Admin added the following notes: ' + comment;
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
                                var element = document.getElementById('transfer-' + jQuery('#transfer-stage-2-id').val());
                                var grandParent = element.parentNode.parentNode;
                                grandParent.parentNode.removeChild(grandParent);
                                processStep('transfer','2','3');
                                activateButtons('transfer','stage2','off');
                                jQuery('#transfer-stage-2c-text').html('This ticket will be transferred to the following org - ' + data['assignedOrg'] + ' because the recipient is in another org');
                            } else {
                                jQuery('#transfer-stage-2').modal('close');
                                jQuery('#transfer-stage-2-' + id).prop('checked', false);
                                jQuery('#transfer-stage-2-' + id).attr('disabled', 'disabled');
                                jQuery('#transfer-stage-3-' + id).removeAttr('disabled');
                                jQuery('#transfer-stage-3-' + id).prop('checked', false);
                            }
                        }
                    });
                    break;
                case 3:
                    var date = jQuery('#deployed-date').val();
                    var comment = jQuery('#transfer-stage-3-notes').val();
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
                            jQuery('#transfer-stage-3').modal('close');
                            jQuery('#transfer-stage-3-' + id).prop('checked', false);
                            jQuery('#transfer-stage-3-' + id).attr('disabled', 'disabled');
                            jQuery('#transfer-stage-4-' + id).removeAttr('disabled');
                            jQuery('#transfer-stage-4-' + id).prop('checked', false);
                        }
                    });
                    break;
                case 4:
                    var date = jQuery('#banner-date').val();
                    var comment = jQuery('#transfer-stage-4-notes').val();
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
                            jQuery('#transfer-stage-4').modal('close');
                            jQuery('#transfer-stage-4-' + id).attr('disabled', 'disabled');
                            jQuery('#transfer-stage-5-' + id).removeClass('disabled')
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
                            jQuery('#transfer-stage-6-' + index).addClass('disabled');
                            jQuery('#transfer-stage-6-' + index).val('Processing');
                        }
                    });
                    break;
            }
            break;
        case 'surplus':
            var id = jQuery('#surplus-stage-' + stage + '-id').val();
            switch (stage) {
                case 1:
                    var note = 'This asset is scheduled to be picked up on ' + jQuery('#surplus-contactdate').val() + '. ';
                    var comment = jQuery('#surplus-stage-1-notes').val();
                    if (comment !== '') {
                        note = note + 'The admin has entered the following notes: ' + comment;
                    }
                    var form = {
                        'action': 'causfa_add_note',
                        'act': 'Surplus-Contacted',
                        'ptag': jQuery('#surplus-stage-1-ptag').val(),
                        'note': note
                    };
                    jQuery.post(causfa_action_obj.ajax_url, form, function(data) {});
                    var form = {
                        'action': 'causfa_update_surplus',
                        'state': 1,
                        'ptag': jQuery('#surplus-stage-1-ptag').val(),
                        'assignee': ''
                    };
                    jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
                       if (data['status'] === 1) {
                           jQuery('#surplus-stage-1-' + id).prop('checked', false);
                           jQuery('#surplus-stage-1-' + id).attr('disabled', 'disabled');
                           jQuery('#surplus-stage-2-' + id).removeAttr('disabled');
                           jQuery('#surplus-stage-2-' + id).prop('checked', false);
                           jQuery('#surplus-stage-1').modal('close');
                       }

                    });
                    break;
                case 2:
                    var note = 'This asset was picked up on ' + jQuery('#surplus-receivedate').val() + '. ';
                    var comment = jQuery('#surplus-stage-2-notes').val();
                    if (comment !== '') {
                        note = note + 'The admin has entered the following notes: ' + comment;
                    }
                    var form = {
                        'action': 'causfa_add_note',
                        'act': 'Surplus-Recieved',
                        'ptag': jQuery('#surplus-stage-2-ptag').val(),
                        'note': note
                    };
                    if (jQuery('#surplus-stage-2-submit').val() === 'Transfer') {
                        var result = validateForm();
                        if (result) {
                            var form = {
                                'action': 'causfa_surplus_to_transfer',
                                'ptag': jQuery('#surplus-stage-2-ptag').val(),
                                'recipient': result
                            };
                            jQuery.post(causfa_action_obj.ajax_url, form, function(data){
                                if (data['status'] === 1) {
                                    var element = document.getElementById('surplus-' + jQuery('#surplus-stage-2-id').val());
                                    var grandParent = element.parentNode.parentNode;
                                    grandParent.parentNode.removeChild(grandParent);
                                    processStep('surplus','2','5');
                                    if (data['changeOrg'] === 1) {
                                        jQuery('#surplus-stage-2e-text').html('A transfer will be initiated to transfer this asset to ' + jQuery('#recipient-name').val() + '. This person is in the ' + data['newOrg'] + ' org so it will be transferred to their admins');
                                    } else {
                                        jQuery('#surplus-stage-2e-text').html('A transfer will be initiated to transfer this asset to ' + jQuery('#recipient-name').val() + '. This person is in your org so this item will become a transfer assigned to you.');
                                    }
                                }
                            });
                        }
                        else {
                            alert('Please select someone from the list');
                        }
                    } else {
                        jQuery.post(causfa_action_obj.ajax_url, form, function(data){});
                        var form = {
                            'action': 'causfa_update_surplus',
                            'state': 2,
                            'ptag': jQuery('#surplus-stage-2-ptag').val(),
                            'assignee': ''
                        };
                        jQuery.post(causfa_action_obj.ajax_url, form, function(data){
                            if (data['status'] === 1) {
                                jQuery('#surplus-stage-2-' + id).prop('checked', false);
                                jQuery('#surplus-stage-2-' + id).attr('disabled', 'disabled');
                                jQuery('#surplus-stage-3-' + id).removeAttr('disabled');
                                jQuery('#surplus-stage-3-' + id).prop('checked', false);
                                jQuery('#surplus-stage-2').modal('close');
                            }
                        });
                    }
                    break;
                case 3:
                    var note = 'This asset was pickup up by surplus on ' + jQuery('#surplus-pickupdate').val() + '. ';
                    var comment = jQuery('#surplus-stage-3-notes').val();
                    if (comment !== '') {
                        note = note + 'The admin has entered the following notes: ' + comment;
                    }
                    var form = {
                        'action': 'causfa_add_note',
                        'act': 'Surplus-PickedUp',
                        'ptag': jQuery('#surplus-stage-3-ptag').val(),
                        'note': note
                    };
                    jQuery.post(causfa_action_obj.ajax_url, form, function(data){});
                    var form = {
                        'action': 'causfa_update_surplus',
                        'state': 3,
                        'ptag': jQuery('#surplus-stage-3-ptag').val(),
                        'assignee': ''
                    };
                    jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
                       if (data['status'] === 1) {
                           jQuery('#surplus-stage-3-' + id).prop('checked', false);
                           jQuery('#surplus-stage-3-' + id).attr('disabled', 'disabled');
                           jQuery('#surplus-stage-4-' + id).removeClass('disabled');
                           jQuery('#surplus-stage-3').modal('close');
                       }
                    });
                    break;
                case 4:
                    var fileInput = jQuery('#surplusFormToUpload');
                    var file = fileInput.prop('files')[0];
                    if (!file) {
                        alert('Please select a file to upload');
                    } else {
                        var ptag = jQuery('#surplus-stage-4-ptag').val();
                        var form = new FormData();
                        form.append('action', 'causfa_upload_surplus_form');
                        form.append('ptag', ptag);
                        form.append('surplusFormToUpload', file);
                        jQuery.ajax({
                            url: causfa_action_obj.ajax_url,
                            type: 'post',
                            contentType: false,
                            processData: false,
                            data: form,
                            success: function(data) {
                                if (data['status'] === 1) {
                                    jQuery('#surplus-stage-4-' + id).addClass('disabled');
                                    jQuery('#surplus-stage-5-' + id).removeClass('disabled');
                                    jQuery('#surplus-stage-4').modal('close');
                                    jQuery('#modal-response-title').html('File Upload Successful');
                                    jQuery('#modal-response-alert').html(data['message']);
                                    var modal = jQuery('#responseModal').modal();
                                    modal.modal('open');
                                }
                            }
                        });
                    }
                    break;
                case 5:
                    var form = {
                        'action': 'causfa_update_surplus',
                        'ptag': jQuery('#surplus-ptag-' + index).html(),
                        'state': 5
                    };
                    jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
                        if (data['status'] === 1) {
                            jQuery('#surplus-stage-5-' + index).addClass('disabled');
                            jQuery('#surplus-stage-5-' + index).val('Processing');
                        }
                    });
                    break;
            }
            break;
        case 'tickets':
            if (jQuery('#tickets-stage-1-submit').val() === 'IT') {
                var note = 'This ticket is an IT related ticket and will be transferred to the IT Ticket system';
                var comment = jQuery('#tickets-stage-1-notes').val();
                if (comment !== '') {
                    note = note + 'The admin has entered the following notes: ' + comment;
                }
                var form = {
                    'action': 'causfa_add_note',
                    'act': 'Ticket-IT',
                    'ptag': jQuery('#tickets-stage-1-ptag').val(),
                    'note': note
                };
                jQuery.post(causfa_action_obj.ajax_url, form, function(data) {});
                var form = {
                    'action': 'causfa_email_to_spiceworks',
                    'ptag': jQuery('#tickets-stage-1-ptag').val(),
                    'notes': comment
                };
                jQuery.post(causfa_action_obj.ajax_url, form, function(data) {});
            } else {
                var note = 'The ticket requester was contacted on ' + jQuery('#tickets-date').val() + '. ';
                var comment = jQuery('#tickets-stage-1-notes').val();
                if (comment !== '') {
                    note = note + 'The admin has entered the following notes: ' + comment;
                }
                var form = {
                    'action': 'causfa_add_note',
                    'act': 'Ticket-Response',
                    'ptag': jQuery('#ticket-stage-1-ptag').val(),
                    'note': note
                };
                jQuery.post(causfa_action_obj.ajax_url, form, function(data) {});
            }
            var form = {
                'action': 'causfa_close_ticket',
                'ptag': jQuery('#tickets-stage-1-ptag').val()
            };
            jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
                if (data['status'] === 1) {
                    var element = document.getElementById('tickets-' + jQuery('#tickets-stage-1-id').val());
                    var grandParent = element.parentNode.parentNode;
                    grandParent.parentNode.removeChild(grandParent);
                    jQuery('#tickets-stage-1-notes').val('');
                    jQuery('#tickets-stage-1').modal('close');
                }
            });
            break;
    }
}
function cancelRequest(process, stage) {
    switch (process) {
        case 'transfer':
            switch (stage) {
                case '1':
                    processStep('transfer','1','1');
                    jQuery('#it-select').val('null');
                    jQuery('#transfer-stage-1-notes').val('');
                    jQuery('#transfer-pickupdate').val('');
                    break;
                case '2':
                    processStep('transfer','2','1');
                    jQuery('#recieve-pickupdate').val('');
                    jQuery('#transfer-stage-2-notes').val('');
                    break;
                case '3':
                    processStep('transfer','3','1');
                    jQuery('#deployed-date').val('');
                    jQuery('#transfer-stage-3-notes').val('');
                    break;
                case '4':
                    processStep('transfer','4','1');
                    jQuery('#banner-date').val('');
                    jQuery('#transfer-stage-4-notes').val('');
                    break;
                case '5':
                    jQuery('#homeFormToUpload').val('');
                    jQuery('#officeFormToUpload').val('');
                    break;
            }
            break;
        case 'surplus':
            switch (stage) {
                case '1':
                    processStep('surplus','1','1');
                    jQuery('#surplus-contactdate').val('');
                    jQuery('#surplus-stage-1-notes').val('');
                    break;
                case '2':
                    processStep('surplus','2','1');
                    jQuery('#surplus-receivedate').val('');
                    jQuery('#surplus-stage-2-notes').val('');
                    jQuery('#recipient-name').val('');
                    break;
                case '3':
                    processStep('surplus','3','1');
                    jQuery('#surplus-pickupdate').val('');
                    jQuery('#surplus-stage-3-notes').val('');
                    break;
                case '4':
                    jQuery('#surplusFormToUpload').val('');
                    break;
            }
            break;
        case 'tickets':
            processStep('tickets','1','1');
            jQuery('#tickets-date').val('');
            jQuery('#tickets-stage-1-notes').val('');
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
                    jQuery('#modal-response-title').html('File Upload Successful');
                    jQuery('#modal-response-alert').html(data['message']);
                    var modal = jQuery('#responseModal').modal();
                    modal.modal('open');
                    jQuery('#homeFormToUpload').val('');
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
                jQuery('#transfer-stage-5').modal('close');
                var id = jQuery('#transfer-stage-5-id').val();
                jQuery('#transfer-stage-5-' + id).addClass('disabled');
                jQuery('#transfer-stage-6-' + id).removeClass('disabled');
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
                    jQuery('#officeFormToUpload').val('');
                    jQuery('#transfer-stage-5').modal('close');
                    var id = jQuery('#transfer-stage-5-id').val();
                    jQuery('#transfer-stage-5-' + id).addClass('disabled');
                    jQuery('#transfer-stage-6-' + id).removeClass('disabled');
                    jQuery('#modal-response-title').html('File Upload Successful');
                    jQuery('#modal-response-alert').html(data['message']);
                    var modal = jQuery('#responseModal').modal();
                    modal.modal('open');
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
                jQuery('#transfer-stage-5').modal('close');
                var id = jQuery('#transfer-stage-5-id').val();
                jQuery('#transfer-stage-5-' + id).addClass('disabled');
                jQuery('#transfer-stage-6-' + id).removeClass('disabled');
            }
        });
    }
}
function admin_reports(type, inputBox, inputBox2) {
    switch (type) {
        case 2:
            var input = jQuery(inputBox).val();
            var input2 = jQuery(inputBox2).val();
            var form = {
                'action': 'causfa_get_report',
                'type': type,
                'input': input,
                'input2': input2
            }
            break;
        default:
            var input = jQuery(inputBox).val();
            var form = {
                'action': 'causfa_get_report',
                'type': type,
                'input': input
            }
            break;
        
    }
    jQuery.post(causfa_action_obj.ajax_url, form, function(data){
        if (data['status'] === 1 ) {
            jQuery('#reports-modal-table').html(data['report']);
            jQuery('#orgModal').modal();
            jQuery('#orgModal').modal('open');
        }
    })
}