import React from "react";
import ClientComp from "@/components/ClientPage";

export const metadata = {
  title: "Clients Of ElseCode",
  description:
    "Go Through the amazing people and organization that ElseCode has served and their reviews - ElseCode HELPS YOUR BUSINESS FIND CUTTING-EDGE TECH SOLUTIONS AND YOUR CUSTOMER FIND YOU - Web Development, Web Design, SEO service, Wordpress development, shopify development, MERN stack, React js development, UI/UX design",
  openGraph: {
    images: "https://elsecode.tech/elsecodelogo.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function page() {
  return (
    <div>
      <ClientComp />
    </div>
  );
}
