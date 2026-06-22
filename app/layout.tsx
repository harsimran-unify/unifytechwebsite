import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unify Tech Solutions | Software & Web Development Company",
  description: "Transforming businesses into brands with tech and innovation. Expert mobile app development, web development, UI/UX design, and enterprise software solutions.",
  keywords: ["software development", "web development", "mobile app development", "UI/UX design", "enterprise software", "FinTech", "IoT"],
  authors: [{ name: "Unify Tech Solutions" }],
  openGraph: {
    title: "Unify Tech Solutions | Software & Web Development Company",
    description: "Transforming businesses into brands with tech and innovation.",
    type: "website",
    url: "https://unifytechsolutions.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unify Tech Solutions | Software & Web Development Company",
    description: "Transforming businesses into brands with tech and innovation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}
