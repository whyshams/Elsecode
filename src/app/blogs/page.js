import React from "react";
import SanityClient from "next-sanity-client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "@sanity/client";
import Link from "next/link";

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

export default async function page() {
  const data = await getCaseStudy();
  const builder = imageUrlBuilder(configuredSanityClient);

  function urlFor(source) {
    return builder.image(source);
  }
  console.log(data);
  return (
    <div>
      <div className=" block text-center mt-20 mb-20">
        <h1 className=" text-5xl font-bold my-2">Case Study</h1>
        <p className="text-gray-400 my-3">
          Indulge in excellence with our meticulously crafted services,where
          innovation meets dedication to elevate your experience
        </p>
        <div>
          <div className="flex justify-center flex-wrap">
            {data.map((cases) => (
              <div key={cases._id} className="flex-none w-1/2">
                <Link href={`/blogs/${cases.slug.current}`}>
                  <div className="m-2 caseCard">
                    <div
                      style={{
                        background: `url(${urlFor(cases.mainImage).url()})`,
                        backgroundPosition: "center",
                        backgroundSize: "100% auto",
                        backgroundRepeat: "no-repeat",
                        height: "400px",
                      }}
                    >
                      <h1 className="font-bold text-4xl left-0 pt-56">
                        {cases.title}
                      </h1>
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
