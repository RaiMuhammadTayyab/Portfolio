import React from 'react'
import Navbar from '../Components/NavBar/Navbar'
import Footer from '../Components/Footers/Footer'
import {Heroimage2} from '../Components/HeroImage2/Heroimage2'
import Form from"../Form/Form"
//import 'semantic-ui-css/semantic.min.css';
const contact = () => {
  return (
    <div>
      <Navbar/>
      <Heroimage2 Heading={"Lets Contact"}text={ "Chatt with me for more info"}/>
      <Form/>
     <Footer/>
      </div>
  )
}

export default contact