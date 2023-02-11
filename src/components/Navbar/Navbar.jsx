import React, { useState } from 'react'
import './Navbar.scss'
import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri'

import { logo } from '../../assets'
import { navLinks } from '../../constants'

const Navbar = () => {
  const [toggleMobileNav, setToggleMobileNav] = useState(false)

  return (
    <nav className='nav-wrapper container'>
      <a href="#" className="nav-logo-link"><img src={logo} alt="navbar logo" className="nav-logo" /></a>

      <ul className="nav-links">
        {navLinks.map((link, index) => (
          <li className="nav-link" key={`link${index}`}>
            <a className='link1' href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>

      <div className="nav-account">
        <a href="#" className="link1 nav-login">Login</a>
        <a href="#" className="button1 nav-register">Register</a>
      </div>

      {/* MOBILE NAV */}
      <div className="nav-mobile-wrapper">
        <RiMenu4Fill className='nav-mobile-menu' onClick={() => setToggleMobileNav((prev) => !prev)} />
        <div className={`nav-mobile ${toggleMobileNav ? 'nav-mobile-active' : ''}`}>
          <RiCloseFill className='nav-mobile-close' onClick={() => setToggleMobileNav((prev) => !prev)} />
          <ul className="nav-mobile-links">
            {navLinks.map((link, index) => (
              <li className="nav-mobile-link" key={`link${index}`}>
                <a className='link1' onClick={() => setToggleMobileNav((prev) => !prev)} href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar