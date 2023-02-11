import React from 'react'
import './Crypto.scss'

import { crypto } from '../../constants'
import { CryptoCard } from '../../components'

const Crypto = () => {
  return (
    <div className='crypto-wrapper bg-wrapper'>
      <div className="crypto-container container">
        <h2 className="heading2 crypto-title">Best crypto currently</h2>
        
        <div className="crypto-cards">
          {crypto.map((item, index) => (
            <CryptoCard 
              className='crypto-card'
              title={item.title}
              image={item.image}
              key={item.id}
              price={item.price}
            />
          ))}
        </div>
      </div>

      {/* <div className="crypto-blur" /> */}
    </div>
  )
}

export default Crypto