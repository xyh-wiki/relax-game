/**
 * @Author:XYH
 * @Date:2025-11-20
 * @Description: 用于在页面中注入 JSON-LD 结构化数据的组件
 */
import React from "react";

interface SchemaProps {
  jsonLd: unknown | unknown[];
}

const Schema: React.FC<SchemaProps> = ({ jsonLd }) => {
  const items = Array.isArray(jsonLd) ? jsonLd : [jsonLd];

  return (
    <>
      {items.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
};

export default Schema;
