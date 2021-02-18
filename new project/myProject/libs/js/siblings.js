$('#BUTTON2').click(function() {

    $.ajax({
        url: "libs/php/siblings.php",
        type: 'POST',
        dataType: 'json',
        data: {
            geonameId: $('#geonameId').val()
        },
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {

                $('#lati').html(result['data'][0]['lat']);
                $('#lngi').html(result['data'][0]['lng']);
                $('#countryCode').html(result['data'][0]['countryCode']);
                $('#countryName').html(result['data'][0]['countryName']);
                $('#toponymName').html(result['data'][0]['toponymName']);

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
        }
    }); 
});

