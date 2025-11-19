/**
 * @Author:XYH
 * @Date:2025-11-20
 * @Description: 首页，展示 Hero、核心功能、热门工具与 SEO 关键字
 */
import React from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../../i18n";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import FAQList from "../../components/ui/FAQList";
import SEOBlock from "../../components/seo/SEOBlock";
import Meta from "../../components/seo/Meta";
import Schema from "../../components/seo/Schema";
import { buildBreadcrumbSchema } from "../../utils/seo/schemaBuilders";

const HomePage: React.FC = () => {
  const { t } = useI18n();

  const faqItems = [
    {
      question: "Is this an official Cookie Clicker website?",
      answer:
        "No. Relax Game Hub is an independent fan-made tools and knowledge website focused on Cookie Clicker and idle game mechanics."
    },
    {
      question: "Do your tools upload my save or data?",
      answer:
        "No. All tools run fully in your browser. We do not collect, store or transmit your save data."
    },
    {
      question: "Can I use these tools on mobile?",
      answer:
        "Yes. The website is responsive and should work on modern mobile browsers, although desktop is recommended for complex calculations."
    },
    {
      question: "Do your formulas match the game exactly?",
      answer:
        "The calculators use simplified formulas inspired by Cookie Clicker. They are designed for learning and planning, not as a perfect replica."
    },
    {
      question: "Who built Relax Game Hub?",
      answer:
        "Relax Game Hub is designed and developed by XYH as a high-quality tools and SEO-optimized resource site."
    }
  ];

  const homeBreadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: "https://relax-game.xyh.wiki/" }
  ]);

  return (
    <>
      <Meta
        title="Relax Game Hub - Cookie Clicker & Idle Game Guides and Tools"
        description="Relax Game Hub provides calculators, prestige estimators and strategy guides for Cookie Clicker and idle games. 100% local processing, no data upload."
        keywords="cookie clicker tools,idle game tools,cps calculator,prestige calculator,incremental game strategy"
        canonical="https://relax-game.xyh.wiki/"
      />
      <Schema jsonLd={homeBreadcrumbSchema} />

      {/* Hero 区域 */}
      <section
        className="card"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginBottom: "1.5rem"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem"
          }}
        >
          <h1
            style={{
              fontSize: "1.8rem",
              fontWeight: 800,
              letterSpacing: "0.03em"
            }}
          >
            {t("hero.title")}
          </h1>
          <p className="section-subtitle">{t("hero.subtitle")}</p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          <Link to="/tools">
            <Button>{t("hero.cta.tools")}</Button>
          </Link>
          <Link to="/guides">
            <Button variant="ghost">{t("hero.cta.guides")}</Button>
          </Link>
        </div>
      </section>

      {/* 功能介绍 */}
      <div className="card-grid" style={{ marginBottom: "1.5rem" }}>
        <Card
          title="Idle game calculators"
          subtitle="Understand your cookies per second, prestige value and growth curve."
        >
          <ul style={{ fontSize: "0.9rem", paddingLeft: "1.1rem", marginTop: "0.4rem" }}>
            <li>CPS (cookies per second) calculator</li>
            <li>Prestige / heavenly chips estimator</li>
            <li>Building and upgrade strategy suggestions</li>
          </ul>
        </Card>
        <Card
          title="Educational guides"
          subtitle="Learn how incremental games work behind the scenes."
        >
          <ul style={{ fontSize: "0.9rem", paddingLeft: "1.1rem", marginTop: "0.4rem" }}>
            <li>Cookie Clicker beginner and advanced guides</li>
            <li>Idle game design and balancing principles</li>
            <li>Long-term ascension planning</li>
          </ul>
        </Card>
        <Card
          title="Privacy by design"
          subtitle="All tools run locally in your browser. No save upload required."
        >
          <ul style={{ fontSize: "0.9rem", paddingLeft: "1.1rem", marginTop: "0.4rem" }}>
            <li>No account, no login</li>
            <li>No external API calls for calculations</li>
            <li>Clear privacy and terms pages</li>
          </ul>
        </Card>
      </div>

      {/* 热门工具 */}
      <Card
        title="Popular tools"
        subtitle="Start with these popular Cookie Clicker style calculators."
      >
        <div className="card-grid">
          <div className="card">
            <h3 className="section-title" style={{ fontSize: "1.05rem" }}>
              CPS Calculator
            </h3>
            <p className="section-subtitle">
              Estimate your total cookies per second from clicking and buildings.
            </p>
            <Link to="/tools/cps-calculator">
              <Button style={{ marginTop: "0.6rem" }}>Open CPS calculator</Button>
            </Link>
          </div>
          <div className="card">
            <h3 className="section-title" style={{ fontSize: "1.05rem" }}>
              Prestige Calculator
            </h3>
            <p className="section-subtitle">
              See how many prestige levels you can gain from your total cookies baked.
            </p>
            <Link to="/tools/prestige-calculator">
              <Button style={{ marginTop: "0.6rem" }}>Open prestige calculator</Button>
            </Link>
          </div>
          <div className="card">
            <h3 className="section-title" style={{ fontSize: "1.05rem" }}>
              Strategy Generator
            </h3>
            <p className="section-subtitle">
              Get a simple step-by-step build order suggestion for your current stage.
            </p>
            <Link to="/tools/strategy-generator">
              <Button style={{ marginTop: "0.6rem" }}>Open strategy tool</Button>
            </Link>
          </div>
        </div>

        <SEOBlock
          keywords={[
            "cookie clicker cps calculator",
            "cookie clicker prestige calculator",
            "idle game cps optimizer",
            "incremental game strategy guide",
            "cookie clicker ascension planner"
          ]}
        />
      </Card>

      {/* 首页 FAQ */}
      <div style={{ marginTop: "1.5rem" }}>
        <Card title="Frequently asked questions">
          <FAQList items={faqItems} />
        </Card>
      </div>
    </>
  );
};

export default HomePage;
