import React from 'react'

const RestaurentCard = (props) => {
  return (
    <div className='res-card'>
        <img className="res-img" alt='res-logo' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/10/17/641102cd-be56-4c4b-9df1-a89fcc4430ad_39309.JPG'/>
        <div className='res-info'>
            <h3 className="res-name">{props.resName}</h3>
             <p className="res-cuisines">{props.cuisine}</p>
             <div className="res-details">
                <span className="res-rating">⭐ {props.ratings}</span>
                <span>•</span>
                <span>{props.deliveryTime} mins</span>
             </div>
        </div>

    </div>
  )
}

export default RestaurentCard
