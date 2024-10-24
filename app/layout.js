import localFont from "next/font/local";
import "./globals.css";
import { AOSInit } from "./utils/AosConfig";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});




export const metadata = {
  title: "Boldo",
  description:
    "Save time by building fast with Boldo Template",
  icons: {
    icon: [
      {
        url: "/BoldoLogo.svg",
        href: "/BoldoLogo.svg",
      },
    ],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Jua&family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`!font-manrope ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
