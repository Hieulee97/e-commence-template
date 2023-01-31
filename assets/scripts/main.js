const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const headerNavbar=$("#header .header-nav")

const navbarItems = $$(".navbar--item");

const navbarItemActive = $$(".navbar--item.active");
const navbarLine = $(".header-nav .navbar__line");

const warpper = $(".wrapper")
const header = $("#header");
const headerTablet = $("#header-tablet");
const headerMobile = $("#header-mobile");

console.log(navbarItems);
console.log(navbarLine);
console.log(headerNavbar.offsetLeft);



function onPageLoading() {
    setTimeout( transparentHeader, 1000);

}

function transparentHeader(){
    var scroll = window.pageYOffset.toFixed();
    if (scroll > 0) {
        console.log("Scroll")
        console.log(scroll)
        header.style.backgroundColor= "#fff9f3e6";
        headerTablet.style.backgroundColor= "#fff9f3e6";
        headerMobile.style.backgroundColor= "#fff9f3e6";
    }
}

navbarItems.forEach((item, index) => {

    item.onclick = function () {
        $(".navbar--item.active").classList.remove("active");
        console.log(this.offsetLeft);
        navbarLine.style.marginLeft = this.offsetLeft - headerNavbar.offsetLeft + "px";

        this.classList.add("active");
    };

});

const swiper = new Swiper(".section__slider--furniture", {
    slidesPerView: 'auto',
    spaceBetween: 24,
    navigation: {
        nextEl: ".section__warper.swiper-button-next",
        prevEl: ".section__warper.swiper-button-prev",
    },
});

const swiperCard = new Swiper(".section__slider--handpicked-card", {
    slidesPerView: 'auto',
    spaceBetween: 24,
    navigation: {
        nextEl: ".main__warper__btn.swiper-button-next",
        prevEl: ".main__warper__btn.swiper-button-prev",
    },
});


  
