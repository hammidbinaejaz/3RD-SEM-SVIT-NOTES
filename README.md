# 3rd Semester SVIT Notes

A modern, high-performance website for accessing 3rd semester notes for CSE, CSE (AI & ML), CSE (DS), and ISE students at SVIT/VTU.

## 🚀 Features

- **Ultra-Smooth Performance**: 60fps animations using requestAnimationFrame
- **Modern UI/UX**: Glassmorphism design with gradient accents
- **Custom Cursor**: Smooth RAF-based cursor with hover effects (desktop only)
- **Real-time Search**: Debounced search with instant filtering
- **Filter System**: Filter notes by Core/Elective subjects
- **Auto-hiding Navbar**: Smart navbar that hides on scroll down
- **Progress Bar**: Visual scroll progress indicator
- **Toast Notifications**: Beautiful notifications for download confirmations
- **3D Card Effects**: Interactive tilt effects on hover
- **Dark Mode**: Toggle between light and dark themes
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Link Validation**: Automatic validation of file links
- **Smooth Animations**: GPU-accelerated transforms and Intersection Observer

## 📁 Structure

```
3RD-SEM-SVIT-NOTES/
├── index.html          # Main HTML file
├── style.css           # Styling with glassmorphism and animations
├── script.js           # JavaScript with all features
├── README.md           # This file
├── DATA-STRUCTURES/    # Data Structures notes
├── DDCO/              # DDCO notes
├── JAVA/              # Java notes
├── MATHS/             # Mathematics notes
├── OS/                # Operating Systems notes
└── SCR.pdf            # SCR notes
```

## 🎨 Performance Optimizations

- ✅ requestAnimationFrame for all animations
- ✅ Debounced search input (250ms)
- ✅ Passive scroll listeners
- ✅ Intersection Observer for reveal animations
- ✅ GPU-accelerated transforms (translate3d, scale)
- ✅ Reduced reflows and forced layouts
- ✅ Optimized CSS transitions
- ✅ Smooth cubic-bezier easing

## 🔗 Link Format

All download links use the GitHub raw file format:
```
https://raw.githubusercontent.com/hammidbinaejaz/3RD-SEM-SVIT-NOTES/main/[path]
```

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠️ Setup

1. Clone or download this repository
2. Ensure all PDF files are in their respective folders
3. Push to GitHub Pages or deploy to any static hosting
4. The site will automatically validate links and show warnings for missing files

## 📝 Notes

- Custom cursor is automatically disabled on mobile devices
- File validation runs in the background and logs results to console
- Missing files report is saved to localStorage
- Dark mode preference is saved to localStorage

## 🎯 Subjects Included

- **Mathematics [BCS301]**
- **Data Structures [BCS304]**
- **JAVA [BCS306A]**
- **Operating Systems [BCS302]**
- **DDCO [BCS302]**
- **SCR**

## 📧 Contact

For issues or suggestions, contact: hamidbinaejaz@gmail.com

---

**Made with ❤️ for SVIT students**

