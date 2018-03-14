// Autocomplete for form
function causfa_hinter(element) {
    // retrieve the datalist element
    var PIDs = document.getElementById('PIDs');

    // minimum number of characters before we start to generate suggestions
    var min_characters = 0;
    if (element.value.length < min_characters ) {
        PIDs.style.display = 'none';
        PIDs.innerHTML = "";
        return;
    } else {
        var form = {
            action: 'causfa_autocomplete_PID',
            query: element.value
        }
        $.post(causfa_action_obj.ajax_url, form, function(data) {
            PIDs.innerHTML = "";
            PIDs.style.display = 'none';
            data.forEach(function(item) {
                var option = document.createElement('option');
                option.value=item;
                PIDs.appendChild(option);
                PIDs.style.display = 'block';
            });
        });
    }
}