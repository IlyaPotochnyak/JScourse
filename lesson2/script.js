/**
 * Created by potoc on 14.06.2017.
 */

//Отправка асинхронного запроса

function ajaxTest(input) {
    var request = new XMLHttpRequest();
    request.open('GET', 'ajax.php?input=' + input);
    request.send();

    request.onreadystatechange = function () {
        console.log('called');
        /* 0:request not initialized
        1: server connection esteblished
        2: request recieved
        3: processing request
        4: request finished and response is ready
         */
        if (request.readyState == 4 && request.status == 200) {
            var response = request.responseText;

            processResult(request.responseText);


        }
    }
}


// Обработка результата

function processResult(output) {
    var div = document.getElementById('divResult');

    div.innerHTML = div.innerHTML + output;
    // div.lastChild.style.color = 'red';

    var opacity = +(div.lastChild.style.opacity.replace(/\D+/g, ''));
    var timer = setInterval(function () {
           opacity += 0.01;

            div.lastChild.style.opacity = opacity;
            console.log(div.lastChild.style.opacity);
        },
        20
    );
    setTimeout(function() {
        clearInterval(timer);

    }, 2000);




}

// Точка входа

window.onload = function () {
    document.getElementById('btnRun').onclick = function () {
        var input = document.getElementById('inpText');
        var div = document.getElementById('divResult');
        div.innerHTML = div.innerHTML + 'Your input: ' + input.value;
        ajaxTest(input.value);
    }
}