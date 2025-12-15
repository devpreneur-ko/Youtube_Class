import { Stack, styled } from "@mui/material";
import React from "react";
import { easeInOut, motion } from "motion/react";
import { mixinFlex } from "@/styles/mixins";

type PropsType = {
  children: React.ReactNode;
  y?: number;
  duration?: number;
  style?: React.CSSProperties;
};

const CommonAnimationFloating = ({ children, y = 30, duration = 3, style }: PropsType) => {
  const animationVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: [0, -y, 0],
      transition: {
        duration,
        ease: easeInOut,
        repeat: Infinity,
      },
    },
  };

  return (
    <Container variants={animationVariants} animate={"animate"} initial="initial" style={style}>
      {children}
    </Container>
  );
};

export default CommonAnimationFloating;

const Container = styled(motion(Stack))`
  ${mixinFlex("column", "center", "center")}
`;
