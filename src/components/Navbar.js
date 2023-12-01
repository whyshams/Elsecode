"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import { useMyContext } from "@/app/Context/ContextApi";
import Image from "next/image";

import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaSquareXTwitter,
  FaTelegram,
} from "react-icons/fa6";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { windowWidth, setMobileMenuOpen, mobileMenuOpen, windowScroll } =
    useMyContext();
  const pathname = usePathname();
  const [hover, setHover] = useState(false);
  console.log(pathname);
  return (
    <header className="header">
      {windowWidth > 1100 ? (
        <div
          style={{
            position: pathname !== "/" ? "relative" : "fixed",
            top: "0",
            zIndex: "100",
            width: "100%",
          }}
        >
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                height: "100%",
                width:
                  pathname !== "/"
                    ? "0%"
                    : windowScroll < 500
                    ? `${windowScroll / 4}%`
                    : "100%",
                zIndex: "-1",
                background: "black",
              }}
            ></div>
            <motion.nav
              initial={{ x: "100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="flex  desktop-navbar"
              style={{ position: "relative", zIndex: "1111111" }}
            >
              <div className="basis-1/4">
                <div className="flex justify-center">
                  <Link href="/">
                    {windowScroll > 35 ? (
                      <Image
                        src="/logowhite.png"
                        width={250}
                        height={150}
                        alt="logo"
                      />
                    ) : (
                      <Image
                        src="/elsecodelogo.png"
                        width={250}
                        height={150}
                        alt="logo"
                      />
                    )}
                  </Link>
                </div>
              </div>
              <div
                className="basis-1/2 "
                style={{
                  color: windowScroll > 50 ? "white" : "black",
                  transition: "background 1s ease",
                }}
              >
                <div className="">
                  <ul className="flex justify-center pt-5">
                    <li
                      className={
                        pathname === "/aboutus" ? "ml-6 boldy" : "ml-6"
                      }
                    >
                      <Link href="/aboutus">About Us</Link>
                    </li>
                    <li
                      className={
                        pathname === "/casestudy" ? "ml-6 boldy" : "ml-6"
                      }
                    >
                      <Link href="/casestudy">Case Study</Link>
                    </li>
                    <li
                      className={
                        pathname === "/services" ? "ml-6 boldy" : "ml-6"
                      }
                    >
                      <li
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        onClick={() => setHover(true)}
                      >
                        <Link href="/services">Service</Link>
                      </li>
                      {hover && windowScroll < 200 && (
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
                            <Link href="/services/seo-service">
                              SEO Service
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/mobile-app-development">
                              Mobile App
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li
                      className={
                        pathname === "/clients" ? "ml-6 boldy" : "ml-6"
                      }
                    >
                      <Link href="/clients">Client</Link>
                    </li>
                    <li
                      className={pathname === "/blogs" ? "ml-6 boldy" : "ml-6"}
                    >
                      <Link href="/blogs">Blog</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="basis-1/4">
                <div className="flex justify-center">
                  <Link href="/contact-us">
                    <div
                      className={
                        pathname === "/contact-us"
                          ? "desk-contact-active"
                          : "desk-contact"
                      }
                    >
                      Contact Us
                    </div>
                  </Link>
                </div>
              </div>
            </motion.nav>
          </div>
        </div>
      ) : windowWidth < 1100 ? (
        <div
          style={{
            position: "fixed",
            top: "0",
            zIndex: "100",
            width: "100%",
          }}
        >
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                height: "100%",
                width:
                  pathname !== "/"
                    ? `${windowScroll / 10}%`
                    : windowScroll < 500
                    ? `${windowScroll / 4}%`
                    : "100%",
                zIndex: "-1",
                background: "black",
              }}
            ></div>
            <motion.nav
              initial={{ y: "-100vw", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="flex justify-center"
            >
              <div className="basis-1/2">
                <div className="float-left m-3">
                  <h1>
                    <Link href="/">
                      {windowScroll > 35 ? (
                        <Image
                          src="/logowhite.png"
                          width={250}
                          height={150}
                          alt="logo"
                        />
                      ) : (
                        <Image
                          src="/elsecodelogo.png"
                          width={250}
                          height={150}
                          alt="logo"
                        />
                      )}
                    </Link>
                  </h1>
                </div>
              </div>
              <div className="basis-1/2">
                <div
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="float-right m-3"
                >
                  {mobileMenuOpen ? (
                    <IconContext.Provider
                      value={{
                        className:
                          windowScroll < 350 ? "menu-icon" : "bl-bg-menu-icon",
                      }}
                    >
                      <RiMenuUnfoldFill />
                    </IconContext.Provider>
                  ) : (
                    <motion.div>
                      <IconContext.Provider
                        value={{
                          className:
                            windowScroll < 800 && pathname !== "/"
                              ? "menu-icon"
                              : windowScroll < 350 && pathname === "/"
                              ? "menu-icon"
                              : "bl-bg-menu-icon",
                        }}
                      >
                        <RiMenuFoldFill />
                      </IconContext.Provider>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.nav>
            {mobileMenuOpen && (
              <div className="">
                <motion.div
                  initial={{ x: "100vw" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                  exit={{ x: "100vw" }}
                  className="float-right block mobile-menu-main"
                >
                  <div className="mobile-menu-list">
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <div className="mobile-menu">
                        <Link href="/aboutus">
                          <div
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                          >
                            About Us
                          </div>
                        </Link>
                        <Link href="/ourwork">
                          <div
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                          >
                            Our Work
                          </div>
                        </Link>
                        <Link href="/casestudy">
                          <div
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                          >
                            Case Study
                          </div>
                        </Link>
                        <Link href="/services">
                          <div
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                          >
                            Service
                          </div>
                        </Link>
                        <Link href="/clients">
                          <div
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                          >
                            Client
                          </div>
                        </Link>
                        <Link href="/blogs">
                          <div
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                          >
                            Blog
                          </div>
                        </Link>

                        <Link href="/contact-us">
                          <div
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="contact-mobile "
                          >
                            Contact Us
                          </div>
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className=" block mt-10 float-right mobile-menu-social"
                  >
                    <IconContext.Provider
                      value={{ className: "mobile-social" }}
                    >
                      <a
                        target="_blank"
                        href="https://www.facebook.com/profile.php?id=61553105173758&mibextid=ZbWKwL"
                      >
                        <FaFacebook />
                      </a>
                    </IconContext.Provider>
                    <IconContext.Provider
                      value={{ className: "mobile-social" }}
                    >
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/company/elsecode/"
                      >
                        <FaLinkedin />
                      </a>
                    </IconContext.Provider>
                    <IconContext.Provider
                      value={{ className: "mobile-social" }}
                    >
                      <a
                        target="_blank"
                        href="https://instagram.com/elsecode.tech?igshid=YTQwZjQ0NmI0OA=="
                      >
                        <FaInstagram />
                      </a>
                    </IconContext.Provider>
                    <IconContext.Provider
                      value={{ className: "mobile-social" }}
                    >
                      <a
                        target="_blank"
                        href="https://wa.me/message/BYM5JEQH6JTDC1"
                      >
                        <FaWhatsapp />
                      </a>
                    </IconContext.Provider>
                    <IconContext.Provider
                      value={{
                        className: "mobile-social",
                      }}
                    >
                      <a target="_blank" href="https://t.me/elsecodetech">
                        <FaTelegram />
                      </a>
                    </IconContext.Provider>
                    <IconContext.Provider
                      value={{
                        className: "mobile-social",
                      }}
                    >
                      <a
                        target="_blank"
                        href="https://x.com/ElseCode92302?t=X7EnJzqazjyj2y7MASd3UQ&s=09"
                      >
                        <FaSquareXTwitter />
                      </a>
                    </IconContext.Provider>
                  </motion.div>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </header>
  );
}
