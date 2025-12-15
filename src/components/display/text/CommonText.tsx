"use client";

import { styled, Typography } from "@mui/material";
import React from "react";

type PropsType = {
  children: string;
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption";
  color?: "default" | "primary" | "secondary" | "info" | "success" | "error" | "warning";
  align?: "left" | "center" | "right";
};

const CommonText = ({ children, variant, color = "default", align = "center" }: PropsType) => {
  const colorMap: Record<string, string> = {
    default: "text.primary",
    primary: "primary.main",
    secondary: "secondary.main",
    info: "info.main",
    success: "success.main",
    error: "error.main",
    warning: "warning.main",
  };

  return (
    <Container
      variant={variant}
      color={color}
      align={align}
      sx={{
        color: colorMap[color],
      }}
    >
      {children}
    </Container>
  );
};

export default CommonText;

const Container = styled(Typography)`
  width: 100%;
`;
