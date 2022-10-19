import React from "react";
import MainFooter from "../../Components/Footer/MainFooter";
import MainHeader from "../../Components/Header/MainHeader";
import Drinks from "../Components/Drinks/Drinks";
import Events from "../Components/EventsCategory/Events";
import Hotel from "../Components/HotelCategory/Hotel";
import Swiper from "../Components/Slider/Swiper";

const Home = () => {
  return (
    <>
      <MainHeader />
      <Swiper />
      <Events />
      <Drinks />
      <Hotel />
      <MainFooter />
    </>
  );
};
export default Home;
