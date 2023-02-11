import React from 'react'
import './Brands.scss'

import { brands } from '../../constants'

const Brands = () => {
  return (
    <div className='brands-wrapper bg-wrapper'>
      <div className="brands-container container">
        <ul className="brands-list">
          {brands.map((item, index) => (
            <li className='brands-brand'>
              <img src={item.img} alt={item.id} className='brands-img' />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Brands