var placeimg = document.querySelectorAll(".place_img");
var nextbtn = document.querySelector("#nextbtn");
var prevbtn = document.querySelector("#prevbtn");
var count = 0;

nextbtn.addEventListener('click', function () {
    if (count >= placeimg.length - 1) return;
    count++;
    for (let img of placeimg) {
        img.style.transform = `translateX(-${count * 100}%)`;
    }
});

prevbtn.addEventListener('click', function () {
    if (count <= 0) return;
    count--;
    for (let img of placeimg) {
        img.style.transform = `translateX(-${count * 100}%)`;
    }
});

var placeimg1 = document.querySelectorAll(".place_img1");
var nextbtnsec4 = document.querySelector("#nextbtn_sec4");
var prevbtnsec4 = document.querySelector("#prevbtn_sec4");
var count = 0;

nextbtnsec4.addEventListener('click', function () {
    if (count >= placeimg1.length - 1) return;
    count++;
    for (let img of placeimg1) {
        img.style.transform = `translateX(-${count * 100}%)`;
    }
});

prevbtnsec4.addEventListener('click', function () {
    if (count <= 0) return;
    count--;
    for (let img of placeimg1) {
        img.style.transform = `translateX(-${count * 100}%)`;
    }
});

var placeimg5 = document.querySelectorAll(".place_img5");
var nextbtn5 = document.querySelector("#nextbtn5");
var prevbtn5 = document.querySelector("#prevbtn5");
var count = 0;

nextbtn5.addEventListener('click', function () {
    if (count >= placeimg5.length - 1) return;
    count++;
    for (let img of placeimg5) {
        img.style.transform = `translateX(-${count * 100}%)`;
    }
});

prevbtn5.addEventListener('click', function () {
    if (count <= 0) return;
    count--;
    for (let img of placeimg5) {
        img.style.transform = `translateX(-${count * 100}%)`;
    }
});




let navlist = document.querySelectorAll(".nav_list")
let tab = document.querySelectorAll(".tab")

navlist.forEach(
    function (data, index) {
        data.addEventListener('click', function () {
            tab.forEach(
                function (d, i) {
                    if (index == i) {
                        d.classList.add("show")
                    }
                    else {
                        d.classList.remove("show")
                    }
                }
            )

        }
        )
    }
)

