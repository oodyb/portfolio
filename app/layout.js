// ../app/layout.js
import { Special_Elite } from "next/font/google";
import Wrapper from "./wrapper";
import "./globals.css";

const special_elite = Special_Elite({
  variable: "--font-special_elite",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Alwaleed's Portfolio",
  description: "A place where I share my experiences, projects, and thoughts!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${special_elite.variable} antialiased`}>
        <Wrapper />
        {children}
      </body>
    </html>
  );
}
