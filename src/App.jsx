import  Navbar  from '../src/components/Navbar'
import React from 'react'
import Herosection from './components/Hero'
import AboutUsSection from './components/homePage'

const App = () => {
  return (
    <div>
     <Navbar />
     <Herosection />
     <AboutUsSection />
    </div>
  )
}

export default App
