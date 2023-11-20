"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function TypeComp() {
  return (
    <div>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Case Study",
          1000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
    </div>
  );
}
