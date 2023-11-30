import ready from "../../js/utils/documentReady.js";

ready(function () {
  const coachesParent = document.querySelector(".coaches");

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        coachesParent.classList.add("coaches--animated");
      }
    });
  });

  sectionObserver.observe(coachesParent);
});
