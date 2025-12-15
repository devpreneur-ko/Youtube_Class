import { Metadata } from "next";

export const metadata: Metadata = {
  title: `페이지 타이틀`,
  description: "페이지 설명",
  openGraph: {
    title: `페이지 타이틀`,
    description: "페이지 설명",
    url: `페이지 링크`,
    images: [{ url: "페이지 썸네일 링크", width: 1200, height: 630, alt: "og-image" }],
    type: "website",
  },
};

const MetadataPage = () => {
  return <div>메타데이터 라우팅 페이지</div>;
};

export default MetadataPage;
