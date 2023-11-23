import React from "react";
import SanityClient from "next-sanity-client";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import YourComponent from "@/components/BlogSample";
import ParallaxRightLeft from "@/components/ParallaxRightLeft";
import RevealFromLeft from "@/components/RevealFromLeft";
import RevealFromRight from "@/components/RevealFromRight";
import ParallaxLeftRight from "@/components/ParallaxLeftRight";
async function getSingleService(slug) {
  const client = new SanityClient({
    projectId: "46uxd6a7",
    dataset: "production",
    useCdn: process.env.NODE_ENV === "production",
  });

  const service = await client.fetch({
    query: `*[_type == 'service' && slug.current == '${slug}']`,
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
        Services
      </h1>
      <div>
        {data.map((service) => (
          <div key={service._id} className="service-blog">
            <div className="flex justify-center text-center mt-24 mb-24">
              <div className="content-page-title">
                <RevealFromLeft>
                  <h1 className="md:text-5xl text-2xl">{service.title}</h1>
                </RevealFromLeft>
              </div>
            </div>
            <div className="main-image-service">
              <div className="mobile-hide">
                <RevealFromRight>
                  <ParallaxLeftRight>
                    <img
                      src={urlFor(service.categoryimage).url()}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </ParallaxLeftRight>
                </RevealFromRight>
              </div>
              <div className="pc-hide">
                <img
                  src={urlFor(service.categoryimage).url()}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="service-post mb-10">
                <YourComponent value={service.body} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
