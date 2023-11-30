import ready from "../../js/utils/documentReady.js";
import openNav from "../../js/common/openNav.js";
import HystModal from "hystmodal";

ready(function () {
  const header = document.querySelector(".header");
  const headerParent = document.querySelector(".page__header");
  const burger = document.querySelector(".header__burger");
  const menuClose = document.querySelector(".menu__close");
  const HEADER_SCROLL_BG = 50;
  const HEADER_SCROLL_HIDE = 400;

  burger.addEventListener("click", openNav);
  menuClose.addEventListener("click", openNav);

  /* Popup */
  new HystModal({
    linkAttributeName: "data-hystmodal",
  });

  /* Smart header */
  let previousTop = window.scrollY;
  headerParent.classList.remove("header--hide");

  const setHeaderStyles = () => {
    let currentTop = window.scrollY;

    if (currentTop > HEADER_SCROLL_BG) {
      header.classList.add("header--bg");
    } else {
      header.classList.remove("header--bg");
    }

    if (currentTop > HEADER_SCROLL_HIDE && currentTop > previousTop) {
      headerParent.classList.add("header--hide");
    } else {
      headerParent.classList.remove("header--hide");
    }
    previousTop = currentTop;
  };

  document.addEventListener("scroll", () => {
    setHeaderStyles();
  });

  setHeaderStyles();
});
