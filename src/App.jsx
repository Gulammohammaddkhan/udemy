import React, { useEffect, useState } from 'react'

import './App.css'

import Nav from './Components/Nav'
// import Midpic from './Components/Midpic'

import Carousel from './Components/Carousel'
import HeroHeader from './Components/HeroHeader'

function App() {
  return (
    <>
      <Nav />
      {/* <Midpic /> */}
      <Carousel />
      <HeroHeader />
    </>
  )
}

export default App
