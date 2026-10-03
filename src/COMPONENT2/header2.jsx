import { Link } from "react-router-dom";

function Header2() {
  return (
    <header className="main-header">

      <div className="logo">
        My Profile
      </div>

      <nav className="nav-menu">

        <Link to="/" className="nav-home">
          <span>●</span> Home
        </Link>

        <Link to="/about" className="nav-about">
          <span>●</span> About
        </Link>

        <Link to="/contact" className="nav-contact">
          <span>●</span> Contact
        </Link>

      </nav>

    </header>
  );
}

export default Header2;