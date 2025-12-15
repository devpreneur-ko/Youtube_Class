"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

import { styled } from "@mui/material";
import { breakpoint, mixinFlex } from "@/styles/mixins";

// Creative Effect 타입 정의
type CreativeEffectTransform = {
  translate?: [string | number, string | number, string | number];
  rotate?: [number, number, number];
  scale?: number;
};

type CreativeEffectVisual = {
  opacity?: number;
  blur?: number;
  brightness?: number;
  contrast?: number;
};

type CreativeEffectColor = {
  grayscale?: number;
  sepia?: number;
  hueRotate?: number;
  saturate?: number;
  invert?: number;
};

type CreativeEffectShadow = {
  shadow?: boolean;
  shadowOffset?: number;
  shadowScale?: number;
  shadowOpacity?: number;
  shadowColor?: string;
};

type CreativeEffectSlide = CreativeEffectTransform & 
  CreativeEffectVisual & 
  CreativeEffectColor & 
  CreativeEffectShadow;

type CreativeEffectConfig = {
  prev?: CreativeEffectSlide;
  next?: CreativeEffectSlide;
};

type PropsType = {
  children: React.ReactNode;
  spaceBetween?: number;
  slidesPerView?: number;
  loop?: boolean;
  autoplay?: boolean;
  autoplayDelay?: number;
  rounded?: boolean;
  creativeEffect?: CreativeEffectConfig;
  disableOnInteraction?: boolean;
  grabCursor?: boolean;
  centeredSlides?: boolean;
};

const CommonCreativeEffectSwiper = ({
  children,
  spaceBetween = 30,
  slidesPerView = 1,
  loop = true,
  autoplay = true,
  autoplayDelay = 2000,
  disableOnInteraction = false,
  grabCursor = true,
  centeredSlides = false,
  rounded = false,
  creativeEffect = {
    prev: {
      translate: [0, 0, -400],
      rotate: [0, 0, -20],
      opacity: 0,
    },
    next: {
      translate: ['100%', 0, 0],
      rotate: [0, 0, 20],
      opacity: 0,
    },
  },
}: PropsType) => {
  return (
    <SwiperContainer $rounded={rounded}>
      <Swiper
        modules={[EffectCreative, Autoplay]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        loop={loop}
        grabCursor={grabCursor}
        centeredSlides={centeredSlides}
        autoplay={
          autoplay
            ? {
                delay: autoplayDelay,
                disableOnInteraction: disableOnInteraction,
              }
            : false
        }
        effect="creative"
        creativeEffect={creativeEffect}
      >
        {children}
      </Swiper>
    </SwiperContainer>
  );
};

export default CommonCreativeEffectSwiper;

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

export const SwiperItem = styled(SwiperSlide)`
  position: relative;
  ${mixinFlex("column", "center", "center")}
  width: 100%;
  height: 100%;
`;

// 타입 export
export type { CreativeEffectConfig, CreativeEffectSlide }; 