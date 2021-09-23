AOS.init();

const menu_btn = document.querySelector(".menu-icon");
const close_btn = document.querySelector(".close-icon");
const menu = document.querySelector(".nav-list");
menu_btn.addEventListener("click", () => {
    close_btn.classList.remove("hidden");
    menu.classList.remove("hidden");
});
close_btn.addEventListener("click", () => {
    close_btn.classList.add("hidden");
    menu.classList.add("hidden");
});

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
        });
});
