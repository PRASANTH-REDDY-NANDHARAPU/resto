import React from "react";
const Card=(props)=>{
    const url="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
    const {hotelData}=props
    return <div className="card">
        <img className="food-img" src={url+hotelData.info.cloudinaryImageId} />
        <div className="card-text">
         <h3 className="hotel">{hotelData.info.name}</h3>
         <h5 className="ratings"><i class="bi bi-star-fill"></i> <span>{hotelData.info.avgRating}</span> . <span>{hotelData.info.sla.deliveryTime} mins</span></h5>
         <p className="items">{hotelData.info.cuisines.join(',')}</p>
         <p className="place">{hotelData.info.areaName}</p>
        </div>
        
    </div>
}
export default Card;
