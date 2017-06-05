$(document).ready(function(){
    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });

    // userstats
    function userstats() {
        $.ajax({
            url: 'https://www.pimux.de/userstats',
            type: 'GET',
            dataType: 'json',
            timeout: 5000,
            success: function(response) {
                $('p.userstats').html('Online: '+response.online+'<br>Registriert: '+response.registered);
            }
        }); 
    }   
    userstats();
    setInterval(userstats, 30000);
});
