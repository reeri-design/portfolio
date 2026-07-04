import { Kalnia, DM_Sans } from "next/font/google";
import localFont from "next/font/local";

export const kalnia = Kalnia({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-kalnia",
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export const lamore = localFont({
  src: "./fonts/lamore/Lamore.otf",
  variable: "--font-lamore",
  display: "swap",
});
