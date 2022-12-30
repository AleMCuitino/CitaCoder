import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AskDate from "../views/ask-date/AskDate";
import Home from "../views/home/Home";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="askdate" element={<AskDate />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;