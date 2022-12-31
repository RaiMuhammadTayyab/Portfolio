import React from 'react'
import Navbar from '../Components/NavBar/Navbar'
import Footer from '../Components/Footers/Footer'
import {Heroimage2} from '../Components/HeroImage2/Heroimage2'
import {Card} from"../Components/Card/Card"
import ALL from '../Components/Skill/AFL'
import AFL2 from '../Components/Skill/AFL2'
const Professional = () => {
  return (
    <div>
      <Navbar/>
    <Heroimage2 Heading={'Professional Contributions'} text={"These are Glimps of my Contributions"}/>
     <ALL/>
     <AFL2/>
      <Card/>
      <Footer/>
      </div>
  )
  }

export default Professional