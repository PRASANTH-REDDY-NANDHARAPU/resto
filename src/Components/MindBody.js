import { useState } from "react"
import { useEffect } from "react"
import MindCard from "./MindCard"
import React from "react";
import { ShimmerRoundCon } from "./shimmer";
const MindBody=()=>{
    const[Cards,setCards]=useState([])
    useEffect(()=>{
        fetchData()
  
      },[])
    async function fetchData(){
       const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.6287557&lng=79.4191795&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
       const CardsData=await data.json()
       setCards(CardsData.data.cards[1].card.card.gridElements.infoWithStyle.info)
    }
    if(Cards.length==0){
      return <ShimmerRoundCon/>
    }
    else{
      return<div className="img-flex">
      {Cards.map((x)=>{
          return <MindCard mindData={x} />
      })}
     </div>
    }
     
}
export default MindBody;