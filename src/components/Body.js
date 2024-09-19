import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState,useEffect } from "react";

const Body=()=>{
  const [listOfRestaurants,setListOfRestaurants]=useState([])
  const [filteredData,setFilteredData]=useState([])
  const [searchText,setSearchText]=useState("")
  useEffect(()=>{fetchData()},[])
  const  fetchData= async()=>{
const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.73390&lng=76.78890&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
const jsonData= await data.json()

setListOfRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
setFilteredData(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }


return filteredData.length === 0?<Shimmer/>: <div className="body">

    <div className="filter">
    <div className="search">
    <input type="text" className="search-box" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
    <button className="search-btn" onClick={()=>{
      const filterData=listOfRestaurants.filter((res)=>{return res.info.name.toLowerCase().includes(searchText.toLowerCase())

      })
      setFilteredData(filterData)
    }}>Search</button>
  </div>
<button className="filter-btn" onClick={()=>{
  const filteredData=listOfRestaurants.filter((res)=>res.info.avgRating>4.3)
  setFilteredData(filteredData)
}}>⭐ Rated </button>
    </div>
    <div className="res-container">
    {filteredData.map(res => 
      <RestaurantCard key={res.info.id} restData={res}/>)}
    </div>
    
    </div>
    } 
    export default Body;