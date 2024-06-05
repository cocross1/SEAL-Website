import type { Metadata } from "next";
import {Be_Vietnam_Pro} from "next/font/google";
import "./globals.css";
import ClientOnly from "./components/ClientOnly";
import Navbar from "./components/navbar/Navbar";
import InitiativeModal from "./components/modals/BioModal";
import ContactUsModal from "./components/modals/ContactUsModal";

const font = Be_Vietnam_Pro({
  weight:'300',
  display: 'swap',
  subsets: ['latin']
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="en">
      <body className={font.className}>
        <ClientOnly>
        <ContactUsModal />
        <Navbar />
        <InitiativeModal/>
        
        </ClientOnly>
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  );
}
