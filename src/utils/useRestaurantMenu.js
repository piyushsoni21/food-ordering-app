import React, { useEffect, useState } from 'react'
import { RESTAURANT_DETAILS_URL } from './constants';


//Custom Hook
const useRestaurantMenu = (resID) => {
 
    const [restInfo, setRestInfo] = useState(null);
    useEffect(() =>{
        fetchData();
    },[]);

    const fetchData = async() =>{

        const url = RESTAURANT_DETAILS_URL + resID;
        const data = await fetch(url);
        const json  = await data.json;
        setRestInfo(json);
    };

    return restInfo;
}

export default useRestaurantMenu
