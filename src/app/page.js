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

export default async function Home() {
  const clientReviewData = await getClientReview();
  return (
    <>
      <div>
        <div className="">
          <ParallaxParent>
            <HeroBanner />
          </ParallaxParent>
        </div>
        <div className="">
          <div className="mobile-hide">
            <ParallaxParent>
              <ServiceCategory />
            </ParallaxParent>
          </div>
          <div className="md:hidden">
            <ServiceCategory />
          </div>
        </div>
        <div>
          <div className="mobile-hide">
            <ParallaxRightLeft>
              <ClientLogoSlide />
            </ParallaxRightLeft>
          </div>
          <div className="md:hidden">
            <ClientLogoSlide />
          </div>
        </div>
        <div className="">
          <div className="mt-10 mobile-hide">
            <ParallaxLeftRight>
              <CaseStudyForHome />
            </ParallaxLeftRight>
          </div>
          <div className="md:hidden">
            <CaseStudyForHome />
          </div>
        </div>
        <div className="mobile-hide">
          <ParallaxRightLeft>
            <div className="grid grid-cols-2 grid-rows-1">
              <div className="height-100">
                <ReviewCarousel data={clientReviewData} />
              </div>
              <div className=" grid text-center items-center">
                <div>
                  <h2 className="text-5xl flex">
                    We have clients all over the World
                  </h2>
                  <p className="flex">
                    See what the clients talked about us after our projects have
                    been done
                  </p>
                </div>
              </div>
            </div>
          </ParallaxRightLeft>
        </div>
        <div className="md:hidden">
          <div className="grid grid-cols-1">
            <div className=" grid text-center items-center">
              <div className="pt-8">
                <h2 className="text-3xl flex">
                  We have clients all over the World
                </h2>
                <p className="flex">
                  See what the clients talked about us after our projects have
                  been done
                </p>
              </div>
            </div>
            <div className="">
              <ReviewCarousel data={clientReviewData} />
            </div>
          </div>
        </div>

        <div className=" mobile-hide h-screen grid place-items-center">
          <div className="grid grid-rows-1 grid-cols-2 text-center align-middle ">
            <div>
              <div className="">
                <h2 className="text-5xl flex">
                  If You have any business, We might have some ideas for you
                </h2>
                <p className="flex">
                  So, lets generate ideas. Fill in the contact form and write
                  about your business or the project you have in mind. We will
                  reach you within 24 hours.
                </p>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>

        <div className=" md:hidden grid place-items-center mt-14 mb-8">
          <div className="grid grid-cols-1 text-center align-middle ">
            <div>
              <div className="">
                <h2 className="md:text-5xl text-3xl flex">
                  If You have any business, We might have some ideas for you
                </h2>
                <p className="flex">
                  So, lets generate ideas. Fill in the contact form and write
                  about your business or the project you have in mind. We will
                  reach you within 24 hours.
                </p>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
