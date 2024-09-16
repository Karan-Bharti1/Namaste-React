import {CDN_URL} from "../../utils/constants"
const RestaurantCard=({restData})=>{ 
    const {name,cuisines,avgRating,costForTwo}=restData?.info
     return <div className="restaurant-card">
      <img className="restaurant-image" src={CDN_URL+restData.info.cloudinaryImageId}/>
  <h3 className="restaurant-name">{name}</h3>
  <h5>{cuisines.join(" , ")}</h5>
  <h5>{avgRating} stars</h5>
  <h5>{costForTwo}</h5>
      </div>
      }
        
export default RestaurantCard;