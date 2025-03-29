import { useContext } from "react";
import localFont from "next/font/local";
import "@/styles/reset.scss";
import { LoaderProvider } from "@/providers/LoaderProvider/LoaderProvider";
import { Root } from "./root";
import { ResponceBlocker } from "@/components/ResponceBlocker/ResponceBlocker";

const inter = localFont({
  src: [
    {
      path: "./fonts/Inter_Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Inter_ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Inter_Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-inter",
});

export const metadata = {
  title: "We're Creating For Emotions",
  description: "Day # | We're Creating For Emotions",
};

export default function RootLayout({ children }) {
  return (
    <html className="html" lang="en">
      <body className={`body ${inter.variable}`}>
        <LoaderProvider>
          <ResponceBlocker />
          <Root>
            {children}
          </Root>
        </LoaderProvider>
      </body>
    </html>
  );
}
