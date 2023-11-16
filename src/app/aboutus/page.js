import React from "react";
import SanityClient from "next-sanity-client";
import YourComponent from "@/components/BlogSample";

async function getServices() {
  const client = new SanityClient({
    projectId: "46uxd6a7",
    dataset: "production",
    useCdn: process.env.NODE_ENV === "production",
  });

  const about = client.fetch({
    query: `*[_type == 'aboutus']`,
    config: {
      next: { revalidate: 0 },
    },
  });
  return about;
}

export default async function page() {
  const data = await getServices();

  return (
    <div className="flex justify-center">
      {data.map((about) => (
        <div key={about._id} className="service-blog">
          <div className="service-post">
            <h1 className="flex justify-center">{about.title}</h1>
            <YourComponent value={about.body} />
          </div>
        </div>
      ))}
    </div>
  );
}
