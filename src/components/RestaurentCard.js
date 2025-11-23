import React from 'react'
import { CDN_URL } from '../utills/constant';

const RestaurentCard = ({resData}) => {

  const {
    name,
    cuisines,
    cloudinaryImageId,
    costForTwo,
    avgRating,
    totalRatingsString,
    sla
  } = resData;

  return (
    <div className='m-4 p-4 w-[290px]' style={{backgroundColor:'#f0f0f0'}}>
      <img 
        className='res-img'
        alt='res-logo'
        src={CDN_URL + cloudinaryImageId}
      />

      <div className='res-info'>
        <h3>{name}</h3>

        <p>{cuisines.join(", ")}</p>

        <div className='res-details'>
          <span>⭐ {totalRatingsString}</span>
          <span>•</span>
          <span>{sla.deliveryTime} mins</span>
        </div>

        <p>{costForTwo}</p>
        <p>{avgRating} ⭐</p>
      </div>
    </div>
  )
}

export default RestaurentCard;
