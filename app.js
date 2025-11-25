import React, {lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import AboutUs from "./src/components/AboutUs";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import Cart from "./src/components/Cart";
import RestaurentMenu from "./src/components/RestaurentMenu";
import UserContext from "./src/utills/UserContext";
// import Grocery from "./src/components/Grocery";

const AboutUs = lazy(()=>import("./src/components/AboutUs"))


const Grocery = lazy(()=>import("./src/components/Grocery"));

const AppLayout = ()=>{
    // authintication 
    const [userName, setUserName] = useState();

    useEffect(()=>{
        const data = {
            name:"Koushik Bajpayee"
        };
        setUserName(data.name);
    },[])
    return(
        <UserContext.Provider value={{loggedInUser:userName, setUserName }}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
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
                element:<Suspense fallback={<h1>Loading2...</h1>}><AboutUs/></Suspense>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/grocery',
                element:
                    <Suspense 
                        fallback={<h1>Loading ....</h1>}><Grocery/>
                    </Suspense> 
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
