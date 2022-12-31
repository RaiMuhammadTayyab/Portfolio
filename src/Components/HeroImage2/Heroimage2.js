import React from 'react'
import './Heroimage2styles.css'

export  const Heroimage2 = (props) =>{
  return (
    <div className='Hero-Image'>
    <div className='Heading'>
    <h1>{props.Heading}</h1>
     <p>{props.text}</p>
     <div>  
     {props.intro}
     </div>
    </div>
  
  </div>


  )
}
