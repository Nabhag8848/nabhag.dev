import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/utils/fonts";
import clsx from "clsx";
import Navbar from "@/components/ui/Navbar";

export const revalidate = 0;

export const metadata: Metadata = {
  title: {
    template: "Nabhag | %s",
    default: "Nabhag",
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
          "antialiased h-screen bg-black text-white md:w-8/12 lg:w-[36%] m-auto px-4 flex flex-col"
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
