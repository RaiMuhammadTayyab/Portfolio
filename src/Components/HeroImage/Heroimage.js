import React from 'react'
import sunimage from "../../Assets/waterfall.avif"
import './Heroimagestyles.css'
import {Link} from 'react-router-dom'
export const Heroimage = () => {
  return (
    <div className='hero'>
<div className='mask'>
    <img className="img-int"  src={sunimage} alt="sun"/>
</div> 
<div className="content">
  <p>Hi,Welcome to the world of Engineer.</p>
  <h1>Enviromental Project Director.</h1>
    <div>
      <Link className="Btu" to="./Professional"> Professional Experience </Link>
      <Link className=" Btu Btu-light" to="./Contact"> Contact </Link>
      </div>
      </div>
    </div>
  )
}
export default Heroimage