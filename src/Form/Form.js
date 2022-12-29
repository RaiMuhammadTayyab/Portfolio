import React from 'react'
import "./Formstyles.css"

const Form = () => {
  return (
    <div className='Form'>
        <form>
<label> Your Name </label>
<input type="text"/>
<label> Email </label>
<input type="email"/>
<label>Subject</label>
<input type="text"/>

<label> Message</label>
<textarea rows={6} placeholder="Type your Message pls"/>  

<button className='Btu'>Submit</button>
</form>
        
        
        
        
        </div>
  )
}
export default Form