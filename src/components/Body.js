import React, { useEffect, useState } from 'react'
import RestaurentCard from './RestaurentCard'

// restaurantList.js

const extractImageId = (id) => {
  if (!id) return "";
  if (!id.includes("/")) return id; // already valid
  const parts = id.split("/");
  const file = parts[parts.length - 1];
  return file.split(".")[0];
};

const Body = () => {
  const [listOfRestaurents,setListOfRestaurents] = useState([]);

  useEffect(()=>{
    fetchData()
  },[]);

  const fetchData = async()=>{
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
    const json = await data.json()
    console.log(json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setListOfRestaurents(json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
  }

  return (
    <div className='body'>
      <div className='filter'>
        <button className='filter-btn'
         onClick={
          ()=>{
            const filterList = listOfRestaurents.filter(
            (item)=>item.avgRating>4.5)
            setListOfRestaurents(filterList);
          }
        }     
         >Top Rated Resaurents</button>
      </div>
      <div className='res-container'>
        {
          listOfRestaurents.map((res)=><RestaurentCard 
          key={res.info.id} resData={res.info}/>)
        }
        
      </div>
    </div>
  )
}

export default Body
