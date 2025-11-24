import React, { useEffect, useState } from 'react'
import ShimmerUI from './shimmerUI';
import { useParams } from 'react-router-dom';
import useRestaurentMenu from '../utills/useRestaurentMenu';
import useMenu from '../utills/useMenu';
import useAllMenu from '../utills/useAllMenu';
import RestaurentCategory from './RestaurentCategory';

const RestaurentMenu = () => {

  const {resId} = useParams();
    const menu = useMenu(resId);
    
    const resInfo = useRestaurentMenu(resId);
  
    const catagories = useAllMenu(resId);
    const [showIndex, setShowIndex] = useState(0)
  

  if(resInfo === null || catagories === null) return <ShimmerUI/>;



    const {name, cuisines, costForTwo } = resInfo || {};


    // const {}
  // console.log(catagories);
  return (
    <div className='text-center'>
      <h1 className="text-3xl  font-bold my-6">{name}</h1>
      <p className='font-bold'>{cuisines?.join(', ')} - {costForTwo}</p>
      {/* categories accordians */}
      {catagories.map((category,index)=>
        <RestaurentCategory 
        key={category.card.card.title} 
        data={category.card.card} 
        showItems={index===showIndex ? true: false}
        setShowIndex={()=>setShowIndex(index)}
        />
        
      )}
    </div>
  )
}

export default RestaurentMenu
