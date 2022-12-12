(() => {
  const scrollOn = false;
  const bpTablet = 768;
  const classMenuHidden = "mobile-menu--hidden";
  //
  const btnMenuOpen = document.querySelector("[data-menu-open]");
  const btnMenuClose = document.querySelector("[data-menu-close]");
  const menuMobile = document.querySelector("[data-mobile-menu]");

  btnMenuOpen.addEventListener("click", toggleMenu);
  btnMenuClose.addEventListener("click", toggleMenu);

  function toggleMenu() {
    const isOpenned = !menuMobile.classList.toggle(classMenuHidden);
    btnMenuOpen.setAttribute("aria-expanded", isOpenned);
    toggleScroll(isOpenned);
  }

  window.matchMedia(`(min-width: ${bpTablet}px)`).addEventListener("change", e => {
    // не должно включать сролл, если открыта модалка - только если открыто меню
    if (e.matches && !menuMobile.classList.contains(classMenuHidden)) {
      menuMobile.classList.add(classMenuHidden);
      btnMenuOpen.setAttribute("aria-expanded", false);
      toggleScroll(scrollOn);
      // убираем цвет фокуса - не обновляется, если скрывать меню скриптом
      // btnMenuOpen.style.color = "initial";
    }
  });
})();
