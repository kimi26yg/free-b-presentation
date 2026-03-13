import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "free-b · 발표",
  description: "배정 · 계약 · 체크인 — 강사 운영의 자동화 AI 통합 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
