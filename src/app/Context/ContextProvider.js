"use client";

import React, { useState, useEffect } from "react";
import ContextApi from "./ContextApi";

const ContextProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState();
  const [windowScroll, setWindowScroll] = useState();

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

  useEffect(() => {
    const handleScroll = () => {
      setWindowScroll(window.scrollY);
    };
    if (typeof window !== "undefined") {
      handleScroll();
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(windowScroll);

  return (
    <ContextApi.Provider
      value={{
        windowWidth,
        setMobileMenuOpen,
        setWindowWidth,
        mobileMenuOpen,
        windowScroll,
        setWindowScroll,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
};

export default ContextProvider;
