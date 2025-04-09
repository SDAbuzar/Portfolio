// Typed.js animation
var typed = new Typed('#element', {
  strings: ['Web Designer.', 'Data Analyst.'],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true,
});

// Dark Mode Toggle
const darkToggle = document.getElementById('darkToggle');
let toggleIcon = document.getElementById('toggleIcon');

darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleIcon.classList.add('animate');

  setTimeout(() => {
    const isDark = document.body.classList.contains('dark-mode');

    toggleIcon.outerHTML = isDark
      ? `<svg id="toggleIcon" class="icon sun animate" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
             viewBox="0 0 24 24" fill="none" stroke="#f1c40f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>`
      : `<svg id="toggleIcon" class="icon moon animate" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
             viewBox="0 0 24 24" fill="none" stroke="#117864" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 0112.21 3a7 7 0 100 14 9 9 0 008.79-4.21z"/>
        </svg>`;

    toggleIcon = document.getElementById('toggleIcon');

    setTimeout(() => {
      toggleIcon.classList.remove('animate');
    }, 300);
  }, 100);
});
