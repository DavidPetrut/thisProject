$('#BUTTON1').click(function() {

    $.ajax({
        url: "libs/php/timezone.php",
        type: 'POST',
        dataType: 'json',
        data: {
            lat: $('#lat').val(),
            lng: $('#lng').val()
        },
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {

                $('#timezoneId').html(result['data'][0]['timezoneId']);
                $('#time').html(result['data'][0]['time']);
                $('#sunrise').html(result['data'][0]['sunrise']);
                $('#sunset').html(result['data'][0]['sunset']);

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
        }
    }); 
});

