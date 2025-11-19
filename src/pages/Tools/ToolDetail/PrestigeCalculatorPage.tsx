/**
 * @Author:XYH
 * @Date:2025-11-20
 * @Description: Prestige 计算器工具页面
 */
import React, { useState } from "react";
import CalculatorInput from "../../../components/tools/CalculatorInput";
import ResultPanel from "../../../components/tools/ResultPanel";
import SEOBlock from "../../../components/seo/SEOBlock";
import Meta from "../../../components/seo/Meta";
import Schema from "../../../components/seo/Schema";
import { computePrestige } from "../../../utils/calc/prestige";
import { buildWebAppSchema, buildBreadcrumbSchema } from "../../../utils/seo/schemaBuilders";

const PrestigeCalculatorPage: React.FC = () => {
  const [totalCookiesBaked, setTotalCookiesBaked] = useState<number>(1e15);

  const result = computePrestige({ totalCookiesBaked });

  const webAppSchema = buildWebAppSchema({
    name: "Prestige Calculator - Relax Game Hub",
    url: "https://relax-game.xyh.wiki/tools/prestige-calculator",
    description:
      "Estimate how many prestige levels you can gain from your total cookies baked in a Cookie Clicker style game."
  });

  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", url: "https://relax-game.xyh.wiki/" },
    { name: "Tools", url: "https://relax-game.xyh.wiki/tools" },
    { name: "Prestige Calculator", url: "https://relax-game.xyh.wiki/tools/prestige-calculator" }
  ]);

  return (
    <>
      <Meta
        title="Prestige Calculator - Cookie Clicker style | Relax Game Hub"
        description="Estimate your prestige levels and next ascension threshold based on total cookies baked."
        keywords="cookie clicker prestige calculator,heavenly chips estimator,idle game prestige helper"
        canonical="https://relax-game.xyh.wiki/tools/prestige-calculator"
      />
      <Schema jsonLd={[webAppSchema, breadcrumb]} />

      <div className="card-grid">
        <CalculatorInput
          title="Prestige calculator"
          description="Enter your total cookies baked to estimate your prestige level in a Cookie Clicker style formula."
        >
          <div>
            <label htmlFor="totalCookies">Total cookies baked (lifetime)</label>
            <input
              id="totalCookies"
              type="number"
              min={0}
              value={totalCookiesBaked}
              onChange={(e) => setTotalCookiesBaked(Number(e.target.value) || 0)}
            />
          </div>
          <p style={{ fontSize: "0.8rem", opacity: 0.85 }}>
            Formula used: prestige = floor( sqrt( totalCookies / 1e12 ) ). This is a simplified
            model inspired by Cookie Clicker and may not match the exact in-game values for all
            versions.
          </p>
        </CalculatorInput>

        <ResultPanel title="Estimated prestige gain">
          <p>
            <strong>Estimated prestige level:</strong> {result.prestigeLevel}
          </p>
          <p>
            <strong>Cookies required for next level:</strong>{" "}
            {result.nextLevelAtCookies.toLocaleString("en-US")}
          </p>
          <p style={{ marginTop: "0.8rem", fontSize: "0.85rem", opacity: 0.9 }}>
            Prestige in idle games is designed as a long-term system. Do not feel forced to ascend
            too often: focus on comfortable breakpoints where the next prestige level significantly
            speeds up your future runs.
          </p>
          <SEOBlock
            keywords={[
              "cookie clicker prestige calculator",
              "heavenly chips calculator",
              "idle game prestige estimator",
              "cookie clicker ascension threshold"
            ]}
          />
        </ResultPanel>
      </div>
    </>
  );
};

export default PrestigeCalculatorPage;
