import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: [
    "latin"
  ],
  display: "swap"
});


export const metadata: Metadata = {
  title:
    "Professionelle Gebäudereinigung Hamburg | Zuverlässiger Reinigungsservice",

  description:
    "Professionelle Gebäudereinigung in Hamburg. Büroreinigung, Fensterreinigung, Grundreinigung und mehr. Faire Preise und zuverlässiger Service.",

  keywords: [
    "Gebäudereinigung Hamburg",
    "Büroreinigung Hamburg",
    "Fensterreinigung",
    "Reinigungsfirma Hamburg",
    "professionelle Reinigung"
  ],

  metadataBase:
    new URL(
      "https://www.beispiel-reinigung-hamburg.de"
    ),

  alternates: {
    canonical:
      "/"
  },

  openGraph: {
    title:
      "Professionelle Gebäudereinigung Hamburg",

    description:
      "Zuverlässige Reinigungslösungen für Unternehmen und Privatkunden.",

    url:
      "https://www.beispiel-reinigung-hamburg.de",

    siteName:
      "Premium Reinigung Hamburg",

    locale:
      "de_DE",

    type:
      "website"
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "Professionelle Gebäudereinigung Hamburg",

    description:
      "Ihr zuverlässiger Partner für professionelle Reinigung."
  },

  robots: {
    index:
      true,

    follow:
      true
  }
};


export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="de"
    >

      <body
        className={`${geist.className} antialiased`}
      >

        {children}

      </body>

    </html>
  );
}