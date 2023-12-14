import BestCardBodyImg from "./CardBodyImg"
import { useState } from "react"
import { useEffect } from "react";
import React from "react";
import { ShimmerScrollCon } from "./shimmer";

const BestCardBody=()=>{
    const[Cards,setCards]=useState([])
    useEffect(()=>{
        fetchData()
  
      },[])
    async function fetchData(){
       const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.6287557&lng=79.4191795&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
       const CardsData=await data.json()
       setCards(CardsData.data.cards[0].card.card.gridElements.infoWithStyle.info)
    }
    fetchData()
if(Cards.length==0){
    return <ShimmerScrollCon/>
}
else{
    return <div className="img-flex">
      
    {
        Cards.map((x)=>{
            return <BestCardBodyImg CardImg={x} />
        })
    }
    
</div>
}

    
}
export default BestCardBody;