
const ThemeToggle = ({ toggle, darkMode }) => (
  <div style={{ position: 'fixed', top: '1rem', right: '1rem', zIndex: 1000 }}>
    <button onClick={toggle} style={{ padding: '0.5rem 1rem' }}>
      {darkMode ? '☀️ Light' : '🌙 Dark'}
    </button>
  </div>
);
export default ThemeToggle;
