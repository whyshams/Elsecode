import HeroBanner from "@/components/HeroBanner";
import ServiceCategory from "@/components/ServiceCategory";
import ClientLogoSlide from "@/components/ClientLogoSlide";
import CaseStudyForHome from "@/components/CaseStudyForHome";
import ReviewCarousel from "@/components/ReviewCarousel";
import SanityClient from "next-sanity-client";
import ContactForm from "@/components/ContactForm";
import ParallaxParent from "@/components/ParallaxParent";
import ParallaxRightLeft from "@/components/ParallaxRightLeft";
import ParallaxLeftRight from "@/components/ParallaxLeftRight";
import ContactHeading from "@/components/ContactHeading";
import BlogCompForHome from "@/components/BlogCompForHome";

async function getClientReview() {
  const client = new SanityClient({
    projectId: "46uxd6a7",
    dataset: "production",
    useCdn: process.env.NODE_ENV === "production",
  });

  const casestudy = await client.fetch({
    query: `*[_type == 'client']`,
    config: {
      next: { revalidate: 30 },
    },
  });
  return casestudy;
}

export const metadata = {
  title: "ElseCode",
  description:
    "ELSECODE HELPS YOUR BUSINESS FIND CUTTING-EDGE TECH SOLUTIONS AND YOUR CUSTOMER FIND YOU - Web Development, Web Design, SEO service, Wordpress development, shopify development, MERN stack, React js development, UI/UX design",
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

export default async function Home() {
  const clientReviewData = await getClientReview();
  return (
    <>
      <div>
        <div className="">
          <HeroBanner />
        </div>
        <div className=" mt-44">
          <div className="mobile-hide  mb-10">
            <ParallaxParent>
              <ServiceCategory />
            </ParallaxParent>
          </div>
          <div className="md:hidden">
            <ServiceCategory />
          </div>
        </div>
        <div></div>

        <div className="mobile-hide">
          <div className="grid grid-cols-2 grid-rows-1">
            <div className=" grid text-center items-center">
              <ParallaxLeftRight>
                <ClientLogoSlide />
              </ParallaxLeftRight>
            </div>
            <ParallaxRightLeft>
              <div className="">
                <ReviewCarousel data={clientReviewData} />
              </div>
            </ParallaxRightLeft>
          </div>
        </div>
        <div className="md:hidden">
          <div className="grid grid-cols-1">
            <div className=" grid text-center items-center">
              {/*
              
              
              */}
              <ParallaxRightLeft>
                <ClientLogoSlide />
              </ParallaxRightLeft>
            </div>
            <div className="">
              <ParallaxLeftRight>
                <ReviewCarousel data={clientReviewData} />
              </ParallaxLeftRight>
            </div>
          </div>
        </div>

        <div className="">
          <div className="mt-16 mobile-hide">
            <CaseStudyForHome />
          </div>
          <div className="md:hidden">
            <CaseStudyForHome />
          </div>
        </div>
        <div>
          <BlogCompForHome />
        </div>
        <div className=" mobile-hide h-screen grid place-items-center p-10">
          <div className="card grid grid-rows-1 grid-cols-2  p-4">
            <div className="w-full">
              <ParallaxLeftRight>
                <ContactHeading />
              </ParallaxLeftRight>
            </div>

            <div className="w-full">
              <ParallaxRightLeft>
                <ContactForm />
              </ParallaxRightLeft>
            </div>
          </div>
        </div>

        <div className=" lg:hidden grid place-items-center mt-14 mb-8">
          <div className="grid grid-cols-1 text-center align-middle ">
            <div>
              <ParallaxLeftRight>
                <ContactHeading />
              </ParallaxLeftRight>
            </div>
            <div>
              <ParallaxRightLeft>
                <ContactForm />
              </ParallaxRightLeft>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
