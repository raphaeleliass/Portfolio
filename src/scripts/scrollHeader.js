
const header = document.querySelector("header");
const main = document.querySelector("main");


const headerHeight = header.offsetHeight;


main.style.paddingTop = headerHeight + "px";

let lastScroll = 0;


window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY;

    if (currentScroll > lastScroll && currentScroll > headerHeight) {
        header.classList.add("header-active");
        header.classList.remove("header");
    } else {
        header.classList.add("header");
        header.classList.remove("header-active");
    }
    
    lastScroll = currentScroll;
});
