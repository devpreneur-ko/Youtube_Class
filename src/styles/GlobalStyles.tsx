"use client";
import { Global, css } from "@emotion/react";
import { useTheme } from "@mui/material/styles";

const GlobalStyles = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        /* 폰트 설정 */
        @font-face {
          font-family: "Pretendard-Regular";
          src: url("https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
            format("woff");
          font-style: normal;
          font-display: swap;
        }

        /* 리셋 스타일 */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Pretendard-Regular";
        }
        
        /* 기본 스타일 */
        html,
        body {
          font-family: ${theme.typography.fontFamily};
          line-height: 1.5;
          color: ${theme.palette.text.primary};
          background-color: ${theme.palette.background.default};

          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* 스크롤바 스타일링 */
        ::-webkit-scrollbar {
          width: 8px;
        }

        /* 스크롤바 트랙 스타일링 */
        ::-webkit-scrollbar-track {
          background: ${theme.palette.background.paper};
        }

        /* 스크롤바 썸 스타일링 */
        ::-webkit-scrollbar-thumb {
          background: ${theme.palette.divider};
          border-radius: 4px;
        }

        /* 스크롤바 썸 호버 스타일링 */
        ::-webkit-scrollbar-thumb:hover {
          background: ${theme.palette.text.disabled};
        }

        /* 링크 스타일링 */
        a {
          color: ${theme.palette.primary.main};
          text-decoration: none;
          transition: color 0.2s ease;
        }

        /* 링크 호버 스타일링 */
        a:hover {
          color: ${theme.palette.primary.dark};
        }

        /* 텍스트 선택 스타일링 */
        ::selection {
          background-color: ${theme.palette.primary.light};
          color: ${theme.palette.primary.contrastText};
        }
      `}
    />
  );
};

export default GlobalStyles;
