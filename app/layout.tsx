import type { Metadata } from "next";
import { PropsWithChildren } from "react";

import { ChackraProvider } from "./providers/chakra";
import "@/styles/globals.css";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko-KR">
      <body>
        <ChackraProvider>{children}</ChackraProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  openGraph: {
    type: "website",
    title: "자리어때 | Seat Choice",
    description: "공연장 좌석 리뷰 사이트",
  },

  twitter: {
    title: "자리어때 | Seat Choice",
    description: "공연장 좌석 리뷰 사이트",
    card: "summary_large_image",
    images: {
      url: "https://raw.githubusercontent.com/seatchoice/frontend/develop/public/logo.png",
      alt: "Seatchoice Logo",
    },
  },
};
