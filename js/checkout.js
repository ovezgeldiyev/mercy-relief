const stepBtns = document.querySelectorAll(".stepBtn");
const steps = document.querySelectorAll(".checkout__inner");
stepBtns.forEach((stepBtn) => {
  stepBtn.onclick = () => {
    let id = stepBtn.getAttribute("data-tab");
    let currentStep = document.querySelector(id);
    currentStep.classList.add("active");
    window.scrollTo(0, 0);
    steps.forEach((step) => {
      if (step !== currentStep) {
        if (step.classList.contains("active")) {
          step.classList.remove("active");
        }
      }
    });
  };
});
const formBtns = document.querySelectorAll(".formBtn");
const debit = document.querySelector("#debit");
const payment__items = document.querySelectorAll(".payment__item");

payment__items.forEach((payment__item) => {
  let radio = payment__item.querySelector("input");
  radio.onchange = () => {

    let id = radio.getAttribute("data-value");

    let currentFormBtn = document.querySelector(id);
    console.log(id, currentFormBtn)

    currentFormBtn.classList.add("active");
    if (id === "#formBtn4") {
      debit.classList.add("active");
    console.log(id, currentFormBtn,"hey")

    } else {
      if (debit.classList.contains("active")) {
        debit.classList.remove("active");
      }
    }
    formBtns.forEach((formBtn) => {
      if (formBtn !== currentFormBtn) {
        if (formBtn.classList.contains("active")) {
          formBtn.classList.remove("active");
        }
      }
    });
  };
});
