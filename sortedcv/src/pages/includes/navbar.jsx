import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/header-logo.png";
import "./navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="SortedCV Logo" />
      </div>

      {/* Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
         {/* Mobile Button */}
  <li className="mobile-btn">
    <button
      onClick={() => {
        navigate("/contact");
        setMenuOpen(false);
      }}
    >
      Get in Touch →
    </button>
  </li>
      </ul>

      {/* Desktop Button */}
      <button
        className="nav-btn"
        onClick={() => {
          navigate("/contact");
          setMenuOpen(false);
        }}
      >
        Get in Touch →
      </button>

      {/* Mobile Menu Icon */}
      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </div>

    </nav>
  );
}

export default Navbar;
