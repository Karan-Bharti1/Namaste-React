import RestaurantCard from "./RestaurantCard";
import restObj from "../../utils/mockdata";

const Body=()=>{
    return <div className="body">
    <div className="search">Search</div>
    <div className="res-container">
    {restObj.map(res => 
      <RestaurantCard key={res.info.id} restData={res}/>)}
    </div>
    
    </div>
    } 
    export default Body;