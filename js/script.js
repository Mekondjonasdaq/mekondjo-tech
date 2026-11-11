// ============================================================
// EDIT HERE: paste the full web address of each project between
// the quotes, e.g. forex: "https://myforexjournal.com"
// Leave it empty ("") and the button shows as disabled.
// ============================================================
const PROJECT_LINKS = {
  forex:  "",
  cars:   "https://merry-lolly-6789ed.netlify.app/",
  school: "https://sore-soresschool.netlify.app/"
};

document.querySelectorAll('[data-project]').forEach(a => {
  const url = PROJECT_LINKS[a.dataset.project];
  if (url) {
    a.href = url;
  } else {
    a.removeAttribute('href');
    a.setAttribute('aria-disabled', 'true');
    a.textContent = 'Link coming soon';
  }
});

// Mobile menu
const links = document.getElementById('links');
const burger = document.getElementById('burger');

burger.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});

links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  links.classList.remove('open');
  burger.setAttribute('aria-expanded', false);
}));

// Pre-select the package in the form when a "Get started" button is clicked
document.querySelectorAll('[data-plan]').forEach(b => b.addEventListener('click', () => {
  document.getElementById('plan').value = b.dataset.plan;
}));

// Highlight the current section in the nav
const navLinks = [...links.querySelectorAll('a[href^="#"]:not(.btn)')];
const observer = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) {
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
  }
}), { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('section').forEach(s => observer.observe(s));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();