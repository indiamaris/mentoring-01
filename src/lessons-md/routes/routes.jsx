import { Component } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { UseEffectLesson } from "../use-effect/use-effect.lesson";
import { CSSPosition } from "../../views/css/position-css/cssPosition";



export const routerExample = createBrowserRouter([
     {
        path: '/',
        element: <Hom />   
},
    {
        path: '/use-effect-lesson',
        element: <UseEffectLesson />   
},{
       path: '/css-position',
     element:<CSSPosition/>
},
])