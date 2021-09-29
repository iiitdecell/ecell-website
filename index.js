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
var form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(form.action, {
        method: "POST",
        body: new FormData(document.getElementById("form")),
    })
        .then((response) => response.json())
        .then((html) => {
            // you can put any JS code here
            alert("success");
            document.getElementById("form").reset();
        });
});

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
})

const swiper_exec = new Swiper(".swiper-exec", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 4,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
})

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
})

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
})