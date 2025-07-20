import React, { useState } from 'react'
import Container from '../Components/Container'
import { NavLink } from 'react-router-dom'

const Contact = () => {
  let [message, setMessage] = useState('')
  let txtMessage = (e)=>{
    setMessage(e.target.value);
    
  }
  let [myNumber, setMynumber] = useState('+8801705620421')
  let sendtoMessage = ()=>{
    let url = `https://wa.me/${myNumber}?text=${message}`;
    window.open(url, "_blank");
  }

  return (
    <div className="contact pt-[80px]">
      <Container>
        <div className="contain">
          <h1 className='text-[18px] font-bold'>Contact Me</h1>
          <div className="flex">
            <p className='w-[120px]'>Address</p> <p className='w-[20px]'>:</p> <p>Tarani, Nalitabari, Sherpur</p>
          </div>
          <div className="flex">
            <p className='w-[120px]'>Mobile No.</p> <p className='w-[20px]'>:</p> <p>+8801705620421</p>
          </div>
          <div className="flex">
            <p className='w-[120px]'>E-mail</p> <p className='w-[20px]'>:</p> <p>+paroscrangsha@gmail.com</p>
          </div>
          <div className=" flex">
            <p className='w-[120px]'>Whatsapp me</p> <p className='w-[20px]'>:</p> 
            <div className="flex flex-col">
              <label htmlFor="whatsapptxt">Message</label>
              <textarea name="" id="whatsapptxt" cols={20} rows={5} onChange={txtMessage}/>
              <button onClick={sendtoMessage}>Send</button>
            </div>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default Contact