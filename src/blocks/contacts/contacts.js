import ready from "../../js/utils/documentReady.js";

ready(function () {
  const contactsParent = document.querySelector(".contacts");

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        contactsParent.classList.add("contacts--animated");
      }
    });
  });

  sectionObserver.observe(contactsParent);
});
