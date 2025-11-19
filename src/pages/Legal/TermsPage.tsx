/**
 * @Author:XYH
 * @Date:2025-11-20
 * @Description: 使用条款页面
 */
import React from "react";
import Card from "../../components/ui/Card";
import Meta from "../../components/seo/Meta";
import Schema from "../../components/seo/Schema";
import { buildBreadcrumbSchema } from "../../utils/seo/schemaBuilders";

const TermsPage: React.FC = () => {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", url: "https://relax-game.xyh.wiki/" },
    { name: "Terms of Service", url: "https://relax-game.xyh.wiki/terms" }
  ]);

  return (
    <>
      <Meta
        title="Terms of Service - Relax Game Hub"
        description="Terms of service for using Relax Game Hub and its Cookie Clicker style tools and guides."
        keywords="relax game hub terms of service"
        canonical="https://relax-game.xyh.wiki/terms"
      />
      <Schema jsonLd={breadcrumb} />

      <Card title="Terms of Service">
        <p>
          By accessing Relax Game Hub, you agree to use the website and its tools at your own risk.
          We provide calculators and guides on a best-effort basis, but do not guarantee accuracy,
          completeness or fitness for any particular purpose.
        </p>
        <h2 className="section-title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>
          No official affiliation
        </h2>
        <p>
          Relax Game Hub is not affiliated with or endorsed by any official Cookie Clicker
          developers or publishers. All trademarks and game names belong to their respective owners.
        </p>
        <h2 className="section-title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>
          Non-commercial use
        </h2>
        <p>
          You may use the tools and guides for personal, non-commercial purposes. Reuse of content
          should include clear attribution to Relax Game Hub and XYH.
        </p>
      </Card>
    </>
  );
};

export default TermsPage;
