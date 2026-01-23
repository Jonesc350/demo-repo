# Typhoon Communication Systems Educational Website

A comprehensive training platform for Typhoon/Eurofighter communication systems, focusing on Link 16, MIDS-JTRS, and tactical data link operations.

## 🚀 Features

### Educational Content
- **6 Complete Training Modules** covering:
  - Module 1: Typhoon Communication Systems Fundamentals
  - Module 2: Link 16 Basics for Typhoon Operators
  - Module 3: MIDS-JTRS on Typhoon
  - Module 4: Typhoon Link 16 Operations
  - Module 5: Voice & Other Communication Systems
  - Module 6: Advanced Topics & Integration

- **23 Comprehensive Lessons** with:
  - Clear learning objectives
  - Detailed educational content
  - Real-world examples
  - Key takeaways

- **6 Interactive Quizzes** featuring:
  - Multiple-choice questions with immediate feedback
  - Score tracking and progress persistence
  - 80% passing threshold
  - Detailed explanations

### Progress Tracking
- localStorage-based progress tracking
- Completed lessons marked automatically
- Quiz scores and attempts saved
- Overall completion percentage
- "Resume where you left off" functionality

### Reference Materials
- **J-Series Messages Catalog**: Comprehensive reference for Link 16 messages
- **Glossary & Acronyms**: 40+ terms with searchable definitions
- **TDMA Reference**: Time structure and network timing
- **Track Management Guide**: Lifecycle and classification
- **Troubleshooting Guide**: Common issues and solutions

### Design
- **Clean, Professional Interface**: Content-focused design
- **Fully Responsive**: Mobile, tablet, and desktop support
- **Custom Color Scheme**: RAF Blue, Typhoon Gray, Deep Navy
- **Accessible**: Semantic HTML and proper navigation

## 🛠️ Technology Stack

- **React 18**: Modern UI library
- **Vite 7**: Fast build tool and dev server
- **Tailwind CSS v4**: Utility-first CSS framework
- **React Router v7**: Client-side routing
- **React Markdown**: Lesson content rendering
- **localStorage API**: Progress persistence

## 📦 Installation

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup

1. Navigate to the app directory:
```bash
cd typhoon-comms-app
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open browser to `http://localhost:5173`

## 🏗️ Build

### Development Build
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

The production build will be output to the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

## 🌐 Deployment

### GitHub Pages

This project is configured for GitHub Pages deployment.

1. Build the production version:
```bash
npm run build
```

2. The `dist` folder can be deployed to GitHub Pages
3. Configure repository Settings → Pages → Deploy from branch

The site will be available at the configured GitHub Pages URL.

### Other Hosting

The `dist` folder contains a static site that can be hosted on:
- Netlify
- Vercel
- AWS S3 + CloudFront
- Any static hosting provider

## 📁 Project Structure

```
typhoon-comms-app/
├── src/
│   ├── components/layout/       # Header, Footer
│   ├── contexts/                # ProgressContext
│   ├── data/                    # Course content and references
│   ├── pages/                   # All page components
│   ├── utils/                   # Helper functions
│   ├── App.jsx                  # Main app with routing
│   └── index.css                # Tailwind CSS + theme
├── public/                      # Static assets
├── dist/                        # Production build (generated)
└── package.json
```

## 🎓 Course Content

### All 6 Modules Include:
- Structured lessons with clear objectives
- Comprehensive technical content
- Practical examples and scenarios
- Interactive quizzes for assessment
- Progress tracking

Topics covered:
- Link 16 / MIDS-JTRS fundamentals and operations
- Voice communications (UHF/VHF, HAVE QUICK, SATURN)
- IFF Mode 5 identification systems
- Multi-domain operations and integration
- Coalition interoperability
- Future communication upgrades

## 🔒 Security Notice

This educational resource contains **ONLY** open-source, publicly available information.

**No classified or sensitive operational details are included.**

This is NOT official training material. For official Typhoon training, refer to authorized military channels.

## 🗺️ Future Enhancements

- AI chatbot integration
- User accounts with cloud sync
- Advanced interactive tools
- Video content integration
- Certificate generation
- Additional reference materials

## 📝 License

Educational purposes only. All content based on publicly available information.

Typhoon and Eurofighter are trademarks of their respective owners.

---

**Built with React 18, Vite 7, and Tailwind CSS v4**
