/**
 * Created by potoc on 19.06.2017.
 */

function sq(item) {
    return item * 3;
}

Array.prototype.walk = function (callback) {
    for (i=0; i<this.length; i++) {
        this[i] = callback(this[i]);
    }
}


window.onload = function () {

    var arr = [2, 4, 23, 34];
    document.getElementById('first').innerHTML = arr;
    arr.walk(sq);
    document.getElementById('second').innerHTML = arr;


}
