"use client";

import React from "react";
import { useMyContext } from "@/app/Context/ContextApi";

export default function MakeBlur() {
  const { mobileMenuOpen } = useMyContext();
  return <>{mobileMenuOpen && <div className="makeBlur">helllo</div>}</>;
}
