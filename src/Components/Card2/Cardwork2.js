import React from 'react'
import './Card2styles.css'
import { Link } from 'react-router-dom'

export const Cardwork2 = ({ Srcimg,Degree,Dates, University }) => {
  return (
        <div className='Project-Card'>
        <img className='Img-wind' src={Srcimg} alt="wind"/>
        <h2 className='Project-Title'>{Degree}</h2>
        <div className='Project-Detail'>
        <p>  {Dates}</p>
        <p>{University}</p>
        <div className='Pro-Btu'>
            <Link  className="Btu">View</Link>
      </div>
      </div>
      </div>
      

  )
}
