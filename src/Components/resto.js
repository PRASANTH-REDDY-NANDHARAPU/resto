import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Params, useParams } from "react-router-dom";
const Item=(props)=>{
    const url="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"
    return <div className="item-card">
        <div className="item-content">
        <h1 className="veg-box">< span className="dot"></span></h1>
        <h4 className="item-name">{props.data.card.info.name}</h4>
        <p className="cost">${props.data.card.info.price/100}</p>
        <p >{props.data.card.info.description}</p>
        </div>
        <div className="relative">
         <img className="item-img" src={url+props.data.card.info.imageId}></img>
         <div className="absolute">
            <button className="add-btn">ADD</button>
         </div>
        </div>
    </div>
}

const RestoList=()=>{
    const [item,setitem]=useState([])
    const {id}=useParams()
    console.log(id)
    const restoUrl="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.6349858&lng=79.4256796&restaurantId="
    useEffect(()=>{
        fetchData()
  
      },[])
      async function fetchData(){
         const data=await fetch(restoUrl + id + "&catalog_qa=undefined&submitAction=ENTER")
         console.log(data)
         const originalData=await data.json()
         console.log(originalData)
        //  console.log(originalData.data.cards[0].card.card.info.name)
         setitem(originalData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)
      }
  
    return <div className="resto-list">
      {/* <h1>{originalData.data.cards[0].card.card.info.name}</h1> */}
      <h3>recomended({item.length})</h3>
      {
        item.map((x)=>{
            return <Item data={x}/>
        })
      }
    </div>
}
export default RestoList;