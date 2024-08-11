import type { Metadata } from "next";
import "./globals.css";
import { Inter, Questrial, Roboto, Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";

import { cn } from "@/lib/utils";

// const fontSans = FontSans({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
//   variable: "--font-sans",
// });

const inter = Questrial({ weight: '400', subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Figment Studios",
  description:
    "Medical clinnic based in oakville ontario.",
  icons: {
    icon: "/assets/icons/logo-icon.svg",
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
        className={cn(
          "min-h-screen antialiased",
          inter.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}