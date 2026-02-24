import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const antigravityFont = Outfit({
  variable: "--font-antigravity",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kriyantrai Workspace",
  description: "Collaborative workspace by Kriyantrai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${antigravityFont.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
