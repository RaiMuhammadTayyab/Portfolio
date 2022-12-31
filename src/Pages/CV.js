import React from 'react'
import Navbar from '../Components/NavBar/Navbar'
import {Heroimage2} from'../Components/HeroImage2/Heroimage2'
import Footer from'../Components/Footers/Footer'
import CV2 from "../Components/HeroImage2/CV2"

 const CV =()=>{

    return(
<div>
        <Navbar/>
        <Heroimage2 Heading={"Dr Sohail Ahmad "} text={ "Curriculum-Vitae"}/>
        <CV2/>
        <Footer/>



        </div>
    )




}
export default CV