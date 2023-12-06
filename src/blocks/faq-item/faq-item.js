import ready from "../../js/utils/documentReady.js";

ready(function () {
  const sections = document.querySelectorAll(".faq");

  sections.forEach((section) => {
    const toggles = section.querySelectorAll(".faq-item__toggle");
    const contents = section.querySelectorAll(".faq-item__content");

    section.querySelector(".faq-item__toggle--collapsed").nextElementSibling.style.height = `${
      section.querySelector(".faq-item__toggle--collapsed").nextElementSibling.scrollHeight
    }px`;

    toggles.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        if (!tab.classList.contains("collapsed")) {
          toggles.forEach((el) => el.classList.remove("faq-item__toggle--collapsed"));
          contents.forEach((el) => (el.style.height = 0));
          tab.classList.add("faq-item__toggle--collapsed");
          contents[index].style.height = `${contents[index].scrollHeight}px`;
        } else {
          tab.classList.remove("faq-item__toggle--collapsed");
          contents[index].style.height = 0;
        }
      });
    });
  });
});
