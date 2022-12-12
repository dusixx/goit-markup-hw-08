(() => {
  const classScrollOff = "scroll-off";
  const body = document.querySelector("body");
  const root = document.documentElement;

  function getVar(varName) {
    return root.style.getPropertyValue(varName);
  }

  function setVar(varName, val) {
    root.style.setProperty(varName, val);
  }

  if (!window.toggleScroll) {
    window.toggleScroll = function (scrollOff) {
      if (scrollOff) {
        //
        // запоминаем текущую позицию скрола
        setVar("--scroll-top", window.pageYOffset);
        body.classList.add(classScrollOff);
        //
      } else {
        body.classList.remove(classScrollOff);
        //
        // перекрываем smooth, иначе сработает на закрытие модалки
        root.style.scrollBehavior = "auto";
        window.scrollTo({ top: getVar("--scroll-top") });
        root.style.removeProperty("scroll-behavior");
      }
    };
  } else {
    console.warn("window.toggleScroll already defined");
  }
})();
