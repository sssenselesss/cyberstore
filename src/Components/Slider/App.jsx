import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import PRODUCTS from "../../data/products";
import PriceWithDiscount from "../../utils/PriceWithDiscount";
import FormatPercent from "../../utils/FormatPercent";

export default function App() {
  const [slider, setSlider] = useState(PRODUCTS);

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {slider.map((slide) => {
          return (
            <SwiperSlide>
              <img src={slide.image} />
              <div className="slider-text">
                <h3>{slide.title}</h3>
                <div className="wrapper">
                  <div className="slider-sale">
                    {FormatPercent(slide.sale)}
                  </div>
                  <div className="slider-price">
                    {PriceWithDiscount(slide.price, slide.sale)} ₽{" "}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
