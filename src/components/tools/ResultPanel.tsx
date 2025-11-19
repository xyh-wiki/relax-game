/**
 * @Author:XYH
 * @Date:2025-11-20
 * @Description: 工具结果展示组件，统一结果区样式
 */
import React from "react";

interface ResultPanelProps {
  title?: string;
  children: React.ReactNode;
}

const ResultPanel: React.FC<ResultPanelProps> = ({ title = "Result", children }) => {
  return (
    <section className="card">
      <h2 className="section-title">{title}</h2>
      <div style={{ marginTop: "0.75rem", fontSize: "0.9rem" }}>{children}</div>
    </section>
  );
};

export default ResultPanel;
