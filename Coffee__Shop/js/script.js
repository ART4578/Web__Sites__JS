class CoffeShop {
    constructor() {
        this.navbar = document.querySelector(".navbar");
        this.menuBtn = document.querySelector("#menu-btn");
        this.searchForm = document.querySelector(".search-form");
        this.searchBtn = document.querySelector("#search-btn");
        this.cartItem = document.querySelector(".cart-items-container");
        this.cartBtn = document.querySelector("#cart-btn");

        this.initEventListeners();
        this.initScrollListener();
    };

    initEventListeners() {
        this.menuBtn.addEventListener("click", () => this.toggleNavbar());
        this.searchBtn.addEventListener("click", () => this.toggleSearchForm());
        this.cartBtn.addEventListener("click", () => this.toggleCartItem());
    };

    initScrollListener() {
        window.addEventListener("scroll", () => this.closeAll());
    };

    toggleNavbar() {
        this.navbar.classList.toggle("active");
        this.searchForm.classList.remove("active");
        this.cartItem.classList.remove("active");
    };

    toggleSearchForm() {
        this.searchForm.classList.toggle("active");
        this.navbar.classList.remove("active");
        this.cartItem.classList.remove("active");
    };

    toggleCartItem() {
        this.cartItem.classList.toggle("active");
        this.navbar.classList.remove("active");
        this.searchForm.classList.remove("active");
    };

    closeAll() {
        this.navbar.classList.remove("active");
        this.searchForm.classList.remove("active");
        this.cartItem.classList.remove("active");
    };
};

document.addEventListener("DOMContentLoaded", () => {
    new CoffeShop();
});