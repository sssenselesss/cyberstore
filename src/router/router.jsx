import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Root from "../pages/Root";
import MainPage from "../pages/MainPage";


const router = createBrowserRouter([
    
    {
        path:'/',
        element: <Root />,
        children: [
            {
                path:'/',
                element: <MainPage />,
                index: true
            },
        ]
        
    }
])

export default router