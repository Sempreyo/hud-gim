import ready from "../../js/utils/documentReady.js";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";

ready(function () {
  const sections = document.querySelectorAll(".reviews");

  sections.forEach((section) => {
    const reviewsSlider = section.querySelector(".reviews__swiper");
    const prevBtn = section.querySelector(".swiper-nav__prev");
    const nextBtn = section.querySelector(".swiper-nav__next");

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          section.classList.add("reviews--animated");
        }
      });
    });

    sectionObserver.observe(section);

    const initSlider = () => {
      new Swiper(reviewsSlider, {
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: nextBtn,
          prevEl: prevBtn,
        },
        breakpoints: {
          992: {
            slidesPerView: 2,
          },
        },
      });
    };

    const destroySlider = () => {
      if (reviewsSlider.swiper !== undefined) reviewsSlider.swiper.destroy();
    };

    const initSection = () => {
      const sectionResizeObserver = new ResizeObserver(() => {
        /*destroySlider();
        initSlider();*/
      });

      destroySlider();
      initSlider();

      sectionResizeObserver.observe(section);
    };

    initSection();
  });
});
