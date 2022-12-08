import React from 'react'
import Navbar from '../Components/NavBar/Navbar'
import Footer from '../Components/Footers/Footer'
import {Heroimage2} from '../Components/HeroImage2/Heroimage2'
import {Card} from"../Components/Card/Card"
const Professional = () => {
  return (
    <div>
      <Navbar/>
      <Heroimage2 Heading={'Projects'} text={"These are Glimps of my Projects"}/>
      <Card/>
      <Footer/>
      </div>
  )
  }

export default Professional