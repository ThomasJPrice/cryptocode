import React from 'react'
import './App.scss'

import { Header, Brands, Crypto, About, Subscribe, Footer } from './containers'
import { abouts } from './constants'

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Brands />
      <Crypto />
      <div className="bg-blur1"></div>
      {abouts.map((about, map) => (
        <About
          key={about.title}
          title={about.title}
          para={about.para}
          button={about.button}
          img={about.img}
          reverse={about.reverse}
        />
      ))}
      <Subscribe />
      <div className="bg-blur2" />
      <Footer />
    </div>
  )
}

export default App