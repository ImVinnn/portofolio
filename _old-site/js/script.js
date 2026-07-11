// ===== Mobile navbar toggle =====
const navToggle = document.querySelector('.navbar__toggle');
const navMenu = document.querySelector('.navbar__menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Tutup menu' : 'Buka menu');
  });

  // Close menu after choosing a link (mobile)
  navMenu.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Buka menu');
    }
  });
}

// ===== Contact form (no backend) =====
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  const status = contactForm.querySelector('.contact__form-status');

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    contactForm.reset();
    if (status) {
      status.textContent = 'Terima kasih! Pesanmu sudah terkirim (demo).';
    }
  });
}
