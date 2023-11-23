import React from "react";
import ClientLogoSlide from "./ClientLogoSlide";
import ReviewCarousel from "./ReviewCarousel";
import SanityClient from "next-sanity-client";

async function getClientReview() {
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

export default async function ClientComp() {
  const data = await getClientReview();
  return (
    <div>
      <div>
        <ClientLogoSlide />
      </div>
      <div className="mt-24 mb-24">
        <div className="text-center">
          <ReviewCarousel data={data} />
        </div>
      </div>
    </div>
  );
}
