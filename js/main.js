document.addEventListener("DOMContentLoaded", function () {
  // Fade-in scroll effect on navbar
  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("mainNav");
    if (window.scrollY > 10) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Show dropdowns on hover
  document.querySelectorAll('.nav-item.dropdown').forEach(function (item) {
    item.addEventListener('mouseover', function () {
      const menu = item.querySelector('.dropdown-menu');
      if (menu) {
        menu.classList.add('show');
        item.querySelector('a').setAttribute('aria-expanded', 'true');
      }
    });

    item.addEventListener('mouseleave', function () {
      const menu = item.querySelector('.dropdown-menu');
      if (menu) {
        menu.classList.remove('show');
        item.querySelector('a').setAttribute('aria-expanded', 'false');
      }
    });
  });
});

document.documentElement.style.scrollBehavior = 'smooth';

window.addEventListener('DOMContentLoaded', function () {
  if (window.location.hash) {
    history.replaceState(null, null, window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});
