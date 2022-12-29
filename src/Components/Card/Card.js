import React from 'react'
import { Cardwork } from './Cardwork'
import CardData from './Carddata'
import { NavLink } from 'react-router-dom'
export const Card = () => {
  return (
        <div className='Card-Container'>
        <h1 className="Card-Heading">PROJECTS.</h1> 
        <div className='Project-Container'>
  {CardData.map((Item,ind)=>{
return(
  <Cardwork    
  key={ind}
  Srcimg={Item.imgsrc}
  title={Item.title}
  Area={Item.Area}
  Date={Item.Date}
  text={Item.text}
  view={Item.view}
  page={Item.page}
  
  />
)})}


</div>

<div className='Pro-Btu'>
  <NavLink  to="/CV" className="Btu">See Appendix-E(Detials)</NavLink>
 </div>


</div>
  )
}

