"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";

export default function RevealFromRight({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
    console.log(isInView);
  }, [isInView]);
  return (
    <div ref={ref} style={{ width: "100%", overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -200 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.7, delay: 0.25, type: "tween" }}
        key={"setuplayout_motion"}
      >
        {children}
      </motion.div>
    </div>
  );
}
