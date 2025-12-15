import { mixinFlex } from "@/styles/mixins";
import { Box, Button, styled } from "@mui/material";
import { useRouter } from "next/navigation";
import CommonImage from "@/components/display/image/CommonImage";
import { useState, useEffect } from "react";
import { shouldForwardProp } from "@/utils/mui";
import { motion, useScroll } from "motion/react";

const Header1 = () => {
  // 라우터
  const router = useRouter();
  // 스크롤 감지 훅
  const { scrollY } = useScroll();

  // 드롭다운 상태
  const [isExpanded, setIsExpanded] = useState(false);
  // 스크롤 상태
  const [isScrolled, setIsScrolled] = useState(false);
  // 호버 상태
  const [isHovered, setIsHovered] = useState(false);

  // 스크롤 감지
  useEffect(() => {
    // 현재 스크롤값이 0보다 크면 isScrolled를 true로 변경
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 0);
    });
    return unsubscribe;
  }, [scrollY]);

  // 스크롤 시에는 darkMode를 false로, 아니면 원래 값 사용
  const isDarkMode = isScrolled || isHovered ? false : true;

  // 로그인 바 아이템 리스트
  const loginBarItems = [
    {
      label: "홈",
      onClick: () => {
        router.push("/");
      },
    },
    {
      label: "로그인",
      onClick: () => {
        router.push("/");
      },
    },
    {
      label: "회원가입",
      onClick: () => {
        router.push("/");
      },
    },
  ];

  // GNB 바 아이템 리스트
  const gnbBarItems = [
    {
      label: "비전캠프",
      onClick: () => {
        router.push("/");
      },
      subItems: [
        {
          label: "비전파워",
          onClick: () => {
            router.push("/");
          },
        },
        {
          label: "캠프연혁",
          onClick: () => {
            router.push("/");
          },
        },
        {
          label: "캠프특징",
          onClick: () => {
            router.push("/");
          },
        },
      ],
    },
    {
      label: "키즈",
      onClick: () => {
        router.push("/");
      },
      subItems: [
        {
          label: "개요",
          onClick: () => {
            router.push("/");
          },
        },
        {
          label: "일정표",
          onClick: () => {
            router.push("/");
          },
        },
        {
          label: "장소",
          onClick: () => {
            router.push("/");
          },
        },
        {
          label: "사진보기",
          onClick: () => {
            router.push("/");
          },
        },
        {
          label: "마무리영상",
          onClick: () => {
            router.push("/");
          },
        },
      ],
    },
    {
      label: "청소년",
      onClick: () => {
        router.push("/");
      },
      subItems: [
        {
          label: "개요",
          onClick: () => {
            router.push("/");
          },
        },
        {
          label: "일정표",
          onClick: () => {
            router.push("/");
          },
        },
        {
          label: "장소",
          onClick: () => {
            router.push("/");
          },
        },
        {
          label: "사진보기",
          onClick: () => {
            router.push("/");
          },
        },
        {
          label: "마무리영상",
          onClick: () => {
            router.push("/");
          },
        },
      ],
    },
    {
      label: "청년",
      onClick: () => {
        router.push("/");
      },
      subItems: [
        {
          label: "개요",
          onClick: () => {
            router.push("/");
          },
        },
        {
          label: "일정표",
          onClick: () => {
            router.push("/");
          },
        },
        {
          label: "장소",
          onClick: () => {
            router.push("/");
          },
        },
        {
          label: "사진보기",
          onClick: () => {
            router.push("/");
          },
        },
        {
          label: "마무리영상",
          onClick: () => {
            router.push("/");
          },
        },
      ],
    },
    {
      label: "해외",
      onClick: () => {
        router.push("/");
      },
      subItems: [
        {
          label: "개요",
          onClick: () => {
            router.push("/");
          },
        },
        {
          label: "일정표",
          onClick: () => {
            router.push("/");
          },
        },
        {
          label: "장소",
          onClick: () => {
            router.push("/");
          },
        },
        {
          label: "사진보기",
          onClick: () => {
            router.push("/");
          },
        },
        {
          label: "마무리영상",
          onClick: () => {
            router.push("/");
          },
        },
      ],
    },
    {
      label: "커뮤니티",
      onClick: () => {
        router.push("/");
      },
      subItems: [
        {
          label: "공지사항",
          onClick: () => {
            router.push("/");
          },
        },
        {
          label: "간증",
          onClick: () => {
            router.push("/");
          },
        },
      ],
    },
    {
      label: "고객센터",
      onClick: () => {
        router.push("/");
      },
      subItems: [
        {
          label: "자주하는질문",
          onClick: () => {
            router.push("/");
          },
        },
        {
          label: "문의하기",
          onClick: () => {
            router.push("/");
          },
        },
        {
          label: "분실물",
          onClick: () => {
            router.push("/");
          },
        },
      ],
    },
  ];

  /////////////////////////////// 렌더링 ///////////////////////////////
  return (
    <Container
      $darkMode={isDarkMode}
      onMouseLeave={() => {
        setIsExpanded(false);
        setIsHovered(false);
      }}
      onMouseEnter={() => setIsHovered(true)}
    >
      <GridContainer>
        {/* 로그인 바 */}
        <LoginBar $darkMode={isDarkMode}>
          {/* 로그인 바 버튼 아이템 */}
          {loginBarItems.map((item) => (
            <LoginBarButton key={item.label} onClick={item.onClick} $darkMode={isDarkMode}>
              {item.label}
            </LoginBarButton>
          ))}
          {/* 빈 칸 */}
          <EmptyGridItem />
        </LoginBar>

        {/* GNB 바 */}
        <GnbBarContainer>
          <GnbBar
            initial={{ height: 80 }}
            animate={{ height: isExpanded ? "auto" : 80 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* 로고 */}
            <LogoBox>
              {isDarkMode ? (
                <CommonImage src="/img/logo-white.png" alt="logo" width="100px" height="49px" />
              ) : (
                <CommonImage src="/img/logo-black.png" alt="logo" width="100px" height="49px" />
              )}
            </LogoBox>
            <GnbItemList>
              {/* GNB 아이템 */}
              {gnbBarItems.map((item) => (
                <GnbItemColumn key={item.label}>
                  {/* 상위 아이템  */}
                  <GnbItem
                    className="gnb-item"
                    $darkMode={isDarkMode}
                    onClick={item.onClick}
                    onMouseEnter={() => setIsExpanded(true)}
                  >
                    {item.label}
                  </GnbItem>
                  {/* 하위 아이템 */}
                  <GnbSubItemList $darkMode={isDarkMode}>
                    {item.subItems.map((subItem) => (
                      <GnbSubItem key={subItem.label} $darkMode={isDarkMode}>
                        {subItem.label}
                      </GnbSubItem>
                    ))}
                  </GnbSubItemList>
                </GnbItemColumn>
              ))}
              {/* 캠프 신청 버튼 */}
              <CampApplyButton>
                <CampApplyButtonText>캠프신청</CampApplyButtonText>
              </CampApplyButton>
              {/* 빈 칸 */}
              <EmptyGridItem />
              <EmptyGridItem />
            </GnbItemList>
          </GnbBar>
        </GnbBarContainer>
      </GridContainer>
    </Container>
  );
};

export default Header1;

type DarkModePropsType = {
  $darkMode: boolean;
};

const Container = styled(Box, { shouldForwardProp })<DarkModePropsType>`
  width: 100%;

  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 100;

  ${mixinFlex("row", "center", "center")}

  background-color: ${({ $darkMode }) => ($darkMode ? "rgba(0, 0, 0, 0.6)" : "#FFFFFF")};
`;

const GridContainer = styled(Box)`
  width: 1200px;
`;

const EmptyGridItem = styled(Box)`
  width: 78px;
`;

const LoginBar = styled(Box, { shouldForwardProp })<DarkModePropsType>`
  ${mixinFlex("row", "flex-end", "center")}
  width: 100%;
  height: 40px;
  column-gap: 24px;

  color: ${({ $darkMode }) => ($darkMode ? "#FFFFFF" : "#3B3B3B")};
`;

const LoginBarButton = styled(Button, { shouldForwardProp })<DarkModePropsType>`
  width: 78px;
  height: 40px;
  padding: 0px;

  font-weight: 500;
  font-size: 14px;
  color: ${({ $darkMode }) => ($darkMode ? "#FFFFFF" : "#3B3B3B")};
`;

const GnbBarContainer = styled(Box)`
  width: 100%;
  height: 100%;

  position: relative;
`;

const GnbBar = styled(motion.div)`
  ${mixinFlex("row", "space-between", "stretch")}
  column-gap: 24px;
  overflow: hidden;
`;

const GnbItemList = styled(Box)`
  ${mixinFlex("row", "flex-end", "flex-start")}
  column-gap: 24px;
`;

const GnbItemColumn = styled(Box)`
  ${mixinFlex("column", "flex-start", "flex-start")}

  &:hover > .gnb-item {
    font-weight: 800;
    color: #d80000;
  }
`;

const GnbItem = styled(LoginBarButton)`
  height: 80px;

  font-weight: 800;
  font-size: 18px;
  color: ${({ $darkMode }) => ($darkMode ? "#FFFFFF" : "#3B3B3B")};
`;

const GnbSubItemList = styled(Box, { shouldForwardProp })<DarkModePropsType>`
  min-height: 240px;
  padding: 20px 0px;

  ${mixinFlex("column", "flex-start", "flex-start")}

  &:hover {
    background-color: #d9d9d94d;
  }
`;

const GnbSubItem = styled(GnbItem, { shouldForwardProp })<DarkModePropsType>`
  width: 78px;
  height: 40px;

  ${mixinFlex("row", "center", "center")}

  font-weight: 500;
  font-size: 14px;
  color: ${({ $darkMode }) => ($darkMode ? "#FFFFFF" : "#3B3B3B")};

  &:hover {
    font-weight: 700;
    color: #d80000;
  }
`;

const LogoBox = styled(Box)`
  width: 180px;
  height: 80px;
  ${mixinFlex("row", "center", "center")}
`;

const CampApplyButton = styled(Box)`
  width: 78px;
  height: 125px;

  position: absolute;
  top: 0;
  right: 102px;

  background-image: url("/img/camp-apply-polygon.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const CampApplyButtonText = styled(Box)`
  width: 100%;
  height: 80px;
  ${mixinFlex("column", "center", "center")}

  font-size: 18px;
  font-weight: 800;
  color: #ffffff;
`;
