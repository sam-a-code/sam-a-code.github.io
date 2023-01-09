import {Link, useParams, useLocation} from 'react-router-dom'
import { useState } from 'react';



function Navbar() {

    // is this true? then display this, otherwise display that
    // use useLocation to identify url
    // function to check url

    let location = useLocation();

    console.log(location.pathname)


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
                <Link className="navbar" to="/">Bio</Link>
                <Link className="navbar" to="/resume">| Resume</Link>
                <Link className="navbar" to="/coding-portfolio">| Coding Portfolio</Link>
                <Link className="navbar" to="/art-portfolio">| Art Portfolio</Link>
            </div>
        { isHome(location) ?
        <div className='text-picture-background'>
            <h1 className='title-name'>SAMANTHA AVERY</h1>
            <h2 className='title-1'>Program manager</h2>
            <h2 className='title-2'>software engineer</h2>
            <h2 className='title-3'>artist</h2>
        </div> :
        <div className='text-picture-background'>
            <h1 className='title-name'>SAMANTHA AVERY</h1>
        </div>
        }
      </header>
    );
}
  export default Navbar;
