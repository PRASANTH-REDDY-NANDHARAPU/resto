import { useState,useEffect  } from "react";
import TopRestoCard from "./TopRestoCard";
import React from "react";
import { ShimmerTop } from "./shimmer";
const TopResto=()=>{
    const [topResto,settopResto]=useState([])

    async function fetchData(){
        const Data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.6287557&lng=79.4191795&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const originalData=await Data.json()
        console.log(originalData)
        settopResto(originalData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)

    }
    useEffect(()=>{
        fetchData()
    },[])
    if(topResto.length==0){
        return <ShimmerTop/>
    }
    else{
        return <div className="img-flex">
        {topResto.map((x)=>{
            return <TopRestoCard resto={x} />
        })}
    </div>
    }
    
}
export default TopResto;