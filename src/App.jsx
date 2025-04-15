import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import FadeInSection from './components/FadeInSection';

function App() {
  // State for dark mode (false = light, true = dark)
  const [darkMode, setDarkMode] = useState(false);

  // Apply the theme to the root HTML element whenever darkMode changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <>
      {/* Theme toggle button (fixed position) */}
      <button 
        className="theme-toggle" 
        onClick={() => setDarkMode(prev => !prev)}
        aria-label="Toggle dark mode"
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      {/* Main content sections */}
      <main>
        <Hero />
        <FadeInSection><About /></FadeInSection>
        <FadeInSection><Skills /></FadeInSection>
        <FadeInSection><Experience /></FadeInSection>
        <FadeInSection><Education /></FadeInSection>
        <FadeInSection><Contact /></FadeInSection>
      </main>
    </>
  );
}

export default App;

