import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trader Analytics",
  description: "Polymarket copy trading analytics dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
