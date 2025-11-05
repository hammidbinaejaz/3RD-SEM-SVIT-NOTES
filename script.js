// ===== CONFIGURATION =====
const CONFIG = {
  GITHUB_REPO: 'hammidbinaejaz/3RD-SEM-SVIT-NOTES',
  GITHUB_BRANCH: 'main',
  DEBOUNCE_DELAY: 250
};

// ===== STATE =====
const state = {
  darkMode: localStorage.getItem('darkMode') === 'true',
  searchQuery: '',
  subjects: [],
  totalFiles: 0,
  totalSubjects: 0
};

// ===== SUBJECT DATA =====
const subjectsData = [
  {
    id: 'maths',
    title: 'Mathematics',
    code: 'BCS301',
    icon: 'fa-calculator',
    pdfs: [
      { name: 'BCS301 IMP NOTES [BEST]', path: 'MATHS/BCS301-IMP NOTES-PRP.pdf' },
      { name: 'BCS301', path: 'MATHS/BCS301.pdf' },
      { name: 'Jan-2024', path: 'MATHS/Jan-2024.pdf' },
      { name: 'Handbook', path: 'MATHS/mathematics-handbook-for-3rd-semester-22-sheme.pdf' },
      { name: 'Model QP 2', path: 'MATHS/model-qp-2.pdf' },
      { name: 'Model QP 1', path: 'MATHS/modelqp1.pdf' }
    ]
  },
  {
    id: 'ds',
    title: 'Data Structures',
    code: 'BCS304',
    icon: 'fa-database',
    pdfs: [
      { name: 'BCS304', path: 'DATA-STRUCTURES/BCS304.pdf' },
      { name: 'Data Structures and Applications (Dec 2023–Jan 2024)', path: 'DATA-STRUCTURES/Data Structures and Applications(BCS304) Dec 2023-Jan 2024.pdf' },
      { name: 'Data Structures and Applications (June–July 2024)', path: 'DATA-STRUCTURES/Data Structures and Applications(BCS304) June - July 2024.pdf' },
      { name: 'Jan-2024', path: 'DATA-STRUCTURES/Jan-2024 (3).pdf' },
      { name: 'MODULE-2', path: 'DATA-STRUCTURES/MODULE-2.pdf' },
      { name: 'Model QP 2022 Scheme', path: 'DATA-STRUCTURES/Model QP 2022 Scheme.pdf' },
      { name: 'PADMA-REDDY - Graphs', path: 'DATA-STRUCTURES/PADMA-REDDY-GRAPHS.pdf' },
      { name: 'Data Structures book (Padma Reddy) [BEST]', path: 'DATA-STRUCTURES/data-structures-book-by-padma-reddy.pdf' },
      { name: 'DSA Lab Programs (1–12)', path: 'DATA-STRUCTURES/dsa-lab-programs-(1-12).pdf' },
      { name: 'DSA IA1 Lab Programs', path: 'DATA-STRUCTURES/dsa-ia1-lab-programms.pdf' },
      { name: 'MODULE-5 Priority Queue', path: 'DATA-STRUCTURES/MODULE-5-PRIORITY-QUEUE-LEFTIST-TREE.pdf' },
      { name: 'QUESTION-BANK DS', path: 'DATA-STRUCTURES/QUESTION-BANK DS.pdf' }
    ]
  },
  {
    id: 'java',
    title: 'JAVA',
    code: 'BCS306A',
    icon: 'fa-code',
    pdfs: [
      { name: 'BCS306A', path: 'JAVA/BCS306A.pdf' },
      { name: 'Jan-2018', path: 'JAVA/Jan-2018.pdf' },
      { name: 'Jan-2024 (1)', path: 'JAVA/Jan-2024 (1).pdf' },
      { name: 'JAVA MODULE 1 [BEST]', path: 'JAVA/hello-java-module-1.pdf' },
      { name: 'JAVA MODULE 2 [BEST]', path: 'JAVA/hello-java-module-2.pdf' },
      { name: 'JAVA MODULE 3&4 [BEST]', path: 'JAVA/hello-java-module-3&4.pdf' },
      { name: 'JAVA MODULE 5 [BEST]', path: 'JAVA/hello-java-module-5.pdf' },
      { name: 'Java Final [lab]', path: 'JAVA/java final.pdf' },
      { name: 'Java', path: 'JAVA/java.pdf' },
      { name: 'OOPS BCS306A', path: 'JAVA/oops with java BCS306A.pdf' },
      { name: 'Jan-2024 (2)', path: 'JAVA/Jan-2024 (2).pdf' },
      { name: 'Java Module 2', path: 'JAVA/java module 2.pdf' },
      { name: 'Java Module 1', path: 'JAVA/javamodule 1.pdf' },
      { name: 'Module 1 QB', path: 'JAVA/Module_1_QB.pdf' },
      { name: 'Module 2 QB', path: 'JAVA/Module_2_QB.pdf' },
      { name: 'Module 3 QB', path: 'JAVA/MODULE_3_QB.pdf' },
      { name: 'Module 4 QB', path: 'JAVA/Module_4_QB.pdf' },
      { name: 'Module 5 Notes', path: 'JAVA/Module-5_notes.pdf' },
      { name: 'OOPS Solved Model QP', path: 'JAVA/OOPS WITH JAVA BCS306A SOLVED MODEL QUESTION PAPER.pdf' },
      { name: 'Module-4 OS', path: 'JAVA/Module-4_OS.pdf' }
    ]
  },
  {
    id: 'os',
    title: 'Operating Systems',
    code: 'BCS302',
    icon: 'fa-desktop',
    pdfs: [
      { name: 'BCS303', path: 'OS/BCS303.pdf' },
      { name: 'BCS302 SIMP 2025', path: 'OS/BCS302 SIMP 2025- by RVITM review team (1).pdf' },
      { name: 'Jan-2024', path: 'OS/Jan-2024 (2).pdf' },
      { name: 'Best Q Bank OS [BEST]', path: 'OS/best-q-bank-os.pdf' },
      { name: 'OS Lab Programs [lab]', path: 'OS/os-lab-prog.pdf' },
      { name: 'OS Lab Qs [LAB]', path: 'OS/os-lab-q\'s.pdf' },
      { name: 'OS Module 1', path: 'OS/os-module-1.pdf' },
      { name: 'OS Module 2', path: 'OS/os-module-2.pdf' },
      { name: 'OS Module 3', path: 'OS/os-module-3.pdf' },
      { name: 'OS Module 4', path: 'OS/os-module-4.pdf' },
      { name: 'OS Notes', path: 'OS/os-nots\\.pdf' },
      { name: 'MODULE 3 NOTES', path: 'OS/MODULE_3_NOTES.pdf' },
      { name: 'Module-4 OS', path: 'OS/Module-4_OS.pdf' }
    ]
  },
  {
    id: 'ddco',
    title: 'DDCO',
    code: 'BCS302',
    icon: 'fa-book',
    pdfs: [
      { name: 'BCS302', path: 'DDCO/BCS302.pdf' },
      { name: 'BCS304 Important', path: 'DDCO/BCS304 super important -22SCHEME (1) (1).pdf' },
      { name: 'DD&CO IA2', path: 'DDCO/DD&CO-IA2.pdf' },
      { name: 'DDCO JAN2024 Solutions', path: 'DDCO/DDCO_JAN2024_Solutions.pdf' },
      { name: 'Jan-2024', path: 'DDCO/Jan-2024 (1).pdf' },
      { name: 'Modulewise QB', path: 'DDCO/Modulewise QB-DDCO.pdf' },
      { name: 'Complete Notes', path: 'DDCO/ddco-complete-notes.pdf' }
    ]
  },
  {
    id: 'scr',
    title: 'SCR',
    code: '',
    icon: 'fa-file-pdf',
    pdfs: [
      { name: 'SCR Notes', path: 'SCR.pdf' }
    ]
  }
];

// ===== UTILITY FUNCTIONS =====
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

const encodePath = (path) => {
  return path.split('/').map(segment => encodeURIComponent(segment)).join('/');
};

const getRawUrl = (path) => {
  const encodedPath = encodePath(path);
  return `https://raw.githubusercontent.com/${CONFIG.GITHUB_REPO}/${CONFIG.GITHUB_BRANCH}/${encodedPath}`;
};

// ===== TOAST NOTIFICATION =====
const showToast = (message, type = 'success', duration = 3000) => {
  const toast = document.getElementById('toast');
  toast.textContent = '';
  toast.className = `toast ${type}`;
  
  const icon = document.createElement('i');
  icon.className = type === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-circle';
  
  const text = document.createTextNode(message);
  
  toast.appendChild(icon);
  toast.appendChild(text);
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
};

// ===== CUSTOM CURSOR (OPTIMIZED) =====
let cursorX = 0;
let cursorY = 0;
let followerX = 0;
let followerY = 0;
let rafId = null;

const initCursor = () => {
  if (window.matchMedia('(hover: none)').matches) return;

  const cursor = document.getElementById('cursor');
  const cursorDot = document.getElementById('cursorDot');

  const updateCursor = (e) => {
    cursorX = e.clientX;
    cursorY = e.clientY;
    cursorDot.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
  };

  const animateCursor = () => {
    followerX += (cursorX - followerX) * 0.15;
    followerY += (cursorY - followerY) * 0.15;
    cursor.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
    rafId = requestAnimationFrame(animateCursor);
  };

  document.addEventListener('mousemove', updateCursor, { passive: true });
  rafId = requestAnimationFrame(animateCursor);

  // Expand on hover
  const handleInteractiveHover = (e) => {
    const isInteractive = e.target.closest('a, button, .pdf-link');
    if (isInteractive) {
      cursor.classList.add('expand');
    } else {
      cursor.classList.remove('expand');
    }
  };

  document.addEventListener('mouseover', handleInteractiveHover, { passive: true });
};

// ===== PROGRESS BAR (OPTIMIZED) =====
const initProgressBar = () => {
  const progressBar = document.getElementById('progressBar');
  let ticking = false;

  const updateProgress = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
    progressBar.style.width = `${scrollPercent}%`;
    ticking = false;
  };

  const onScroll = throttle(() => {
    if (!ticking) {
      requestAnimationFrame(updateProgress);
      ticking = true;
    }
  }, 16); // ~60fps

  window.addEventListener('scroll', onScroll, { passive: true });
  updateProgress();
};

// ===== SCROLL TO TOP =====
const initScrollToTop = () => {
  const scrollBtn = document.getElementById('scrollToTop');
  let ticking = false;

  const updateButton = () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollY > 300) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
    ticking = false;
  };

  const onScroll = throttle(() => {
    if (!ticking) {
      requestAnimationFrame(updateButton);
      ticking = true;
    }
  }, 100);

  window.addEventListener('scroll', onScroll, { passive: true });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, { passive: true });
};

// ===== INTERSECTION OBSERVER (OPTIMIZED) =====
const initReveal = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        observer.unobserve(entry.target); // Stop observing once revealed
      }
    });
  }, { 
    threshold: 0.1,
    rootMargin: '50px'
  });

  document.querySelectorAll('.subject-card:not(.reveal)').forEach(card => {
    observer.observe(card);
  });
};

// ===== QUICK STATS =====
const renderStats = () => {
  const statsContainer = document.getElementById('quickStats');
  const totalFiles = subjectsData.reduce((sum, subj) => sum + subj.pdfs.length, 0);
  const totalSubjects = subjectsData.length;
  const visibleFiles = subjectsData.reduce((sum, subj) => {
    const filtered = subj.pdfs.filter(pdf => {
      if (!state.searchQuery) return true;
      const searchLower = state.searchQuery.toLowerCase();
      return pdf.name.toLowerCase().includes(searchLower) || 
             subj.title.toLowerCase().includes(searchLower);
    });
    return sum + filtered.length;
  }, 0);

  statsContainer.innerHTML = `
    <div class="stat-item">
      <div class="stat-number">${totalSubjects}</div>
      <div class="stat-label">Subjects</div>
    </div>
    <div class="stat-item">
      <div class="stat-number">${visibleFiles}</div>
      <div class="stat-label">${state.searchQuery ? 'Filtered' : 'Total'} Files</div>
    </div>
    <div class="stat-item">
      <div class="stat-number">${totalFiles}</div>
      <div class="stat-label">All Notes</div>
    </div>
  `;
};

// ===== RENDER CARDS =====
const renderCards = () => {
  const container = document.getElementById('subjectsContainer');
  container.innerHTML = '';

  subjectsData.forEach((subject, index) => {
    const filteredPdfs = subject.pdfs.filter(pdf => {
      if (!state.searchQuery) return true;
      const searchLower = state.searchQuery.toLowerCase();
      return pdf.name.toLowerCase().includes(searchLower) || 
             subject.title.toLowerCase().includes(searchLower) ||
             subject.code.toLowerCase().includes(searchLower);
    });

    if (filteredPdfs.length === 0) return;

    const card = document.createElement('div');
    card.className = 'subject-card';
    card.style.transitionDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
      <div class="card-top">
        <i class="fas ${subject.icon} card-icon"></i>
        <span class="file-count">${filteredPdfs.length} Files</span>
      </div>
      <h2 class="card-title">${subject.title}${subject.code ? ` [${subject.code}]` : ''}</h2>
      <div class="pdf-grid">
        ${filteredPdfs.map(pdf => {
          const url = getRawUrl(pdf.path);
          const isBest = pdf.name.toLowerCase().includes('[best]');
          return `
            <a href="${url}" 
               download="${pdf.name}.pdf" 
               class="pdf-link ${isBest ? 'best' : ''}"
               data-url="${url}"
               data-name="${pdf.name}">
              <i class="fas fa-file-pdf"></i>
              <span>${pdf.name}</span>
            </a>
          `;
        }).join('')}
      </div>
    `;

    container.appendChild(card);
  });

  renderStats();

  // Re-initialize reveal and cursor
  setTimeout(() => {
    initReveal();
    initCursor();
    initPDFFeatures();
  }, 100);
};

// ===== PDF FEATURES (Copy Link, Share) =====
const initPDFFeatures = () => {
  document.querySelectorAll('.pdf-link').forEach(link => {
    // Right-click context menu
    link.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      const url = link.dataset.url;
      const name = link.dataset.name;
      
      if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
          showToast(`📋 Link copied: ${name}`, 'success');
        });
      }
    }, { passive: false });

    // Click handler with toast
    link.addEventListener('click', (e) => {
      const name = link.dataset.name;
      showToast(`⬇️ Downloading: ${name}`, 'success', 2000);
    }, { passive: true });
  });
};

// ===== SEARCH =====
const initSearch = () => {
  const searchInput = document.getElementById('searchInput');
  const searchClear = document.getElementById('searchClear');

  const handleSearch = (value) => {
    state.searchQuery = value.toLowerCase();
    renderCards();
  };

  const debouncedSearch = debounce((value) => {
    handleSearch(value);
  }, CONFIG.DEBOUNCE_DELAY);

  searchInput.addEventListener('input', (e) => {
    const value = e.target.value;
    searchClear.style.display = value ? 'flex' : 'none';
    debouncedSearch(value);
  }, { passive: true });

  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchClear.style.display = 'none';
    handleSearch('');
    searchInput.focus();
  }, { passive: true });
};

// ===== KEYBOARD SHORTCUTS =====
const initKeyboardShortcuts = () => {
  document.addEventListener('keydown', (e) => {
    // CMD+K or CTRL+K to focus search
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      document.getElementById('searchInput').focus();
      showToast('⌨️ Search focused', 'success', 1500);
    }
    
    // ESC to clear search
    if (e.key === 'Escape') {
      const searchInput = document.getElementById('searchInput');
      if (searchInput.value) {
        searchInput.value = '';
        document.getElementById('searchClear').style.display = 'none';
        state.searchQuery = '';
        renderCards();
      }
    }
  }, { passive: false });
};

// ===== DARK MODE =====
const initDarkMode = () => {
  const modeToggle = document.getElementById('modeToggle');
  
  if (state.darkMode) {
    document.body.classList.add('light-mode');
    modeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }

  modeToggle.addEventListener('click', () => {
    state.darkMode = !state.darkMode;
    document.body.classList.toggle('light-mode');
    localStorage.setItem('darkMode', state.darkMode);
    modeToggle.innerHTML = state.darkMode 
      ? '<i class="fas fa-sun"></i>' 
      : '<i class="fas fa-moon"></i>';
    showToast(state.darkMode ? '☀️ Light mode' : '🌙 Dark mode', 'success', 1500);
  }, { passive: true });
};

// ===== INITIALIZATION =====
const init = () => {
  initDarkMode();
  initCursor();
  initProgressBar();
  initScrollToTop();
  initSearch();
  initKeyboardShortcuts();
  renderCards();
  
  // Show welcome message
  setTimeout(() => {
    showToast('🎉 Welcome! Press CMD+K to search', 'success', 2500);
  }, 500);
};

// ===== START =====
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
