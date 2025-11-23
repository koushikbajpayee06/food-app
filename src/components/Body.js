import React, { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
import ShimmerUI from "./shimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utills/useOnlineState";

// restaurantList.js

const extractImageId = (id) => {
  if (!id) return "";
  if (!id.includes("/")) return id; // already valid
  const parts = id.split("/");
  const file = parts[parts.length - 1];
  return file.split(".")[0];
};

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log("body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
    const json = await data.json();
    // console.log(json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setListOfRestaurents(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRes(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const OnlineStatus = useOnlineStatus();
  if (OnlineStatus === false)
    return (
      <h1>
        Looks like You are Offline!!! Please Check Your Internet Connection
      </h1>
    );

  return listOfRestaurents.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            value={searchText}
          />
          <button
            className="px-4 py-1 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              // console.log(searchText);
              const filteredRestaurent = listOfRestaurents.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setListOfRestaurents(filteredRestaurent);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-2 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filterList = listOfRestaurents.filter(
                (item) => item.info.avgRating > 4.5
              );
              setFilteredRes(filterList);
            }}
          >
            Top Rated Resaurents
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRes.map((res) => (
          <Link key={res.info.id} to={"restaurant/" + res.info.id}>
            <RestaurentCard resData={res.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
