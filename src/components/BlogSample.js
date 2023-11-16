import { PortableText } from "@portabletext/react";
import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "@sanity/client";

const configuredSanityClient = createClient({
  projectId: "46uxd6a7",
  dataset: "production",
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: "2022-03-07",
});

// Barebones lazy-loaded image component
const SampleImageComponent = ({ value, isInline }) => {
  const { width, height } = getImageDimensions(value);
  const builder = imageUrlBuilder(configuredSanityClient);
  function urlFor(source) {
    console.log(source.align);
    return builder.image(source);
  }
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          className="blog-image"
          src={urlFor(value)
            .width(isInline ? 100 : 800)
            .fit("max")
            .auto("format")
            .url()}
          alt={value.alt || " "}
          loading="lazy"
          style={{
            // Display alongside text if image appears inside a block text span

            // Avoid jumping around with aspect-ratio CSS property
            aspectRatio: width / height,
          }}
        />
      </div>
    </>
  );
};

const components = {
  types: {
    image: SampleImageComponent,
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },
};

const YourComponent = ({ value }) => {
  return <PortableText value={value} components={components} />;
};

export default YourComponent;
