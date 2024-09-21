import {CDN_URL} from "../../utils/constants"
const RestaurantCard=({restData})=>{ 
    const {name,cuisines,avgRating,costForTwo, sla,availability}=restData?.info
     return <div className="restaurant-card">
      <img className="restaurant-image" src={CDN_URL+restData.info.cloudinaryImageId}/>
  <h3 className="restaurant-name">{name}</h3>
  <h5>{cuisines.join(" , ")}</h5>
<div className="rest-card-inner">

  <h5>{avgRating} stars</h5>
  <h5>{costForTwo}</h5>
  <h5>{sla.deliveryTime} minutes</h5>
  <h5>{availability.opened?<h5>Opened</h5>:<h5>Closed</h5>}</h5>
</div>
      </div>
      }
        
export default RestaurantCard;