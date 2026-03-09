import { useEffect } from "react";

const SITE_URL = "https://communiquecate.in";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

type SeoProps = {
  title: string;
  description: string;
  canonicalPath: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
  structuredData?: Record<string, unknown>;
};

const upsertMeta = (
  key: "name" | "property",
  value: string,
  content: string,
) => {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${key}="${value}"]`,
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(key, value);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const upsertLink = (rel: string, href: string) => {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
};

const Seo = ({
  title,
  description,
  canonicalPath,
  image = DEFAULT_IMAGE,
  type = "website",
  noindex = false,
  structuredData,
}: SeoProps) => {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${canonicalPath}`;

    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");

    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", image);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", image);

    upsertLink("canonical", canonicalUrl);

    const structuredDataId = "seo-structured-data";
    const existingScript = document.getElementById(structuredDataId);

    if (structuredData) {
      const script = existingScript ?? document.createElement("script");
      script.id = structuredDataId;
      script.setAttribute("type", "application/ld+json");
      script.textContent = JSON.stringify(structuredData);
      if (!existingScript) {
        document.head.appendChild(script);
      }
    } else if (existingScript) {
      existingScript.remove();
    }
  }, [title, description, canonicalPath, image, type, noindex, structuredData]);

  return null;
};

export default Seo;
