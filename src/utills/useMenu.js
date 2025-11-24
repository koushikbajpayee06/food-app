import React, { useState } from 'react'
import { useEffect } from 'react'
import { MENU_API } from './constant';

const useMenu = (resId) => {
    const [menu, setMenu] = useState(null);
    //fetchdata
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async()=>{
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        // console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards)
        // setResInfo(json.data.cards[2].card.card.info);
        setMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
        
        
    }

  return menu
  
}

export default useMenu

