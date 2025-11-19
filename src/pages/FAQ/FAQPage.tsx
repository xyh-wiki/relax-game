/**
 * @Author:XYH
 * @Date:2025-11-20
 * @Description: 全站 FAQ 页
 */
import React from "react";
import Card from "../../components/ui/Card";
import FAQList, { FAQItem } from "../../components/ui/FAQList";
import Meta from "../../components/seo/Meta";
import Schema from "../../components/seo/Schema";
import SEOBlock from "../../components/seo/SEOBlock";
import { buildBreadcrumbSchema, buildFAQSchema } from "../../utils/seo/schemaBuilders";

const faqItems: FAQItem[] = [
  {
    question: "Do you store my game save or cookies on a server?",
    answer:
      "No. All tools are implemented as pure front-end utilities. They only use your browser's memory while the page is open."
  },
  {
    question: "Is Relax Game Hub affiliated with the official Cookie Clicker creators?",
    answer:
      "Relax Game Hub is an independent fan-made website. It is not endorsed by, affiliated with or sponsored by the official creators of Cookie Clicker."
  },
  {
    question: "Can I rely on these calculators for serious optimization?",
    answer:
      "The calculators are simplified models designed for education and quick planning. For full optimization, always double-check within the game and use your own judgment."
  },
  {
    question: "How can I contact the developer?",
    answer: "You can reach XYH directly by email at xyh.wiki@gmail.com."
  },
  {
    question: "Can I suggest new tools or guides?",
    answer:
      "Yes. Feel free to propose tool ideas or guide topics via email. We prioritize features that help many players and are safe to implement as pure front-end utilities."
  }
];

const FAQPage: React.FC = () => {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", url: "https://relax-game.xyh.wiki/" },
    { name: "FAQ", url: "https://relax-game.xyh.wiki/faq" }
  ]);
  const faqSchema = buildFAQSchema(faqItems);

  return (
    <>
      <Meta
        title="FAQ - Relax Game Hub"
        description="Frequently asked questions about Relax Game Hub, our tools, data handling and relation to Cookie Clicker."
        keywords="cookie clicker tools faq,idle game helper faq"
        canonical="https://relax-game.xyh.wiki/faq"
      />
      <Schema jsonLd={[breadcrumb, faqSchema]} />
      <Card title="Frequently asked questions">
        <FAQList items={faqItems} />
        <SEOBlock
          keywords={[
            "cookie clicker tools faq",
            "idle game calculator faq",
            "relax game hub questions"
          ]}
        />
      </Card>
    </>
  );
};

export default FAQPage;
