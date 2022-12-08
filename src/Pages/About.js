import React from 'react'
import Navbar from '../Components/NavBar/Navbar'
import Footer from '../Components/Footers/Footer'
import { Heroimage2 } from '../Components/HeroImage2/Heroimage2'
const About = () => {
  return (
    
    <div>
      <Navbar/>
      <Heroimage2 Heading={"My introduction"} text={ "Lets know something about me"}/>
      <Footer/>
    </div>
  )
}

export default About