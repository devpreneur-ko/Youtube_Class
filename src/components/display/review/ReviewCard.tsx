"use client";

import { Stack, styled, alpha, Typography, Chip } from "@mui/material";
import React from "react";
import { shouldForwardProp } from "@/utils/mui";
import { StarOutlined } from "@mui/icons-material";
import { mixinFlex, mixinMultilineEllipsis } from "@/styles/mixins";

export type ReviewType = {
  type: "kakao" | "naver" | "etc";
  nickName: string;
  reviewText: string;
  tags: string[];
  onClick?: () => void;
};

type PropsType = ReviewType;

const ReviewCard = ({ type, nickName, reviewText, tags, onClick }: PropsType) => {
  return (
    <Container $type={type} onClick={onClick}>
      {/* 헤더 */}
      <Header $type={type}>
        <LogoText>{type === "kakao" ? "K" : type === "naver" ? "N" : ""}</LogoText>
        <FiveStar>
          {Array.from({ length: 5 }).map((_, index) => (
            <StarIcon key={index} />
          ))}
        </FiveStar>
      </Header>

      {/* 바디 */}
      <Body>
        <NickName>{nickName}</NickName>
        <ReviewText>{reviewText}</ReviewText>
        <Tags>
          {tags.map((tag, index) => (
            <Tag $type={type} key={`tag-${index}`} label={`# ${tag}`} size="small" />
          ))}
        </Tags>
      </Body>
    </Container>
  );
};

export default ReviewCard;

type ContainerPropsType = {
  $type: "kakao" | "naver" | "etc";
};

const Container = styled(Stack, { shouldForwardProp })<ContainerPropsType>`
  width: 200px;
  aspect-ratio: 1/1;
  border: 1px solid
    ${({ theme, $type }) =>
      alpha($type === "kakao" ? "#ffcd00" : $type === "naver" ? "#03cf5d" : theme.palette.primary.main, 0.2)};
  box-shadow: 0 0 16px 0
    ${({ theme, $type }) =>
      alpha($type === "kakao" ? "#ffcd00" : $type === "naver" ? "#03cf5d" : theme.palette.primary.main, 0.2)};
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
`;

type HeaderPropsType = {
  $type: "kakao" | "naver" | "etc";
};

const Header = styled(Stack, { shouldForwardProp })<HeaderPropsType>`
  ${mixinFlex("row", "space-between", "center")}
  width: 100%;
  height: 40px;
  padding: 0 16px;
  background-color: ${({ $type, theme }) =>
    $type === "kakao" ? "#ffcd00" : $type === "naver" ? "#03cf5d" : theme.palette.primary.main};
`;

const LogoText = styled(Typography)`
  color: white;
  font-size: 16px;
  font-weight: 700;
`;

const StarIcon = styled(StarOutlined)`
  color: white;
  width: 16px;
  height: 16px;
`;

const FiveStar = styled(Stack)`
  ${mixinFlex("row", "center", "center")}
`;

const Body = styled(Stack)`
  ${mixinFlex("column", "space-evenly", "start")}
  width: 100%;
  height: 100%;
  padding: 8px;
`;

const NickName = styled(Typography)`
  font-size: 12px;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

const ReviewText = styled(Typography)`
  font-size: 14px;
  color: ${({ theme }) => theme.palette.text.primary};
  ${mixinMultilineEllipsis(3)}
`;

const Tags = styled(Stack)`
  ${mixinFlex("row", "flex-start", "center")}
  column-gap: 8px;
`;

type TagPropsType = {
  $type: "kakao" | "naver" | "etc";
};

const Tag = styled(Chip, { shouldForwardProp })<TagPropsType>`
  font-size: 8px;
  background-color: transparent;
  border: 1px solid
    ${({ $type, theme }) =>
      $type === "kakao" ? "#ffcd00" : $type === "naver" ? "#03cf5d" : theme.palette.primary.main};
  color: ${({ $type, theme }) =>
    $type === "kakao" ? "#ffcd00" : $type === "naver" ? "#03cf5d" : theme.palette.primary.main};
`;
