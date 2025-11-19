/**
 * @Author:XYH
 * @Date:2025-11-20
 * @Description: Prestige / Heavenly Chips 估算计算工具
 */

export interface PrestigeInputs {
  totalCookiesBaked: number;
}

export interface PrestigeResult {
  prestigeLevel: number;
  nextLevelAtCookies: number;
}

export function computePrestige(inputs: PrestigeInputs): PrestigeResult {
  const { totalCookiesBaked } = inputs;
  if (totalCookiesBaked <= 0) {
    return { prestigeLevel: 0, nextLevelAtCookies: 1e12 };
  }
  const prestige = Math.floor(Math.sqrt(totalCookiesBaked / 1e12));
  const nextLevel = prestige + 1;
  const nextLevelAtCookies = Math.pow(nextLevel, 2) * 1e12;
  return {
    prestigeLevel: prestige,
    nextLevelAtCookies
  };
}
