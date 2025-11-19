/**
 * @Author:XYH
 * @Date:2025-11-20
 * @Description: 主题切换按钮，调用 useTheme 在深色/浅色模式之间切换
 */
import React from "react";
import { useTheme } from "../../theme/ThemeProvider";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="button-ghost"
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
};

export default ThemeToggle;
