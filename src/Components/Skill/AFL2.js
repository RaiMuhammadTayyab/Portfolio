import React from 'react'
import Award2 from './Award2'
import { Data2 } from './AllData'

const AFL2 = () => {
  return (
    <div>
        <h1 className='Head'>AWARDS &SCHOLARSHIP</h1>
<div className='Awd_con'>
    {Data2.map((item,ind)=>{
        return(
        <Award2 key={ind} text={item.text} img={item.pic}/>
    )})
    }    
        
        </div>     
        </div>
  )
}

export default AFL2