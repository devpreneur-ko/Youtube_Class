import { mixinFlex } from "@/styles/mixins";
import { Box, styled } from "@mui/material";
import React, { useState } from "react";
import { shouldForwardProp } from "@/utils/mui";

type PropsType = {
  tabList: {
    label: string;
    component: React.ReactNode;
  }[];
};

const SlideTab = ({ tabList }: PropsType) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Container>
      {/* 슬라이드 */}
      <SlideContainer>
        {/* 슬라이더 레이어 */}
        <SliderLayer>
          <Slider $itemCount={tabList.length} $currentIndex={currentIndex} />
        </SliderLayer>
        {/* 탭 레이어 */}
        <TabLayer>
          {tabList.map((tab, idx) => (
            <TabItem key={idx} onClick={() => setCurrentIndex(idx)} $isActive={currentIndex === idx}>
              {tab.label}
            </TabItem>
          ))}
        </TabLayer>
      </SlideContainer>
      {/* 컨텐츠 컨테이너 */}
      <ContentContainer>{tabList[currentIndex].component}</ContentContainer>
    </Container>
  );
};

export default SlideTab;

const Container = styled(Box)`
  width: 100%;
  height: 100%;
`;

const SlideContainer = styled(Box)`
  width: 100%;
  height: 80px;
  position: relative;

  border-radius: 16px;
  overflow: hidden;
  background-color: #f9f9f9;
`;

const SliderLayer = styled(Box)`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

type SliderProps = {
  $itemCount: number;
  $currentIndex: number;
};

const Slider = styled(Box, { shouldForwardProp })<SliderProps>`
  width: ${({ $itemCount }) => `${100 / $itemCount}%`};
  height: 100%;
  background-color: #d04c88;

  border-radius: 16px;
  transform: translateX(${({ $currentIndex }) => `${$currentIndex * 100}%`});
  transition: transform 0.3s ease-in-out;
`;

const TabLayer = styled(Box)`
  width: 100%;
  height: 100%;

  ${mixinFlex("row", "start", "start")}

  position: absolute;
  top: 0;
  left: 0;

  z-index: 2;
`;

type TabItemProps = {
  $isActive: boolean;
};

const TabItem = styled(Box, { shouldForwardProp })<TabItemProps>`
  flex: 1;
  height: 100%;

  ${mixinFlex("row", "center", "center")}
  cursor: pointer;

  font-size: 22px;
  font-weight: 800;
  color: ${({ $isActive }) => ($isActive ? "#FFFFFF" : "#3b3b3b")};
  transition: color 0.3s ease-in-out;
`;

const ContentContainer = styled(Box)`
  width: 100%;
  height: 100%;
  min-height: 300px;
  ${mixinFlex("column", "center", "center")}
`;
