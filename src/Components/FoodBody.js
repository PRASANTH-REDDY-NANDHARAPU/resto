import CardFlex from "./CardFlex";
import BestCardBody from "./BestCardBody";
import MindBody from "./MindBody";
import TopResto from "./TopResto";
import React from "react";
const FoodBody=()=>{
    return <div className="food-body">
        <h2 className="text">Best offers for you</h2>
        <BestCardBody/>
        <h2 className="text-2">What's on your mind?</h2>
        <MindBody/>
        <hr className="line"></hr>
        <h2 className="text">Top Restaurant Chains in Tirupati</h2>
        <TopResto/>
        <hr className="line"></hr>
        <h2 className="text">Restaurants with online food delivery in Tirupati</h2>
        <CardFlex/>
    </div>
}
export default FoodBody;