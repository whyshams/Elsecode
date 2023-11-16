import React from "react";
import SanityClient from "next-sanity-client";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import YourComponent from "@/components/BlogSample";
async function getSingleService(slug) {
  const client = new SanityClient({
    projectId: "46uxd6a7",
    dataset: "production",
    useCdn: process.env.NODE_ENV === "production",
  });

  const service = await client.fetch({
    query: `*[_type == 'blog' && slug.current == '${slug}']`,
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
      <div>
        {data.map((service) => (
          <div key={service._id} className="service-blog">
            <div className="flex justify-center">
              <h1 className="font-bold text-5xl">{service.title}</h1>
            </div>
            <div className="main-image-service">
              <div>
                <img
                  src={urlFor(service.mainImage).url()}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
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
