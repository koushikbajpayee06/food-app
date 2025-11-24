import React, { useState } from 'react'
import { useEffect } from 'react'
import { MENU_API } from './constant';

const useRestaurentMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    //fetchdata
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async()=>{
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        // console.log(json.data)
        setResInfo(json.data.cards[2].card.card.info);
        
    }

  return resInfo
  
}

export default useRestaurentMenu

