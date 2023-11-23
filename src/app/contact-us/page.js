import React from "react";
import ContactForm from "@/components/ContactForm";
import ParallaxLeftRight from "@/components/ParallaxLeftRight";
import ParallaxRightLeft from "@/components/ParallaxRightLeft";
import ContactHeading from "@/components/ContactHeading";

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
