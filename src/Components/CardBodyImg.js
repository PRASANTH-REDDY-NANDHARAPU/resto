import React from "react";
const BestCardBodyImg=(props)=>{
    const {CardImg}=props
    const URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/"
    return <div className="img-container">
        <img className="best-img" src={URL+CardImg.imageId} />
    </div>
}
export default BestCardBodyImg;