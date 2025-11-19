/**
 * @Author:XYH
 * @Date:2025-11-20
 * @Description: schema.org JSON-LD 构建工具
 */

export function buildWebAppSchema(options: {
  name: string;
  url: string;
  description: string;
}): unknown {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: options.name,
    url: options.url,
    description: options.description,
    applicationCategory: "GameUtilityApplication"
  };
}

export function buildFAQSchema(items: { question: string; answer: string }[]): unknown {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer
      }
    }))
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; url: string }[]
): unknown {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url
    }))
  };
}
