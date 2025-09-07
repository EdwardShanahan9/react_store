import "./MobileNavbar.css";

const MobileNavbar = ({ navLinks }) => {
  return (
    <ul className="navbar__mobile-list">
      {navLinks.map((link, index) => (
        <li key={index}>
          <a href={link.path}>{link.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default MobileNavbar;
