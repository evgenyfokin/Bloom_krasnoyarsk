import './App.css'
import './scss/app.scss'
import Home from "./pages/Home.js";
import NotFound from "./pages/NotFound.js";
import {Routes, Route} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.js";
import React from "react";

const Cart = React.lazy(() => import(/* webpackChunkName: Cart */'./pages/Cart'))

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route path="" element={<Home/>}/>
                <Route path="cart"
                       element={
                           <React.Suspense fallback={<div>Loading...</div>}>
                               <Cart/>
                           </React.Suspense>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    )
}

export default App
