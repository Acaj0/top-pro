import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Script from "next/script"; 
import "./globals.css";
import Footer from "@/components/Footer";

const fontSans = Montserrat({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Top Pro Painting | Expert Painters in Cape Coral - Residential & Commercial Services",
  keywords:
    "Top Pro Painting, painting services Cape Coral, professional painters, residential painting, commercial painting, interior painting, exterior painting, Cape Coral painters, high-quality painting, Cape Coral FL painting company",
  description:
    "Top Pro Painting offers premium residential and commercial painting services in the Cape Coral area. Our team of professional painters specializes in interior and exterior projects, delivering top-quality results that enhance the beauty and value of your property. Contact us today for a free quote and experience the best painting services in Cape Coral, FL!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/toppro.png" />
      </head>
      <body className={cn("font-sans", fontSans.variable)}>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': 
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TRPSDP69');`}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TRPSDP69"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
