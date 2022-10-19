import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

//Assets
import Chicken from "../../Assets/chicken.jpg";
import Chick from "../../Assets/c.jpg";
import Groove from "../../Assets/gg.jpg";
import Pizza from "../../Assets/pi.jpg";

// import required modules
import { Pagination, Navigation } from "swiper";

export default () => {
  return (
    <>
      <Swiper
        autoplay={{ delay: 2000 }}
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Chick} style={{ width: "125vh", height: "60vh" }} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Pizza} alt="" style={{ width: "125vh", height: "60vh" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Chicken}
            alt=""
            style={{ width: "125vh", height: "60vh" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Groove} alt="" style={{ width: "125vh", height: "60vh" }} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

// export default Swiper;
