import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flipr",
  description: "Crypto Arbitraging platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full`}>
        <Toaster closeButton position="top-right" expand={true} richColors />
        {children}
      </body>
    </html>
  );
}
