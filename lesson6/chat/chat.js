/**
 * Created by potoc on 22.06.2017.
 */


var _maxId;

$(document).ready(function () {
    _maxId = 0;
    chatRequest();
    setInterval(chatRequest, 1000);
    $('#btnSend').click(function (event) {
        var name = $('#name').val();
        var text = $('#text').val();
        
        if (name == '' || text == ''){
            return false;
            
        }
        $.post('add.php', {name: name, text: text}, function () {
            $('#text').attr('value', '');
            console.log($('#text').attr('value', ''));
        })
    })
})

function chatRequest() {
    $.post('get_json.php', {maxId: _maxId}, chatResult, 'json');
    // console.log(chatResult());
}

function chatResult(msgs) {
    // console.log(msgs.length);
   // var messages = {};
   // messages = msgs;
    for (var i = 0; i < msgs.length; i++)
    {

        var html = '<br>' + msgs[i].name;
         html += '<span class="date">' + ' (' + msgs[i].date + ')' + '</span>';
         html += '<br>';
         html += msgs[i].text;
         html += '<hr>';

        $('#chat').prepend(html);

        _maxId++;
    }
}