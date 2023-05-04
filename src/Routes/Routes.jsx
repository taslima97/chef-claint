import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Page/Home/Home/Home";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import About from "../Page/About/About";
import Login from "../Page/Login/Login";
import Register from "../Page/Rgister/Register";
import PrivetRoute from "./PrivetRoute";
import Blog from "../Page/Blog/Blog";
import Contact from "../Page/Contact/Contact";

// eslint-disable-next-line no-unused-vars
const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/about/:id',
                element:<PrivetRoute><About></About></PrivetRoute>,
                // eslint-disable-next-line no-unused-vars
                loader: ({params}) => fetch(`https://chef-server-hazel.vercel.app/chef/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
        ]
    }
])

export default router