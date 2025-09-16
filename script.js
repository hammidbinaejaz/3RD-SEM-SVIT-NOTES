// ===== Dark Mode Toggle =====
const darkModeBtn = document.getElementById('darkModeToggle');

darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkModeBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// ===== Search Functionality =====
const searchInput = document.getElementById('searchInput');
const pdfBoxes = document.querySelectorAll('.pdf-box');

searchInput.addEventListener('input', () => {
  const filter = searchInput.value.toLowerCase();

  pdfBoxes.forEach(box => {
    const text = box.textContent.toLowerCase();
    if (text.includes(filter)) {
      box.style.display = 'flex'; // keep flex layout intact
    } else {
      box.style.display = 'none';
    }
  });
});

// ===== Download Confirmation =====
pdfBoxes.forEach(box => {
  box.addEventListener('click', function(event) {
    event.preventDefault();
    const url = this.getAttribute('href');
    const confirmed = confirm(`Do you want to download "${this.textContent.trim()}"?`);
    if (confirmed) {
      window.location.href = url;
    }
  });
});
