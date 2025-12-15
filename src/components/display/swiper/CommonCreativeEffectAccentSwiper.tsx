"use client";

import React from "react";
import { Stack, styled } from "@mui/material";
import { Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

type PropsType = {
  children: React.ReactNode;
  autoplay?: boolean;
  autoplayDelay?: number;
  autoplayDisableOnInteraction?: boolean;
};

const CommonCreativeEffectAccentSwiper = ({
  children,
  autoplay = true,
  autoplayDelay = 3000,
  autoplayDisableOnInteraction = true,
}: PropsType) => {
  return (
    <Container>
      <Swiper
        modules={autoplay ? [Autoplay] : []}
        autoplay={
          autoplay
            ? {
                delay: autoplayDelay,
                disableOnInteraction: autoplayDisableOnInteraction,
              }
            : false
        }
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.75}
      >
        {children}
      </Swiper>
    </Container>
  );
};

export default CommonCreativeEffectAccentSwiper;

const Container = styled(Stack)`
  width: 100%;

  .swiper {
    width: 100%;
    height: 100%;
    padding: 16px 0;
  }

  .swiper-slide {
    transition: all 0.3s ease;
  }

  .swiper-slide-active {
    transform: scale(1) !important;
    z-index: 10;
  }

  .swiper-slide-prev,
  .swiper-slide-next {
    transform: scale(0.9) !important;
    opacity: 0.7;
  }
`;
