import ready from "../../js/utils/documentReady.js";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

ready(function () {
  const sections = document.querySelectorAll(".clients");

  sections.forEach((section) => {
    const clientsSlider = section.querySelector(".clients__swiper");
    const prevBtn = section.querySelector(".swiper-nav__prev");
    const nextBtn = section.querySelector(".swiper-nav__next");
    const pagination = section.querySelector(".swiper-pagination");

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          section.classList.add("clients--animated");
        }
      });
    });

    sectionObserver.observe(section);

    const initSlider = () => {
      new Swiper(clientsSlider, {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        initialSlide: 3,
        navigation: {
          nextEl: nextBtn,
          prevEl: prevBtn,
        },
        pagination: {
          el: pagination,
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 1,
        },
        breakpoints: {
          1280: {
            allowTouchMove: false,
            noSwiping: false,
          },
        },
      });
    };

    const destroySlider = () => {
      if (clientsSlider.swiper !== undefined) clientsSlider.swiper.destroy();
    };

    const initSection = () => {
      const sectionResizeObserver = new ResizeObserver(() => {
        destroySlider();
        initSlider();
      });

      destroySlider();
      initSlider();

      sectionResizeObserver.observe(section);
    };

    initSection();
  });
});
