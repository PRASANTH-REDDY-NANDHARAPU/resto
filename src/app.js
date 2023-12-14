import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Body from "./Components/Body";
import About from "./Components/about";
import FoodBody from "./Components/FoodBody";
import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import Contact from "./Components/contact";
import RestoList from "./Components/resto";

const rotes=createBrowserRouter([
    {
        path:"/",
        element:<Body/>,
        children:[
            {
                path:"/",
                element:<FoodBody/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/resto/:id",
                element:<RestoList/>
            }
        ]
    },
    
])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={rotes}/>)