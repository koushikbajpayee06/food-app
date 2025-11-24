import { useState, useEffect } from "react";
import { MENU_API } from "./constant";

const useAllMenu = (resId) => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    fetchData();
  }, [resId]);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();

    // ⬇️ Your actual categories path
    const regularCards =
      json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

    // ⬇️ Extract only ItemCategory types
    const categoryList = regularCards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    setCategories(categoryList);
  };
//   console.log("Categories inside custom hook:", categories);
  return categories;
};

export default useAllMenu;
