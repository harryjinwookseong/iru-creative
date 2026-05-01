import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IRU Creative",
  description:
    "IRU Creative is a multidisciplinary design studio based in Korea. We work through infinitely reflective understandings: in how we think, collaborate, and grow.",
  metadataBase: new URL("https://irucreative.com"),
  openGraph: {
    title: "IRU Creative",
    description:
      "A multidisciplinary design studio based in Korea.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/jsa4fbv.css" />
      </head>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
