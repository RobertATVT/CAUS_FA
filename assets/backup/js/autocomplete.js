// Autocomplete for form
function causfa_hinter(element) {
    // retrieve the datalist element
    var PIDs = document.getElementById('PIDs');

    // minimum number of characters before we start to generate suggestions
    var min_characters = 2;
    if (element.value.length < min_characters ) {
        PIDs.style.display = 'none';
        PIDs.innerHTML = "";
        return;
    } else {
        var form = {
            action: 'causfa_autocomplete_PID',
            query: element.value
        }
        jQuery.post(causfa_action_obj.ajax_url, form, function(data) {
            PIDs.innerHTML = "";
            PIDs.style.display = 'none';
            var PID_options = data['PIDs'];
            var Name_options = data['Names'];
			var input = document.getElementById("recipient-name");
			var list_fill = new Array();
			for (var i = 0; i < PID_options.length; i++) {
				var list_item = new Array();
				list_item[0] = Name_options[i];
				list_item[1] = Name_options[i];
				list_fill.push(list_item);
			}
			// alert(JSON.stringify(list_fill));
			new Awesomplete(input, {
				list: list_fill
			})
            //alert(JSON.stringify(PID_options));
/*
            for (var i = 0; i < PID_options.length; i++) {
                var option = document.createElement('option');
                option.value = Name_options[i];
                option.setAttribute('data_value', PID_options[i]);
                PIDs.appendChild(option);
            }
*/
            //PIDs.style.display = 'block';
        });
    }
}
function validateForm(element, PID) {
    // Get the input element
    var input = document.getElementById('recipient-name');
    // Get the datalist
    var PIDs = jQuery('#PIDs');


    // If we find the input inside our list, we submit the form
    var children = PIDs.children();
    for(var i = 0; i < children.length; i++){
        if(children[i].value == input.value) {
            var PID_dest = children[i].getAttribute('data_value');
            transferAsset(PID_dest);
            return true;
        }
    };

    // we send an error message
    alert("name input is invalid")
    return false;
}