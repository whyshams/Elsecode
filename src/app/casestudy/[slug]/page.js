import React from "react";
import SanityClient from "next-sanity-client";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import YourComponent from "@/components/BlogSample";
import RevealFromRight from "@/components/RevealFromRight";
import ParallaxLeftRight from "@/components/ParallaxLeftRight";
import RevealFromLeft from "@/components/RevealFromLeft";
async function getSingleService(slug) {
  const client = new SanityClient({
    projectId: "46uxd6a7",
    dataset: "production",
    useCdn: process.env.NODE_ENV === "production",
  });

  const service = await client.fetch({
    query: `*[_type == 'casestudy' && slug.current == '${slug}']`,
    config: {
      next: { revalidate: 0 },
    },
  });
  return service;
}
const configuredSanityClient = createClient({
  projectId: "46uxd6a7",
  dataset: "production",
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: "2022-03-07",
});

export async function generateMetadata({ params }) {
  // read route params
  const slug = params.slug;

  // fetch data
  const data = await getSingleService(slug);
  const builder = imageUrlBuilder(configuredSanityClient);
  function urlFor(source) {
    return builder.image(source);
  }
  const title = data.map((d) => d.title);
  const image = data.map((d) => urlFor(d.mainImage).url());

  return {
    title: `${title[0]} -A blog by ElseCode`,
    openGraph: {
      images: image,
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
}

export default async function page({ params }) {
  const slug = params.slug;
  const data = await getSingleService(slug);
  const builder = imageUrlBuilder(configuredSanityClient);
  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <div>
      <h1
        className="uppercase flex justify-center align-middle items-center mt-24 mb-16"
        style={{ fontSize: "22px", letterSpacing: "5px" }}
      >
        <div className="line mr-3"></div>
        Case Study
      </h1>
      <div>
        {data.map((service) => (
          <div key={service._id} className="service-blog mb-10">
            <div className="md:flex block">
              <div className="flex justify-center text-center md:m-10">
                <div className="content-page-title">
                  <RevealFromLeft>
                    <h1 className="text-2xl md:text-4xl">{service.title}</h1>
                  </RevealFromLeft>
                </div>
              </div>
              <div className="">
                <div className="mobile-hide mr-5">
                  <ParallaxLeftRight>
                    <img
                      src={urlFor(service.mainImage).url()}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "10px",
                      }}
                    />
                  </ParallaxLeftRight>
                </div>
              </div>
            </div>
            <div className="pc-hide">
              <img
                src={urlFor(service.mainImage).url()}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="flex justify-center">
              <div className="service-post">
                <YourComponent value={service.body} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
