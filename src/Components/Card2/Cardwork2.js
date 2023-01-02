import React from 'react'
import './Card2styles.css'
import  {Skeleton}  from '@material-ui/lab' 
//import { Link } from 'react-router-dom'


export const Cardwork2 = ({ Srcimg,Degree,Dates, University })=> {
  return (
        <div className='Project-Card'>
          {Dates?<img className='Img-wind' src={Srcimg} alt="wind"/>:<Skeleton variant="rectangular" width={"100%"}/>
          }
        <h2 className='Project-Title'>{Degree}</h2>
        <div className='Project-Detail'>
        <p> {Dates}</p>
        <p>{University}</p>
      </div>
      </div>
      

  )
}
