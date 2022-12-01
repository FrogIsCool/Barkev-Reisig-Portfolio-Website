import {useRef} from 'react';
import NavMenu from './NavMenu.js';

/**
 * Component designed to be placed at top of the site
 * and contains links to sections of the site for
 * easy navigation.
 */
function Header() {
  
  // Default render
  function NavBar() {
    return (
      <nav className='NavBar'>
        {/* In reverse order to allow for float: right*/}
        <a href='#contact'>Contact</a> 
        <a href='#projects'>Projects</a>
        <a href='#skills'>Skills</a>
        <a href='#about'>About</a>
      </nav>
    )
  }
  
  // Checks screen size to determine which render to use for nav
  function DisplayNav() {
    const mql = window.matchMedia('(max-width: 500px)');
    let mobile = mql.matches;

    if(mobile) { /* Conditional Rendering is used */
      return <NavMenu />;
    } else {
      return <NavBar />;
    }
  }

  return (
    <div className='header-wrapper'>
      <section className='Header'>
        <a className='logo' href='/'>Barkev Reisig</a>
        <DisplayNav />
      </section>
    </div>
  );
}

export default Header;
