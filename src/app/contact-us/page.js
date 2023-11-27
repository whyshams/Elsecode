import React from "react";
import ContactForm from "@/components/ContactForm";
import ParallaxLeftRight from "@/components/ParallaxLeftRight";
import ParallaxRightLeft from "@/components/ParallaxRightLeft";
import ContactHeading from "@/components/ContactHeading";

export const metadata = {
  title: "Contact ElseCode",
  description:
    "Dialogue makes idea become reality, so lets start a dialogue with ElseCode - ElseCode HELPS YOUR BUSINESS FIND CUTTING-EDGE TECH SOLUTIONS AND YOUR CUSTOMER FIND YOU - Web Development, Web Design, SEO service, Wordpress development, shopify development, MERN stack, React js development, UI/UX design",
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
    <>
      <h1
        className="uppercase flex justify-center align-middle items-center mt-24 "
        style={{ fontSize: "22px", letterSpacing: "5px" }}
      >
        <div className="line mr-3"></div>
        Contact Us
      </h1>
      <div className="flex justify-center text-center pt-10">
        <h2 className="content-page-title">
          Dialogue makes idea become reality
        </h2>
      </div>

      <div className=" mobile-hide  grid place-items-center mt-24 p-10">
        <div className=" grid grid-rows-1 grid-cols-2  p-4">
          <ParallaxLeftRight>
            <ContactHeading />
          </ParallaxLeftRight>

          <div>
            <ParallaxRightLeft>
              <ContactForm />
            </ParallaxRightLeft>
          </div>
        </div>
      </div>

      <div className=" lg:hidden grid place-items-center mt-14 mb-8">
        <div className="grid grid-cols-1 text-center align-middle ">
          <div>
            <ParallaxLeftRight>
              <ContactHeading />
            </ParallaxLeftRight>
          </div>
          <div>
            <ParallaxRightLeft>
              <ContactForm />
            </ParallaxRightLeft>
          </div>
        </div>
      </div>
    </>
  );
}
