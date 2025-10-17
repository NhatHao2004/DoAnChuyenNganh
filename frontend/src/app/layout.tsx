import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Serif_Khmer } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSerifKhmer = Noto_Serif_Khmer({
  variable: "--font-khmer",
  subsets: ["khmer"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "វប្បធម៌ខ្មែរ | Văn Hóa Khmer Nam Bộ",
  description: "Website hỗ trợ học văn hóa tín ngưỡng tôn giáo của người Khmer Nam Bộ - Bảo tồn và lan tỏa giá trị văn hóa đặc sắc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSerifKhmer.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
