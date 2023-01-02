import React from 'react'
import "./Formstyles.css"
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
require('dotenv').config()
const SERVICE_ID =process.env.REACT_APP_SERVICE;
const TEMPLATE_ID =process.env.REACT_APP_TEMPLATE;
const USER_ID =process.env.REACT_APP_USER;
//'WuoiEvYEaJQUTOLap'
console.log(process.env.REACT_APP_USER)
const Form = () => {
  const handle_submit=(e)=>{
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID,TEMPLATE_ID,e.target,USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };
  
  return (
<div>
<form  className='Form' onSubmit={handle_submit}>
<label>Your Name </label>
<input name="Name" type="text"/>
<label> Email </label>
<input name= "user_email" type="email"/>
<label >Subject</label>
<input name="Subject" type="text"/>
<label> Message</label>
<textarea  name="Message" rows={6} placeholder="Type your Message pls"/>  
<button className='Btu'>Submit</button>
</form>
        
        
        
        
        </div>
  )
}
export default Form