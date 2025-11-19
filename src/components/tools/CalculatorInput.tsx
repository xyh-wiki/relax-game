/**
 * @Author:XYH
 * @Date:2025-11-20
 * @Description: 工具输入容器组件，统一工具页面输入区域样式
 */
import React from "react";

interface CalculatorInputProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const CalculatorInput: React.FC<CalculatorInputProps> = ({
  title,
  description,
  children
}) => {
  return (
    <section className="card">
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-subtitle">{description}</p>}
      <div style={{ marginTop: "0.9rem", display: "flex", flexDirection: "column", gap: "0.7rem" }}>
        {children}
      </div>
    </section>
  );
};

export default CalculatorInput;
