import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: "Chrome Portfolio",
  description: "Rudra Kumar's Portfolio based on google chrome design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
