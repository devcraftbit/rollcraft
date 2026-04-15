document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger-menu');
  const closeMenu = document.querySelector('.close-menu');
  const overlay = document.querySelector('.mobile-nav-overlay');

  if (burger && closeMenu && overlay) {
    burger.addEventListener('click', () => {
      overlay.classList.add('is-open');
      burger.setAttribute('aria-expanded', 'true');
    });

    closeMenu.addEventListener('click', () => {
      overlay.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    });

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }
});
