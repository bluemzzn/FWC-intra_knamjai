// Navigation bar

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  const isOpen = !mobileMenu.classList.contains("hidden");
  menuBtn.setAttribute("aria-expanded", isOpen);
  menuIcon.classList.toggle("fa-bars", !isOpen);
  menuIcon.classList.toggle("fa-xmark", isOpen);
});

document.querySelectorAll(".mobile-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    menuBtn.setAttribute("aria-expanded", "false");
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  });
});
