
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";
import "./index.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("myToken");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="logo-text">Hire<span>Hub</span></Link>
      </div>

      {/* Hamburger icon */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu Items */}
      <div className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/jobs" onClick={() => setMenuOpen(false)}>Jobs</Link></li>
          <li> <Link to="/about" className="nav-item" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/contact" className="nav-item" onClick={() => setMenuOpen(false)}>Contact</Link></li>

          <li>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
