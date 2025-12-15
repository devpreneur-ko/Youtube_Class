"use client";

import { useCommonDrawerStore } from "@/store/ui/drawer/commonDrawerStore";
import { mixinFlex } from "@/styles/mixins";
import { Stack, styled, Typography } from "@mui/material";
import React from "react";

type PropsType = {
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
};

const CommonDrawerLinkItem = ({ title, icon, onClick }: PropsType) => {
  const { setIsOpen } = useCommonDrawerStore();
  return (
    <Container
      onClick={() => {
        onClick();
        setIsOpen(false);
      }}
    >
      <IconWrapper>{icon}</IconWrapper>
      <Title>{title}</Title>
    </Container>
  );
};

export default CommonDrawerLinkItem;

const Container = styled(Stack)`
  ${mixinFlex("row", "space-between", "center")}
  column-gap: 16px;

  width: 250px;
  height: 50px;
  padding: 0 16px;

  &:hover {
    background-color: ${({ theme }) => theme.palette.action.hover};
  }
`;

const IconWrapper = styled(Stack)`
  ${mixinFlex("column", "center", "center")}
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.palette.primary.main};
`;

const Title = styled(Typography)`
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  text-align: left;
  color: ${({ theme }) => theme.palette.text.primary};
`;
