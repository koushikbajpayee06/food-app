import React from 'react'
import RestaurentCard from './RestaurentCard'
// restaurantList.js

const extractImageId = (id) => {
  if (!id) return "";
  if (!id.includes("/")) return id; // already valid
  const parts = id.split("/");
  const file = parts[parts.length - 1];
  return file.split(".")[0];
};


const workingImageIds = {
  "123456": "xqwpuhgnsaf18te7zvtv",
  "234567": "e20e64a40e5bcd0f77ed6c2b84d343d3",
  "345678": "e0839ff574213e6f35b3899ebf1fc597",
  "456789": "bb7acc10e8cec4a18d761e63a988e6e7",
  "567890": "6e3c1f1c5f6f0a5a14c3dc8b63d696e5",
  "678901": "uvjxdbgmw3bkhfc4cifs",
  "789012": "uugqtuwvij1l5h4img7t",
  "890123": "x4uyxvihmg8yzifgcn3o",
  "901234": "ac3hwovkemytld3rpkbq",
};


const resList = [
  {
    id: "123456",
    name: "Pizza Paradise",
    image: extractImageId("RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/6def0f0f-9e6c-45c0-b5e6-05af750f27b5_795906.JPG"),
    locality: "MG Road",
    areaName: "Central District",
    costForTwo: "₹400 for two",
    cuisines: ["Pizza", "Italian", "Fast Food"],
    avgRating: 4.3,
    totalRatings: "10K+ ratings",
    veg: false,
    deliveryTime: 30,
    discount: { header: "50% OFF", subHeader: "UPTO ₹100" }
  },
  {
    id: "234567",
    name: "Burger Hub",
    image: extractImageId("RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/acfcaacc-edf0-4189-8264-d614d312c0ee_740457.JPG"),
    locality: "Park Street",
    areaName: "Downtown",
    costForTwo: "₹300 for two",
    cuisines: ["Burgers", "American", "Fast Food"],
    avgRating: 4.5,
    totalRatings: "15K+ ratings",
    veg: false,
    deliveryTime: 25,
    discount: { header: "40% OFF", subHeader: "UPTO ₹80" }
  },
  {
    id: "345678",
    name: "Green Bites",
    image: extractImageId("e0839ff574213e6f35b3899ebf1fc597"),
    locality: "Residency Road",
    areaName: "South Zone",
    costForTwo: "₹250 for two",
    cuisines: ["Healthy Food", "Salads", "Vegan"],
    avgRating: 4.7,
    totalRatings: "8K+ ratings",
    veg: true,
    deliveryTime: 20,
    discount: { header: "30% OFF", subHeader: "UPTO ₹75" }
  },
  {
    id: "456789",
    name: "Spice Kingdom",
    image: extractImageId("rng/md/carousel/production/indian101"),
    locality: "Brigade Road",
    areaName: "City Center",
    costForTwo: "₹500 for two",
    cuisines: ["Indian", "North Indian", "Biryani"],
    avgRating: 4.2,
    totalRatings: "12K+ ratings",
    veg: false,
    deliveryTime: 35,
    discount: { header: "20% OFF", subHeader: "UPTO ₹50" }
  },
  {
    id: "567890",
    name: "Chinese Dragon",
    image: extractImageId("RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/ba9f1f59-30d5-44de-afad-df6db8471ead_9648.jpg"),
    locality: "Commercial Street",
    areaName: "East District",
    costForTwo: "₹350 for two",
    cuisines: ["Chinese", "Asian", "Thai"],
    avgRating: 4.4,
    totalRatings: "9K+ ratings",
    veg: false,
    deliveryTime: 28,
    discount: { header: "60% OFF", subHeader: "UPTO ₹120" }
  },
  {
    id: "678901",
    name: "Dessert Delight",
    image: extractImageId("RX_THUMBNAIL/IMAGES/VENDOR/2024/11/8/731001f1-f1c4-4f5f-849f-79a697cb0b72_390173.jpg"),
    locality: "Lavelle Road",
    areaName: "West End",
    costForTwo: "₹200 for two",
    cuisines: ["Desserts", "Ice Cream", "Bakery"],
    avgRating: 4.6,
    totalRatings: "7K+ ratings",
    veg: true,
    deliveryTime: 22,
    discount: { header: "25% OFF", subHeader: "UPTO ₹60" }
  },
  {
    id: "789012",
    name: "Sushi Station",
    image: extractImageId("RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/acfcaacc-edf0-4189-8264-d614d312c0ee_740457.JPG"),
    locality: "Indiranagar",
    areaName: "Uptown",
    costForTwo: "₹800 for two",
    cuisines: ["Japanese", "Sushi", "Asian"],
    avgRating: 4.8,
    totalRatings: "5K+ ratings",
    veg: false,
    deliveryTime: 40,
    discount: { header: "15% OFF", subHeader: "UPTO ₹150" }
  },
  {
    id: "890123",
    name: "South Spice",
    image: extractImageId("RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/6def0f0f-9e6c-45c0-b5e6-05af750f27b5_795906.JPG"),
    locality: "Jayanagar",
    areaName: "South Bangalore",
    costForTwo: "₹300 for two",
    cuisines: ["South Indian", "Dosa", "Idli"],
    avgRating: 4.5,
    totalRatings: "11K+ ratings",
    veg: true,
    deliveryTime: 25,
    discount: { header: "35% OFF", subHeader: "UPTO ₹70" }
  },
  {
    id: "901234",
    name: "Pasta Palace",
    image: extractImageId("RX_THUMBNAIL/IMAGES/VENDOR/2025/10/17/7bd350a8-55e7-459b-83a2-e250e670d194_14558.JPG"),
    locality: "Koramangala",
    areaName: "Tech Hub",
    costForTwo: "₹450 for two",
    cuisines: ["Italian", "Pasta", "Continental"],
    avgRating: 4.1,
    totalRatings: "6K+ ratings",
    veg: false,
    deliveryTime: 32,
    discount: { header: "45% OFF", subHeader: "UPTO ₹90" }
  }
];

const cleanedList = resList.map((res) => ({
  ...res,
  image: workingImageIds[res.id] || res.image
}));



const Body = () => {
  return (
    <div className='body'>
      <div className='search'></div>
      <div className='res-container'>
        {
          cleanedList.map((res)=><RestaurentCard key={res.id} resData={res}/>)
        }
      </div>
    </div>
  )
}

export default Body
