import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Caspers Burger NFT - Own a Piece of Copenhagen's Best Burgers",
  description: "Invest in Caspers Burger through blockchain. 25% equity, 250,000 NFTs at €4 each. Help us expand to 15 new locations in 2026.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
