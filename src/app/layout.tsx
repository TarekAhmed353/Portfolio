import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  JetBrains_Mono,
  Plus_Jakarta_Sans,
} from "next/font/google";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";
import Navbar from "@/components/Navbar";
import SpotlightTracker from "@/components/SpotlightTracker";
import { site } from "@/data/site";
import { themeInitScript } from "@/lib/theme";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

// Headings only; body text stays in Plus Jakarta Sans
const display = Bricolage_Grotesque({
  variable: "--font-display-face",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const description =
  "Portfolio of Tarek Ahmed, a CSE student and aspiring full-stack developer from Sylhet, Bangladesh, with an interest in AI/ML.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.designation}`,
    template: `%s | ${site.name}`,
  },
  description,
  authors: [{ name: site.name, url: site.url }],
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: `${site.name} | ${site.designation}`,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.designation}`,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${display.variable} ${jetbrains.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <MotionProvider>
          <Navbar />
          {children}
          <Footer />
          <SpotlightTracker />
        </MotionProvider>
      </body>
    </html>
  );
}
