document.addEventListener('DOMContentLoaded', function() {
  const darkModeToggle = document.getElementById('icon');
  const body = document.body;

  darkModeToggle.addEventListener('click', () => {
      // Toggle dark mode class on body
      body.classList.toggle('dark-mode');

      // Save user preference in localStorage
      if (body.classList.contains('dark-mode')) {
          localStorage.setItem('theme', 'dark');
      } else {
          localStorage.setItem('theme', 'light');
      }
  });

  // Check user preference from localStorage
  const userPrefersDark = localStorage.getItem('theme') === 'dark';
  if (userPrefersDark) {
      body.classList.add('dark-mode');
  }

  document.getElementById("profile").addEventListener("click", function() {
      window.location.href = "fet.html";
  });
});
