// flags start
const focusBtn = document.querySelectorAll(".focusBtn");
const focusEvent = document.querySelectorAll(".focusEvent");
focusBtn.forEach((e) => {
  onFocusClick(focusBtn, focusEvent, e);
});
function onFocusClick(focusBtns, focusItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (window.innerWidth <= 750) {
      if (currentBtn.classList.contains("mobActive")) {
        const faq = currentBtn.parentElement.querySelector(".focusEvent");
        if (faq) {
          faq.classList.remove("mobActive");
          currentBtn.classList.remove("mobActive");
        }
      } else if (!currentBtn.classList.contains("mobActive")) {
        focusBtns.forEach(function (item) {
          item.classList.remove("mobActive");
        });

        focusItems.forEach(function (item) {
          item.classList.remove("mobActive");
        });
        currentBtn.classList.add("mobActive");
        currentTab.classList.add("mobActive");
      }
    } else {
      if (!currentBtn.classList.contains("active")) {
        focusBtns.forEach(function (item) {
          item.classList.remove("active");
        });

        focusItems.forEach(function (item) {
          item.classList.remove("active");
        });
        currentBtn.classList.add("active");
        currentTab.classList.add("active");
      }
    }
  });
}
// flags end
