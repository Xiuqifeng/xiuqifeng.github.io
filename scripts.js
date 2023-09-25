const leftBtn = document.querySelector(".buttons .left");
const rightBtn = document.querySelector(".buttons .right");
const slide = document.querySelector("#slides");
const link = document.querySelector(".link");
const weatherApp = document.querySelector(".Weather-App");
const taskManager = document.querySelector(".Task-Manager");
const dollarSense = document.querySelector(".Dollar-Sense");
const valueMarket = document.querySelector(".Value-Market")
const stars = document.querySelector('.stars');
const moon = document.querySelector('.moon');
const back = document.querySelector('.back');
const front = document.querySelector('.front');
const welcome = document.querySelector('.welcome');
const button = document.querySelector('.button');
const header = document.querySelector('header');

let openClick = true;

rightBtn.addEventListener("click",() => {

    if (openClick) {
        openClick = false;

        const items = document.querySelectorAll(".item");

        slide.appendChild(items[0]);

        console.log(items[2])

        if (items[2] == weatherApp) {
            link.href = "https://xiuqifeng.github.io/weather-app/";
        }
        else if (items[2] == taskManager ) {
            link.href = "https://xiuqifeng.github.io/task-manager/";
        }
        else if (items[2] == dollarSense ) {
            link.href = "https://lazy-puce-binturong-hat.cyclic.cloud/home";
        }
        else if (items[2] == valueMarket ) {
            link.href = "http://54.193.151.176:8000/products/";
        }
        setTimeout(() => openClick = true, 1000);
    }

})

leftBtn.addEventListener("click",() => {

    if (openClick) {
        openClick = false;

        const items = document.querySelectorAll(".item");

        slide.prepend(items[items.length-1]);

        if (items[0] == weatherApp) {
            link.href = "https://xiuqifeng.github.io/weather-app/"
        }
        else if (items[0] == taskManager) {
            link.href = "https://xiuqifeng.github.io/task-manager/"
        }
        else if (items[0] == dollarSense ) {
            link.href = "https://lazy-puce-binturong-hat.cyclic.cloud/home";
        }
        else if (items[0] == valueMarket ) {
            link.href = "http://54.193.151.176:8000/products/";
        }
        setTimeout(() => openClick = true, 1000);
    }
})

window.addEventListener('scroll', function () {
    let value = window.scrollY
    stars.style.left = value * 0.25 + 'px'
    moon.style.left = value * 1.05 + 'px'
})

window.addEventListener('scroll', function () {
    let value = window.scrollY
    back.style.top = value * 0.5 + 'px'
    front.style.top = value * 0 + 'px'
})

window.addEventListener('scroll', function () {
    let value = window.scrollY
    welcome.style.marginRight = value * 4 + 'px'
    front.style.marginTop = value * 1.5 + 'px'
})

window.addEventListener('scroll', function () {
    let value = window.scrollY
    header.style.top = value * 0.5 + 'px'
})