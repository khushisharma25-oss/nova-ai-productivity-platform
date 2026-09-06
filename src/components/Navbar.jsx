import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <a href="#home" className="logo" onClick={closeMenu}>
        NOVA<span>.</span>
      </a>

      <div className={`nav-links ${menuOpen ? "show" : ""}`}>
        <a href="#features" onClick={closeMenu}>Features</a>
        <a href="#solutions" onClick={closeMenu}>Solutions</a>
        <a href="#pricing" onClick={closeMenu}>Pricing</a>
        <a href="#faq" onClick={closeMenu}>FAQ</a>
      </div>

      <div className="nav-actions">

        <button
          className="theme-button"
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <a href="#contact" className="nav-button">
          Get Started
        </a>

      </div>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>
    </nav>
  );
}

export default Navbar;