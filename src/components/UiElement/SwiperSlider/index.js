import React from "react";
import { Swiper } from "swiper/react";

function SwiperSlider({ children, ...setting }) {
  return (
    <>
      <Swiper {...setting} className="mySwiper">
        {children}
      </Swiper>
    </>
  );
}

export default SwiperSlider;
