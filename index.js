AOS.init();

const menu_btn = document.querySelector(".menu-icon");
const close_btn = document.querySelector(".close-icon");
const menu = document.querySelector(".nav-list");
menu_btn.addEventListener("click", () => {
    close_btn.classList.remove("hidden");
    menu.classList.remove("hidden");
    menu.classList.add("nav-anim-open");
});
close_btn.addEventListener("click", () => {
    close_btn.classList.add("hidden");
    menu.classList.add("hidden");
    menu.classList.remove("nav-anim-close");
});
