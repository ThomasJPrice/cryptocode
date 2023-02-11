import React from 'react'
import './Footer.scss'

import { logo } from '../../assets'
import { footerLinks, socialLinks } from '../../constants'

const Footer = () => {
  return (
    <div className='footer-wrapper bg-wrapper'>
      <div className="footer-container container">
        <div className="footer-main">
          <div className="footer-info">
            <img src={logo} alt="cryptocode" className='footer-logo' />
            <p className="paragraph1">Posuere ac in in nisl sed augue. Ultrices eget pretium sit euismod mi id posuere ac in in nisl sed augue.</p>
          </div>
          <div className="footer-links">
            <div className="footer-links-main">
              {footerLinks.map((links, index) => (
                <div className={`footer-link-${links.title}`}>
                  <h1 className="footer-link-title">{links.title}</h1>
                  <ul className="footer-links-list">
                    {links.links.map((link, index) => (
                      <li className='footer-link'><a href={link.link} className="link1">{link.title}</a></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="footer-links-social">
              <h1 className="footer-link-title">Social</h1>
              <ul className="social-link-list">
                {socialLinks.map((link, index) => (
                  <li className='social-link'>
                    <a href={link.link} className="button2">
                      <img src={link.img} alt={link.title} className='social-link-img' />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
        <div className="footer-copyright">
          <div className="footer-divider" />
          <p className="footer-copyright-text paragraph1">© 2023 CryptoCode. Website designed by <a href='https://templatesjungle.com/downloads/cryptocode-free-cryptocurrency-figma-website-design/'>TemplatesJungle</a>.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer