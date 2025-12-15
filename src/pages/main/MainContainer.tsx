"use client";

import { mixinFlex } from "@/styles/mixins";
import { Box, keyframes, styled, Theme } from "@mui/material";

const MainContainer = () => {
  return (
    <Container>
      <h1>Hello World!</h1>
    </Container>
  );
};

export default MainContainer;

const infiniteColorChange = (theme: Theme) => keyframes`
  0% { color: ${theme.palette.primary[100]}; }
  50% { color: ${theme.palette.primary[900]}; }
  100% { color: ${theme.palette.primary[100]}; }
`;

const Container = styled(Box)`
  width: 100%;
  min-height: 100vh;
  ${mixinFlex("column", "center", "center")}

  animation: ${({ theme }) => infiniteColorChange(theme)} 2s infinite;
`;
