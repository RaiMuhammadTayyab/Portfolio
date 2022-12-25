import React from 'react'
import { FaHome,FaLinkedin,FaMailBulk,FaPhone, FaTwitter,FaFacebook } from "react-icons/fa"
import "./Footerstyles.css"
const Footer = () => {
  return (
  <div className='Footer'>
<div className='Footer-Container'>
<div className='Left'>
<div className='location'>     
<FaHome size={20} style={{ color:"#fff", marginRight:"2rem"}}/>
<p>House no:1426 phase 8 Bharia Town Camberra.<br/>
 Australia.</p>
</div>

<div className='Phone'   >
<h4><FaPhone size={20} style={{ color:"#fff", marginRight:"2rem"}}/>
  +61 435 915 065</h4>
</div>
<br/>
<div className="email">
<h4><FaMailBulk size={20} style={{ color:"#fff", marginRight:"2rem"}}/>
  sohailrai@yahoo.com</h4>
</div>
</div>

<div className='Right'>
  <h4>SOHAIL RAI </h4>
  <p> MBA (Australia); PhD Engineering (Japan);<br/>MSc & BSc Engineering (Pakistan)

    <br/> Director, Murray Darling Basin Authority, Australia</p>
  <div className='Social'>
  <FaTwitter size={20} style={{ color:"#fff", marginRight:"2rem"}}/>
  <FaLinkedin size={20} style={{ color:"#fff", marginRight:"2rem"}}/>
  <FaFacebook size={20} style={{ color:"#fff", marginRight:"2rem"}}/>
  </div>
</div>
</div>
</div>

  )
}
export default Footer