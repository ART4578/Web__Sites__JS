//home page

//navbar
const bar = document.getElementById("bar");
const del = document.getElementById("del");
const navbar = document.getElementById("navbar");

if (bar) {
    bar.addEventListener("click", () => {
        navbar.classList.add("active");
    });
};

if (del) {
    del.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
};

//single page
let Main__img = document.getElementById("MainImg");
let small__img = document.getElementsByClassName("small-img");

small__img[0].onclick = function() {
    Main__img.src = small__img[0].src;
};

small__img[1].onclick = function() {
    Main__img.src = small__img[1].src;
};

small__img[2].onclick = function() {
    Main__img.src = small__img[2].src;
};

small__img[3].onclick = function() {
    Main__img.src = small__img[3].src;
};