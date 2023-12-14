import React from "react";
import Card from "./Card";
const ShimmerScroll=()=>{
    return<div>
         <div  className="s-best"></div>
    </div>
}
export const ShimmerScrollCon=()=>{
    return <div className="img-flex">
        <ShimmerScroll/>
        <ShimmerScroll/>
        <ShimmerScroll/>
        <ShimmerScroll/>
        <ShimmerScroll/>
        <ShimmerScroll/>
        <ShimmerScroll/>
    </div>
}
const ShimmerRound=()=>{
    return <div  className="center">
         <div  className="s-round"></div>
         <h1 className="s-h5"></h1>

    </div>
}
export const ShimmerRoundCon=()=>{
    return <div className="img-flex">
        <ShimmerRound/>
        <ShimmerRound/>
        <ShimmerRound/>
        <ShimmerRound/>
        <ShimmerRound/>
        <ShimmerRound/>
        <ShimmerRound/>
        <ShimmerRound/>
    </div>
}
const ShimmerCard=()=>{
    return<div>
        <div className="shimmer">
           <div className="s-img"></div>
           <h1 className="s-h1"></h1>
           <h1 className="s-h2"></h1>
           <h1 className="s-h3"></h1>
           <h1 className="s-h4"></h1>
    </div>
    </div>
}
const Shimmer=()=>{
    return <div className="card-flex">
     <ShimmerCard/>
     <ShimmerCard/>
     <ShimmerCard/>
     <ShimmerCard/>
     <ShimmerCard/>
     <ShimmerCard/>
     <ShimmerCard/>
     <ShimmerCard/>
     <ShimmerCard/>
     <ShimmerCard/>
     <ShimmerCard/>
     <ShimmerCard/>
     <ShimmerCard/>
     <ShimmerCard/>
     <ShimmerCard/>
     <ShimmerCard/>
    </div>
}
const ShimmerTopCard=()=>{
    return <div>
        <div className="top">
        <div className="s-img"></div>
           <h1 className="s-h1"></h1>
           <h1 className="s-h2"></h1>
           <h1 className="s-h3"></h1>
           <h1 className="s-h4"></h1>
        </div>
    </div>
}
export const ShimmerTop=()=>{
    return<div className="img-flex">
    <ShimmerTopCard/>
    <ShimmerTopCard/>
    <ShimmerTopCard/>
    <ShimmerTopCard/>
    <ShimmerTopCard/>
    <ShimmerTopCard/>
    <ShimmerTopCard/>
    <ShimmerTopCard/>
    <ShimmerTopCard/>
    </div>
}
export default Shimmer;