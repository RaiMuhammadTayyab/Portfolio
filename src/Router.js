import React from 'react'
import{ BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Professional from "./Pages/Professional"
import Contact from "./Pages/Contact"
import CV from"./Components/HeroImage2/CV"
const Routex = () => {
  return (
    <div>
        
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Professional" element={<Professional/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/CV"element={<CV/>}/>
                <Route path="*"element={()=><h2>404 not Found</h2>}/>
            </Routes>
        </Router>
        
        
        
        </div>
  )
}

export default Routex