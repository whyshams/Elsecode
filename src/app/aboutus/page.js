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

export const metadata = {
  title: "ElseCode - About Us",
  description:
    "Learn About ElseCode -ElseCode HELPS YOUR BUSINESS FIND CUTTING-EDGE TECH SOLUTIONS AND YOUR CUSTOMER FIND YOU - Web Development, Web Design, SEO service, Wordpress development, shopify development, MERN stack, React js development, UI/UX design",
  openGraph: {
    images: "/elsecodelogo.png",
  },
};

export default async function page() {
  const data = await getServices();

  return (
    <div className="flex justify-center">
      {data.map((about) => (
        <div key={about._id} className="service-blog">
          <div className="service-post">
            <div className="flex justify-center mt-32 md:mt-2 mb-32">
              <h1
                className="uppercase flex justify-center align-middle items-center"
                style={{ fontSize: "22px", letterSpacing: "5px" }}
              >
                <div className="line mr-3"></div>

                {about.title}
              </h1>
            </div>
            <div className="about-us-content">
              <YourComponent value={about.body} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
