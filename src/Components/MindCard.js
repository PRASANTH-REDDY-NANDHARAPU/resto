import React from "react";
const MindCard=(props)=>{
    const {mindData} =props
    const url="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"
    return <div>
        <img className="mind-img" src={url+mindData.imageId} />
    </div>
}
export default MindCard;