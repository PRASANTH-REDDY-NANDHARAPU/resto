import Navbar from "./Navbar";
import FoodBody from "./FoodBody";
import React from "react";
import About from "./about";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

import Contact from "./contact";
const Body =()=>{
    return(
        <div>
           <Navbar/>
           <Outlet/>
           {/* <FoodBody/> */}
        </div>
    )
}
export default Body;
