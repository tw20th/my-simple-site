// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "Welcome to my Next.js app",
  keywords: ["Next.js", "React", "Web Development"],
  authors: [{ name: "Your Name" }],
  viewport: { width: "device-width", initialScale: 1 },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description || ""} />
        <meta
          name="keywords"
          content={Array.isArray(metadata.keywords) ? metadata.keywords.join(", ") : ""}
        />
        <meta name="author" content={Array.isArray(metadata.authors) && metadata.authors[0]?.name ? metadata.authors[0].name : ""} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title as string}</title>
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
