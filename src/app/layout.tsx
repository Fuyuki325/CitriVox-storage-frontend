import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CitriVox Image Storage",
  description: "CitriVox Image Storage is a robust and scalable solution for managing and storing your digital images. Designed with efficiency and security in mind, our system offers seamless integration, high-speed access, and reliable backup for all your visual assets. Perfect for eCommerce, marketing, and personal use, CitriVox Image Storage ensures your images are always at your fingertips, ready to enhance your digital presence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <body className={inter.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
