import React from 'react'
import './About.scss'

const Info = ({ title, para, button, img, reverse }) => {
  return (
    <div className='about-wrapper bg-wrapper'>
      <div className={`about-container container ${reverse}`}>
        <img src={img} alt={title} className='about-img' />

        <div className="about-content">
          <h2 className="heading2 about-title">{title}</h2>
          <p className="paragraph1 about-para">{para}</p>
          <a href="#" className="button1 about-button">{button}</a>
        </div>
      </div>
    </div>
  )
}

export default Info