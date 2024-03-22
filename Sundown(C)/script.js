function page3Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixedImage = document.querySelector("#fixed-image")

    elemC.addEventListener("mouseenter", function () {
        fixedImage.style.display = "block"
    })

    elemC.addEventListener("mouseleave", function () {
        fixedImage.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem");

    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            // console.log(image);
            fixedImage.style.backgroundImage = `url('${image}')`;
        })
    })
}
page3Animation()

function bannerAnimation() {
    var bannerImage = document.querySelector("#banner-image")
    var paragraph = document.querySelector("#bannerParagraph")

    var elems = document.querySelectorAll(".banner-images")
    elems.forEach(e => {
        e.addEventListener("click", function () {
            var image = e.getAttribute("data-image")
            var text = e.getAttribute("data-text")

            // Apply transition to opacity
            bannerImage.style.transition = "opacity .3s ease";
            paragraph.style.transition = "opacity .3s  ease";

            // Set opacity to 0 before changing content
            bannerImage.style.opacity = 0;
            paragraph.style.opacity = 0;

            e.style.color = "white";

            // to set pseudo class color
            e.style.setProperty("--pseudoColor", "red")

            elems.forEach(element => {
                if (element !== e) {
                    element.style.color = "rgba(255, 255, 255, 0.255)";
                    element.style.setProperty("--pseudoColor", "gray")
                }
            });

            // Set opacity to 1 after a short delay
            setTimeout(() => {
                // setting new image and there opacity for fand in and out effect
                bannerImage.style.opacity = 1;
                paragraph.style.opacity = 1;
                bannerImage.src = image
                paragraph.textContent = text
            }, 300);
        });
    });
}
bannerAnimation()

function swiperAnimation() {
    // swiperjs
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 100,
        freeMode: true,
    });
}
swiperAnimation()

function menuAnimation() {
    var menu = document.querySelector("#menu-button")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var xmark = document.querySelector("#xmark")
    var Eqmark = document.querySelector("#Eqmark")
    var flag = 0;
    menu.addEventListener('click', function () {
        if (flag == 0) {
            full.style.top = 0;
            navimg.style.opacity = 0;
            flag = 1;
            xmark.style.display = 'block';
            Eqmark.style.display = 'none';
        } else {
            full.style.top = "-100%";
            navimg.style.opacity = 1;
            flag = 0;
            xmark.style.display = 'none';
            Eqmark.style.display = 'block';
        }
    })
}
menuAnimation()

function loader() {
    var loader = document.querySelector("#loader")
    setTimeout(() => {
        loader.style.top = "-100vh";
    }, 4000);
}
loader()


