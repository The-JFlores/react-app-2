

import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Home</Link> |{" "}
          <Link href="/about">About</Link> |{" "}
          <Link href="/projects">Projects</Link> |{" "}
          <Link href="/contact">Contact</Link>
        </nav>

        <hr />

        {children}
      </body>
    </html>
  );
}
