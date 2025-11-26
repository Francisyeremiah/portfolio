import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Poppins } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"

const poppins = Poppins({
  subsets: ['latin'], 
  weight: ['400', '600'],
  style: ['normal', 'italic'], 
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Francis | Web, Software & AI Developer",
  description: "A Next js app",
  icons:{
    icon: "/images/fen.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar/>
        {children}
         <Analytics />
        <Footer/>
      </body>
    </html>
  );
}
