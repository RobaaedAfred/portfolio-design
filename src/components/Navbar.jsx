import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <NavLink to="/" className="logo">
          RobaaedAfred<span>.</span>
        </NavLink>

        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <a className="nav-button" href="mailto:robaaed.afred@gmail.com">
          Let's Talk
        </a>
      </div>
    </header>
  );
}

export default Navbar;