import React, { useEffect, useState } from 'react'
import ShimmerUI from './shimmerUI';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utills/constant';


const RestaurentMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const [menu, setMenu] = useState([]);
    const {resId} = useParams();

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async()=>{
       
        const data = await fetch(MENU_API+ resId);
        const json = await data.json();
        console.log(json)

        // Save full response
        setResInfo(json.data);

        // Extract menu
        const allCards =
            json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

        const menuCategories = allCards.filter(
            (c) =>
                c?.card?.card?.["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );

        setMenu(menuCategories);
    }

    if(resInfo === null) return <ShimmerUI/>;

    const {name, cuisines, costForTwo} =
        resInfo?.cards[2]?.card?.card?.info || {};

  return (
    <div>
      <h1>{name}</h1>
      <p>{cuisines?.join(', ')} - {costForTwo}</p>

      <h2>Menu</h2>


      {menu.map((category, index) => {
        const card = category.card.card;

        return (
          <div key={index}>
            <h3>{card.title}</h3>

            <ul>
              {card.itemCards.map((item) => {
                const info = item.card.info;

                return (
                  <li key={info.id}>
                    <strong>{info.name}</strong> — ₹{info.price / 100}
                    <br />
                    <small>{info.description}</small>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  )
}

export default RestaurentMenu
