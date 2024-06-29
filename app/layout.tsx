import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/utils/fonts";
import clsx from "clsx";
import Navbar from "@/components/ui/Navbar";

export const revalidate = 0;

export const metadata: Metadata = {
  title: {
    template: "Nabhag Motivaras | %s",
    default: "Nabhag Motivaras",
  },
  description:
    "Full Stack Engineer, working at revert, loves building marketplace apps and integrations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          "antialiased max-h-screen bg-black text-white md:w-4/12 md:m-auto"
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
