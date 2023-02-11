import React from 'react'
import './Subscribe.scss'

const Subscribe = () => {
  return (
    <div className='sub-wrapper bg-wrapper'>
      <div className="sub-container">
        <h2 className="sub-title heading2">Subscribe & get news updates</h2>
        <p className="sub-para paragraph1">Duis massa posuere commodo sed tortor ultrices accumsan augue. Aliquet bibendum placerat vivamus diam ullamcorper vitae sapien auctor ut. Suspendisse donec id aenean diam dolor nec vitae massa id. Velit nullam consequat orci amet fames sed. Amet tincidunt adipiscing varius maecenas adipiscing.</p>

        <div className="sub-inputs">
          <input type="email" placeholder='Write your email here' className='sub-email' />
          <button type="submit" className='button1 sub-submit'>Subscribe Now</button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe