import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hoverxite — open-source AI site agent",
  description:
    "Import a real website, edit it with an AI agent, preview locally, and own the code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
