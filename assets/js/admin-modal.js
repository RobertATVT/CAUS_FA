function activateButtons(stage, state){
    switch (stage) {
        case "stage1":
            if (state === "on") {
                $("#transfer-stage-1-submit").removeAttr("disabled");
            } else if (state === "off") {
                $("#transfer-stage-1-submit").attr("disabled", "disabled");
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
    $("#transfer-pickupdate").datepicker();
    $("#recieve-pickupdate").datepicker();
    $("#deployed-date").datepicker();
    $("#banner-date").datepicker();
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