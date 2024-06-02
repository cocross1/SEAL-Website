import type { Metadata } from "next";
import { Inter, Nunito, Lato, Playfair_Display, Be_Vietnam_Pro, Nunito_Sans} from "next/font/google";
import "./globals.css";
import ClientOnly from "./components/ClientOnly";
import Navbar from "./components/navbar/Navbar";
import InitiativeModal from "./components/modals/BioModal";
import ContactUsModal from "./components/modals/ContactUsModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SEAL",
  description: "Researching and solving the world’s pressing health, social, and economic problems through a youth-driven movement.",
};

// const font = Playfair_Display({
//   weight:'400',
//   display: 'swap',
//   subsets: ['latin']
// });

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
