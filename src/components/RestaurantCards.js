const styleCard = {
  backgroundColor: "#f0f0f0",
};


//one way to include style in functional component is style ={{backgroundColor : "#f0f0f0"}}

/* const RestaurantCard = (props) =>{
    const {resName , cuisine} = props;//Destructuring
    return (
        <div className="res-card" style={styleCard}>
           <img className="food-img" alt="veggieImg" src={subveggieName}  />
          <h3> {cuisine}</h3>
          <h4>4.5 ****</h4>
        </div>

);
}; */
const RestaurantCard = (props) => {
  const { restData } = props; //Destructuring
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="food-img"
        alt="veggieImg"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          restData.data.cloudinaryImageId
        }
      />
       <h4>{restData.data.name}</h4>
      <h3> {restData.data.cuisines.join(",")}</h3>
      <h4>{restData.data.avgRating}</h4>
      <h4>{restData.data.costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
