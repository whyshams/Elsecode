"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Link from "next/link";
import { ImWordpress } from "react-icons/im";
import { IconContext } from "react-icons";
import { FaReact } from "react-icons/fa6";

export default function ServiceCategory() {
  const scrollRef = useRef(null);
  return (
    <div ref={scrollRef}>
      <div className="services-category">
        <div className=" block text-center mb-10">
          <img className="md:hidden service-title-img" src="/service-2.png" />
          <p className="text-gray-400 my-3">
            Indulge in excellence with our meticulously crafted services,where
            innovation meets dedication to elevate your experience
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:grid md:grid-cols-3 md:justify-items-center">
          <div>
            <Reveal>
              <div className="service-content">
                <Link href="/services/wordpress-website-development">
                  <div className="">
                    <div className=" grid text-center">
                      <div className="flex justify-center">
                        <IconContext.Provider
                          value={{ className: "service-icon" }}
                        >
                          <ImWordpress />
                          <img
                            className="shopify"
                            src="/shopify.png"
                            alt="Shopify Logo"
                          />
                          <img
                            className="shopify"
                            src="/woo.png"
                            alt="WooCommerce"
                          />
                        </IconContext.Provider>
                      </div>

                      <h3>Wordpress & WooCommerce</h3>

                      <p>
                        Your go-to for stunning, user-friendly WordPress and
                        E-Commerce websites. Crafted with excellence, optimized
                        for success.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <Link href="/services/full-stack-webapp-development">
                <div className="service-content">
                  <div className=" grid text-center">
                    <div className="flex justify-center">
                      <div className="mern-icon">
                        <img src="/MERN-logo (1).png" alt="MERN Stack" />
                      </div>
                    </div>
                    <h3>Full Stack Development</h3>
                    <p>
                      Crafting dynamic web solutions from complex ideas. Expect
                      user-friendly, scalable excellence for your online
                      presence.
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
          <div>
            <Reveal>
              <Link href="/services/mobile-app-development">
                <div className="service-content">
                  <div className=" grid text-center">
                    <div className="flex justify-center">
                      <IconContext.Provider
                        value={{ className: "service-icon-react" }}
                      >
                        <FaReact />
                      </IconContext.Provider>
                    </div>
                    <h3>Mobile App</h3>
                    <p>
                      We bring your mobile app dreams to life with expert
                      craftsmanship, creating seamless, user-friendly solutions
                      for the modern digital landscape.
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
        <div className="flex md:justify-around flex-wrap justify-center mt-7">
          <div>
            <Reveal>
              <Link href="/services/web-design">
                <div className="service-content">
                  <div className=" grid text-center">
                    <div className="flex justify-center">
                      <div className="flex design-icon">
                        <img src="/xd.png" alt="XD Logo" />
                        <img src="/figma.png" alt="Figma Logo" />
                      </div>
                    </div>
                    <h3>UI/UX Design</h3>
                    <p>
                      we create captivating UI/UX designs for seamless and
                      delightful user experiences. Elevate your digital presence
                      with our visually appealing and user-friendly solutions.
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
          <div>
            <Reveal>
              <Link href="/services/seo-service">
                <div className="service-content">
                  <div className=" grid text-center">
                    <div className="flex justify-center">
                      <div className="flex design-icon">
                        <img src="/google.png" alt="Google" />
                        <img src="/facebook.png" alt="Facebook" />
                      </div>
                    </div>
                    <h3>SEO Services</h3>
                    <p>
                      we elevate your online presence with expert SEO services.
                      Boost visibility, attract the right audience, and thrive
                      in the digital landscape.
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}