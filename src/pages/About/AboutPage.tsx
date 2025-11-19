/**
 * @Author:XYH
 * @Date:2025-11-20
 * @Description: 关于页面，介绍站点与开发者信息（E-E-A-T 信号）
 */
import React from "react";
import Card from "../../components/ui/Card";
import Meta from "../../components/seo/Meta";
import Schema from "../../components/seo/Schema";
import SEOBlock from "../../components/seo/SEOBlock";
import { buildBreadcrumbSchema } from "../../utils/seo/schemaBuilders";

const AboutPage: React.FC = () => {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", url: "https://relax-game.xyh.wiki/" },
    { name: "About", url: "https://relax-game.xyh.wiki/about" }
  ]);

  return (
    <>
      <Meta
        title="About - Relax Game Hub"
        description="Learn what Relax Game Hub is about, who created it, and how it approaches Cookie Clicker style tools with privacy and trust."
        keywords="about relax game hub,xyh idle game tools"
        canonical="https://relax-game.xyh.wiki/about"
      />
      <Schema jsonLd={breadcrumb} />

      <Card title="About Relax Game Hub">
        <p>
          Relax Game Hub is a small, focused website dedicated to Cookie Clicker style incremental
          and idle games. It provides calculators, prestige estimators and educational guides to
          help players understand and enjoy the underlying mechanics.
        </p>
        <h2 className="section-title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>
          Who built this?
        </h2>
        <p>
          Relax Game Hub is designed and developed by XYH. The goal is to build high-quality,
          privacy-friendly, SEO-optimized tools that can be easily accessed from anywhere without
          accounts or logins.
        </p>
        <h2 className="section-title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>
          How do we handle your data?
        </h2>
        <p>
          All calculators and tools run entirely in your browser. We do not ask you to upload game
          saves, and we do not process cookies or progress on a server. This is explicitly stated on
          the footer and tool pages as part of our trust and E-E-A-T focus.
        </p>
        <SEOBlock
          keywords={[
            "about cookie clicker tools site",
            "who built relax game hub",
            "xyh idle game website"
          ]}
        />
      </Card>
    </>
  );
};

export default AboutPage;
