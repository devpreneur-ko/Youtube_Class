import { Stack, styled } from "@mui/material";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

type PropsType = {
  children: React.ReactNode;
  inViewRepeat?: boolean;
  duration?: number;
  delay?: number;
  direction?: "left" | "right" | "top" | "bottom";
  distance?: number;
};

const CommonAnimationSlide = ({
  children,
  inViewRepeat = false,
  duration = 0.5,
  delay = 0,
  direction = "top",
  distance = 100,
}: PropsType) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);

  const directionVariantMap = {
    left: {
      initial: {
        x: distance,
      },
      animate: {
        x: 0,
      },
    },
    right: {
      initial: {
        x: -distance,
      },
      animate: {
        x: 0,
      },
    },
    top: {
      initial: {
        y: distance,
      },
      animate: {
        y: 0,
      },
    },
    bottom: {
      initial: {
        y: -distance,
      },
      animate: {
        y: 0,
      },
    },
  };

  const animationVariants = {
    initial: {
      opacity: 0,
      ...directionVariantMap[direction].initial,
    },
    animate: {
      opacity: 1,
      ...directionVariantMap[direction].animate,
      transition: {
        duration,
        delay,
      },
    },
  };

  return (
    <Container
      ref={containerRef}
      variants={animationVariants}
      animate={isInView && "animate"}
      viewport={{ once: !inViewRepeat, amount: 0.5 }}
      initial="initial"
    >
      {children}
    </Container>
  );
};

export default CommonAnimationSlide;

const Container = styled(motion(Stack))`
  width: 100%;
`;
