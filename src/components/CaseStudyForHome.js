import React from "react";
import SanityClient from "next-sanity-client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "@sanity/client";
import RevealFromRight from "./RevealFromRight";
import RevealFromLeft from "./RevealFromRight";
import Link from "next/link";
import CaseStudyReveal from "./CaseStudyReveal";
import ParallaxLeftRight from "./ParallaxLeftRight";
import TypeComp from "./TypeComp";
import ParallaxRightLeft from "./ParallaxRightLeft";
async function getCaseStudy() {
  const client = new SanityClient({
    projectId: "46uxd6a7",
    dataset: "production",
    useCdn: process.env.NODE_ENV === "production",
  });

  const casestudy = await client.fetch({
    query: `*[_type == 'casestudy']`,
    config: {
      next: { revalidate: 60 },
    },
  });
  return casestudy;
}
const configuredSanityClient = createClient({
  projectId: "46uxd6a7",
  dataset: "production",
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: "2022-03-07",
});

export default async function CaseStudyForHome() {
  const caseData = await getCaseStudy();
  const builder = imageUrlBuilder(configuredSanityClient);

  function urlFor(source) {
    return builder.image(source);
  }

  const data = [...caseData.slice(0, 4)];

  return (
    <div>
      <div className="grid md:flex md:justify-center md:align-middle md:items-center">
        <div className="   md:basis-1/3 basis-3/3 grid text-center items-center place-items-center">
          <ParallaxLeftRight>
            <div className="case-study-main grid text-center items-center place-items-center mobile-hide">
              <h1 className=" hidden md:flex md:justify-center md:text-5xl  ">
                <TypeComp />
              </h1>
              <p
                className="text-gray-800 p-10 text-lg"
                style={{ fontSize: "17px", letterSpacing: "5px" }}
              >
                A study in our project making process and impact
              </p>
            </div>
          </ParallaxLeftRight>
          <ParallaxRightLeft>
            <div className="md:hidden case-title-mobile">
              <h1 className=" flex justify-center text-5xl md:hidden  ">
                <TypeComp />
              </h1>
              <p className="text-gray-800 p-10 text-lg">
                A study in our project making process and impact
              </p>
            </div>
          </ParallaxRightLeft>
        </div>
        <div className="md:basis-2/3 basis-3/3">
          <div className=" flex justify-center ">
            <div className="grid grid-cols-1 md:grid-cols-2 ">
              {data.map((cases, i) => (
                <div key={cases._id} className="mt-3 md:mt-0">
                  <CaseStudyReveal cases={cases} i={i} />
                  {/*
                    <Link href={`/casestudy/${cases.slug.current}`}>
                      <div className=" w-1/2">
                        <div className="article-card md:m-7">
                          <div className="content">
                            <p className="title glass">{cases.title}</p>
                          </div>
                          <img
                            src={urlFor(cases.mainImage).url()}
                            alt={cases.title}
                          />
                        </div>
                      </div>
                    </Link>
                  */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
