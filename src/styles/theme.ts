import { createTheme, Theme } from "@mui/material/styles";

// 테마 확장
declare module "@mui/material/styles" {
  // MUI의 primary, secondary 등 색상 팔레트에 100~900 단계를 추가하기 위한 타입 확장
  interface PaletteColor {
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
  }

  // createTheme 시 색상 옵션에 100~900 단계를 추가하기 위한 타입 확장
  interface SimplePaletteColorOptions {
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
  }

  // 실제 테마에서 사용되는 색상 팔레트의 타입 정의
  interface Palette {
    gray: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    state: {
      error: string;
      warning: string;
      info: string;
      success: string;
    };
    colors: {
      [key: string]: string;
    };
  }

  // createTheme 시 전달하는 색상 옵션의 타입 정의
  interface PaletteOptions {
    gray?: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    state?: {
      error: string;
      warning: string;
      info: string;
      success: string;
    };
    colors: {
      [key: string]: string;
    };
  }

  // 배경색 타입 정의
  interface TypeBackground {
    default: string;
    paper: string;
  }

  // 텍스트 색상 타입 정의
  interface TypeText {
    white: string;
    black: string;
  }
}

// 서비스에 어울리는 색상 팔레트
export const muiTheme = createTheme({
  palette: {
    // 메인 색상 정의 (파스텔톤 블루 계열)
    primary: {
      100: "#E3F2FD", // 가장 밝은 하늘색
      200: "#BBDEFB", // 밝은 파스텔 블루
      300: "#90CAF9", // 연한 파스텔 블루
      400: "#64B5F6", // 파스텔 블루
      500: "#42A5F5", // 메인 파스텔 블루
      600: "#1E88E5", // 중간 블루
      700: "#1976D2", // 차분한 블루
      800: "#1565C0", // 딥 블루
      900: "#0D47A1", // 가장 어두운 블루
      main: "#42A5F5", // MUI 필수 속성 (500과 동일)
    },
    // 서브 색상 정의 (파스텔톤 오렌지 계열)
    secondary: {
      100: "#FFF3E0", // 가장 밝은 크림
      200: "#FFE0B2", // 밝은 파스텔 오렌지
      300: "#FFCC80", // 연한 파스텔 오렌지
      400: "#FFB74D", // 파스텔 오렌지
      500: "#FFA726", // 메인 파스텔 오렌지
      600: "#FF9800", // 중간 오렌지
      700: "#FB8C00", // 차분한 오렌지
      800: "#F57C00", // 딥 오렌지
      900: "#E65100", // 가장 어두운 오렌지
      main: "#FFA726", // MUI 필수 속성 (500과 동일)
    },
    // 기타 색상 정의 (파스텔톤 단일 색상)
    colors: {
      // 무지개색 (빨주노초파남보)
      red: "#FFB3BA", // 파스텔 레드
      orange: "#FFD1A3", // 파스텔 오렌지
      yellow: "#FFE38D", // 파스텔 옐로우
      green: "#B2E5D6", // 파스텔 그린
      blue: "#8FAEF5", // 파스텔 블루
      indigo: "#9FA8DA", // 파스텔 인디고
      violet: "#C7B5E9", // 파스텔 바이올렛
      // 디자이너들이 좋아하는 파스텔톤 색상
      pink: "#FFB7D5", // 베이비핑크
      mint: "#A7FFEB", // 민트
      lavender: "#E1BEE7", // 라벤더
      peach: "#FFCCBC", // 피치
      rose: "#F8BBD0", // 로즈핑크
      sky: "#CFE2FF", // 스카이 블루
      coral: "#FFB7A8", // 코랄
      lilac: "#D1C4E9", // 라일락
      cream: "#FFF8E1", // 크림
      sage: "#C5E1A5", // 세이지 그린
      turquoise: "#80DEEA", // 터키즈
      apricot: "#FFD1A3", // 살구색
      periwinkle: "#B39DDB", // 페리윙클
      seafoam: "#91D9D9", // 씨폼 그린
      teal: "#80DEEA", // 틸
    },
    // 상태 색상 정의
    state: {
      error: "#F44336", // 에러 색상
      warning: "#FF9800", // 경고 색상
      info: "#2196F3", // 정보 색상
      success: "#4CAF50", // 성공 색상
    },
    // 그레이 팔레트 정의
    gray: {
      100: "#F5F5F5", // 가장 밝은 회색
      200: "#EEEEEE", // 밝은 회색
      300: "#E0E0E0", // 연한 회색
      400: "#BDBDBD", // 중간 회색
      500: "#9E9E9E", // 메인 회색
      600: "#757575", // 어두운 회색
      700: "#616161", // 더 어두운 회색
      800: "#424242", // 매우 어두운 회색
      900: "#212121", // 가장 어두운 회색 (거의 검정)
    },
    // MUI 호환성을 위한 상태 색상 (기존 코드 호환성 유지)
    error: {
      main: "#F44336",
    },
    warning: {
      main: "#FF9800",
    },
    info: {
      main: "#2196F3",
    },
    success: {
      main: "#4CAF50",
    },
    // 배경색 정의
    background: {
      default: "#FFFFFF", 
      paper: "#FFFFFF",
    },
    // 텍스트 색상 정의
    text: {
      primary: "#000000",
      secondary: "#777777",
      disabled: "#AAAAAA",
      white: "#FFFFFF",
      black: "#000000",
    },
  },
  // MUI 컴포넌트 스타일 오버라이드
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          color: theme.palette.text.secondary,
          "&.Mui-focused": {
            color: theme.palette.text.primary,
          },
        }),
      },
    },
  },
});
