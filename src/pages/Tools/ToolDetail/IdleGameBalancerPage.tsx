/**
 * @Author:XYH
 * @Date:2025-11-20
 * @Description: Idle Game 曲线探索工具（简化，为设计者提供增长趋势参考）
 */
import React, { useState } from "react";
import CalculatorInput from "../../../components/tools/CalculatorInput";
import ResultPanel from "../../../components/tools/ResultPanel";
import SEOBlock from "../../../components/seo/SEOBlock";
import Meta from "../../../components/seo/Meta";
import Schema from "../../../components/seo/Schema";
import { buildWebAppSchema, buildBreadcrumbSchema } from "../../../utils/seo/schemaBuilders";

interface CurvePoint {
  minute: number;
  cookies: number;
}

function simulateGrowth(
  baseCps: number,
  growthRate: number,
  minutes: number
): CurvePoint[] {
  const points: CurvePoint[] = [];
  let cps = baseCps;
  let totalCookies = 0;
  for (let m = 1; m <= minutes; m++) {
    totalCookies += cps * 60;
    cps *= 1 + growthRate;
    points.push({ minute: m, cookies: totalCookies });
  }
  return points;
}

const IdleGameBalancerPage: React.FC = () => {
  const [baseCps, setBaseCps] = useState(10);
  const [growthRate, setGrowthRate] = useState(0.05);
  const [minutes, setMinutes] = useState(30);

  const curve = simulateGrowth(baseCps, growthRate, minutes);

  const webAppSchema = buildWebAppSchema({
    name: "Idle Game Balancer - Relax Game Hub",
    url: "https://relax-game.xyh.wiki/tools/idle-game-balancer",
    description:
      "Explore a simplified idle game growth curve by tuning base CPS and per-minute growth rate."
  });

  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", url: "https://relax-game.xyh.wiki/" },
    { name: "Tools", url: "https://relax-game.xyh.wiki/tools" },
    { name: "Idle Game Balancer", url: "https://relax-game.xyh.wiki/tools/idle-game-balancer" }
  ]);

  return (
    <>
      <Meta
        title="Idle Game Balancer - Incremental curve explorer | Relax Game Hub"
        description="Visualize how different base CPS and growth rates impact the total cookies curve in an idle/incremental game."
        keywords="idle game balancing,incremental curve,incremental game design,cookie clicker design"
        canonical="https://relax-game.xyh.wiki/tools/idle-game-balancer"
      />
      <Schema jsonLd={[webAppSchema, breadcrumb]} />

      <div className="card-grid">
        <CalculatorInput
          title="Idle growth curve explorer"
          description="Adjust base CPS and growth rate to see how your total cookies curve behaves over time."
        >
          <div>
            <label htmlFor="baseCps">Base CPS at minute 0</label>
            <input
              id="baseCps"
              type="number"
              min={0}
              value={baseCps}
              onChange={(e) => setBaseCps(Number(e.target.value) || 0)}
            />
          </div>
          <div>
            <label htmlFor="growthRate">Growth rate per minute (e.g. 0.05 = +5%)</label>
            <input
              id="growthRate"
              type="number"
              step={0.01}
              value={growthRate}
              onChange={(e) => setGrowthRate(Number(e.target.value) || 0)}
            />
          </div>
          <div>
            <label htmlFor="minutes">Simulation length (minutes)</label>
            <input
              id="minutes"
              type="number"
              min={1}
              max={360}
              value={minutes}
              onChange={(e) => setMinutes(Number(e.target.value) || 1)}
            />
          </div>
        </CalculatorInput>

        <ResultPanel title="Growth overview">
          <p>
            This tool uses a simple exponential model where CPS increases by a fixed percentage each
            minute. It is not meant to represent Cookie Clicker exactly, but to help you reason
            about how aggressively your idle game grows.
          </p>
          <ul style={{ paddingLeft: "1.1rem", fontSize: "0.9rem", marginTop: "0.6rem" }}>
            {curve.slice(0, 10).map((point) => (
              <li key={point.minute}>
                Minute {point.minute}: total cookies ≈{" "}
                {point.cookies.toLocaleString("en-US", { maximumFractionDigits: 0 })}
              </li>
            ))}
          </ul>
          <p style={{ marginTop: "0.7rem", fontSize: "0.85rem", opacity: 0.9 }}>
            Tip: if your curve explodes too quickly, players may feel there is no meaningful
            decision-making. If it grows too slowly, the game may feel like a grind. Use this as a
            starting point for tuning your own incremental game.
          </p>
          <SEOBlock
            keywords={[
              "idle game growth curve",
              "incremental game balancing",
              "cookie clicker curve design",
              "idle game cps growth"
            ]}
          />
        </ResultPanel>
      </div>
    </>
  );
};

export default IdleGameBalancerPage;
