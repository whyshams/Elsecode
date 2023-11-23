import { PortableText } from "@portabletext/react";
import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "@sanity/client";
import ParallaxLeftRight from "./ParallaxLeftRight";
import ParallaxRightLeft from "./ParallaxRightLeft";
import ParallaxParent from "./ParallaxParent";

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
        <ParallaxLeftRight>
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
        </ParallaxLeftRight>
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
  block: {
    h2: ({ children }) => (
      <ParallaxRightLeft>
        <h2 className="blockcontent-h2">{children}</h2>
      </ParallaxRightLeft>
    ),
    h1: ({ children }) => (
      <ParallaxRightLeft>
        <h2 className="blockcontent-h2">{children}</h2>
      </ParallaxRightLeft>
    ),
    h3: ({ children }) => (
      <ParallaxRightLeft>
        <h2 className="blockcontent-h2">{children}</h2>
      </ParallaxRightLeft>
    ),
    h4: ({ children }) => (
      <ParallaxRightLeft>
        <h2 className="blockcontent-h2">{children}</h2>
      </ParallaxRightLeft>
    ),
  },
  marks: {
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" && "noindex nofollow"}
          style={{ color: "blue" }}
        >
          {children}
        </a>
      );
    },
  },
};

const YourComponent = ({ value }) => {
  return <PortableText value={value} components={components} />;
};

export default YourComponent;
