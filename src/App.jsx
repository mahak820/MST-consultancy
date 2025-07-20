import  Navbar  from '../src/components/Navbar'
import React from 'react'
import Herosection from './components/Hero'
import AboutUsSection from './components/AboutPage'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <div>
      <Navbar />
     <HomePage/>
    </div>
  )
}

export default App
