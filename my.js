
  // Scroll Progress
  window.addEventListener("scroll", () => {
    const scrollProgress = document.getElementById("scrollProgress");
    const scrollTop = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / height) * 100;
    scrollProgress.style.width = scrolled + "%";
  });

  // Mobile Menu Toggle
  const mobileMenu = document.getElementById("mobileMenu");
  const navMenu = document.getElementById("navMenu");

  mobileMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    mobileMenu.classList.toggle("open");
  });