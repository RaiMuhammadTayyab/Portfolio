import React from 'react'
import {Cardwork2} from"./Cardwork2"
import {CardData2,cardData3} from './Carddata2'
import "./Card2styles.css"
import {Link} from "react-router-dom"


export const Card2 = () => {
  return (
  
        <div>
        <h1 className="Card-Heading">EDUCATION.</h1> 
        <div className='Project-Container'>
  {CardData2.map((Item,ind)=>{
return(
  <Cardwork2  

  key={ind}
   Srcimg={Item.imgsrc}
  Degree={Item.Degree}
  Dates={Item.Dates}
  University={Item.University }
  /> 
)})}
   </div>
   <div className='Pro-btu'>
        <Link className="Btu"to ="/CV" > See Appendix-A (DETAILS)</Link>
      </div>      
<h1 className="Card-Heading">CAREER.</h1> 
<div className='table_container '>
<table>
  <thead>
    <tr>
  <th>Position</th>
  <th>Dates</th>
  <th>Organisation</th>
  </tr>
  </thead>
  {cardData3.map((items,ind)=>{
    return <tbody key={ind}>
      <tr>
      <td>{items.Position}</td>
      <td>{items.Dates}</td>
      <td>{items.Organisation}</td>
      </tr>
    
    </tbody>
  })}
  </table>
  </div>
  < div className='Pro-btu'> 
  <Link className='Btu' to="/CV/14">See Appendix-B(DETAILS)</Link>
  </div>
  </div>
  )
}

