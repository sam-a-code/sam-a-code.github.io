import {Link, useParams, useLocation} from 'react-router-dom'
import { useState } from 'react';



function Navbar() {

    let location = useLocation();

    function isHome(location) {
        const path = location.pathname
        if (path === "/") {
            return true
          }
          else return false
        }

    return (
        <header >
            <div className="navbar-parent">
                <Link className="navbar" to="/">bio</Link>
                <Link className="navbar" to="/resume">resume</Link>
                <Link className="navbar" to="/coding-portfolio">coding portfolio</Link>
                <Link className="navbar" to="/art-portfolio">art portfolio</Link>
                <a className="navbar" href='https://www.linkedin.com/in/samanthajavery/' target="_blank">contact</a>
            </div>
        { isHome(location) ?
            <div className='text-picture-background'>
                <a href="https://www.samantha-avery.com/"><h1 className='title-name'>SAMANTHA AVERY</h1></a>
            <div className='title-parent'>
                <div className='title-image'>
                    <img src='https://i.imgur.com/NpVzeox.jpg' alt="Sam's headshot. She's laughing and wearing floral overalls in front of a blue background"/>
                </div>
                <div className='title-text'>
                    <h2 className='title-subheader title-1'>program manager</h2>
                    <h2 className='title-subheader title-2'>software engineer</h2>
                    <h2 className='title-subheader title-3'>artist</h2>
                </div>
            </div>
        </div> :
        <div className='text-picture-background'>
            <a href="https://www.samantha-avery.com/"><h1 className='title-name'>SAMANTHA AVERY</h1></a>
        </div>
        }
      </header>
    );
}
  export default Navbar;
