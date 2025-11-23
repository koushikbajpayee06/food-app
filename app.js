import React, {lazy} from "react";
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutUs from "./src/components/AboutUs";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import Cart from "./src/components/Cart";
import RestaurentMenu from "./src/components/RestaurentMenu";
// import Grocery from "./src/components/Grocery";


const Grocery = lazy(()=>import("./src/components/Grocery"));

const AppLayout = ()=>{
    // console.log(<Body/>)
    return(
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<AboutUs/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/grocery',
                element:<Grocery/>
            },
            {
                path:'/cart',
                element:<Cart/>
            },
            {
                path:'/restaurant/:resId',
                element:<RestaurentMenu/>
            },
        ],
        errorElement:<Error/>
    }
    
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);
