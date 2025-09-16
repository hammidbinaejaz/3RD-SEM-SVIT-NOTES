// ===== Dark Mode Toggle =====
const darkModeBtn = document.getElementById('darkModeToggle');
darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkModeBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// ===== Search & Highlight Functionality (Only PDF Name) =====
const searchInput = document.getElementById('searchInput');
const pdfBoxes = document.querySelectorAll('.pdf-box');

searchInput.addEventListener('input', () => {
  const filter = searchInput.value.toLowerCase();

  pdfBoxes.forEach(box => {
    const icon = box.querySelector('i'); // keep the icon intact
    const textNode = Array.from(box.childNodes).find(node => node.nodeType === 3); // text node only
    const text = textNode ? textNode.textContent.toLowerCase() : '';

    if (text.includes(filter) && filter !== '') {
      box.style.display = 'flex';

      // Highlight matched part only in text node
      const regex = new RegExp(`(${filter})`, 'gi');
      textNode.nodeValue = ''; // clear original text
      const highlightedText = textNode.textContent.replace(regex, match => `<mark>${match}</mark>`);

      box.innerHTML = `${icon.outerHTML} ${textNode.textContent.replace(new RegExp(filter, 'gi'), match => `<mark>${match}</mark>`)}`;
    } else if (filter === '') {
      box.style.display = 'flex';
      // Restore original text without highlights
      box.innerHTML = `${icon.outerHTML} ${textNode.textContent}`;
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
