import React from 'react'
import { Cardwork } from './Cardwork'
import CardData from './Carddata'

export const Card = () => {
  return (
        <div className='Card-Container'>
        <h1 className="Card-Heading">Projects.</h1> 
        <div className='Project-Container'>
        {CardData.map((Item,ind)=>{
return(
  <Cardwork    
  key={ind}
  Srcimg={Item.imgsrc}
  title={Item.title}
  text={Item.text}
  view={Item.view}
  
  />
)


        })}
        </div>
        </div>

        
        
  )
}

