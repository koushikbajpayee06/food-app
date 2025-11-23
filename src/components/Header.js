import React, { use, useEffect, useState } from 'react'
import { Logo_URL } from '../utills/constant'
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utills/useOnlineState';


const Header = () => {
  const [btnName, setBtnName] = useState('Login');
  console.log("Header Render");
  const OnlineStatus = useOnlineStatus();

  return (
    <div className='flex justify-between bg-pink-500'>
      <div className='logo-container'>
        <img className='w-28' src={Logo_URL}/>
      </div>
      <div className='nav-items'>
        <ul className='flex p-4 m-4'>
            <li>
              Online Status:{OnlineStatus?"✅":"🔴"}
            </li>
            <li>
              <Link to='/'>Home</Link></li>
            <li>
              <Link to='/about'>About Us</Link>
            </li>
            <li>
              <Link to='/contact'>Contact Us</Link>
            </li>
            <li>
              <Link to='/grocery'>Grocery</Link>
            </li>
            <li>
              <Link to='/cart'>Cart</Link>
            </li>
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
