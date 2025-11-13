import React from 'react'
import RestaurentCard from './RestaurentCard'

const Body = () => {
  return (
    <div className='body'>
      <div className='search'></div>
      <div className='res-container'>
        <RestaurentCard resName="KFC" cuisine="Burgers, Fast Food, Rolls & Wraps" ratings="4.6" deliveryTime="30"/>
        <RestaurentCard resName="Dominos" cuisine="Pizza" ratings="4.5"  deliveryTime="24"/>
      </div>
    </div>
  )
}

export default Body
