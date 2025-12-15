"use client";


import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Stack, styled } from "@mui/material";
import { mixinFlex } from "@/styles/mixins";
import { useDeviceType } from "@/hooks/useDeviceType";
import { shouldForwardProp } from "@/utils/mui";

type PropsType = {
  items: {
    title: string;
    content: string;
  }[];
};

const CommonAccordion = ({ items }: PropsType) => {
  const { isMobile } = useDeviceType();

  return (
    <Container>
      {items.map((item, index) => (
        <StyledAccordion key={index} $isMobile={isMobile}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
            <Title $isMobile={isMobile}>Q. {item.title}</Title>
          </AccordionSummary>
          <AccordionDetails>
            <Content $isMobile={isMobile}>{item.content}</Content>
          </AccordionDetails>
        </StyledAccordion>
      ))}
    </Container>
  );
};

export default CommonAccordion;

type CommonStyleProps = {
  $isMobile: boolean;
};

const Container = styled(Stack)`
  ${mixinFlex("column", "center", "center")}
  row-gap: 16px;
  width: 100%;
`;

const StyledAccordion = styled(Accordion, { shouldForwardProp })<CommonStyleProps>`
  width: 100%;
  padding: ${({ $isMobile }) => ($isMobile ? "0px" : "16px")};
  border: 1px solid ${({ theme }) => theme.palette.divider};
  border-radius: ${({ $isMobile }) => ($isMobile ? "8px" : "16px")} !important;
  box-shadow: none;

  &:before {
    display: none;
  }
`;

const Title = styled(Typography, { shouldForwardProp })<CommonStyleProps>`
  font-size: ${({ $isMobile }) => ($isMobile ? "16px" : "24px")};
`;

const Content = styled(Typography, { shouldForwardProp })<CommonStyleProps>`
  font-size: ${({ $isMobile }) => ($isMobile ? "14px" : "16px")};
`;
