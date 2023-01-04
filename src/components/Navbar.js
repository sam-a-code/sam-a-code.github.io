import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <header className="navbar-parent">
        <Link className="navbar" to="/">Bio</Link>
        <Link className="navbar" to="/resume">Resume</Link>
        <Link className="navbar" to="/coding-portfolio">Coding Portfolio</Link>
        <Link className="navbar" to="/art-portfolio">Art Portfolio</Link>
        <h1>Sam Avery</h1>
        <h2>Program manager, software engineer, artist</h2>
      </header>
    );
  }

  export default Navbar;
