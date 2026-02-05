import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google"; // Step 4: Import Inter
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
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`} // Step 4: Apply Inter
      >
        {children}
        <OrbNav />
      </body>
    </html>
  );
}
