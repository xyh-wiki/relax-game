/**
 * @Author:XYH
 * @Date:2025-11-20
 * @Description: 攻略列表页面
 */
import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/ui/Card";
import Meta from "../../components/seo/Meta";
import Schema from "../../components/seo/Schema";
import SEOBlock from "../../components/seo/SEOBlock";
import { buildBreadcrumbSchema } from "../../utils/seo/schemaBuilders";

const guides = [
  {
    slug: "cookie-clicker-beginners-guide",
    title: "Cookie Clicker beginner's guide",
    excerpt:
      "Learn how to start efficiently, what to buy first and how to think about long-term progression.",
    keywords: ["cookie clicker beginner guide", "how to start cookie clicker"]
  },
  {
    slug: "idle-game-design-basics",
    title: "Idle game design basics",
    excerpt:
      "A high-level overview of the core ideas behind incremental game design: compulsion loops, growth curves and prestige.",
    keywords: ["idle game design", "incremental game basics"]
  }
];

const GuidesListPage: React.FC = () => {
  const schema = buildBreadcrumbSchema([
    { name: "Home", url: "https://relax-game.xyh.wiki/" },
    { name: "Guides", url: "https://relax-game.xyh.wiki/guides" }
  ]);

  return (
    <>
      <Meta
        title="Guides - Cookie Clicker & idle game | Relax Game Hub"
        description="Read guides about Cookie Clicker and idle game design, from beginner tips to high-level incremental theory."
        keywords="cookie clicker guides,idle game guides,incremental game articles"
        canonical="https://relax-game.xyh.wiki/guides"
      />
      <Schema jsonLd={schema} />

      <Card
        title="Guides & articles"
        subtitle="Educational content about Cookie Clicker and idle/incremental game design."
      >
        <div className="card-grid" style={{ marginTop: "0.5rem" }}>
          {guides.map((g) => (
            <div key={g.slug} className="card">
              <h3 className="section-title" style={{ fontSize: "1.05rem" }}>
                {g.title}
              </h3>
              <p className="section-subtitle">{g.excerpt}</p>
              <Link to={`/guides/${g.slug}`}>
                <button className="button-primary" style={{ marginTop: "0.6rem" }}>
                  Read guide
                </button>
              </Link>
            </div>
          ))}
        </div>
        <SEOBlock
          keywords={[
            "cookie clicker how to play",
            "cookie clicker efficiency guide",
            "idle game design guide",
            "incremental game tutorial"
          ]}
        />
      </Card>
    </>
  );
};

export default GuidesListPage;
