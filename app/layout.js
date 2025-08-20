// ../app/layout.js

import { Orbitron, Audiowide, Press_Start_2P, VT323, Monoton } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: "400", // min: 400 - max: 900
});

const audiowide = Audiowide({
  variable: "--font-audiowide",
  subsets: ["latin"],
  weight: "400",
});

const pressStart2P = Press_Start_2P({
  variable: "--font-pressStart2P",
  subsets: ["latin"],
  weight: "400",
});

const vt323 = VT323({
  variable: "--font-vt323",
  subsets: ["latin"],
  weight: "400",

});

const monoton = Monoton({
  variable: "--font-monoton",
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
      <body
        className={`${orbitron.variable} ${audiowide.variable} ${pressStart2P.variable} ${vt323.variable} ${monoton.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
