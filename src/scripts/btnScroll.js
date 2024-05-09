const btnScroll = document.getElementById("btn-scroll");

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  const scrollThreshold = 200;

  if (currentScroll > scrollThreshold) {
    btnScroll.classList.add("btn-scroll-after");
    btnScroll.classList.remove("btn-scroll");
  } else {
    btnScroll.classList.add("btn-scroll");
    btnScroll.classList.remove("btn-scroll-after");
  }
});
