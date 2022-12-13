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
  // btnCloseModal.addEventListener("click", resetOrderingForm);
  backdrop.addEventListener("click", toggleModal);
  modal.addEventListener("click", e => e.stopPropagation());

  function toggleModal() {
    backdrop.classList.toggle(classBackdropHidden);
    const modalIsShown = !backdrop.classList.contains(classBackdropHidden);
    toggleScroll(modalIsShown);
  }

  // function resetOrderingForm() {
  //   const { formOrdering } = document.forms;
  //   formOrdering.reset();
  // }

  // (function logFormsData() {
  //   const forms = Array.from(document.forms);
  //   forms.forEach(form => form.addEventListener("submit", logData));

  //   function logData(e) {
  //     e.preventDefault();

  //     const form = e.currentTarget;
  //     const formData = new FormData(form);

  //     console.log(`${form.name}\n${"-".repeat(20)}`);
  //     formData.forEach((value, name) => console.log(`\t${name}: ${value}`));

  //     form.reset();
  //     // close modal
  //     modal.classList.add(classBackdropHidden);
  //   }
  // })();
})();
