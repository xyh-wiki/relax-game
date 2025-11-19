/**
 * @Author:XYH
 * @Date:2025-11-20
 * @Description: Cookie Clicker 风格的 CPS 简化计算工具
 */

export interface BuildingInput {
  name: string;
  count: number;
  baseCps: number;
  multiplier?: number;
}

export interface CpsInputs {
  clickPower: number;
  clicksPerSecond: number;
  globalMultiplier: number;
  buildings: BuildingInput[];
}

export interface CpsResult {
  totalCps: number;
  clickCps: number;
  buildingCps: number;
  breakdown: { name: string; cps: number }[];
}

export function computeCps(inputs: CpsInputs): CpsResult {
  const { clickPower, clicksPerSecond, globalMultiplier, buildings } = inputs;
  const clickCps = clickPower * clicksPerSecond;

  const breakdown: { name: string; cps: number }[] = [];
  let buildingCps = 0;

  buildings.forEach((b) => {
    const mul = b.multiplier ?? 1;
    const cps = b.count * b.baseCps * mul;
    breakdown.push({ name: b.name, cps });
    buildingCps += cps;
  });

  const baseTotal = clickCps + buildingCps;
  const totalCps = baseTotal * globalMultiplier;

  return {
    totalCps,
    clickCps: clickCps * globalMultiplier,
    buildingCps: buildingCps * globalMultiplier,
    breakdown
  };
}
