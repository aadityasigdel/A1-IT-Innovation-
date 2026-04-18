export function updatePageSEO({
  title = "A1 IT Innovation | Top Software & IT Company in Nepal",
  description = "Transform your business with secure web, mobile app, and custom software solutions from A1 IT Innovation.",
  keywords = "",
  image = "https://www.a1itinnovation.com.np/Publiclogo.png",
  url = "https://www.a1itinnovation.com.np",
  author = "A1 IT Innovation",
}) {
  // Update title
  document.title = title;

  // Update meta tags
  updateMetaTag("name", "description", description);
  updateMetaTag("name", "keywords", keywords);
  updateMetaTag("name", "author", author);

  // Open Graph tags
  updateMetaTag("property", "og:title", title);
  updateMetaTag("property", "og:description", description);
  updateMetaTag("property", "og:image", image);
  updateMetaTag("property", "og:url", url);

  // Twitter Card tags
  updateMetaTag("name", "twitter:title", title);
  updateMetaTag("name", "twitter:description", description);
  updateMetaTag("name", "twitter:image", image);

  // Canonical URL
  updateCanonical(url);
}

function updateMetaTag(attributeName, attributeValue, content) {
  let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function updateCanonical(url) {
  let canonical = document.querySelector("link[rel='canonical']");

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", url);
}

export default updatePageSEO;
