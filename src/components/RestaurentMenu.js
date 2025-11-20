import React, { useEffect, useState } from 'react'
import ShimmerUI from './shimmerUI';

const RestaurentMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const [menu, setMenu] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async()=>{
        const resId = "123456";
        const data = await fetch(
            `https://namastedev.com/api/v1/listRestaurantMenu/${resId}`
        );
        const json = await data.json();
        console.log(json.data.cards)

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
