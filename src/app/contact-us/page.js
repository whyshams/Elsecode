import React from "react";
import ContactForm from "@/components/ContactForm";
import ParallaxLeftRight from "@/components/ParallaxLeftRight";
import ParallaxRightLeft from "@/components/ParallaxRightLeft";

export default function page() {
  return (
    <>
      <div className="mobile-hide h-screen grid place-items-center">
        <div className="grid grid-rows-1 grid-cols-2 text-center align-middle ">
          <div>
            <div className="">
              <h2 className="text-5xl flex">
                If You have any business, We might have some ideas for you
              </h2>
              <p className="flex">
                So, lets generate ideas. Fill in the contact form and write
                about your business or the project you have in mind. We will
                reach you within 24 hours.
              </p>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
      <div className=" md:hidden grid place-items-center mt-14 mb-8">
        <div className="grid grid-cols-1 text-center align-middle ">
          <div>
            <ParallaxLeftRight>
              <div className="">
                <h2 className="md:text-5xl text-3xl flex">
                  If You have any business, We might have some ideas for you
                </h2>
                <p className="flex">
                  So, lets generate ideas. Fill in the contact form and write
                  about your business or the project you have in mind. We will
                  reach you within 24 hours.
                </p>
              </div>
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
