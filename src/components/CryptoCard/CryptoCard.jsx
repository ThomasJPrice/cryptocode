import React from 'react'
import './CryptoCard.scss'

const CryptoCard = ({ title, image, price }) => {
  return (
    <div className='crypto-card-wrapper'>
        <div className="crypto-card-content">
            <div className="crypto-card-image">
                <img src={image} alt={title} />
                <div className="crypto-card-image-circle"></div>
            </div>
            <h3 className="crypto-card-crypto">{title}</h3>
            <h3 className="crypto-card-price">{price} $</h3>
        </div>

        <a href="#" className="button2 crypto-card-button">Buy it now</a>
    </div>
  )
}

export default CryptoCard