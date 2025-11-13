import React from 'react'

const RestaurentCard = () => {
  return (
    <div className='res-card'>
        <img className="res-img" alt='res-logo' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/10/17/641102cd-be56-4c4b-9df1-a89fcc4430ad_39309.JPG'/>
        <div className='res-info'>
            <h3 className="res-name">KFC</h3>
             <p className="res-cuisines">Burgers, Fast Food, Rolls & Wraps</p>
             <div className="res-details">
                <span className="res-rating">⭐ 4.5</span>
                <span>•</span>
                <span>38 mins</span>
             </div>
        </div>

    </div>
  )
}

export default RestaurentCard
