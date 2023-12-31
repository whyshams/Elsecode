import React from "react";
import SanityClient from "next-sanity-client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "@sanity/client";
import Link from "next/link";
import ParallaxLeftRight from "@/components/ParallaxLeftRight";
import ParallaxRightLeft from "@/components/ParallaxRightLeft";

async function getCaseStudy() {
  const client = new SanityClient({
    projectId: "46uxd6a7",
    dataset: "production",
    useCdn: process.env.NODE_ENV === "production",
  });

  const casestudy = await client.fetch({
    query: `*[_type == 'blog']`,
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
  title: "ElseCode - Blogs",
  description:
    "Go Through Blogs by ElseCode to get some free tricks and tips for your business - ElseCode HELPS YOUR BUSINESS FIND CUTTING-EDGE TECH SOLUTIONS AND YOUR CUSTOMER FIND YOU - Web Development, Web Design, SEO service, Wordpress development, shopify development, MERN stack, React js development, UI/UX design",
  openGraph: {
    images: "https://elsecode.tech/elsecodelogo.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function page() {
  const data = await getCaseStudy();
  const builder = imageUrlBuilder(configuredSanityClient);

  function urlFor(source) {
    return builder.image(source);
  }
  const withoutfirstblog = [...data.slice(1)];

  return (
    <div>
      <div className=" text-center mt-20 mb-20">
        <div className="">
          <div className=" grid md:grid-cols-2 grid-cols-1">
            <ParallaxLeftRight>
              <div className=" text-4xl my-2">
                <h2 className="blog-main-title">
                  Blogs, Tech updates and News
                </h2>
                <div className="flex justify-center mt-4 m-10">
                  <h1
                    className=" flex justify-center align-middle items-center mt-10"
                    style={{
                      fontSize: "17px",
                      letterSpacing: "5px",
                    }}
                  >
                    Some news and tips that might help your business
                  </h1>
                </div>
              </div>
            </ParallaxLeftRight>

            <Link href={`/blogs/${data[0].slug.current}`}>
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
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {withoutfirstblog.map((cases, i) => (
              <div key={cases._id} className="flex justify-center mb-5">
                <Link href={`/blogs/${cases.slug.current}`}>
                  <div className="m-2 blog-item">
                    <ParallaxRightLeft>
                      <img
                        src={urlFor(cases.mainImage).url()}
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "10px",
                        }}
                      />
                    </ParallaxRightLeft>
                    <ParallaxLeftRight>
                      <div className="float-left text-left mt-4">
                        <h1 className="blog-content-title ">{cases.title}</h1>
                      </div>
                    </ParallaxLeftRight>

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
