import React from 'react'
import {Cardwork2} from"./Cardwork2"
import {CardData2,cardData3} from './Carddata2'
import "./Card2styles.css"


export const Card2 = () => {
  return (
        <div className='Card-Container'>
        <h1 className="Card-Heading">Education.</h1> 
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
   <div>
<h1 className="Card-Heading">Career Progression.</h1> 
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
 </div>      
  )
}

