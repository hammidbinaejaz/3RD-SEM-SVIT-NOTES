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
    box.style.display = text.includes(filter) ? 'inline-block' : 'none';
  });
});
