import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Swiper from "./Components/Slider/Swiper";
import Homepage from "./Components/Welcome/Homepage";
// import Swiper from "./Components/Swiper";
import Home from "./Routes/home";
import NotFound from "./Routes/notfound";

export const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index" element={<Homepage />} />
        <Route path="/swiper" element={<Swiper />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
