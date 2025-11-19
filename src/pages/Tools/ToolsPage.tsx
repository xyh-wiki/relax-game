/**
 * @Author:XYH
 * @Date:2025-11-20
 * @Description: 工具总览页面，以卡片形式展示所有工具入口
 */
import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/ui/Card";
import SEOBlock from "../../components/seo/SEOBlock";
import Meta from "../../components/seo/Meta";
import Schema from "../../components/seo/Schema";
import { buildBreadcrumbSchema } from "../../utils/seo/schemaBuilders";

const ToolsPage: React.FC = () => {
  const tools = [
    {
      name: "CPS Calculator",
      path: "/tools/cps-calculator",
      desc: "Estimate total cookies per second from clicking and buildings."
    },
    {
      name: "Prestige Calculator",
      path: "/tools/prestige-calculator",
      desc: "Estimate your prestige levels based on total cookies baked."
    },
    {
      name: "Strategy Generator",
      path: "/tools/strategy-generator",
      desc: "Get stage-based recommendations for what to buy next."
    },
    {
      name: "Idle Game Balancer",
      path: "/tools/idle-game-balancer",
      desc: "Explore how incremental growth curves behave for idle game design."
    }
  ];

  const schema = buildBreadcrumbSchema([
    { name: "Home", url: "https://relax-game.xyh.wiki/" },
    { name: "Tools", url: "https://relax-game.xyh.wiki/tools" }
  ]);

  return (
    <>
      <Meta
        title="Tools - Relax Game Hub"
        description="Browse calculators and utilities for Cookie Clicker and idle games: CPS calculator, prestige calculator, strategy helper and more."
        keywords="cookie clicker tools,idle game utilities,cookie clicker cps calc,prestige estimator"
        canonical="https://relax-game.xyh.wiki/tools"
      />
      <Schema jsonLd={schema} />

      <Card
        title="Cookie Clicker & idle game tools"
        subtitle="All tools run fully in your browser. No upload or login required."
      >
        <div className="card-grid" style={{ marginTop: "0.5rem" }}>
          {tools.map((tool) => (
            <div key={tool.name} className="card">
              <h3 className="section-title" style={{ fontSize: "1.05rem" }}>
                {tool.name}
              </h3>
              <p className="section-subtitle">{tool.desc}</p>
              <Link to={tool.path}>
                <button className="button-primary" style={{ marginTop: "0.6rem" }}>
                  Open tool
                </button>
              </Link>
            </div>
          ))}
        </div>
        <SEOBlock
          keywords={[
            "cookie clicker tools",
            "idle game toolkit",
            "incremental game utilities",
            "cookie clicker helper website"
          ]}
        />
      </Card>
    </>
  );
};

export default ToolsPage;
