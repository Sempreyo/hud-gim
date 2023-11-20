import ready from "../../js/utils/documentReady.js";
import HystModal from "hystmodal";

ready(function () {
  const heroParent = document.querySelector(".hero");

  heroParent.classList.add("hero--animated");

  /* Popup */
  new HystModal({
    linkAttributeName: "data-hystmodal",
  });
});
