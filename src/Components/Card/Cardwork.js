import React from 'react'
import './Cardstyles.css'
import { NavLink } from 'react-router-dom'

export const Cardwork = ({ Srcimg,title,text, view}) => {
  return (
        <div className='Project-Card'>
        <img className='Img-wind' src={Srcimg} alt="wind"/>
        <h2 className='Project-Title'>{title}</h2>
        
        <div className='Project-Detail'>
        <p>  {text}</p>
        <div className='Pro-Btu'>
            <NavLink  to={view}className="Btu">View</NavLink>
      </div>
      </div>
      </div>
      

  )
}
