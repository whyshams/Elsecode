"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Reveal({ children }) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false,
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: {
      opacity: 0,
      y: 100,
    },
  };
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <motion.div
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1.1, delay: 0.3, type: "tween" }}
        key={"setuplayout_motion"}
        ref={ref}
      >
        {children}
      </motion.div>
    </div>
  );
}
