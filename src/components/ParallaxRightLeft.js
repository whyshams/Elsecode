"use client";

import React, { useState, useEffect, useRef } from "react";

import { useScroll, motion, useTransform, useMotionValue } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ParallaxRightLeft({ children }) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false,
  });

  const variants = {
    visible: { opacity: 1, x: 0 },
    hidden: {
      opacity: 0,
      x: 100,
    },
  };

  return (
    <>
      <motion.div
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5, delay: 0.3 }}
        ref={ref}
        key={"setuplayout_motion"}
      >
        {children}
      </motion.div>
    </>
  );
}
