"use client";

import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "@sanity/client";
import Image from "next/image";
import ParallaxParent from "./ParallaxParent";
import Reveal from "./Reveal";

export default function CaseStudyReveal({ cases, i }) {
  const [hovered, SetHovered] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false,
  });

  const variants = {
    visible: { opacity: 1, translateX: 0, translateY: 0 },
    hidden: {
      opacity: 0,
      translateX: -50,
      translateY: -50,
    },
  };

  const configuredSanityClient = createClient({
    projectId: "46uxd6a7",
    dataset: "production",
    useCdn: process.env.NODE_ENV === "production",
    apiVersion: "2022-03-07",
  });

  const builder = imageUrlBuilder(configuredSanityClient);
  function urlFor(source) {
    return builder.image(source);
  }
  return (
    <motion.div
      ref={ref}
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5, delay: i * 0.2 }}
    >
      <Link href={`/casestudy/${cases.slug.current}`}>
        <div className=" w-1/2">
          <div className="article-card md:m-7">
            {hovered && (
              <div className="content ">
                <p className="title glass">{cases.title}</p>
              </div>
            )}
            <div className="content md:hidden ">
              <p className="title glass">{cases.title}</p>
            </div>

            <div onMouseEnter={() => SetHovered(true)}>
              <Image
                fill
                src={urlFor(cases.mainImage).url()}
                alt={cases.title}
              />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
