"use client";

import { mixinFlex, mixinMuiCircleShapeButton } from "@/styles/mixins";
import {
  ChevronRightOutlined,
  ChevronLeftOutlined,
  ChatBubbleOutlineRounded,
  HeadsetMicOutlined,
  HistoryEduRounded,
  Instagram,
  MapOutlined,
} from "@mui/icons-material";
import { alpha, Button, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import styled from "@mui/material/styles/styled";
import { useScroll } from "motion/react";
import React, { useEffect, useState } from "react";

export type CommonGoToBarPropsType = {
  menus: MenuType[];
};

type MenuType = {
  type: "contact" | "kakao-talk" | "naver-blog" | "instagram" | "location";
  onClick: () => void;
};

const CommonGoToBar = ({ menus }: CommonGoToBarPropsType) => {
  // 간단한 스크롤 감지
  const { scrollY } = useScroll();
  const [isScrolling, setIsScrolling] = useState(false);
  const [isHide, setIsHide] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", () => {
      setIsScrolling(true);
      setTimeout(() => setIsScrolling(false), 1000 * 1);
    });
    return unsubscribe;
  }, [scrollY]);

  return (
    <>
      <Container sx={{ opacity: isHide ? 0 : isScrolling ? 0 : 1, right: isHide ? "calc(-32px - 16px)" : "16px" }}>
        {menus.map((menu) => {
          return <GoToButton key={menu.type} {...menu} />;
        })}
        <Button onClick={() => setIsHide(true)}>
          <ChevronRightOutlined />
        </Button>
      </Container>
      <ExpandButton onClick={() => setIsHide(false)} sx={{ opacity: isScrolling ? 0 : isHide ? 1 : 0 }}>
        <ChevronLeftOutlined />
      </ExpandButton>
    </>
  );
};

export default CommonGoToBar;

////////////////////////////////////////////////// 스타일 컴포넌트 //////////////////////////////////////////////////

const Container = styled(Stack)`
  position: fixed;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);

  ${mixinFlex("column", "center", "center")}
  row-gap: 8px;

  padding: 16px 8px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.palette.primary.light};
  background-color: ${({ theme }) => alpha(theme.palette.background.paper, 0.7)};
  backdrop-filter: blur(8px);
  box-shadow: 4px 4px 16px 0 rgba(0, 0, 0, 0.1);

  z-index: 100;
  transition: all 0.5s ease-in-out;
`;

const ExpandButton = styled(Button)`
  position: fixed;
  bottom: 16px;
  right: 16px;
  ${mixinMuiCircleShapeButton(48)}
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.text.secondary};
  z-index: 100;
  transition: all 0.5s ease-in-out;
  background-color: ${({ theme }) => alpha(theme.palette.background.paper, 0.7)};
  backdrop-filter: blur(8px);
  box-shadow: 0px 0px 16px 0 rgba(0, 0, 0, 0.1);
`;

////////////////////////////////////////////////// 하위 컴포넌트 //////////////////////////////////////////////////
const GoToButton = ({ type, onClick }: MenuType) => {
  const typeMap = {
    "kakao-talk": { label: "카카오톡", icon: <ChatBubbleOutlineRounded /> },
    "naver-blog": { label: "블로그", icon: <HistoryEduRounded /> },
    instagram: { label: "인스타그램", icon: <Instagram /> },
    contact: { label: "문의하기", icon: <HeadsetMicOutlined /> },
    location: { label: "오시는길", icon: <MapOutlined /> },
  };

  return (
    <GoToButtonContainer>
      <GoToButtonIcon onClick={onClick}>{typeMap[type].icon}</GoToButtonIcon>
      <Label>{typeMap[type].label}</Label>
    </GoToButtonContainer>
  );
};

const GoToButtonContainer = styled(Stack)`
  ${mixinFlex("column", "center", "center")}
  row-gap: 4px;
`;

const GoToButtonIcon = styled(Button)`
  ${mixinMuiCircleShapeButton(40)}
  border: 1px solid ${({ theme }) => theme.palette.primary.main};

  & .MuiSvgIcon-root {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

const Label = styled(Typography)`
  font-size: 12px;
  color: ${({ theme }) => theme.palette.text.secondary};
`;
