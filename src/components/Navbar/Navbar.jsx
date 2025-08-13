import { FaSearch, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="navbar_logo" href="">
        React_Store
      </a>

      <ul className="navbar__list">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Categories</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
      </ul>

      <div className="navbar__right">
        <div className="navbar__search">
          <input type="text" />
          <FaSearch
            className="navbar__search-icon"
            style={{ marginLeft: "8px" }}
          />
        </div>
        <FaUser
          className="navbar__account-icon"
          style={{ marginLeft: "16px" }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
