import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UI-Fry",
  description: "Make your UI awesome!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-red-500 max-w-[1440px] mx-auto">{children}</div>;
}
