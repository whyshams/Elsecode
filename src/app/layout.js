import {
  Lilita_One,
  Bree_Serif,
  Acme,
  Bellefair,
  Enriqueta,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ContextProvider from "./Context/ContextProvider";
import Footer from "@/components/Footer";

const acme = Acme({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-acme",
});

const lilita = Lilita_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lilita",
});
const bree = Bree_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bree",
});
const belle = Bellefair({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-belle",
});
const enri = Enriqueta({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-enri",
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ContextProvider>
        <body className={`${enri.variable}`}>
          <Navbar />

          <div className="page">{children}</div>
          <Footer />
        </body>
      </ContextProvider>
    </html>
  );
}
