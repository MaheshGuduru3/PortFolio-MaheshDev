import React, { useState } from 'react';
import codeLog from '../Assests/code.png';

const navItems = [
  ['Home', '#home'], ['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Contact', '#contact']
];

const Headers = () => {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="page-wrap nav-wrap">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-mark"><img src={codeLog} alt="" /></span>
          <span>Mahesh<span>Dev</span></span>
        </a>

        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          <i className={`bi ${open ? 'bi-x-lg' : 'bi-list'}`}></i>
        </button>

        <nav className={open ? 'main-nav is-open' : 'main-nav'}>
          {navItems.map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-cta mobile-cta" href="#contact" onClick={closeMenu}>Let's Talk</a>
        </nav>
        <a className="nav-cta desktop-cta" href="#contact">Let's Talk</a>
      </div>
    </header>
  );
};

export default Headers;
