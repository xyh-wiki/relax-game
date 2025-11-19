/**
 * @Author:XYH
 * @Date:2025-11-20
 * @Description: 页脚组件，包含版权信息、开发者信息、法务链接与信任声明
 */
import React from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../../i18n";

const Footer: React.FC = () => {
  const { t } = useI18n();

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(148,163,184,0.25)",
        marginTop: "1.5rem"
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          paddingBlock: "1.4rem"
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "0.75rem",
            fontSize: "0.85rem"
          }}
        >
          <div style={{ opacity: 0.9 }}>
            <div>
              © {new Date().getFullYear()} Relax Game Hub. {t("footer.rights")}
            </div>
            <div style={{ opacity: 0.8 }}>
              {t("footer.developedBy")} · Email:{" "}
              <a href="mailto:xyh.wiki@gmail.com">xyh.wiki@gmail.com</a>
            </div>
          </div>

          <div style={{ display: "flex", gap: "0.75rem" }}>
            <Link to="/privacy-policy" className="button-ghost">
              Privacy
            </Link>
            <Link to="/terms" className="button-ghost">
              Terms
            </Link>
            <Link to="/sitemap" className="button-ghost">
              Sitemap
            </Link>
          </div>
        </div>

        <div
          style={{
            fontSize: "0.8rem",
            opacity: 0.85,
            padding: "0.7rem 0.9rem",
            borderRadius: "0.75rem",
            border: "1px dashed rgba(148,163,184,0.6)"
          }}
        >
          {t("disclaimer.localProcessing")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
