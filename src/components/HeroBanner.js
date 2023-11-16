"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { TypeAnimation } from "react-type-animation";
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
          transition={{ duration: 1, delay: 1 }}
          className="flex"
        >
          <div className=" basis-1/2 mt-72 ml-5">
            <Reveal>
              <div className=" md:text-5xl provide">We Provide</div>
              <div className="hero-service">
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Eta pura change kore fela hobe",
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
        </motion.div>
      </div>
      <div className="pc-hide mobile-hero text-center">
        <Reveal>
          <div className="mt-56">
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
          </div>
        </Reveal>
      </div>
    </>
  );
}
