import React from "react";
import SanityClient from "next-sanity-client";
import Reveal from "@/components/Reveal";
import Link from "next/link";

async function getServices() {
  const client = new SanityClient({
    projectId: "46uxd6a7",
    dataset: "production",
    useCdn: process.env.NODE_ENV === "production",
  });

  const service = client.fetch({
    query: `*[_type == 'service']`,
    config: {
      next: { revalidate: 0 },
    },
  });
  return service;
}

export default async function page() {
  const data = await getServices();

  return (
    <div>
      <div className=" block text-center mt-20 mb-20">
        <h1
          className="uppercase flex justify-center align-middle items-center"
          style={{ fontSize: "22px", letterSpacing: "5px" }}
        >
          <div className="line mr-3"></div>
          Services
        </h1>
        <div className="flex justify-center mt-14 mb-14">
          <div className="content-page-title">
            <p>
              Indulge in excellence with our meticulously crafted services,where
              innovation meets dedication to elevate your experience
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-wrap justify-center md:grid md:grid-cols-3 md:justify-items-center service-page">
          <div>
            <Reveal>
              <div className="service-content">
                <Link href={`/services/${data[0].slug.current}`}>
                  <div className="">
                    <div className=" grid text-center">
                      <h3 className="service-page-card-title">
                        {data[0].title}
                      </h3>
                      <p>{data[0].titledescription}</p>
                      <p className="service-learn-more">Learn More</p>
                    </div>
                  </div>
                </Link>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <Link href={`/services/${data[1].slug.current}`}>
                <div className="service-content">
                  <div className=" grid text-center">
                    <h3>{data[1].title}</h3>
                    <p>{data[1].titledescription}</p>
                    <p className="service-learn-more">Learn More</p>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
          <div>
            <Reveal>
              <Link href={`/services/${data[2].slug.current}`}>
                <div className="service-content">
                  <div className=" grid text-center">
                    <h3>{data[2].title}</h3>
                    <p>{data[2].titledescription}</p>
                    <p className="service-learn-more">Learn More</p>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
        <div className="flex md:justify-around flex-wrap justify-center mt-7 service-page">
          <div>
            <Reveal>
              <Link href={`/services/${data[3].slug.current}`}>
                <div className="service-content">
                  <div className=" grid text-center">
                    <h3>{data[3].title}</h3>
                    <p>{data[3].titledescription}</p>
                    <p className="service-learn-more">Learn More</p>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
          <div>
            <Reveal>
              <Link href={`/services/${data[4].slug.current}`}>
                <div className="service-content">
                  <div className=" grid text-center">
                    <h3>{data[4].title}</h3>
                    <p>{data[4].titledescription}</p>
                    <p className="service-learn-more">Learn More</p>
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
