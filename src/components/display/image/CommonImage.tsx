"use client";

import { styled } from "@mui/material";
import React from "react";
import CommonImageWrapper from "./CommonImageWrapper";

type PropsType = {
  aspectRatio?: string;
  src: string;
  alt: string;
  width: string;
  height: string;
  style?: React.CSSProperties;
};

const CommonImage = ({ aspectRatio, src, alt, width, height, style }: PropsType) => {
  return (
    <CommonImageWrapper width={width} height={height}>
      <Container src={src} alt={alt} style={{ aspectRatio, ...style }} />
    </CommonImageWrapper>
  );
};

export default CommonImage;

const Container = styled("img")`
  width: 100%;
  max-width: 100%;
`;
