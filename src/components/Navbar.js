import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <header className="navbar-parent">
        <Link className="navbar" to="/">Bio</Link>
        <Link className="navbar" to="/resume">Resume</Link>
        <Link className="navbar" to="/coding-portfolio">Coding Portfolio</Link>
        <Link className="navbar" to="/art-portfolio">Art Portfolio</Link>
        <h1>Samantha Avery</h1>
        <h2 className='title-1'>Program manager</h2>
        <h2 className='title-2'>software engineer</h2>
        <h2 className='title-3'>artist</h2>
      </header>
    );
  }

  export default Navbar;
