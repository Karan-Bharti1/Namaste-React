import RestaurantCard from "./RestaurantCard";
import restObj from "../../utils/mockdata";
import { useState } from "react";

const Body=()=>{
  const [listOfRestaurants,setListOfRestaurants]=useState(restObj)
    return <div className="body">
    <div className="filter">
<button className="filter-btn" onClick={()=>{
  const filteredData=listOfRestaurants.filter((res)=>res.info.avgRating>4)
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