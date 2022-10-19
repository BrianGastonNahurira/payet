import React from "react";

//components imports
import MainFooter from "../../../Components/Footer/MainFooter";

//importing designs
import "../Welcome/Welcome.css";

//importing assets
import PAYET from "../../../Drawables/PAYET.png";
import Chicken from "../../../User/Assets/chicken.jpg";
import Chick from "../../../User/Assets/c.jpg";
import Groove from "../../../User/Assets/gg.jpg";
import Pizza from "../../../User/Assets/pi.jpg";
import Gaston from "../../../User/Assets/gaston.JPG";
import One from "../../../User/Assets/1.JPG";
import Two from "../../../User/Assets/2.JPG";
import Three from "../../../User/Assets/3.JPG";
import Four from "../../../User/Assets/4.JPG";

//imports from mui
import { Button, TextField } from "@mui/material";

//Home page swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
// import required modules
import { Pagination, Navigation } from "swiper";

export default () => {
  return (
    <>
      <div className="welcomepage">
        <div className="w-banner">
          <h3>PAYET is here to make all your dreams come true</h3>
        </div>
        <div className="w-header">
          <div className="w-header1">
            <h1>PAYET</h1>
            {/* <img src={PAYET} alt="" /> */}
          </div>
          <div className="w-header2">
            <div>
              <TextField
                id="outlined-search"
                label="Search field"
                type="search"
              />
            </div>
            <div className="w-header2-btn">
              <Button variant="contained" size="small" color="success">
                Search
              </Button>
            </div>
          </div>
          <div className="w-header3">
            <div>
              <Button color="success" id="w-header3-btn" variant="outlined">
                LIKA STORE
              </Button>
            </div>
            <div>
              <Button color="success" id="w-header3-btn" variant="outlined">
                E-WALLET
              </Button>
            </div>
            <div>
              <Button color="success" id="w-header3-btn" variant="outlined">
                EVENTS
              </Button>
            </div>
            <div>
              <Button color="success" id="w-header3-btn" variant="outlined">
                FOOD
              </Button>
            </div>
            <div>
              <Button color="success" id="w-header3-btn" variant="outlined">
                ACCOUNT
              </Button>
            </div>
          </div>
        </div>
        <div className="w-slider">
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
              <img
                src={Chick}
                style={{ width: "125vh", height: "80vh" }}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Pizza}
                alt=""
                style={{ width: "125vh", height: "80vh" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Chicken}
                alt=""
                style={{ width: "125vh", height: "80vh" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Groove}
                alt=""
                style={{ width: "125vh", height: "80vh" }}
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-body">
          <div className="aboutus">
            <div className="aboutus1">
              <h2>About Us</h2>
              <p>
                PAYET is an online platform that.... Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Voluptates dolorem cupiditate
                repellat nihil animi ea praesentium provident necessitatibus,
                tenetur suscipit pariatur, blanditiis voluptatum, minus fugit
                tempore est? Est, exercitationem aliquid. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Nulla necessitatibus quae
                molestiae quas perspiciatis, explicabo et fugiat distinctio
                animi sunt laborum praesentium reiciendis repellendus, quos
                atque possimus voluptates in? Harum. Voluptates dolorem
                cupiditate repellat nihil animi ea praesentium provident
                necessitatibus, tenetur suscipit pariatur, blanditiis
                voluptatum, minus fugit tempore est? Est, exercitationem
                aliquid. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Nulla necessitatibus quae molestiae quas perspiciatis,
                explicabo et fugiat distinctio animi sunt laborum praesentium
                reiciendis repellendus, quos atque possimus voluptates in?
                Harum.
              </p>
            </div>
            <div className="aboutus2">
              <img src={Gaston} alt="" />
            </div>
          </div>
          <div className="ourservices">
            <h2>What we offer to our clients</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae sit
              natus laudantium suscipit optio voluptate nostrum, quod magni
              ducimus illo ullam omnis qui quos ut quas eos rerum! Eligendi,
              minus! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quae sit natus laudantium suscipit optio voluptate nostrum, quod
              magni ducimus illo ullam omnis qui quos ut quas eos rerum!
              Eligendi, minus! Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Quae sit natus laudantium suscipit optio
              voluptate nostrum, quod magni ducimus illo ullam omnis qui quos ut
              quas eos rerum! Eligendi, minus! Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Quae sit natus laudantium suscipit
              optio voluptate nostrum, quod magni ducimus illo ullam omnis qui
              quos ut quas eos rerum! Eligendi, minus! Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Quae sit natus laudantium
              suscipit optio voluptate nostrum, quod magni ducimus illo ullam
              omnis qui quos ut quas eos rerum! Eligendi, minus! Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Quae sit natus
              laudantium suscipit optio voluptate nostrum, quod magni ducimus
              illo ullam omnis qui quos ut quas eos rerum! Eligendi, minus!
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae sit
              natus laudantium suscipit optio voluptate nostrum, quod magni
              ducimus illo ullam omnis qui quos ut quas eos rerum! Eligendi,
              minus!
            </p>
          </div>
          <div className="Ourpackage">
            <h2>Our package to Our esteemed clients</h2>
            <div className="package">
              <div className="package1">
                <img src={One} alt="" />
                <h2>Food Booking</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Reprehenderit, amet ipsum beatae labore doloremque sit
                  provident quidem ullam enim sed adipisci explicabo fuga
                  necessitatibus et consectetur maiores, non ab recusandae.
                </p>
              </div>
              <div className="package2">
                <img src={Two} alt="" />
                <h2>Lika Store</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
                  temporibus, debitis saepe incidunt laborum accusantium quaerat
                  sint facere inventore quibusdam quasi necessitatibus, esse
                  porro illo, asperiores veritatis? Excepturi, at iste!
                </p>
              </div>
              <div className="package3">
                <img src={Three} alt="" />
                <h2>Events & Festivals</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Similique dolorem commodi deserunt aliquam dignissimos porro
                  molestias totam corporis nulla? Optio reiciendis praesentium
                  doloribus consequuntur at voluptatem reprehenderit,
                  consequatur nostrum minus?
                </p>
              </div>
              <div className="package4">
                <img src={Four} alt="" />
                <h2>E-Wallet</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  ullam soluta totam. Asperiores autem ab vitae ad voluptatum
                  omnis, tenetur temporibus cum dicta quos atque, a ea quidem
                  neque excepturi.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-footer">
          <MainFooter />
        </div>
      </div>
    </>
  );
};
