import React from 'react'




const RestaurentCard = ({resData}) => {
    console.log(resData);
    const {name, cuisines, totalRatings,deliveryTime,costForTwo,image} = resData;
    const baseURL ="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
    // const imageId = extractImageId(image);

  return (
    <div className='res-card'>
        <img className="res-img" alt='res-logo' src={baseURL+ image}/>
        <div className='res-info'>
            <h3 className="res-name">{name}</h3>
             <p className="res-cuisines">{cuisines.join(',')}</p>
             <div className="res-details">
                <span className="res-rating">⭐ {totalRatings}</span>
                <span>•</span>
                <span>{deliveryTime} mins</span>
             </div>
              <p className="res-cost">{costForTwo}</p>
        </div>

    </div>
  )
}

export default RestaurentCard
