import type { Metadata } from "next";
import { Stack_Sans_Text, Ultra } from "next/font/google";
import "./globals.css";

const stackSansText = Stack_Sans_Text({
  variable: "--font-stack-sans-text",
  subsets: ["latin"],
});

const ultra = Ultra({
  variable: "--font-ultra",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stephanie Michelfelder · Lead Product Designer",
  description:
    "Lead Product Designer with 10+ years of experience. I design AI products and build the frontend in production React. Currently at Workerbase, working with Porsche, thyssenkrupp, Bosch and GKN.",
  openGraph: {
    title: "Stephanie Michelfelder · Lead Product Designer",
    description:
      "Lead Product Designer with 10+ years of experience. I design AI products and build the frontend in production React.",
    type: "website",
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
      className={`${stackSansText.variable} ${ultra.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
