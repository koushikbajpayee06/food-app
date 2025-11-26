import React, { use, useContext, useEffect, useState } from 'react'
import { Logo_URL } from '../utills/constant'
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utills/useOnlineState';
import UserContext from '../utills/UserContext';
import { useSelector } from 'react-redux'


const Header = () => {
  const [btnName, setBtnName] = useState('Login');
  // console.log("Header Render");
  const OnlineStatus = useOnlineStatus();
  
  const {loggedInUser} = useContext(UserContext);
  // console.log(loggedInUser);
  // Subscribing to the store using Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems)

  return (
    <div className='flex justify-between bg-pink-100 shadow-lg mb-2'>
      <div className='logo-container'>
        <img className='w-28' src={Logo_URL}/>
      </div>
      <div className='flex items-center'>
        <ul className='flex p-4 m-4'>
            <li className='px-4'>
              Online Status:{OnlineStatus?"✅":"🔴"}
            </li>
            <li className='px-4'>
              <Link to='/'>Home</Link>
              </li>
            <li className='px-4'>
              <Link to='/about'>About Us</Link>
            </li>
            <li className='px-4'>
              <Link to='/contact'>Contact Us</Link>
            </li>
            <li className='px-4'>
              <Link to='/grocery'>Grocery</Link>
            </li>
            <li className='px-4 font-bold text-xl'>
              <Link to='/cart'>
                Cart-({cartItems.length} items)
              </Link>
            </li>
          <button className='login' onClick={()=>{
            btnName==="Login"?
             setBtnName("Logout"):
             setBtnName("Login")
             }}>{btnName}
          </button>
            <li className='px-4 font-bold'>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
