import React from 'react'
import { Navbar } from '../../components'
import './Header.scss'

import { headerImg } from '../../assets'

const Header = () => {
  return (
    <div className='header-wrapper'>
      {/* BLUR */}
      <div className="header-blur" />

      <Navbar />
      <section id="Header" className='container header-container'>
        <img src={headerImg} alt="header image" className='header-image' />

        <div className="header-content">
          <h1 className="heading1 header-title">Make easier your crypto transactions.</h1>
          <p className="paragraph1 header-paragraph">Our cryptocurrency offers a fast, secure, and affordable alternative for all of your financial needs. Join the cryptocurrency revolution today and take control of your financial future. Sign up now to start using our platform for yourself.</p>
          <a href="#" className="button1 header-cta">Try for free</a>
        </div>
      </section>
    </div>
  )
}

export default Header