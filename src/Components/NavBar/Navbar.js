import React,{useState} from 'react'
import "./Navbarstyles.css"
import {Link} from "react-router-dom"
import {FaBars,FaTimes} from "react-icons/fa"
const Navbar = () => {
    const[click,setclick]=useState(false)
    const[color,setcolor]=useState(false)
    const clickhandle=()=>{
        setclick(!click)
    }
    const colorhandle=()=>{
        if(window.scrollY>=100){
            setcolor(true)
        }else{
            setcolor(false)
        }
    }
    window.addEventListener("scroll",colorhandle)
  return (
    
    <div className= {color? 'Header Header-bg':"Header"}>
     < Link to="/"> <h1>Portfolio</h1></Link>

<ul className={click?"Nav_menu active":"Nav_menu"}>
    <li>
        <Link to="/">
            Home
        </Link>
        
        </li>
    <li>
        <Link to="/About">
        About
        </Link>
    </li>
    <li>
        <Link to="/Professional">
        Professional
        </Link>
    </li>

    <li>
        <Link to="/CV">
        Resume,
        </Link>
    </li>


    <li>
        <Link to="/Contact">
        Contact
        </Link>
    </li>

</ul>
<div className='hamburger' onClick={clickhandle}>
    {click?(<FaTimes size={20} style={{color:'#fff'}}/>)
    
: (<FaBars size={20} style={{ color:"#fff"}}/>)}
    
   
</div>
    </div>

    
  )
}

export default Navbar