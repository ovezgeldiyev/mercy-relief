// flags start
const flagBtn = document.querySelectorAll(".flagBtn");
const flagEvent = document.querySelectorAll(".flagEvent");
flagBtn.forEach((e) => {
  onFlagClick(flagBtn, flagEvent, e);
});
function onFlagClick(flagBtns, flagItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (window.innerWidth <= 750) {
      if (currentBtn.classList.contains("mobActive")) {
        const faq = currentBtn.parentElement.querySelector(".flagEvent");
        if (faq) {
          faq.classList.remove("mobActive");
          currentBtn.classList.remove("mobActive");
        }
      } else if (!currentBtn.classList.contains("mobActive")) {
        flagBtns.forEach(function (item) {
          item.classList.remove("mobActive");
        });

        flagItems.forEach(function (item) {
          item.classList.remove("mobActive");
        });
        currentBtn.classList.add("mobActive");
        currentTab.classList.add("mobActive");
      }
    } else {
      if (!currentBtn.classList.contains("active")) {
        flagBtns.forEach(function (item) {
          item.classList.remove("active");
        });

        flagItems.forEach(function (item) {
          item.classList.remove("active");
        });
        currentBtn.classList.add("active");
        currentTab.classList.add("active");
      }
    }
  });
}
// flags end
