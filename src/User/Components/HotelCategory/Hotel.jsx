import React from "react";
import Grove from "../../Assets/groove.jpeg";

//swiper requirements
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/css/autoplay";
export default () => {
  return (
    <>
      <div className="events-ctr">
        <div className="img-ctr">
          <h3 style={{ color: "#39b54a", padding: "10px" }}>
            Upcoming Festivals | View all festivals ahead
          </h3>
        </div>

        <Swiper
          // autoplay={{ delay: 800 }}
          slidesPerView={4}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {/* <div className="event-dsc"> */}
          {data.map((row) => (
            <SwiperSlide style={{ display: "flex" }}>
              <div
                key={row.Event}
                style={{ padding: "10px", background: "#39b54a" }}
              >
                <img
                  style={{ width: "60vh", height: "80%" }}
                  src={Grove}
                  alt=""
                />
                <div className="det-p">
                  <p>{row.Event}</p>
                  <p>{row.Date}</p>
                  <p>{row.Venue}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* </div> */}
        </Swiper>
      </div>
    </>
  );
};

const data = [
  {
    Event: "Mash JobbieFestival",
    Date: "04-10-2000",
    Venue: "Vegas Hotel",
  },
  {
    Event: "Kanlyte Uganda Ltd",
    Date: "04-10-2000",
    Venue: "Vegas Hotel",
  },
  {
    Event: "Mash JobbieFestival",
    Date: "04-10-2000",
    Venue: "Vegas Hotel",
  },
  {
    Event: "Kanlyte Uganda Ltd",
    Date: "04-10-2000",
    Venue: "Vegas Hotel",
  },
  {
    Event: "Mash JobbieFestival",
    Date: "04-10-2000",
    Venue: "Vegas Hotel",
  },
  {
    Event: "Kanlyte Uganda Ltd",
    Date: "04-10-2000",
    Venue: "Vegas Hotel",
  },
  {
    Event: "Mash JobbieFestival",
    Date: "04-10-2000",
    Venue: "Vegas Hotel",
  },
  {
    Event: "Kanlyte Uganda Ltd",
    Date: "04-10-2000",
    Venue: "Vegas Hotel",
  },
  {
    Event: "Mash JobbieFestival",
    Date: "04-10-2000",
    Venue: "Vegas Hotel",
  },
  {
    Event: "Kanlyte Uganda Ltd",
    Date: "04-10-2000",
    Venue: "Vegas Hotel",
  },
  {
    Event: "Mash JobbieFestival",
    Date: "04-10-2000",
    Venue: "Vegas Hotel",
  },
  {
    Event: "Kanlyte Uganda Ltd",
    Date: "04-10-2000",
    Venue: "Vegas Hotel",
  },
];
