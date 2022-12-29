import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../views/home/Home";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {<Home />}></Route>
            </Routes>
        </BrowserRouter>
    )
 }

 export default Router;