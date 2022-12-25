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
  <p>Hi,Welcome to The world of Engineer's</p>
  <h1>Dr SOHAIL AHMAD</h1>
  <h2>Director,Murray Darling Basin Authority Australia.</h2>
  <br/>
  
    <div>
      <Link className="Btu" to="./Professional"> Professional Experience </Link>
      <Link className=" Btu Btu-light" to="./Contact"> Contact </Link>
      </div>
      </div>
    </div>
  )
}
export default Heroimage