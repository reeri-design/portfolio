import type { Metadata } from "next";
import { kalnia, dmSans, lamore } from "./fonts";
import { Navigation } from "@/components/navigation/Navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "reeri.design",
  description: "A personal portfolio for Srishti Mittal — Product Designer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${kalnia.variable} ${dmSans.variable} ${lamore.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
