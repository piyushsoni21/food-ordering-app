import { restaurantList } from "../utils/constants";
import RestaurantCard from "../components/RestaurantCards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredList, setFilteredListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
 // const onlineStatus = useOnlineStatus();
  /* First Argument is callback function and Second Argument is Dependency Array
When it  will be called ? When Rendercycle is finished
*/
  useEffect(() => {
    console.log("use Effect called");
    fetchData();


    //It is similar to componentwillMount in Class Based component Implementation.
     return ()=>{
      console.log("useeffect returned");
    }; 
  }, []);

  const fetchData = async () => {
    setListOfRestaurant(restaurantList);
    setFilteredListOfRestaurant(restaurantList);
    /* const data1 = await fetch(
      "https://corsproxy.io?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5642452&lng=73.7768511&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data1.json();
    console.log(jsonData); */
  };

 /* if(onlineStatus === false){

  return (
    <h1>You are offline!!</h1>
  );
 } */
 if (listOfRestaurants.length === 0) {
   return <Shimmer />;
 }
  
  return (
    <div className="body">
      <div className="filter">
    
     {/*  <audio controls autoPlay>
        <source src="https://www.youtube.com/watch?v=n9Y2Eb4BaSg" type="audio/mpeg"/>
        Your browser does not support the audio element.
    </audio> */}
      <div className="search">
        <input type="text" className="search-box" value={searchText} onChange={(e) => {
          setSearchText(e.target.value);
        }}/>
        <button onClick={()=>{

            const filteredData = listOfRestaurants.filter((res) =>
            res.data.name.toLowerCase().includes(searchText.toLowerCase()));

            setFilteredListOfRestaurant(filteredData);
        }}> Search </button>
      </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRest = listOfRestaurants.filter(
              (rest) => rest.data.avgRating > 4
            );
            setFilteredListOfRestaurant(filteredRest);
          }}
        >
        
          Top Rated Restaurants
        </button>
      </div>
      <div className="rest-container">
        {filteredList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

/* Whenever state variable changes ,React renders the component.
 Virtual DOM : It is an actual representation of actual DOM i.e.  React elements
 It  uses Reconciliation Algorithm (React Fibre - React 16 onwards)
 Efficient DOM Manipulation
*/
