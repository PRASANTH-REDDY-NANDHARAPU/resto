import Card from "./Card";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./shimmer";
import React from "react";
import { Link } from "react-router-dom";
const CardFlex=()=>{
    const[resto,setresto]=useState([])
    const[filter,setfilter]=useState([])
    const[searchText,setsearchText]=useState("")
    useEffect(()=>{
      fetchData()

    },[])
    async function fetchData(){
       const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.6287557&lng=79.4191795&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
       const originalData=await data.json()
       console.log(originalData)
       setresto(originalData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
       setfilter(originalData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
    }

    if(resto.length==0){
        return <Shimmer/>
    } else{
      return<div>
        <div className="filter-container">
                    <button onClick={()=>{
                      const high=resto.filter((y)=>{
                           return y.info.avgRating>4
                      })
                      setresto(high)
                    }} className="filter-btn">Ratings 4.0+</button>
                    <button className="filter-btn">Rs. 300-Rs. 600</button>
                    <button className="filter-btn">Less than Rs. 300</button>
                    <div className="searh">
                      <input type="input" className="input" placeholder="birynai,pasta..." value={searchText} onChange={(x)=>{
                           setsearchText(x.target.value)
                      }}></input>
                      <button onClick={()=>{
                        const fil=resto.filter((x)=>{
                          return x.info.name.toLowerCase().includes(searchText.toLowerCase())
              
                        })
                        setfilter(fil)
                      }} className="search-btn">search</button>
                    </div>
        </div>
        <div className="card-flex">
       {
        filter.map((x)=>{
            return <Link to={"/resto/"+x.info.parentId}><Card hotelData={x}/></Link>
        })
       }
     </div>
      </div> 
    }
   

    

    
     
    
}
export default CardFlex;
