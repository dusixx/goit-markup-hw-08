(() => {
  const forms = Array.from(document.forms);
  forms.forEach(form => form.addEventListener("submit", logData));

  function logData(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    console.log(`${form.name}\n${"-".repeat(20)}`);
    formData.forEach((value, name) => console.log(`\t${name}: ${value}`));

    form.reset();
    toggleModal();
  }
})();
