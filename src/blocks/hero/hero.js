import ready from "../../js/utils/documentReady.js";
import HystModal from "hystmodal";

ready(function () {
  const heroParent = document.querySelector(".hero");

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        heroParent.classList.add("hero--animated");
      }
    });
  });

  sectionObserver.observe(heroParent);

  /* Popup */
  new HystModal({
    linkAttributeName: "data-hystmodal",
  });
});
