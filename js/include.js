document.addEventListener("DOMContentLoaded", () => {
  const includes = document.querySelectorAll('[data-include]');
  includes.forEach(async (el) => {
    const file = el.getAttribute('data-include');
    const resp = await fetch(file);
    if (resp.ok) el.innerHTML = await resp.text();
    else el.innerHTML = "Include file not found.";
  });
});
