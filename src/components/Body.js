import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState,useEffect } from "react";

const Body=()=>{
  const [listOfRestaurants,setListOfRestaurants]=useState([])
  useEffect(()=>{fetchData()},[])
  const  fetchData= async()=>{
const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.73390&lng=76.78890&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
const jsonData= await data.json()

setListOfRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }


return listOfRestaurants.length === 0?<Shimmer/>: <div className="body">
    <div className="filter">
<button className="filter-btn" onClick={()=>{
  const filteredData=listOfRestaurants.filter((res)=>res.info.avgRating>4.3)
  setListOfRestaurants(filteredData)
}}>Top Rated Restaurant</button>
    </div>
    <div className="res-container">
    {listOfRestaurants.map(res => 
      <RestaurantCard key={res.info.id} restData={res}/>)}
    </div>
    
    </div>
    } 
    export default Body;