/**
 * @Author:XYH
 * @Date:2025-11-20
 * @Description: 简单策略推荐生成器页面
 */
import React, { useState } from "react";
import CalculatorInput from "../../../components/tools/CalculatorInput";
import ResultPanel from "../../../components/tools/ResultPanel";
import SEOBlock from "../../../components/seo/SEOBlock";
import Meta from "../../../components/seo/Meta";
import Schema from "../../../components/seo/Schema";
import { generateStrategy, PlayerStage } from "../../../utils/calc/strategy";
import { buildWebAppSchema, buildBreadcrumbSchema } from "../../../utils/seo/schemaBuilders";

const StrategyGeneratorPage: React.FC = () => {
  const [stage, setStage] = useState<PlayerStage>("early");
  const [cursorCount, setCursorCount] = useState(10);
  const [grandmaCount, setGrandmaCount] = useState(5);
  const [farmCount, setFarmCount] = useState(2);
  const [factoryCount, setFactoryCount] = useState(0);

  const suggestion = generateStrategy({
    stage,
    cursorCount,
    grandmaCount,
    farmCount,
    factoryCount
  });

  const webAppSchema = buildWebAppSchema({
    name: "Strategy Generator - Relax Game Hub",
    url: "https://relax-game.xyh.wiki/tools/strategy-generator",
    description:
      "Generate a simple strategy suggestion for Cookie Clicker style progression based on your current stage and building counts."
  });

  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", url: "https://relax-game.xyh.wiki/" },
    { name: "Tools", url: "https://relax-game.xyh.wiki/tools" },
    { name: "Strategy Generator", url: "https://relax-game.xyh.wiki/tools/strategy-generator" }
  ]);

  return (
    <>
      <Meta
        title="Strategy Generator - Cookie Clicker style | Relax Game Hub"
        description="Get a human-readable build order suggestion for Cookie Clicker style incremental games based on your current stage."
        keywords="cookie clicker strategy generator,idle game build order,incremental game guidance"
        canonical="https://relax-game.xyh.wiki/tools/strategy-generator"
      />
      <Schema jsonLd={[webAppSchema, breadcrumb]} />

      <div className="card-grid">
        <CalculatorInput
          title="Strategy generator"
          description="Describe your current stage and core buildings to get a rough build order suggestion."
        >
          <div>
            <label htmlFor="stage">Player stage</label>
            <select
              id="stage"
              value={stage}
              onChange={(e) => setStage(e.target.value as PlayerStage)}
            >
              <option value="early">Early game</option>
              <option value="mid">Mid game</option>
              <option value="late">Late game</option>
            </select>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
              gap: "0.7rem"
            }}
          >
            <div>
              <label htmlFor="cursorCount">Cursors</label>
              <input
                id="cursorCount"
                type="number"
                min={0}
                value={cursorCount}
                onChange={(e) => setCursorCount(Number(e.target.value) || 0)}
              />
            </div>
            <div>
              <label htmlFor="grandmaCount">Grandmas</label>
              <input
                id="grandmaCount"
                type="number"
                min={0}
                value={grandmaCount}
                onChange={(e) => setGrandmaCount(Number(e.target.value) || 0)}
              />
            </div>
            <div>
              <label htmlFor="farmCount">Farms</label>
              <input
                id="farmCount"
                type="number"
                min={0}
                value={farmCount}
                onChange={(e) => setFarmCount(Number(e.target.value) || 0)}
              />
            </div>
            <div>
              <label htmlFor="factoryCount">Factories</label>
              <input
                id="factoryCount"
                type="number"
                min={0}
                value={factoryCount}
                onChange={(e) => setFactoryCount(Number(e.target.value) || 0)}
              />
            </div>
          </div>
        </CalculatorInput>

        <ResultPanel title="Suggested approach">
          <h3 className="section-title" style={{ fontSize: "1rem" }}>
            {suggestion.headline}
          </h3>
          <ol style={{ paddingLeft: "1.2rem", fontSize: "0.9rem" }}>
            {suggestion.steps.map((step, idx) => (
              <li key={idx} style={{ marginBottom: "0.3rem" }}>
                {step}
              </li>
            ))}
          </ol>
          <p style={{ marginTop: "0.8rem", fontSize: "0.85rem", opacity: 0.9 }}>
            This tool focuses on high-level guidance. For precise optimization, combine it with the
            CPS calculator and your own play style preferences.
          </p>
          <SEOBlock
            keywords={[
              "cookie clicker strategy",
              "idle game build order",
              "incremental game buying guide",
              "cookie clicker building priorities"
            ]}
          />
        </ResultPanel>
      </div>
    </>
  );
};

export default StrategyGeneratorPage;
