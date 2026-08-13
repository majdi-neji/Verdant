const hamburger = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".primary-navigation");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    // Toggle the visual active states
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("open");

    // Update accessibility state for screen readers
    const isOpen = hamburger.classList.contains("open");
    hamburger.setAttribute("aria-expanded", isOpen);
  });
}
