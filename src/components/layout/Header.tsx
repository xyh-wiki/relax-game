/**
 * @Author:XYH
 * @Date:2025-11-20
 * @Description: 顶部导航栏，包含站点标题、导航菜单、主题切换和语言切换
 */
import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../theme/ThemeProvider";
import { useI18n } from "../../i18n";
import ThemeToggle from "./ThemeToggle";

const Header: React.FC = () => {
  const { t, locale, switchLocale } = useI18n();
  const { theme } = useTheme();

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `button-ghost ${isActive ? "nav-active" : ""}`;

  return (
    <header
      style={{
        borderBottom: "1px solid rgba(148,163,184,0.25)",
        backdropFilter: "blur(14px)",
        position: "sticky",
        top: 0,
        zIndex: 20,
        background:
          theme === "dark"
            ? "linear-gradient(to bottom, rgba(15,23,42,0.9), rgba(15,23,42,0.6))"
            : "linear-gradient(to bottom, rgba(249,250,251,0.98), rgba(249,250,251,0.85))"
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBlock: "0.9rem"
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.95rem" }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "0.9rem",
              background:
                "conic-gradient(from 180deg, #f97316, #fbbf24, #22c55e, #0ea5e9, #f97316)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
              color: "#111827",
              fontWeight: 800,
              boxShadow: "0 10px 25px -14px rgba(15,23,42,0.7)"
            }}
          >
            RG
          </div>
          <div>
            <div style={{ fontWeight: 700 }}>{t("site.title")}</div>
            <div style={{ fontSize: "0.75rem", opacity: 0.75 }}>{t("site.subtitle")}</div>
          </div>
        </div>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          <NavLink to="/" className={navLinkClass} end>
            {t("nav.home")}
          </NavLink>
          <NavLink to="/tools" className={navLinkClass}>
            {t("nav.tools")}
          </NavLink>
          <NavLink to="/guides" className={navLinkClass}>
            {t("nav.guides")}
          </NavLink>
          <NavLink to="/faq" className={navLinkClass}>
            {t("nav.faq")}
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            {t("nav.about")}
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            {t("nav.contact")}
          </NavLink>
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <ThemeToggle />
          <button
            className="button-ghost"
            onClick={() => switchLocale(locale === "en" ? "zh" : "en")}
          >
            {locale === "en" ? "EN / 中文" : "中文 / EN"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
