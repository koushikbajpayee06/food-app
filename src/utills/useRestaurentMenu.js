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
        setResInfo(json.data);
        // console.log(resInfo)
    }

  return resInfo
  
}

export default useRestaurentMenu

