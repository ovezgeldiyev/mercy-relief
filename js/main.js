// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
const basket = document.querySelector(".basket");
const overlay = document.getElementById("overlay");

menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  }
  if (event.target == overlay) {
    basket.classList.remove("active");
    body.classList.remove("active");
    overlay.classList.remove("active");
  }
};
// menu end
const basketBtn = document.querySelector(".basketBtn");
const basketBtnClose = document.querySelector(".basket__inner-close");
if (basketBtn) {
  basketBtn.onclick = () => {
    basket.classList.add("active");
    document.body.classList.add("active");
    overlay.classList.add("active");
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.add("active");
  };
}
window.addEventListener("click", function (e) {
  if (e.target == basketBtnClose) {
    basket.classList.remove("active");
    document.body.classList.remove("active");
    overlay.classList.remove("active");
  }
});
// scroll start
let header = document.getElementById("header");
function scrollFunc() {
  if (window.scrollY >= 60) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
window.onscroll = function () {
  scrollFunc();
};
// scroll end
const tabBtn = document.querySelectorAll(".tabBtn");
const tabEvent = document.querySelectorAll(".tabEvent");
tabBtn.forEach((e) => {
  onTabClick(tabBtn, tabEvent, e);
});
function onTabClick(tabBtns, tabItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (currentBtn.classList.contains("active")) {
      console.log("now active");
      const faq = currentBtn.parentElement.querySelector(".tabEvent");
      if (faq) {
        faq.classList.remove("active");
        currentBtn.classList.remove("active");
      }
    } else if (!currentBtn.classList.contains("active")) {
      tabBtns.forEach(function (item) {
        item.classList.remove("active");
      });

      tabItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}

// faq start
const faqBtn = document.querySelectorAll(".faqBtn");
const faqEvent = document.querySelectorAll(".faqEvent");
faqBtn.forEach((e) => {
  onFaqClick(faqBtn, faqEvent, e);
});
function onFaqClick(faqBtns, faqItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let faqId = currentBtn.getAttribute("data-faq");
    let currentTab = document.querySelector(faqId);
    if (currentBtn.classList.contains("active")) {
      const faq = currentBtn.parentElement.querySelector(".faqEvent");
      if (faq) {
        faq.classList.remove("active");
        currentBtn.classList.remove("active");
      }
    } else if (!currentBtn.classList.contains("active")) {
      faqBtn.forEach(function (item) {
        item.classList.remove("active");
      });

      faqItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}
// faq end

// sliders
$(function () {
  $(".projects__inner-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    speed: 600,
    responsive: [
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
$(function () {
  $(".team__inner-slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    speed: 600,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
$(function () {
  $(".hero__slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 1200,
    autoplay: false,
    autoplaySpeed: 2000,
    fade: true,
    responsive: [
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });
});
$(function () {
  $(".place__inner-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    speed: 1200,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });
});

const donateBtn = document.getElementById("donateBtn");
if (donateBtn) {
  const donateContent = document.getElementById("donateContent");
  donateBtn.onclick = () => {
    donateBtn.classList.toggle("active");
    donateContent.classList.toggle("active");
  };
}

const searchBtn = document.getElementById("searchBtn");
if (searchBtn) {
  const searchContent = document.getElementById("searchContent");
  searchBtn.onclick = () => {
    searchBtn.classList.toggle("active");
    searchContent.classList.toggle("active");
  };
}

// video start
const playBtn = document.getElementById("playBtn");
if (playBtn) {
  const banner = document.getElementById("videoWrapper");
  const video = document.getElementById("video");

  playBtn.addEventListener("click", function () {
    if (video.paused == true) {
      video.play();

      playBtn.classList.toggle("active");
      banner.classList.toggle("active");
    } else {
      video.pause();

      playBtn.classList.remove("active");
      banner.classList.remove("active");
    }
  });

  video.onclick = function () {
    if (video.paused == true) {
      video.play();

      playBtn.classList.toggle("active");
      banner.classList.toggle("active");
    } else {
      video.pause();

      playBtn.classList.remove("active");
      banner.classList.remove("active");
    }
  };
}
// video end

const teamBtn = document.getElementById("teamBtn");
if (teamBtn) {
  const teamContent = document.getElementById("teamContent");
  const ambContent = document.getElementById("ambContent");
  const ambBtn = document.getElementById("ambBtn");

  teamBtn.onclick = () => {
    teamBtn.classList.add("active");
    teamContent.classList.add("active");

    ambBtn.classList.remove("active");
    ambContent.classList.remove("active");
    $(".team__inner-slider").slick("refresh");
  };

  ambBtn.onclick = () => {
    ambBtn.classList.add("active");
    ambContent.classList.add("active");

    teamBtn.classList.remove("active");
    teamContent.classList.remove("active");
    $(".team__inner-slider").slick("refresh");
  };
}
