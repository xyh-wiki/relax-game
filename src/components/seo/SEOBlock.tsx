/**
 * @Author:XYH
 * @Date:2025-11-20
 * @Description: SEO 关键字展示区域，提升长尾关键词覆盖
 */
import React from "react";

interface SEOBlockProps {
  keywords: string[];
}

const SEOBlock: React.FC<SEOBlockProps> = ({ keywords }) => {
  if (!keywords.length) return null;
  return (
    <div className="keyword-block" aria-label="SEO keywords">
      {keywords.map((kw) => (
        <span key={kw} className="keyword-pill">
          {kw}
        </span>
      ))}
    </div>
  );
};

export default SEOBlock;
