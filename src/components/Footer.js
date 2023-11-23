"use client";

import React from "react";
import FooterNav from "./FooterNav";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { IconContext } from "react-icons";

import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaTelegram,
  FaSquareXTwitter,
} from "react-icons/fa6";
import ParallaxParent from "./ParallaxParent";
import ParallaxOpacity from "./ParallaxOpacity";
import ParallaxLeftRight from "./ParallaxLeftRight";

export default function Footer() {
  return (
    <footer className="grid text-center place-items-center">
      <div className="text-center place-items-center grid my-10">
        <h1 className="lett ">Let</h1>
        <ParallaxParent>
          <Image src="/logowhite.png" width={300} height={220} />
        </ParallaxParent>
        <p className="m-10 text-lg ">
          Find You the best solution for your business to create a strong web
          and digital presence
        </p>
        <Link href="/contact-us">
          <div className="desk-contact text-black">Contact Us</div>
        </Link>
        <ParallaxLeftRight>
          <div className=" flex justify-center place-content-center my-10 mobile-menu-social">
            <IconContext.Provider value={{ className: "mobile-social" }}>
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=61553105173758&mibextid=ZbWKwL"
              >
                <FaFacebook />
              </a>
            </IconContext.Provider>
            <IconContext.Provider value={{ className: "mobile-social" }}>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/elsecode/"
              >
                <FaLinkedin />
              </a>
            </IconContext.Provider>
            <IconContext.Provider value={{ className: "mobile-social" }}>
              <a
                target="_blank"
                href="https://instagram.com/elsecode.tech?igshid=YTQwZjQ0NmI0OA=="
              >
                <FaInstagram />
              </a>
            </IconContext.Provider>
            <IconContext.Provider value={{ className: "mobile-social" }}>
              <a target="_blank" href="https://wa.me/message/BYM5JEQH6JTDC1">
                <FaWhatsapp />
              </a>
            </IconContext.Provider>
            <IconContext.Provider
              value={{
                className: "mobile-social",
              }}
            >
              <a target="_blank" href="https://t.me/elsecodetech">
                <FaTelegram />
              </a>
            </IconContext.Provider>
            <IconContext.Provider
              value={{
                className: "mobile-social",
              }}
            >
              <a
                target="_blank"
                href="https://x.com/ElseCode92302?t=X7EnJzqazjyj2y7MASd3UQ&s=09"
              >
                <FaSquareXTwitter />
              </a>
            </IconContext.Provider>
          </div>
        </ParallaxLeftRight>
      </div>

      <div className="footer-er-footer-main grid grid-rows-1 grid-cols-3">
        <div className="col-span-3 md:col-span-1">
          <ul>
            <li className="w-52 py-2">
              <strong>Office :</strong> 235/A, AB Firoza Garden,Pathshala Goli,
              West Dhanmondi,Dhaka
            </li>
            <li className="my-2">
              <a href="tel:+8801771592189">
                <strong>Phone No :</strong> +8801771592189
              </a>
            </li>
            <li>
              <a href="mailto:elsecode.tech@gmail.com">
                <strong>Email :</strong> elsecode.tech@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-3 md:col-span-1">
          <FooterNav />
        </div>
        <div className="col-span-3 md:col-span-1">
          <ul>
            <li className="m-2">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li className="m-2">
              <Link href="/terms">Terms & Condition</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
