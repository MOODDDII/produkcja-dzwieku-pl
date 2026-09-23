const burger = document.querySelector(".header_burger");
const menu = document.querySelector(".header_menu");

if (burger && menu) {
  burger.addEventListener("click", function () {
    const isOpen = menu.classList.toggle("is-open");
    burger.classList.toggle("is-active", isOpen);
    burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  menu.querySelectorAll(".header_link").forEach(function (link) {
    link.addEventListener("click", function () {
      menu.classList.remove("is-open");
      burger.classList.remove("is-active");
      burger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });
}