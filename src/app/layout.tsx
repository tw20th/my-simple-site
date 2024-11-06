// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "@/context/ThemeContext"; // ルートエイリアスでインポート

export const metadata: Metadata = {
  title: "TomokiのBlog",
  description: "Tomokiのブログへようこそ。自然の美しさや日々の気づきをお楽しみください。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ThemeProvider> {/* ThemeProviderでアプリ全体をラップ */}
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
