(function () {
  const headerMenu = document.querySelector(".header-nav__links");
  const hambMenuBtn = document.querySelector(".header-nav__hamb-menu");
  const closeMenuBtn = document.querySelector(".header-nav__close-btn");

  hambMenuBtn.addEventListener("click", () => {
    headerMenu.classList.add("header-nav__links--show");
    hambMenuBtn.setAttribute("aria-expanded", "true");
  });

  closeMenuBtn.addEventListener("click", () => {
    headerMenu.classList.remove("header-nav__links--show");
    hambMenuBtn.setAttribute("aria-expanded", "false");
  });
})();
