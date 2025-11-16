import React from 'react'
import { CDN_URL } from '../utills/constant';

const RestaurentCard = ({resData}) => {
    // console.log(resData);
    const {name, cuisines, totalRatings,deliveryTime,costForTwo,image,avgRating} = resData;;
    // const imageId = extractImageId(image);

  return (
    <div className='res-card'>
        <img className="res-img" alt='res-logo' src={CDN_URL+ image}/>
        <div className='res-info'>
            <h3 className="res-name">{name}</h3>
             <p className="res-cuisines">{cuisines.join(',') || "No cuisines listed"}</p>
             <div className="res-details">
                <span className="res-rating">⭐ {totalRatings}</span>
                <span>•</span>
                <span>{deliveryTime} mins</span>
             </div>
              <p className="res-cost">{costForTwo}</p>
              <p className="res-avg-rating">{avgRating} ⭐</p>
        </div>

    </div>
  )
}

export default RestaurentCard
