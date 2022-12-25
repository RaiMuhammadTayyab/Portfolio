import React from 'react'
import Navbar from '../Components/NavBar/Navbar'
import Footer from '../Components/Footers/Footer'
import {Heroimage2} from '../Components/HeroImage2/Heroimage2'
import Intro from '../Components/HeroImage2/Intro'
import {Card2} from'../Components/Card2/Card2'
const About = () => {
  
  
  return (
    
    <div>
      <Navbar/>
      <Heroimage2 Heading={"My introduction"} text={ "Lets know something about me"}
      intro={<Intro/>}/>
      <Card2/>
      <Footer/>
    </div>
  )
}

export default About