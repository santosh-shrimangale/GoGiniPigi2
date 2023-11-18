import React from "react";
import { SwiperSlide } from "swiper/react";

function SliderContent({ content, ...rest }) {
  return <SwiperSlide {...rest}>{content}</SwiperSlide>;
}

export default SliderContent;
