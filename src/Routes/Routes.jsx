import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Page/Home/Home/Home";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import About from "../Page/About/About";

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
                element:<About></About>,
                // eslint-disable-next-line no-unused-vars
                loader: ({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
            }
        ]
    }
])

export default router