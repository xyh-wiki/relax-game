/**
 * @Author:XYH
 * @Date:2025-11-20
 * @Description: CPS 计算器工具页面
 */
import React, { useState } from "react";
import CalculatorInput from "../../../components/tools/CalculatorInput";
import ResultPanel from "../../../components/tools/ResultPanel";
import SEOBlock from "../../../components/seo/SEOBlock";
import Meta from "../../../components/seo/Meta";
import Schema from "../../../components/seo/Schema";
import { computeCps } from "../../../utils/calc/cps";
import { buildWebAppSchema, buildBreadcrumbSchema } from "../../../utils/seo/schemaBuilders";

const CpsCalculatorPage: React.FC = () => {
  const [clickPower, setClickPower] = useState(1);
  const [clicksPerSecond, setClicksPerSecond] = useState(2);
  const [globalMultiplier, setGlobalMultiplier] = useState(1);

  const [cursorCount, setCursorCount] = useState(10);
  const [grandmaCount, setGrandmaCount] = useState(5);
  const [farmCount, setFarmCount] = useState(2);
  const [factoryCount, setFactoryCount] = useState(0);

  const result = computeCps({
    clickPower,
    clicksPerSecond,
    globalMultiplier,
    buildings: [
      { name: "Cursor", count: cursorCount, baseCps: 0.1 },
      { name: "Grandma", count: grandmaCount, baseCps: 1 },
      { name: "Farm", count: farmCount, baseCps: 8 },
      { name: "Factory", count: factoryCount, baseCps: 47 }
    ]
  });

  const webAppSchema = buildWebAppSchema({
    name: "CPS Calculator - Relax Game Hub",
    url: "https://relax-game.xyh.wiki/tools/cps-calculator",
    description: "Estimate your cookies per second based on clicking and building counts."
  });

  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", url: "https://relax-game.xyh.wiki/" },
    { name: "Tools", url: "https://relax-game.xyh.wiki/tools" },
    { name: "CPS Calculator", url: "https://relax-game.xyh.wiki/tools/cps-calculator" }
  ]);

  return (
    <>
      <Meta
        title="CPS Calculator - Cookie Clicker style | Relax Game Hub"
        description="Calculate your total cookies per second from clicking and buildings, inspired by Cookie Clicker style incremental games."
        keywords="cookie clicker cps calculator,idle game cps tool,incremental game cps estimator"
        canonical="https://relax-game.xyh.wiki/tools/cps-calculator"
      />
      <Schema jsonLd={[webAppSchema, breadcrumb]} />

      <div className="card-grid" style={{ marginBottom: "1.2rem" }}>
        <CalculatorInput
          title="CPS calculator"
          description="Enter your estimated clicking speed and building counts to approximate your cookies per second. Formulas are simplified for educational use."
        >
          <div>
            <label htmlFor="clickPower">Cookies per click</label>
            <input
              id="clickPower"
              type="number"
              min={0}
              step={0.1}
              value={clickPower}
              onChange={(e) => setClickPower(Number(e.target.value) || 0)}
            />
          </div>
          <div>
            <label htmlFor="cps">Clicks per second (manual)</label>
            <input
              id="cps"
              type="number"
              min={0}
              step={0.1}
              value={clicksPerSecond}
              onChange={(e) => setClicksPerSecond(Number(e.target.value) || 0)}
            />
          </div>
          <div>
            <label htmlFor="gm">Global CPS multiplier (buffs, prestige, etc.)</label>
            <input
              id="gm"
              type="number"
              min={0}
              step={0.1}
              value={globalMultiplier}
              onChange={(e) => setGlobalMultiplier(Number(e.target.value) || 0)}
            />
          </div>
          <hr style={{ margin: "0.8rem 0", borderColor: "rgba(148,163,184,0.4)" }} />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
              gap: "0.7rem"
            }}
          >
            <div>
              <label htmlFor="cursor">Cursors</label>
              <input
                id="cursor"
                type="number"
                min={0}
                value={cursorCount}
                onChange={(e) => setCursorCount(Number(e.target.value) || 0)}
              />
            </div>
            <div>
              <label htmlFor="grandma">Grandmas</label>
              <input
                id="grandma"
                type="number"
                min={0}
                value={grandmaCount}
                onChange={(e) => setGrandmaCount(Number(e.target.value) || 0)}
              />
            </div>
            <div>
              <label htmlFor="farm">Farms</label>
              <input
                id="farm"
                type="number"
                min={0}
                value={farmCount}
                onChange={(e) => setFarmCount(Number(e.target.value) || 0)}
              />
            </div>
            <div>
              <label htmlFor="factory">Factories</label>
              <input
                id="factory"
                type="number"
                min={0}
                value={factoryCount}
                onChange={(e) => setFactoryCount(Number(e.target.value) || 0)}
              />
            </div>
          </div>
        </CalculatorInput>

        <ResultPanel title="Estimated cookies per second (CPS)">
          <p>
            <strong>Total CPS:</strong> {result.totalCps.toFixed(2)}
          </p>
          <p>
            <strong>From clicking:</strong> {result.clickCps.toFixed(2)}
          </p>
          <p>
            <strong>From buildings:</strong> {result.buildingCps.toFixed(2)}
          </p>
          <h3 className="section-title" style={{ fontSize: "1rem", marginTop: "0.9rem" }}>
            Building breakdown
          </h3>
          <ul style={{ fontSize: "0.9rem", paddingLeft: "1.1rem" }}>
            {result.breakdown.map((b) => (
              <li key={b.name}>
                {b.name}: {b.cps.toFixed(2)} CPS (before global multiplier)
              </li>
            ))}
          </ul>
          <p style={{ marginTop: "0.8rem", fontSize: "0.85rem", opacity: 0.9 }}>
            This calculator is inspired by Cookie Clicker mechanics but does not exactly reproduce
            the official formulas. Use it as a learning and planning tool rather than a precise
            simulator.
          </p>
          <SEOBlock
            keywords={[
              "cookie clicker cps calculator",
              "idle game cps calculator",
              "cookies per second estimate",
              "incremental game cps helper"
            ]}
          />
        </ResultPanel>
      </div>
    </>
  );
};

export default CpsCalculatorPage;
