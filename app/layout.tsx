import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ModalProvider } from "@/contexts/useModal";
import { AppModal } from "@/modals/modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mike-Rik",
  description: "Company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/mike rik logo 1.png" />
      </head>
      <body className={`${inter.className} root`}>
        <ModalProvider>
          <AppModal /> 
          <Navbar />
          {children}
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
