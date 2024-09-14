import type { Metadata } from "next";
import "./globals.css";
import { Questrial} from "next/font/google";
import { ThemeProvider } from "next-themes";
import { cn } from "@/lib/utils";

const inter = Questrial({ weight: '400', subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Figment Studios",
  description:
    "Grow your business with a custom website that sets you apart in today's digital landscape. A professionally designed site tailored to your brand not only enhances your online presence but also drives traffic, engages customers, and boosts conversions.",
  icons: {
    icon: "/assets/icons/favicon.ico",
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
