import {
  Lilita_One,
  Bree_Serif,
  Acme,
  Bellefair,
  Enriqueta,
  Paytone_One,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ContextProvider from "./Context/ContextProvider";
import Footer from "@/components/Footer";
import Head from "next/head";

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
const paytone = Paytone_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-paytone",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logowhite.png" />
      </Head>
      <ContextProvider>
        <body className={`${paytone.variable}`}>
          <Navbar />

          <div className=" container">{children}</div>
          <Footer />
        </body>
      </ContextProvider>
    </html>
  );
}
