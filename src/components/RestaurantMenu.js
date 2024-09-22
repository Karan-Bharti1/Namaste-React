import { useEffect, useState } from "react";
import { Menu_Url } from "../../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu=()=>{
    const [info,setInfo]=useState(null)
    useEffect(()=>{
fetchMenu()
    },[])
    const {restId}=useParams()
    
    const fetchMenu=async()=>
    {
       const data=await fetch(Menu_Url+restId)
       const json=await data.json()
    setInfo(json.data)
    console.log(json.data)
    }
    if (info===null) {return <Shimmer/>}
    const {cuisines,avgRating,city,costForTwoMessage,name,isOpen,locality}=info?.cards[2]?.card?.card?.info
    const {itemCards}=info?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    return(
        <div className="menu">
            
            <div className="rest-intro-card">
                <h1>🛎️{name} </h1>
            <h2>{costForTwoMessage}  ({city} : {locality}📌)</h2>

            </div>
            <div className="rest-info-card">
                <div>{isOpen?<h4>Opened</h4>:<h4>Closed</h4>}</div>
                <h4>{city}: {locality}</h4>
                <h4>{avgRating}⭐</h4>
            </div>
            <h3 className="cuisines-tag">🍽️ {cuisines.join(", ")}</h3>
<div></div>
    {console.log(itemCards)}        
<ul>
  {itemCards.map((res)=>{
return(
    <li key={res?.card?.info?.id}>{res?.card?.info?.name} : {res?.card?.info?.price/100 }</li>
)
  })}  
</ul>
        </div>
    )
}
export default RestaurantMenu;