'use strict';

function checkParams() {
    var email = $('#email').val();
    var transferAmount = $('#transferAmount').val();
    var totalAmount = $('#totalAmount').val();

    if (totalAmount.length != 0 && email.length != 0 && transferAmount.length != 0) {
        $('#submit').removeAttr('disabled');
    } else {
        $('#submit').attr('disabled', 'disabled');
    }
}

var pictures = new Array();
for (var i = 0; i < 4; i++) {
    pictures[i] = new Image();
    if (i === 3) pictures[i].src = "assets/maestro.svg";
    if (i === 2) pictures[i].src = "assets/mastercard.svg";
    if (i === 1) pictures[i].src = 'assets/visa.svg';
    if (i === 0) pictures[i].src = "assets/0.jpg";

}

function showImage1() {
    var w = document.getElementById("fut1").value.trim()[0];
    if (w > 3 && w < 7) {
        switch (w) {
            case "4":
                document.getElementById("rrr1").src = pictures[1].src;
                break;
            case "5":
                document.getElementById("rrr1").src = pictures[2].src;
                break;
            case "6":
                document.getElementById("rrr1").src = pictures[3].src;
                break;
            default:
                document.getElementById("rrr1").src = pictures[0].src;
                break;
        }
    } else {
        document.images[0].src = pictures[0].src;
    }
}

var pictures2 = new Array();
for (var i = 0; i < 4; i++) {
    pictures2[i] = new Image();
    if (i === 3) pictures2[i].src = "assets/maestro.svg";
    if (i === 2) pictures2[i].src = "assets/mastercard.svg";
    if (i === 1) pictures2[i].src = 'assets/visa.svg';
    if (i === 0) pictures2[i].src = "assets/0.jpg";

}

function showImage2() {
    var w = document.getElementById("fut2").value.trim()[0];
    if (w > 3 && w < 7) {
        switch (w) {
            case "4":
                document.getElementById("rrr2").src = pictures2[1].src;
                break;
            case "5":
                document.getElementById("rrr2").src = pictures2[2].src;
                break;
            case "6":
                document.getElementById("rrr2").src = pictures2[3].src;
                break;
            default:
                document.getElementById("rrr2").src = pictures2[0].src;
                break;
        }
    } else {
        document.images[0].src = pictures2[0].src;
    }
}