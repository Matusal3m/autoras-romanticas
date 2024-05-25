import type { Metadata } from "next";
import "./globals.css";
import Header from "@src/components/Header";
import Footer from "@src/components/Footer";

export const metadata: Metadata = {
  title: "Autoras Românticas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="light" lang="pt">
      <body className={`bg-cover bg-center min-h-screen w-screen`} 
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
