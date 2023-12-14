import React from "react";
const TopRestoCard=(props)=>{
    const {resto}=props
    const url="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"

    return <div> <div className="card-2">
        <img className="food-img-2" src={url+resto.info.cloudinaryImageId} />
        <div className="card-text">
           <h3 className="hotel">{resto.info.name}</h3>
           <h5 className="ratings"><i class="bi bi-star-fill"></i> <span>{resto.info.avgRatings}</span> . <span>{resto.info.sla.deliveryTime} mins</span></h5>
           <p className="items">{resto.info.cuisines}</p>
           <p className="place">{resto.info.areaName}</p>
        </div>
    </div>
    </div>
}
export default TopRestoCard;