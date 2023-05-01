import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Page/Home/Home/Home";

// eslint-disable-next-line no-unused-vars
const router = createBrowserRouter([
    {
     path:'/'  ,
     element:<MainLayout></MainLayout> ,
     children:[
        {
path:'/',
element:<Home></Home>
        }
     ]
    }
])

export default router