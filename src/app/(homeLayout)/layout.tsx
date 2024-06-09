import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/shared/Nav";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "UI-Fry",
  description: "Make your UI awesome!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="border max-w-[1090px] mx-auto">
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </div>
  );
}
