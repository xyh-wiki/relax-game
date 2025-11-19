/**
 * @Author:XYH
 * @Date:2025-11-20
 * @Description: 站内 Sitemap 页面（与 sitemap.xml 对应），提升可浏览性
 */
import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/ui/Card";
import Meta from "../../components/seo/Meta";
import Schema from "../../components/seo/Schema";
import { buildBreadcrumbSchema } from "../../utils/seo/schemaBuilders";

const SitemapPage: React.FC = () => {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", url: "https://relax-game.xyh.wiki/" },
    { name: "Sitemap", url: "https://relax-game.xyh.wiki/sitemap" }
  ]);

  return (
    <>
      <Meta
        title="Sitemap - Relax Game Hub"
        description="Human-readable sitemap for Relax Game Hub, listing all main tools and content pages."
        keywords="relax game hub sitemap"
        canonical="https://relax-game.xyh.wiki/sitemap"
      />
      <Schema jsonLd={breadcrumb} />

      <Card title="Sitemap">
        <ul style={{ paddingLeft: "1.1rem", fontSize: "0.9rem" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tools">Tools</Link>
            <ul style={{ paddingLeft: "1.1rem" }}>
              <li>
                <Link to="/tools/cps-calculator">CPS Calculator</Link>
              </li>
              <li>
                <Link to="/tools/prestige-calculator">Prestige Calculator</Link>
              </li>
              <li>
                <Link to="/tools/strategy-generator">Strategy Generator</Link>
              </li>
              <li>
                <Link to="/tools/idle-game-balancer">Idle Game Balancer</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/guides">Guides</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/terms">Terms of Service</Link>
          </li>
        </ul>
      </Card>
    </>
  );
};

export default SitemapPage;
