new WOW().init();

$(document).ready(function() {

    $('.slider-company').slick({
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1
    });
});
var showMessage = document.querySelector(".show-message");

var sendMessageFile = document.getElementById("sendMessageFile");

if(sendMessageFile){
    sendMessageFile.addEventListener("submit", function (event) {
        var formData = new FormData(sendMessageFile);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/send.php");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    showMessage.classList.add("active");
                    sendMessageFile.remove();
                    sendMessageFile.reset();
                }else {
                    console.error('error');
                }
            }
        };
        xhr.send(formData);
        event.preventDefault();
    });
}
var showMessage = document.querySelector(".show-message");

var sendID = document.getElementById("sendID");

if(sendID){
    sendID.addEventListener("submit", function (event) {
        var formData = new FormData(sendID);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/send.php");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    showMessage-second.classList.add("active");
                    sendID.remove();
                    sendID.reset();
                }else {
                    console.error('error');
                }
            }
        };
        xhr.send(formData);
        event.preventDefault();
    });
}