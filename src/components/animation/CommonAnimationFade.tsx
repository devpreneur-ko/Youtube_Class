import { Stack, styled } from "@mui/material";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { mixinFlex } from "@/styles/mixins";

type PropsType = {
  children: React.ReactNode;
  inViewRepeat?: boolean;
  duration?: number;
  delay?: number;
};

const CommonAnimationFade = ({ children, inViewRepeat = false, duration = 0.5, delay = 0 }: PropsType) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);

  const animationVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
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

export default CommonAnimationFade;

const Container = styled(motion(Stack))`
  ${mixinFlex("column", "center", "center")}
  width: 100%;
`;
