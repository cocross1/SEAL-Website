import type { Metadata } from "next";
import { Inter, Nunito, Lato, Playfair_Display } from "next/font/google";
import "./globals.css";
import ClientOnly from "./components/ClientOnly";
import Navbar from "./components/navbar/Navbar";
import InitiativeModal from "./components/modals/InitiativeModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SEAL",
  description: "Researching and solving the world’s pressing health, social, and economic problems through a youth-driven movement.",
};

const font = Playfair_Display({
  weight:'400',
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
