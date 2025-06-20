import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Provider from "./Providers";
import ClerkLayout from "../../ClerkLayout";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AllureMart",
  description:
    "AllureMart is a modern e-commerce platform for buying products.",
  icons: {
    icon: "/A.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkLayout>
          <Provider>
            <Navbar />
            <main className="container">{children}</main>
            <Footer />
            <Toaster />
          </Provider>
        </ClerkLayout>
      </body>
    </html>
  );
}
