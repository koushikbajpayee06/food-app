import React, { useEffect, useState } from 'react'
import ShimmerUI from './shimmerUI';
import { useParams } from 'react-router-dom';
import useRestaurentMenu from '../utills/useRestaurentMenu';
import useMenu from '../utills/useMenu';
import useAllMenu from '../utills/useAllMenu';


const RestaurentMenu = () => {

  const {resId} = useParams();
    const menu = useMenu(resId);
    
    const resInfo = useRestaurentMenu(resId);
  
    const catagories = useAllMenu(resId);
  

  if(resInfo === null || catagories === null) return <ShimmerUI/>;



    const {name, cuisines, costForTwo } = resInfo || {};


    // const {}

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">{name}</h1>
      <p>{cuisines?.join(', ')} - {costForTwo}</p>
      <h2 className='text-2xl font-bold mb-2'>Menu</h2>
      <ul className='space-y-2 list-disc list-inside'>
        {
          menu.map((res)=><li key={res.card.info.id}>{res.card.info.name}- {res.card.info.price/100}</li>)
        }
      </ul>
    </div>
  )
}

export default RestaurentMenu
