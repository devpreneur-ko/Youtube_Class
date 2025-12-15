"use client";

import { mixinFlex } from "@/styles/mixins";
import { shouldForwardProp } from "@/utils/mui";
import { Stack, styled } from "@mui/material";
import React from "react";

type PropsType = {
  children: React.ReactNode;
  width: string;
  height: string;
};
const CommonImageWrapper = ({ children, width, height }: PropsType) => {
  return (
    <Container $width={width} $height={height}>
      {children}
    </Container>
  );
};

export default CommonImageWrapper;

type ContainerPropsType = {
  $width: string;
  $height: string;
};

const Container = styled(Stack, { shouldForwardProp })<ContainerPropsType>`
  position: relative;
  ${mixinFlex("column", "center", "center")}
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;
