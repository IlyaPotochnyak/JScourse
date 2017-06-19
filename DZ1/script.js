/**
 * Created by potoc on 14.06.2017.
 */

window.onload = function () {
    var numA = document.getElementById('numA');
    var numB = document.getElementById('numB');
    var act = document.getElementById('act');
    var count = document.getElementById('count');
    var res = document.getElementById('res');

    // function OnlyDigits()
    // {
    //
    //     if ((event.keyCode < 45 || event.keyCode > 57) ) event.returnValue = false;
    // }
    //
    // numA.onkeypress = OnlyDigits();


    count.onclick = function () {
      switch (act.value) {
          case '+':
              res.innerHTML = +numA.value + +numB.value;
              count.disabled = true;
              count.style.backgroundColor = 'red';
              break;
          case '-':
              res.innerHTML = +numA.value - +numB.value;
              count.disabled = true;
              count.style.backgroundColor = 'red';
              break;
          case '*':
              res.innerHTML = +numA.value * +numB.value;
              count.disabled = true;
              count.style.backgroundColor = 'red';
              break;
          case '/' :
              if (numB.value != 0) {
                  res.innerHTML = +numA.value / +numB.value;
                  } else {
                  res.innerHTML = "Деление на 0 недопустимо";
              }
              count.disabled = true;
              count.style.backgroundColor = 'red';
              break;
      }

    }

    act.onchange = function () {
        count.disabled = false;
        count.style.backgroundColor = '#00afea';
    }
    numA.onchange = function () {
        count.disabled = false;
        count.style.backgroundColor = '#00afea';
    }
    numB.onchange = function () {
        count.disabled = false;
        count.style.backgroundColor = '#00afea';
    }

}