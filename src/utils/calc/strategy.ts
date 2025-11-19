/**
 * @Author:XYH
 * @Date:2025-11-20
 * @Description: 简化版策略推荐工具，根据阶段和建筑情况给出文字建议
 */

export type PlayerStage = "early" | "mid" | "late";

export interface StrategyInputs {
  stage: PlayerStage;
  cursorCount: number;
  grandmaCount: number;
  farmCount: number;
  factoryCount: number;
}

export interface StrategySuggestion {
  headline: string;
  steps: string[];
}

export function generateStrategy(inputs: StrategyInputs): StrategySuggestion {
  const { stage, cursorCount, grandmaCount, farmCount, factoryCount } = inputs;

  const steps: string[] = [];

  if (stage === "early") {
    steps.push(
      "Prioritize cursors and grandmas until you can comfortably auto-generate cookies.",
      "Avoid investing too early into expensive buildings that will slow down your progression.",
      "Click actively on golden cookies whenever they appear for big spikes."
    );
  } else if (stage === "mid") {
    steps.push(
      "Balance mid-tier buildings like farms and factories to build a solid baseline CPS.",
      "Start planning prestige: do not rush ascension, but keep your total baked cookies in mind.",
      "Buy upgrades that multiply CPS globally before pushing very expensive single upgrades."
    );
  } else {
    steps.push(
      "Focus on high-tier buildings and powerful global multipliers.",
      "Use prestige strategically: ascend when your next prestige level would significantly boost long-term CPS.",
      "Optimize around seasonal events and special buffs for burst progression."
    );
  }

  if (cursorCount < grandmaCount) {
    steps.push("Your grandmas are ahead of cursors. Consider catching cursors up to keep synergy balanced.");
  }

  if (farmCount > factoryCount * 2) {
    steps.push("You heavily invested in farms. Evaluate if factories or higher buildings give better CPS per cost.");
  }

  if (factoryCount === 0 && stage !== "early") {
    steps.push("You have no factories yet. Unlocking factories may provide a strong mid-game spike.");
  }

  const headline =
    stage === "early"
      ? "Early game: build a stable CPS foundation."
      : stage === "mid"
      ? "Mid game: balance buildings and prepare for prestige."
      : "Late game: optimize prestige and high-tier multipliers.";

  return {
    headline,
    steps
  };
}
