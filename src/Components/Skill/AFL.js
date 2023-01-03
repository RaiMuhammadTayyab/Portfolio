import React from 'react'
import {ALLData} from"./AllData"
import Awards from "./Awards"
import "./Scprstyles.css"
import HSC from "../../Assets/HSC.jpg"
const ALL = () => {
  return (
   <div>
     <h1 className='Head'> AFFILIATIONS.</h1>
    <div className= 'Container'>

    {ALLData.map((data,ind)=>{
return( 
<Awards 
key={ind} img={data.image}/>
   )})}
   </div>
<img className='HSC'src={HSC} alt="HSC"/>
    </div>
  )
}
export default ALL