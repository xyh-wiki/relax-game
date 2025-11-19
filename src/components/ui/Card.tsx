/**
 * @Author:XYH
 * @Date:2025-11-20
 * @Description: 通用卡片组件，用于包裹工具、模块等内容
 */
import React from "react";

interface CardProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, subtitle, children }) => {
  return (
    <section className="card">
      {title && <h2 className="section-title">{title}</h2>}
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      {children}
    </section>
  );
};

export default Card;
