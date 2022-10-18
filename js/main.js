const openNavButton = document.querySelector("#open-nav");
const closeNavButton = document.querySelector("#close-nav");
const nav = document.querySelector("nav");
openNavButton.addEventListener("click", function () {
 nav.classList.toggle("hide");
});
closeNavButton.addEventListener("click", function () {
 nav.classList.toggle("hide");
});
