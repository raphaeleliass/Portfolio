// Função para aplicar as classes de sombra com base no modo escuro
function applyShadowClasses(isDarkMode) {
  const elements = document.querySelectorAll(".section-shadow");

  elements.forEach((element) => {
    if (isDarkMode) {
      element.classList.remove("section-shadow");
      element.classList.add("section-shadow-dark");
    } else {
      element.classList.remove("section-shadow-dark");
      element.classList.add("section-shadow");
    }
  });
}

function checkDarkMode(darkModeMediaQuery) {
  const isDarkMode = darkModeMediaQuery.matches;
  applyShadowClasses(isDarkMode);
}

const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

checkDarkMode(darkModeMediaQuery);

darkModeMediaQuery.addEventListener("change", (event) => {
  checkDarkMode(event.target);
});
