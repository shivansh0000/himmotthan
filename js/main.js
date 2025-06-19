document.addEventListener("DOMContentLoaded", function () {
  // Scroll effect on navbar
  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("mainNav");
    if (window.scrollY > 10) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Enable hover dropdowns
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

  // Fix for "Our Work" mega menu closing
  const dropdown = document.querySelector('.nav-item.dropdown.position-static');
  if (dropdown) {
    const link = dropdown.querySelector('.nav-link');
    const menu = dropdown.querySelector('.dropdown-menu');
    let timeout;

    dropdown.addEventListener('mouseenter', function () {
      clearTimeout(timeout);
      menu.classList.add('show');
      link.setAttribute('aria-expanded', 'true');
    });

    dropdown.addEventListener('mouseleave', function () {
      timeout = setTimeout(() => {
        menu.classList.remove('show');
        link.setAttribute('aria-expanded', 'false');
      }, 300);
    });

    menu.addEventListener('mouseenter', function () {
      clearTimeout(timeout);
      menu.classList.add('show');
      link.setAttribute('aria-expanded', 'true');
    });

    menu.addEventListener('mouseleave', function () {
      timeout = setTimeout(() => {
        menu.classList.remove('show');
        link.setAttribute('aria-expanded', 'false');
      }, 300);
    });
  }
});

// Smooth scroll on internal link click
document.documentElement.style.scrollBehavior = 'smooth';

// Reset hash scroll on page reload
window.addEventListener('DOMContentLoaded', function () {
  if (window.location.hash) {
    history.replaceState(null, null, window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});
