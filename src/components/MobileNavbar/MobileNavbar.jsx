const MobileNavbar = ({ navLinks }) => {
  return (
    <ul className="navbar__mobile-list">
      {navLinks.map((link) => (
        <li key={link}>
          <a href={link.path}>{link.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default MobileNavbar;
