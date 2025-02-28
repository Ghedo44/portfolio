import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CustomDock } from "@/components/custom-dock";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
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
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          // defaultTheme="system"
          // enableSystem
        >
          <CustomDock />
          {children}
          <footer className="mt-8 border-t py-6 text-center">
          <div className="container mx-auto flex flex-col items-center space-y-2">
            <h2 className="text-xl font-bold">Aerospace Engineering</h2>
            <p className="text-sm text-muted-foreground">
              Showcasing innovations and achievements in the field of flight.
            </p>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} - All rights reserved
            </p>
          </div>
        </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
