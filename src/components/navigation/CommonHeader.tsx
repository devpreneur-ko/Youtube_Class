"use client";

import { useDeviceType } from "@/hooks/useDeviceType";
import { shouldForwardProp } from "@/utils/mui";
import { mixinFlex } from "@/styles/mixins";
import { Button, Stack, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useScroll } from "motion/react";
import Image from "next/image";
import CommonImageWrapper from "../display/image/CommonImageWrapper";
import { MenuOutlined } from "@mui/icons-material";
import { useCommonDrawerStore } from "@/store/ui/drawer/commonDrawerStore";
import CommonDrawerLinkItem from "../display/drawer/CommonDrawerLinkItem";

type PropsType = {
  menuList: {
    title: string;
    icon: React.ReactNode;
    onClick: () => void;
  }[];
};

const CommonHeader = ({ menuList }: PropsType) => {
  const { isMobile } = useDeviceType();
  const { scrollY } = useScroll();
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", () => {
      setIsScrolling(true);
      setTimeout(() => setIsScrolling(false), 1000 * 1);
    });
    return unsubscribe;
  }, [scrollY]);

  return (
    <>
      {isMobile ? (
        <MobileHeader isScrolling={isScrolling} menuList={menuList} />
      ) : (
        <DesktopHeader isScrolling={isScrolling} menuList={menuList} />
      )}
    </>
  );
};

export default CommonHeader;

////////////////////////////////////////////////// 데스크탑 컴포넌트 //////////////////////////////////////////////////
type HeaderPropsType = {
  isScrolling: boolean;
  menuList: {
    title: string;
    icon: React.ReactNode;
    onClick: () => void;
  }[];
};

const DesktopHeader = ({ isScrolling, menuList }: HeaderPropsType) => {
  return (
    <DesktopHeaderContainer $isScrolling={isScrolling}>
      <CommonImageWrapper width="75px" height="75px">
        <Image src="/img/logo-500.png" alt="logo" fill />
      </CommonImageWrapper>
      <MenuListWrapper>
        {menuList.map((item) => (
          <MenuTextButton key={item.title} onClick={item.onClick}>
            {item.title}
          </MenuTextButton>
        ))}
      </MenuListWrapper>
    </DesktopHeaderContainer>
  );
};

type DesktopHeaderContainerPropsType = {
  $isScrolling: boolean;
};

const DesktopHeaderContainer = styled(Stack, { shouldForwardProp })<DesktopHeaderContainerPropsType>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  ${mixinFlex("row", "space-between", "center")}
  width: 100vw;
  height: 75px;
  padding: 0 24px;

  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);

  transition: opacity 0.3s ease-in-out;
  opacity: ${({ $isScrolling }) => ($isScrolling ? 0 : 1)};
`;

const MenuListWrapper = styled(Stack)`
  ${mixinFlex("row", "space-between", "center")}
  height: 100%;
`;

const MenuTextButton = styled(Button)``;

////////////////////////////////////////////////// 모바일 컴포넌트 //////////////////////////////////////////////////

const MobileHeader = ({ isScrolling, menuList }: HeaderPropsType) => {
  const { setIsOpen, setDirection, setChildren } = useCommonDrawerStore();

  function openDrawer() {
    setIsOpen(true);
    setDirection("right");
    setChildren(menuList.map((item) => <CommonDrawerLinkItem key={item.title} {...item} />));
  }

  return (
    <MobileHeaderContainer $isScrolling={isScrolling}>
      <CommonImageWrapper width="50px" height="50px">
        <Image src="/img/logo-500.png" alt="logo" fill />
      </CommonImageWrapper>
      <MenuIcon onClick={openDrawer} />
    </MobileHeaderContainer>
  );
};

const MobileHeaderContainer = styled(DesktopHeaderContainer)`
  height: 50px;
  padding: 0 16px;
`;

const MenuIcon = styled(MenuOutlined)`
  color: ${({ theme }) => theme.palette.text.secondary};
`;

////////////////////////////////////////////////// 공통 스타일 컴포넌트 //////////////////////////////////////////////////
