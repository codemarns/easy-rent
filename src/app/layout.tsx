import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer, Header, Message } from "./common";
import { mainStyles } from "./styles";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Easy Rent",
  description: "Created by codemarns",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const { main, container, content } = mainStyles;

  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={main.base}>
          <div className={container.base}>
            <Header />
            <div className={content.base}>{children}</div>
            <Message />
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
