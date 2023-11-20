import ready from "../../js/utils/documentReady.js";
import openNav from "../../js/common/openNav.js";
import HystModal from "hystmodal";

ready(function () {
  const header = document.querySelector(".header");
  const burger = document.querySelector(".header__burger");
  const menuClose = document.querySelector(".menu__close");

  burger.addEventListener("click", openNav);
  menuClose.addEventListener("click", openNav);

  /* Popup */
  new HystModal({
    linkAttributeName: "data-hystmodal",
  });

  /* Smart header */
  let previousTop = window.scrollY;
  header.classList.remove("header--hide");

  document.addEventListener("scroll", () => {
    let currentTop = window.scrollY;

    if (currentTop > 50) {
      header.classList.add("header--bg");
    } else {
      header.classList.remove("header--bg");
    }

    if (currentTop > 400 && currentTop > previousTop) {
      header.classList.add("header--hide");
    } else {
      header.classList.remove("header--hide");
    }
    previousTop = currentTop;

    /*document.querySelectorAll(".menu-curtain").forEach((el) => {
      el.classList.remove("opened");
    });*/
  });
});
