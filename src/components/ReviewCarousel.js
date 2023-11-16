"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export default function ReviewCarousel({ data }) {
  const configuredSanityClient = createClient({
    projectId: "46uxd6a7",
    dataset: "production",
    useCdn: process.env.NODE_ENV === "production",
    apiVersion: "2022-03-07",
  });

  const builder = imageUrlBuilder(configuredSanityClient);
  function urlFor(source) {
    return builder.image(source);
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="text-center items-center slider mb:mb-20">
      <h1 className="mt-10 mb-10 text-4xl">Reviews</h1>
      <Slider {...settings}>
        {data.map((d) => (
          <div key={d._id}>
            <div className="flex justify-center place-content-center">
              <p className="w-80">&quot;{d.review}&quot;</p>
            </div>
            <div className="text-center mt-10 ">
              <a href={d.ceolink}>
                <div className="flex justify-center">
                  <img
                    style={{
                      borderRadius: "50%",
                      width: "150px",
                      height: "150px",
                    }}
                    src={urlFor(d.ceoimage).url()}
                  />
                </div>
                <div>
                  <h3>{d.ceo}</h3>
                  <h3>{d.designation}</h3>
                </div>
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
