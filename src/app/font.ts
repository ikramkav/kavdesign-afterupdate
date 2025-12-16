import localFont from "next/font/local";

export const bwGradual = localFont({
  src: [
    {
      path: "../public/fonts/BwGradual-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/BwGradual-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/BwGradual-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-bw-gradual",
});
