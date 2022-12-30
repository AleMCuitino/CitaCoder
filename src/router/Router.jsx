import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AskDate from "../views/ask-date/AskDate";
import AllDates from "../views/all-dates/AllDates"
import Home from "../views/home/Home";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="solicitar-cita" element={<AskDate />}></Route>
                <Route path="citas" element={<AllDates />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;