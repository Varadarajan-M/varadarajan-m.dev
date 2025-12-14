import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";

// Display Font
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

// Body Font
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://varadarajan-m.dev"),
  title: {
    default: "Varadarajan M | Full-Stack Software Engineer & Web Developer",
    template: "%s | Varadarajan M",
  },
  description:
    "Varadarajan M is a Full-Stack Software Engineer specializing in building high-performance, scalable web applications with Next.js, React, TypeScript, and Node.js. Delivering exceptional user experiences through clean code and modern architecture.",
  keywords: [
    "Full-Stack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "Web Performance",
    "Frontend Architecture",
    "Backend Development",
    "MongoDB",
    "TanStack Query",
    "Zustand State Management",
    "PWA Development",
    "AI Integration",
    "Generative AI",
    "Agri-Tech",
    "SaaS Development",
    "Varadarajan M",
    "Varadarajan Portfolio",
    "ResumeCraft",
    "VI Messenger",
    "FormCraft",
    "Mac Dev Starter CLI",
  ],
  authors: [{ name: "Varadarajan M", url: "https://varadarajan-m.dev" }],
  creator: "Varadarajan M",
  publisher: "Varadarajan M",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1, // Disables video preview
      "max-image-preview": "large", // Allows large image previews
      "max-snippet": -1, // Disables text snippet preview
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://varadarajan-m.dev",
    title: "Varadarajan M | Full-Stack Software Engineer",
    description:
      "Varadarajan M is a Full-Stack Software Engineer specializing in building high-performance, scalable web applications with Next.js, React, TypeScript, and Node.js.",
    siteName: "Varadarajan M Portfolio",
    images: [
      {
        url: "/site.png",
        width: 1200,
        height: 630,
        alt: "Varadarajan M - Full-Stack Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Varadarajan M | Full-Stack Software Engineer",
    description:
      "Building high-performance web applications with Next.js, React, and Node.js. Check out my portfolio.",
    images: ["/site.png"],
    creator: "@varadcodes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${bebasNeue.variable} ${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
