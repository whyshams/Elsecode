import React from "react";
import SanityClient from "next-sanity-client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "@sanity/client";
import Link from "next/link";
import ParallaxLeftRight from "@/components/ParallaxLeftRight";
import TypeComp from "@/components/TypeComp";
import ParallaxRightLeft from "@/components/ParallaxRightLeft";
import ParallaxOpacity from "@/components/ParallaxOpacity";

async function getCaseStudy() {
  const client = new SanityClient({
    projectId: "46uxd6a7",
    dataset: "production",
    useCdn: process.env.NODE_ENV === "production",
  });

  const casestudy = await client.fetch({
    query: `*[_type == 'casestudy']`,
    config: {
      next: { revalidate: 0 },
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
export const metadata = {
  title: "Case Studies of ElseCode",
  description:
    "Go Through the Case Studies of ElseCode where they have discussed about their Project making process and impact - ElseCode HELPS YOUR BUSINESS FIND CUTTING-EDGE TECH SOLUTIONS AND YOUR CUSTOMER FIND YOU - Web Development, Web Design, SEO service, Wordpress development, shopify development, MERN stack, React js development, UI/UX design",
  openGraph: {
    images: "/elsecodelogo.png",
  },
};

export default async function page() {
  const data = await getCaseStudy();
  const builder = imageUrlBuilder(configuredSanityClient);

  function urlFor(source) {
    return builder.image(source);
  }
  //mainImage

  const withoutfirstblog = [...data.slice(1)];

  return (
    <div>
      <div className=" text-center mt-20 mb-20">
        <div className="">
          <div className=" grid md:grid-cols-2 grid-cols-1">
            <div className="pc-hide">
              <ParallaxRightLeft>
                <div className=" grid text-center items-center place-items-center">
                  <h1 className=" md:flex md:justify-center text-5xl  ">
                    <TypeComp />
                  </h1>
                  <p
                    className="text-gray-800 p-10 text-lg"
                    style={{ fontSize: "17px", letterSpacing: "5px" }}
                  >
                    A study in our project making process and impact
                  </p>
                </div>
              </ParallaxRightLeft>
            </div>
            <ParallaxLeftRight>
              <Link href={`/casestudy/${data[0].slug.current}`}>
                <div className="flex justify-center mb-5">
                  <div className="m-2 blog-item">
                    <img
                      src={urlFor(data[0].mainImage).url()}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "10px",
                      }}
                    />
                    <div className="float-left text-left mt-4">
                      <h1 className=" blog-content-title ">{data[0].title}</h1>
                    </div>
                    <div className="float-left text-left mt-4">
                      <h1
                        className=" flex justify-center align-middle items-center mt-10"
                        style={{
                          fontSize: "17px",
                          letterSpacing: "5px",

                          borderBottom: "1px solid #ffd02a",
                        }}
                      >
                        <div className="line mr-3"></div>
                        Read More..
                      </h1>
                    </div>
                  </div>
                </div>
              </Link>
            </ParallaxLeftRight>

            <div className="mobile-hide">
              <ParallaxRightLeft>
                <div className=" grid text-center items-center place-items-center">
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
              </ParallaxRightLeft>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {withoutfirstblog.map((cases, i) => (
              <div key={cases._id} className="flex justify-center mb-5">
                <Link href={`/casestudy/${cases.slug.current}`}>
                  <div className="m-2 blog-item">
                    <ParallaxLeftRight>
                      <img
                        src={urlFor(cases.mainImage).url()}
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "10px",
                          margin: "5px",
                        }}
                      />
                    </ParallaxLeftRight>

                    <ParallaxRightLeft>
                      <div className="float-left text-left mt-4">
                        <h1 className="blog-content-title ">{cases.title}</h1>
                      </div>
                    </ParallaxRightLeft>

                    <div className="float-left text-left mt-4">
                      <ParallaxLeftRight>
                        <h1
                          className=" flex justify-center align-middle items-center mt-10"
                          style={{
                            fontSize: "17px",
                            letterSpacing: "5px",

                            borderBottom: "1px solid #ffd02a",
                          }}
                        >
                          <div className="line mr-3"></div>
                          Read More..
                        </h1>
                      </ParallaxLeftRight>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
