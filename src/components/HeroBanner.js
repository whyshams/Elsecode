"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { TypeAnimation } from "react-type-animation";
import { IconContext } from "react-icons";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaTelegram,
  FaSquareXTwitter,
} from "react-icons/fa6";
import RevealFromLeft from "./RevealFromLeft";
import ParallaxParent from "./ParallaxParent";
import ParallaxLeftRight from "./ParallaxLeftRight";
export default function HeroBanner() {
  return (
    <>
      {/*
      <motion.div className="mobile-hide">
        <div className="hero-banner">
          <div className="welcome md:bottom-80 md:left-10 ">
            <div className=" md:text-5xl provide">We Provide</div>
            <div className="hero-service">Full stack Development</div>
            <div className="flex justify-center hero-button">
              <Link href="/contact-us">Let's Talk</Link>
            </div>
          </div>

          <div className="md:absolute md:bottom-10 md:right-10 md:mt-0 md:blur-none">
            <Image
              src="/5xDL.gif"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
      </motion.div>
  */}
      <div className="mobile-hide welcome">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/*
               <div className=" basis-1/2 mt-72 ml-5">
            <Reveal>
              <div className=" md:text-5xl provide">We Provide</div>
              <div className="hero-service">
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Eta pura ",
                    1000,
                    "change hobe ",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "100px", display: "flex" }}
                  repeat={Infinity}
                />
              </div>
              <div className="hero-button">
                <Link href="/contact-us">Let&apos;s Talk</Link>
              </div>
            </Reveal>
          </div>

          <div className="basis-1/2">
            <Reveal>
              <div className="mt-32 flex justify-center">
                <Image
                  src="/5xDL.gif"
                  width={600}
                  height={600}
                  alt="Picture of the author"
                />
              </div>
            </Reveal>
          </div>
          
          */}
          <div>
            <div className="grid text-center place-items-center mt-52">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <video className="loading_video" autoPlay loop muted>
                  <source src="/hero.mp4" type="video/mp4" />
                </video>
              </motion.div>

              <motion.div
                initial={{ y: "100vw" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className=" grid text-center place-items-center"
              >
                <h2
                  className="text-3xl font-bold m-4 uppercase"
                  style={{ width: "700px", letterSpacing: "7px" }}
                >
                  Helps your business find cutting-edge tech solutions and your
                  customer find you
                </h2>
                <p className="text-xl m-4">
                  Through Design and Development of Website, WebApp or Mobile
                  application and Powerful SEO performance
                </p>
              </motion.div>
              <div className="flex">
                <ParallaxParent>
                  <div className="flex justify-center mt-5 mb-5">
                    <Link href="/ourwork">
                      <div className="our-work px-10 py-5">Our Work</div>
                    </Link>
                  </div>
                </ParallaxParent>
                <ParallaxParent>
                  <div className="flex justify-center mt-5 mb-5 ml-5">
                    <Link href="/contact-us">
                      <div className="chat-contact px-10 py-5">
                        Let&apos;s Have a Chat !
                      </div>
                    </Link>
                  </div>
                </ParallaxParent>
              </div>

              <ParallaxLeftRight>
                <motion.div
                  initial={{ x: "-100vw" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.7, delay: 1 }}
                  className="flex mt-10"
                >
                  <IconContext.Provider
                    value={{
                      className: "hero-social-icon",
                    }}
                  >
                    <a
                      target="_blank"
                      href="https://www.facebook.com/profile.php?id=61553105173758&mibextid=ZbWKwL"
                    >
                      <FaFacebook />
                    </a>
                  </IconContext.Provider>
                  <IconContext.Provider
                    value={{
                      className: "hero-social-icon",
                    }}
                  >
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/company/elsecode/"
                    >
                      <FaLinkedin />
                    </a>
                  </IconContext.Provider>
                  <IconContext.Provider
                    value={{
                      className: "hero-social-icon",
                    }}
                  >
                    <a
                      target="_blank"
                      href="https://instagram.com/elsecode.tech?igshid=YTQwZjQ0NmI0OA=="
                    >
                      <FaInstagram />
                    </a>
                  </IconContext.Provider>
                  <IconContext.Provider
                    value={{
                      className: "hero-social-icon",
                    }}
                  >
                    <a
                      target="_blank"
                      href="https://wa.me/message/BYM5JEQH6JTDC1"
                    >
                      <FaWhatsapp />
                    </a>
                  </IconContext.Provider>
                  <IconContext.Provider
                    value={{
                      className: "hero-social-icon",
                    }}
                  >
                    <a target="_blank" href="">
                      <FaTelegram />
                    </a>
                  </IconContext.Provider>
                  <IconContext.Provider
                    value={{
                      className: "hero-social-icon",
                    }}
                  >
                    <a
                      target="_blank"
                      href="https://x.com/ElseCode92302?t=X7EnJzqazjyj2y7MASd3UQ&s=09"
                    >
                      <FaSquareXTwitter />
                    </a>
                  </IconContext.Provider>
                </motion.div>
              </ParallaxLeftRight>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="pc-hide text-center">
        {/*  <div className="mt-56">
          
            <div className=" md:text-5xl provide">We Provide</div>

            <div className="hero-service flex justify-center">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Full Stack Website",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Wordpress Website",
                  1000,
                  "UI/UX Design",
                  1000,
                  "SEO Service",
                  1000,
                  "Mobile App",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  fontSize: "30px",

                  display: "flex",
                }}
                repeat={Infinity}
              />
            </div>

            <Link href="/contact-us">
              <div className="">Let&apos;s Talk</div>
            </Link>
          </div> */}
        <Reveal>
          <div className=" new-mobile-hero grid text-center place-items-center mt-56 mb-10">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <video className="loading_video_mobile" autoPlay loop muted>
                <source src="/hero.mp4" type="video/mp4" />
              </video>
            </motion.div>
            <motion.div
              initial={{ y: "100vw" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className=" grid text-center place-items-center mt-4"
            >
              <h2
                className="text-2xl m-4 uppercase"
                style={{ letterSpacing: "5px" }}
              >
                Helps your business find cutting-edge tech solutions and your
                customer find you
              </h2>
              <p className="text-lg m-4">
                Through Design and Development of Website, WebApp or Mobile
                application and Powerful SEO performance
              </p>
            </motion.div>
            <div className="flex">
              <ParallaxParent>
                <div className="flex justify-center mt-5 mb-5">
                  <Link href="/ourwork">
                    <div className="our-work px-10 py-5">Our Work</div>
                  </Link>
                </div>
              </ParallaxParent>
              <ParallaxParent>
                <div className="flex justify-center mt-5 mb-5 ml-5">
                  <Link href="/contact-us">
                    <div className="chat-contact px-10 py-5">
                      Let&apos;s Have a Chat !
                    </div>
                  </Link>
                </div>
              </ParallaxParent>
            </div>

            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.7, delay: 1.3 }}
              className="flex"
            >
              <IconContext.Provider
                value={{
                  style: { color: "black", fontSize: "35px", margin: "7px" },
                }}
              >
                <a
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61553105173758&mibextid=ZbWKwL"
                >
                  <FaFacebook />
                </a>
              </IconContext.Provider>
              <IconContext.Provider
                value={{
                  style: { color: "black", fontSize: "35px", margin: "7px" },
                }}
              >
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/elsecode/"
                >
                  <FaLinkedin />
                </a>
              </IconContext.Provider>
              <IconContext.Provider
                value={{
                  style: { color: "black", fontSize: "35px", margin: "7px" },
                }}
              >
                <a
                  target="_blank"
                  href="https://instagram.com/elsecode.tech?igshid=YTQwZjQ0NmI0OA=="
                >
                  <FaInstagram />
                </a>
              </IconContext.Provider>
              <IconContext.Provider
                value={{
                  style: { color: "black", fontSize: "35px", margin: "7px" },
                }}
              >
                <a target="_blank" href="https://wa.me/message/BYM5JEQH6JTDC1">
                  <FaWhatsapp />
                </a>
              </IconContext.Provider>
              <IconContext.Provider
                value={{
                  className: "hero-social-icon",
                }}
              >
                <a target="_blank" href="https://t.me/elsecodetech">
                  <FaTelegram />
                </a>
              </IconContext.Provider>
              <IconContext.Provider
                value={{
                  className: "hero-social-icon",
                }}
              >
                <a
                  target="_blank"
                  href="https://x.com/ElseCode92302?t=X7EnJzqazjyj2y7MASd3UQ&s=09"
                >
                  <FaSquareXTwitter />
                </a>
              </IconContext.Provider>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </>
  );
}
