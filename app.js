const icon = document.querySelector(".toggle");
input = document.querySelector("input");

icon.addEventListener("click" , () => {
    if(input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password"
    };
});
// ===============

const btn = document.querySelector("button");
page = document.querySelector(".container");
password = document.querySelector("label");

btn.addEventListener("click" , () => {
        page.style.background = "#201d25";
        password.style.background = "#201d25";
        input.style.background = "#929094";

    })