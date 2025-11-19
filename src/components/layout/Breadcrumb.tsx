/**
 * @Author:XYH
 * @Date:2025-11-20
 * @Description: 简易面包屑导航，根据当前路由 path 展示层级结构，同时对 SEO 友好
 */
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return null;
  }

  let pathAcc = "";
  const items = segments.map((seg, index) => {
    pathAcc += `/${seg}`;
    const isLast = index === segments.length - 1;
    const label = seg
      .replace(/-/g, " ")
      .replace(/^\w/, (c) => c.toUpperCase());

    return (
      <span key={pathAcc}>
        <span style={{ margin: "0 0.25rem" }}>/</span>
        {isLast ? (
          <span style={{ opacity: 0.85 }}>{label}</span>
        ) : (
          <Link to={pathAcc} style={{ opacity: 0.85 }}>
            {label}
          </Link>
        )}
      </span>
    );
  });

  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        fontSize: "0.8rem",
        opacity: 0.85,
        marginBottom: "0.6rem"
      }}
    >
      <Link to="/">Home</Link>
      {items}
    </nav>
  );
};

export default Breadcrumb;
