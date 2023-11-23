"use client";

import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaTelegram, FaFacebookMessenger, FaF } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IconContext } from "react-icons";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function ContactHeading() {
  const pathname = usePathname();
  return (
    <div className="contact-form-head">
      <div className=" p-10">
        <h2 className="text-2xl mb-5">
          If You have any business, We might have some ideas for you
        </h2>
        <p className="flex justify-center">
          So, lets generate ideas. Fill in the contact form and write about your
          business or the project you have in mind. We will reach you within 24
          hours.
        </p>
        <p>
          Or, you can sent us an email, give us a call or chat in your
          convenient platform
        </p>
        <a href="mailto:elsecode.tech@gmail.com" className="flex pt-5">
          <div>
            <IconContext.Provider
              value={{
                style: {
                  color: "#ffd02a",
                  fontSize: "25px",
                  paddingRight: "10px",
                },
              }}
            >
              <MdEmail />
            </IconContext.Provider>
          </div>
          <p>elsecode.tech@gmail.com</p>
        </a>
        <a href="tel:+8801771592189" className="flex pt-5">
          <div>
            <IconContext.Provider
              value={{
                style: {
                  color: "#ffd02a",
                  fontSize: "25px",
                  paddingRight: "10px",
                },
              }}
            >
              <FaPhone />
            </IconContext.Provider>
          </div>
          <p>+8801771592189</p>
        </a>
        <div className="flex justify-center place-items-center mt-8">
          <a target="_blank" href="https://wa.me/message/BYM5JEQH6JTDC1">
            <IconContext.Provider
              value={{
                style: {
                  color: "#25D366",
                  fontSize: "43px",
                  paddingRight: "10px",
                },
              }}
            >
              <IoLogoWhatsapp />
            </IconContext.Provider>
          </a>
          <a target="_blank" href="https://t.me/elsecodetech">
            <IconContext.Provider
              value={{
                style: {
                  color: "#0088cc",
                  fontSize: "43px",
                  paddingRight: "10px",
                },
              }}
            >
              <FaTelegram />
            </IconContext.Provider>
          </a>
          <a>
            <IconContext.Provider
              value={{
                style: {
                  color: "#006AFF",
                  fontSize: "43px",
                  paddingRight: "10px",
                },
              }}
            >
              <FaFacebookMessenger />
            </IconContext.Provider>
          </a>
        </div>
        {/*
        
  {pathname !== "/contact-us" && (
          <div className="flex justify-center mt-5 ">
            <Link href="/contact-us">
              <div className="our-work-heading px-7 py-3">Our Work</div>
            </Link>
          </div>
        )}


        */}
      </div>
    </div>
  );
}
