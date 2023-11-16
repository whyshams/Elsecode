import React from "react";
import { createClient } from "@sanity/client";
import SanityClient from "next-sanity-client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import RevealFromLeft from "./RevealFromLeft";

async function getCaseStudy() {
  const client = new SanityClient({
    projectId: "46uxd6a7",
    dataset: "production",
    useCdn: process.env.NODE_ENV === "production",
  });

  const casestudy = await client.fetch({
    query: `*[_type == 'client']`,
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

export default async function ClientLogoSlide() {
  const data = await getCaseStudy();
  const builder = imageUrlBuilder(configuredSanityClient);
  function urlFor(source) {
    return builder.image(source);
  }
  return (
    <RevealFromLeft>
      <div className=" text-center mt-10">
        <h1 className=" hidden md:flex md:justify-center md:text-5xl md:font-bold md:my-2">
          Clients
        </h1>
        <img className="md:hidden service-title-img" src="/client.png" />

        <p className="text-gray-400 my-3">
          The amazing people and organizations we have served
        </p>
      </div>

      <div className="flex flex-row justify-center flex-wrap">
        {data.map((client) => (
          <div key={client._id} className="md:my-4 client-logo">
            <a href={client.companylink} target="_blank">
              <Image
                src={urlFor(client.companylogo).url()}
                width={200}
                height={200}
                alt={client.companyname}
              />
            </a>
          </div>
        ))}
      </div>
    </RevealFromLeft>
  );
}
