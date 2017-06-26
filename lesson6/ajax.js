/**
 * Created by potoc on 21.06.2017.
 */


$(document).ready(function () {
    $('#ajax').click(function (event) {
        $.post('ajax.php', function (response) {
            console.log(response);
            $('#response').html(response);
        });

        $('#ajax').css('visibility', 'hidden');
    })
})