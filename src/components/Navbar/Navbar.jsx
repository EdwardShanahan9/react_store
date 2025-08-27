import { useState } from "react";
import { FaSearch, FaUser, FaBars } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Categories", path: "/" },
    { name: "About", path: "/" },
  ];

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <nav className="navbar">
      <a className="navbar_logo" href="">
        React_Store
      </a>

      <ul className="navbar__list">
        {navLinks.map((link) => (
          <li key={link}>
            <a href={link.path}>{link.name}</a>
          </li>
        ))}
      </ul>

      <div className={`navbar__right ${isSearchOpen ? "active" : ""}`}>
        <div className="navbar__search">
          <input type="text" />
          <FaSearch
            className="navbar__search-icon"
            style={{ marginLeft: "8px" }}
            onClick={handleSearchToggle}
          />
        </div>
        <FaUser
          className="navbar__account-icon"
          style={{ marginLeft: "16px" }}
        />

        <FaBars
          className="navbar__hamburger-icon"
          style={{ marginLeft: "16px" }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
