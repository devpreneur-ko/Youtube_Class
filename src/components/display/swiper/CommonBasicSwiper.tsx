"use client";

import React from "react";
import { Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

import { styled } from "@mui/material";
import { breakpoint } from "@/styles/mixins";

type PropsType = {
  children: React.ReactNode;
  spaceBetween?: number;
  slidesPerView?: number;
  loop?: boolean;
  autoplay?: boolean;
  autoplayDelay?: number;
  rounded?: boolean;
};

const CommonBasicSwiper = ({
  children,
  spaceBetween = 30,
  slidesPerView = 1,
  loop = true,
  autoplay = true,
  autoplayDelay = 2000,
  rounded = false,
}: PropsType) => {
  return (
    <SwiperContainer $rounded={rounded}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        loop={loop}
        autoplay={
          autoplay
            ? {
                delay: autoplayDelay,
                disableOnInteraction: false,
              }
            : false
        }
      >
        {children}
      </Swiper>
    </SwiperContainer>
  );
};

export default CommonBasicSwiper;

type SwiperContainerPropsType = {
  $rounded?: boolean;
};

const SwiperContainer = styled("div")<SwiperContainerPropsType>`
  width: 100%;
  height: auto;
  aspect-ratio: 7/5;
  overflow: hidden;
  cursor: grab;

  .swiper {
    width: 100%;
    height: 100%;
  }

  /* ~ 모바일 */
  @media (min-width: 0px) and (max-width: ${breakpoint.mobile}px) {
    border-radius: ${({ $rounded }) => ($rounded ? "16px" : "0")};
  }
  /* ~ 데스크톱 */
  @media (min-width: ${breakpoint.desktop}px) {
    border-radius: ${({ $rounded }) => ($rounded ? "32px" : "0")};
  }
`;
