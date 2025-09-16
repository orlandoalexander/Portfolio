import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import GAListener from "./GAListener";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orlando Alexander - Portfolio",
  description:
    "BSc Data Science student at the University of Bristol (First-Class Honours, Year 1) with professional experience in software engineering and data science consulting, seeking Summer 2026 internship opportunities.",
  keywords: [
    "Frontend Developer",
    "Web Developer",
    "React Developer",
    "JavaScript",
    "UI/UX",
    "Modern Web Development",
    "CSS Expert",
    "Full-Stack Developer",
    "Backend Development",
    "Database Management",
    "SQL",
    "Data Science Consultant",
    "Data Analysis",
    "Machine Learning",
    "Python",
    "Pandas",
    "NumPy",
    "Data Visualisation",
    "Robotics",
    "Automation",
    "AI",
    "Orlando Alexander",
  ],
  authors: [{ name: "Orlando Alexander" }],
  creator: "Orlando Alexander",
  openGraph: {
    title: "Orlando Alexander - Portfolio",
    description:
      "BSc Data Science student at the University of Bristol (First-Class Honours, Year 1) with professional experience in software engineering and data science consulting, seeking Summer 2026 internship opportunities.",
    url: "www.orlandoalexander.uk",
    siteName: "Orlando Alexander - Portfolio",
    images: [
      {
        url: "https://orlando-alexander-portfolio.netlify.app/orlando-alexander.png",
        width: 1200,
        height: 630,
        alt: "Orlando Alexander",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <GoogleAnalytics gaId="G-3EKPK776NZ" />
        <GAListener />
      </body>
    </html>
  );
}
