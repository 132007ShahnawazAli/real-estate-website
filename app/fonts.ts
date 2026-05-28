import { Spline_Sans_Mono } from "next/font/google";
import localFont from "next/font/local";

/**
 * 1. Configure the Google Font: Spline Sans Mono
 * Since it is a variable font, Next.js handles all weights automatically.
 * It will download and cache the font files at build time so they are self-hosted.
 */
export const splineSansMono = Spline_Sans_Mono({
  variable: "--font-spline-mono",
  subsets: ["latin"],
  display: "swap",
});

/**
 * 2. Configure the Local Font: PP Neue Montreal
 * We define standard weights (Regular, Medium, Bold) for a premium type system.
 * macOS Font Book typically exports fonts in OpenType (.otf) or TrueType (.ttf) format.
 * 
 * NOTE: If your files are in a different format (e.g. .ttf or .woff2), simply
 * update the file extensions below (e.g. "./fonts/NeueMontreal-Regular.ttf").
 */
export const neueMontreal = localFont({
  src: [
    {
      path: "./fonts/NeueMontreal-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/NeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/NeueMontreal-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neue-montreal",
  display: "swap",
});
