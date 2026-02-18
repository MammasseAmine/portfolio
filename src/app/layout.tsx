import type { Metadata } from "next";
import { Inter, Space_Grotesk, Syncopate, Cormorant_Garamond, Outfit } from "next/font/google"; // Step 4: Import Inter
import "./globals.css";
import OrbNav from "@/components/OrbNav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

const syncopate = Syncopate({
  weight: ["400", "700"],
  variable: "--font-syncopate",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amine Mammasse | AI & Data Science Engineer", // Step 4: Update Title
  description: "Personal Portfolio of Amine Mammasse - AI & Data Science Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${syncopate.variable} ${cormorant.variable} ${outfit.variable} antialiased`} // Step 4: Apply Inter
      >
        {children}
        <OrbNav />
      </body>
    </html>
  );
}
