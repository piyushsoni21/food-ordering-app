import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  console.log("Restaurant Id recevied is " + resId);
  const restInfo = useRestaurantMenu(resId);
  console.log("Restaurant Details obtained is" + restInfo);
  
  return (
    <div>
      <h4>This is RestaurantMenu</h4>
    </div>
  );
};

export default RestaurantMenu;
