// animate on scroll
AOS.init();

// nav menu
const menu_btn = document.querySelector(".menu-icon");
const close_btn = document.querySelector(".close-icon");
const menu = document.querySelector(".nav-list");
menu_btn.addEventListener("click", () => {
    close_btn.classList.remove("hidden");
    menu.classList.remove("hidden");
    menu_btn.classList.add("hidden");
});
close_btn.addEventListener("click", () => {
    close_btn.classList.add("hidden");
    menu.classList.add("hidden");
    menu_btn.classList.remove("hidden");
});

// form
const scriptURL = 'https://script.google.com/a/iiitd.ac.in/macros/s/AKfycbxJC189yq_i-knjPL3dJ8ZvwZ-WXK252yMMAXt8b-Ba9xLGWmg/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})

// carousels
const swiper = new Swiper(".swiper-member", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 4,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const swiper_exec = new Swiper(".swiper-exec", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 4,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const swiper_mob = new Swiper(".swiper-member-mob", {
    direction: "horizontal",
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
});

const swiper_exec_mob = new Swiper(".swiper-exec-mob", {
    direction: "horizontal",
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
});

// card animation
var ideathonCard = document.querySelector(".ideathon-card");
var playing = false;
ideathonCard.addEventListener("click", function () {
    if (playing) return;

    playing = true;
    anime({
        targets: ideathonCard,
        scale: [{ value: 1 }, { value: 1.4 }, { value: 1, delay: 250 }],
        rotateY: { value: "+=180", delay: 200 },
        easing: "easeInOutSine",
        duration: 400,
        complete: function (anim) {
            playing = false;
        },
    });
});

var pitchCard = document.querySelector(".pitch-card");
var playing = false;
pitchCard.addEventListener("click", function () {
    if (playing) return;

    playing = true;
    anime({
        targets: pitchCard,
        scale: [{ value: 1 }, { value: 1.4 }, { value: 1, delay: 250 }],
        rotateY: { value: "+=180", delay: 200 },
        easing: "easeInOutSine",
        duration: 400,
        complete: function (anim) {
            playing = false;
        },
    });
});

// var scaleCard = document.querySelector(".scale-card");
// var playing = false;
// scaleCard.addEventListener("click", function () {
//     if (playing) return;

//     playing = true;
//     anime({
//         targets: scaleCard,
//         scale: [{ value: 1 }, { value: 1.4 }, { value: 1, delay: 100 }],
//         rotateY: { value: "+=180", delay: 100 },
//         easing: "easeInOutSine",
//         duration: 400,
//         complete: function (anim) {
//             playing = false;
//         },
//     });
// });

var foundersCard = document.querySelector(".founders-card");
var playing = false;
foundersCard.addEventListener("click", function () {
    if (playing) return;

    playing = true;
    anime({
        targets: foundersCard,
        scale: [{ value: 1 }, { value: 1.4 }, { value: 1, delay: 100 }],
        rotateY: { value: "+=180", delay: 100 },
        easing: "easeInOutSine",
        duration: 400,
        complete: function (anim) {
            playing = false;
        },
    });
});

var openHouseCard = document.querySelector(".open-house-card");
var playing = false;
openHouseCard.addEventListener("click", function () {
    if (playing) return;

    playing = true;
    anime({
        targets: openHouseCard,
        scale: [{ value: 1 }, { value: 1.4 }, { value: 1, delay: 100 }],
        rotateY: { value: "+=180", delay: 100 },
        easing: "easeInOutSine",
        duration: 400,
        complete: function (anim) {
            playing = false;
        },
    });
});

var snackCard = document.querySelector(".snack-card");
var playing = false;
snackCard.addEventListener("click", function () {
    if (playing) return;

    playing = true;
    anime({
        targets: snackCard,
        scale: [{ value: 1 }, { value: 1.4 }, { value: 1, delay: 250 }],
        rotateY: { value: "+=180", delay: 200 },
        easing: "easeInOutSine",
        duration: 400,
        complete: function (anim) {
            playing = false;
        },
    });
});