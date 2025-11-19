/**
 * @Author:XYH
 * @Date:2025-11-20
 * @Description: 攻略详情页面，根据 slug 显示预定义文章
 */
import React from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/ui/Card";
import Meta from "../../components/seo/Meta";
import Schema from "../../components/seo/Schema";
import SEOBlock from "../../components/seo/SEOBlock";
import { buildBreadcrumbSchema } from "../../utils/seo/schemaBuilders";

const GuideDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  let title = "Guide";
  let description = "";
  let body: React.ReactNode = null;
  let keywords: string[] = [];

  if (slug === "cookie-clicker-beginners-guide") {
    title = "Cookie Clicker beginner's guide";
    description =
      "A simple beginner-friendly walkthrough of Cookie Clicker style progression.";
    keywords = ["cookie clicker beginner", "cookie clicker tips", "how to start cookie clicker"];
    body = (
      <>
        <p>
          Cookie Clicker looks simple at first glance: you click a cookie and numbers go up. Under
          the surface, however, it is an incremental game about compounding growth and long-term
          planning.
        </p>
        <h2 className="section-title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>
          1. Early game: clicking and first buildings
        </h2>
        <p>
          In the first minutes, actively click the big cookie and invest your cookies into cursors
          and grandmas. Your goal is to reach a point where passive CPS is strong enough that you
          can comfortably step away.
        </p>
        <h2 className="section-title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>
          2. Mid game: upgrades and diversification
        </h2>
        <p>
          Once mid-tier buildings unlock, focus on upgrades that multiply CPS globally. Do not rush
          expensive single buildings if you can buy upgrades that boost everything at once.
        </p>
        <h2 className="section-title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>
          3. Prestige planning
        </h2>
        <p>
          Prestige is a long-term mechanic. Use a prestige calculator to see how much you would gain
          by ascending now versus waiting for more cookies baked.
        </p>
      </>
    );
  } else if (slug === "idle-game-design-basics") {
    title = "Idle game design basics";
    description =
      "An overview of the core concepts behind idle and incremental game design, including growth curves and prestige.";
    keywords = ["idle game design", "incremental game theory", "prestige system design"];
    body = (
      <>
        <p>
          Idle and incremental games revolve around growth curves and long-term compulsion loops.
          Players stay engaged when numbers feel satisfying and decisions feel meaningful.
        </p>
        <h2 className="section-title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>
          1. Growth curves
        </h2>
        <p>
          Many incremental games use exponential or super-linear growth to create a sense of power.
          At the same time, you need soft caps or new layers of mechanics to prevent trivial
          infinite inflation.
        </p>
        <h2 className="section-title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>
          2. Prestige and layers
        </h2>
        <p>
          Prestige allows the player to reset part of their progress in exchange for a long-term
          bonus. This creates a new meta loop and keeps the game fresh.
        </p>
        <h2 className="section-title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>
          3. Player psychology
        </h2>
        <p>
          Good idle game design balances reward frequency, clarity of goals and perceived fairness.
          Tools like growth curve explorers can help designers reason about these trade-offs.
        </p>
      </>
    );
  } else {
    title = "Guide not found";
    description = "The requested guide does not exist.";
    body = <p>The requested guide could not be found.</p>;
    keywords = ["guide not found"];
  }

  const canonical = `https://relax-game.xyh.wiki/guides/${slug ?? ""}`;
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", url: "https://relax-game.xyh.wiki/" },
    { name: "Guides", url: "https://relax-game.xyh.wiki/guides" },
    { name: title, url: canonical }
  ]);

  return (
    <>
      <Meta
        title={`${title} | Relax Game Hub`}
        description={description}
        keywords={keywords.join(",")}
        canonical={canonical}
      />
      <Schema jsonLd={breadcrumb} />
      <Card title={title}>
        {body}
        <SEOBlock keywords={keywords} />
      </Card>
    </>
  );
};

export default GuideDetailPage;
