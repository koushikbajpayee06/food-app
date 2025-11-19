import React, { useState } from 'react'
import { Logo_URL } from '../utills/constant'

const Header = () => {
  const [btnName, setBtnName] = useState('Login');
  console.log("Header Render");

  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src={Logo_URL}/>
      </div>
      <div className='nav-items'>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          <button className='login' onClick={()=>{
            btnName==="Login"?
             setBtnName("Logout"):
             setBtnName("Login")
             }}>{btnName}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header
