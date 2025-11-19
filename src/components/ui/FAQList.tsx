/**
 * @Author:XYH
 * @Date:2025-11-20
 * @Description: FAQ 列表组件，采用手风琴形式展开/收起问题
 */
import React, { useState } from "react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQListProps {
  items: FAQItem[];
}

const FAQList: React.FC<FAQListProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
      {items.map((item, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            key={index}
            className="card"
            style={{
              padding: "0.8rem 1rem",
              cursor: "pointer"
            }}
            onClick={() => setActiveIndex(isActive ? null : index)}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "0.6rem",
                alignItems: "center"
              }}
            >
              <div style={{ fontWeight: 600, fontSize: "0.95rem" }}>{item.question}</div>
              <div>{isActive ? "−" : "+"}</div>
            </div>
            {isActive && (
              <p style={{ marginTop: "0.5rem", fontSize: "0.85rem", opacity: 0.9 }}>
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FAQList;
