
var cartToggle = (function () {

    var box = document.getElementById("toggle-header");
    var button = document.getElementById("flag");
    var container = document.getElementsByClassName('toggle-header')[0];
    var containerBtn = document.getElementsByClassName('flag')[0];

    button.addEventListener('click', function () {
        if (box.style.height == "0px") {
            box.style.height = 174 + "px";
        } else {
            box.style.height = 0 + "px";
        }
    });
    //When you press anywhere other than the head and button
    document.addEventListener('click', function (event) {
        if (container !== event.target && !container.contains(event.target) && box.style.height !== "0px" && containerBtn !== event.target && !containerBtn.contains(event.target)) {
            box.style.height = 0 + "px";
        }
    });

})();
cartToggle;

/* ********** Stiky Navbar ********* */
var stickyNav = (function () {
    window.onscroll = function () { myFunction() };
    // Get the navbar
    var navbar = document.getElementById("navigation");
    // Get the offset position of the navbar
    var sticky = 170;
    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }
})();
stickyNav;
/* *************** */

var showSearch = (function () {
    var searchButton = document.querySelector(".search__icon");
    var border = document.querySelector(".search__list");
    var searchInput = document.querySelector(".search__input");
    document.addEventListener('click', function (event) {
        if (searchButton !== event.target && !searchButton.contains(event.target) && !searchInput.contains(event.target)) {
            border.classList.remove('search__list--active');
            searchInput.classList.remove('search__input--active');
        } else {
            border.classList.add('search__list--active');
            searchInput.classList.add('search__input--active');
            searchInput.focus();
        }
    });
})();
showSearch;
/** ************** */

var mobileMenu = (function () {

    var btn_menu = document.querySelector(".header__btn-toggle");
    var rotateIcon = document.querySelector(".list-btn__icon");
    var menu = document.querySelector(".navigation");
    var coll = document.getElementsByClassName("navbar__list-btn");
    var childNodes = document.getElementsByClassName('list-btn__icon');
    var sub_list = document.getElementsByClassName("list-item__sub-list");
    var i;
    var rotate;
    var content;
    btn_menu.onclick = function () {
        if (menu.style.maxHeight) {
            menu.style.maxHeight = null;
            for (i = 0; i < coll.length; i++) {
                content = coll[i].nextElementSibling;
                content.style.maxHeight = null;
                coll[i].childNodes[1].classList.remove('list-btn__icon--active');
            }
        } else {
            menu.style.maxHeight = menu.scrollHeight + "px";
        }
        for (i = 0; i < coll.length; i++) {

            coll[i].addEventListener("click", function () {
                content = this.nextElementSibling;
                rotate = this.childNodes;
                rotate[1].classList.add('list-btn__icon--active');
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                    rotate[1].classList.remove('list-btn__icon--active')
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                    menu.style.maxHeight = menu.scrollHeight + content.scrollHeight + "px";
                }
            });
        }
    }

})();
mobileMenu;
/* Start Bootstarp carousle */
$('.carousel').carousel({
    interval: 7000
});


/* End Bootstarp Carousle */


/* Overlay text  */

var imgTextOverlay = (function () {
    var mainBox = document.querySelectorAll(".top-feature__feat");
    var overlayBoxUp = document.getElementsByClassName("feat__text-overlay--up");
    var overlayBoxDown = document.getElementsByClassName("feat__text-overlay--down");
    var windowHeight = window.innerHeight;
    var halfElementHeight = mainBox[0].getBoundingClientRect().height / 2;
    var netWindowHeight = windowHeight - halfElementHeight;
    var i;
    window.addEventListener('scroll', function () { animateText(); });
    function animateText() {
        for (i = 0; i < overlayBoxUp.length; i++) {
            if (overlayBoxUp[i].getBoundingClientRect().top <= netWindowHeight) {
                overlayBoxUp[i].classList.add("feat__text-overlay--animateup");
            }
        }
        for (i = 0; i < overlayBoxDown.length; i++) {
            if (overlayBoxDown[i].getBoundingClientRect().top <= netWindowHeight) {
                overlayBoxDown[i].classList.add("feat__text-overlay--animatedown");
            }
        }
    }

})();
imgTextOverlay;

/* Glider Item Carsoule  */
var glide = new Glide('.glide', {
    bound: true,
    startAt: 0,
    perView: 4,
    breakpoints: {
        519: { perView: 1, },
        767: { perView: 2, },
        991: { perView: 3, },
    },
    gap: 30,
});
glide.mount();


/* Swiper Carsoule */
var swiper = new Swiper('.swiper-container', {
    loop: true,
    spaceBetween: 0,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
