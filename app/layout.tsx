import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "Mad Dog MMA Rijeka",
  authors: [{ name: "Antonio Blašković" }],
  description:
    "Mad Dog MMA Gym Rijeka.Priduži se MMA revoluciji u Rijeci! Trenirajte s najboljima i postanite borac kakav ste oduvijek željeli. Napravite odluku već danas i pridužite se timu!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr" className="bg-black">
      <body
        className={`${inter.variable} ${bebasNeue.variable} antialiased mx-auto overflow-x-hidden font-body`}
      >
        {children}
      </body>
    </html>
  );
}
