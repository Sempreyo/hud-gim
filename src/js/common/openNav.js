function openNav() {
  let bodyState = document.body.getAttribute("data-state");
  if (bodyState === "mobile-menu") {
    document.body.dataset.state = "";
    document.body.classList.remove("body-scroll-lock");
  } else {
    document.body.dataset.state = "mobile-menu";
    document.body.classList.add("body-scroll-lock");
  }
}

export default openNav;
