
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Switch to Inter as per original design
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nexora - Lessons and insights from 8 years",
  description: "Nexora provides the tools to manage your members effortlessly. Join over 2.2M+ organizations around the world.",
  keywords: ["Nexora", "Membership Management", "Community", "SaaS", "Growth"],
  authors: [{ name: "Nexora Team" }],
  openGraph: {
    title: "Nexora - Grow your community",
    description: "Manage your members, events, and growth with Nexora's all-in-one platform.",
    url: "https://nexora-landing.vercel.app", // Placeholder URL
    siteName: "Nexora",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexora - Grow your community",
    description: "Manage your members, events, and growth with Nexora's all-in-one platform.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-secondary antialiased overflow-x-hidden`} suppressHydrationWarning={true}>
        <div className="min-h-screen flex flex-col">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
