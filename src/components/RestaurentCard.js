import React, { useContext } from 'react'
import { CDN_URL } from '../utills/constant';
import UserContext from '../utills/UserContext';

const RestaurentCard = ({resData}) => {

  const { loggedInUser } = useContext(UserContext);
  
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
        <p>{loggedInUser}</p>
      </div>
    </div>
  )
}


//Higher Order Component
// input - RestaurentCard  ==> RestaurentCardPromoted
export const withPromotedLabel = (RestaurentCard) =>{
  return (props)=>{
    return (
      <div>
        <label className='absolute bg-black text-white m-2 p-2 rounded-lg}'>Veg Only</label>
        <RestaurentCard {...props}/>
      </div>
    )
  } 
}
export default RestaurentCard;
