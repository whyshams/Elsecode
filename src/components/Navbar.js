"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import { useMyContext } from "@/app/Context/ContextApi";

export default function Navbar() {
  const { windowWidth, setMobileMenuOpen, mobileMenuOpen } = useMyContext();
  const [hover, setHover] = useState(false);

  return (
    <header className="header">
      {windowWidth > 1100 ? (
        <motion.nav
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex desktop-navbar"
        >
          <div className="basis-1/4">
            <div className="flex justify-center">
              <Link href="/">
                <h1>LOGO</h1>
              </Link>
            </div>
          </div>
          <div className="basis-1/2 ">
            <div className="">
              <ul className="flex justify-center mt-3">
                <li className="mr-6 ">
                  <Link href="/aboutus">About Us</Link>
                </li>
                <li className="mr-6">
                  <Link href="/casestudy">Case Study</Link>
                </li>
                <li className="mr-6 ">
                  <li
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    onClick={() => setHover(true)}
                  >
                    <Link href="/services">Service</Link>
                  </li>
                  {hover && (
                    <ul
                      onMouseEnter={() => setHover(true)}
                      onMouseLeave={() => setHover(false)}
                      className="absolute submenu "
                    >
                      <li>
                        <Link href="/services/wordpress-website-development">
                          Wordpress Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/full-stack-webapp-development">
                          Full Stack Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/web-design">Web Design</Link>
                      </li>
                      <li>
                        <Link href="/services/seo-service">SEO Service</Link>
                      </li>
                      <li>
                        <Link href="/services/mobile-app-development">
                          Mobile App
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="mr-6">
                  <Link href="/clients">Client</Link>
                </li>
                <li className="mr-6">
                  <Link href="/blogs">Blog</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="basis-1/4">
            <div className="flex justify-center">
              <Link href="/contact-us">
                <div className="desk-contact">Contact Us</div>
              </Link>
            </div>
          </div>
        </motion.nav>
      ) : windowWidth < 1100 ? (
        <div>
          <motion.nav
            initial={{ y: "-100vw", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="flex justify-center"
          >
            <div className="basis-1/2">
              <div className="float-left m-3">
                <h1>
                  <Link href="/">ElseCode</Link>
                </h1>
              </div>
            </div>
            <div className="basis-1/2">
              <div
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="float-right m-3"
              >
                {mobileMenuOpen ? (
                  <IconContext.Provider value={{ className: "menu-icon" }}>
                    <RiMenuUnfoldFill />
                  </IconContext.Provider>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ duration: 1 }}
                  >
                    <IconContext.Provider value={{ className: "menu-icon" }}>
                      <RiMenuFoldFill />
                    </IconContext.Provider>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.nav>
          {mobileMenuOpen && (
            <div>
              <motion.div
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.4 }}
                exit={{ x: "100vw" }}
                className="float-right mobile-menu-main"
              >
                <div className="mobile-menu-list">
                  <motion.div>
                    <div className="mobile-menu">
                      <Link href="/aboutus">
                        <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                          About Us
                        </div>
                      </Link>
                      <Link href="/casestudy">
                        <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                          Case Study
                        </div>
                      </Link>
                      <Link href="/services">
                        <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                          Service
                        </div>
                      </Link>
                      <Link href="/clients">
                        <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                          Client
                        </div>
                      </Link>
                      <Link href="/blogs">
                        <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                          Blog
                        </div>
                      </Link>
                      <Link href="/projects">
                        <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                          Project
                        </div>
                      </Link>

                      <Link href="/contact-us">
                        <div
                          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                          className="contact-mobile"
                        >
                          Contact Us
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </header>
  );
}
