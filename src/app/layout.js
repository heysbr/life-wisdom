import { Outfit } from "next/font/google";
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "700"] });
import "./globals.css";

export const metadata = {
  title: "Life Wisdom - Daily Quote Generator",
  description: "Get inspired with daily life wisdom and motivational quotes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.className}>
      <body>{children}</body>
    </html>
  );
}