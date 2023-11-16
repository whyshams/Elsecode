"use client";

import React, { useState, useEffect } from "react";
import ContextApi from "./ContextApi";

const ContextProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log(windowWidth);

  return (
    <ContextApi.Provider
      value={{ windowWidth, setMobileMenuOpen, setWindowWidth, mobileMenuOpen }}
    >
      {children}
    </ContextApi.Provider>
  );
};

export default ContextProvider;
