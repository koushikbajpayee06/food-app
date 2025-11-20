import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./src/components/AboutUs";
import ContactUs from "./src/components/ContactUs";



const AppLayout = ()=>{
    // console.log(<Body/>)
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>
    },
    {
        path:'/about',
        element:<AboutUs/>
    },
    {
        path:'/contact',
        element:<ContactUs/>
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);
