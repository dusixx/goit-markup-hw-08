(() => {
  const classBackdropHidden = "backdrop--hidden";
  const formOrdering = document.querySelector("[data-form-ordering]");
  const btnOpenModal = document.querySelector("[data-modal-open]");
  const btnCloseModal = document.querySelector("[data-modal-close]");
  const modal = document.querySelector("[data-modal]");
  const backdrop = document.querySelector("[data-backdrop]");

  btnOpenModal.addEventListener("click", toggleModal);
  btnCloseModal.addEventListener("click", toggleModal);
  formOrdering.addEventListener("submit", toggleModal);
  backdrop.addEventListener("click", toggleModal);
  modal.addEventListener("click", e => e.stopPropagation());

  function toggleModal() {
    backdrop.classList.toggle(classBackdropHidden);
    const modalIsShown = !backdrop.classList.contains(classBackdropHidden);
    toggleScroll(modalIsShown);
  }

  // btnCloseModal.addEventListener("click", () => {
  //   const { formOrdering } = document.forms;
  //   formOrdering.reset();
  // });
})();
