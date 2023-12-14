import { useState} from "react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar=()=>{
  // const[btnName,setbtnName]=useState("login")
    return(
        <div className="nav">
        <div className="logo">
          <img
            className="logo-img"
            src="data:image/png;base64,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"
          />
          <div>
            <div>
              <span className="other">Other</span>
              <span className="place">
                &nbsp;&nbsp;Nellore,Andhra Pradesh,India
                <span className="down">
                  &nbsp;&nbsp;<i className="bi bi-chevron-down"></i>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="nav-items">
          <ul>
         <Link to="/about">
         <li>
              <i className="bi bi-search"></i>&nbsp;&nbsp;Search
            </li>
         </Link>
            <Link to="/contact">
            <li>
              <i className="bi bi-gift"></i>&nbsp;&nbsp;Offers
            </li>
            </Link>
            <li>
              <i className="bi bi-patch-question"></i>&nbsp;&nbsp;Help
            </li>
            <li>
              <i className="bi bi-person-circle"></i>&nbsp;&nbsp;Sign in
            </li>
            <li>
              <i className="bi bi-bag-plus"></i>&nbsp;&nbsp;Cart
            </li>
          </ul>
          {/* <button onClick={()=>{
             return setbtnName("logout")
          }}>{btnName}</button> */}
        </div>
      </div>
    )
}
export default Navbar;
