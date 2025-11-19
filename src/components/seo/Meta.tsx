/**
 * @Author:XYH
 * @Date:2025-11-20
 * @Description: 每个路由页面的 Meta 管理组件，动态更新标题与基础 meta 标签
 */
import React, { useEffect } from "react";

interface MetaProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
}

const Meta: React.FC<MetaProps> = ({ title, description, keywords, canonical }) => {
  useEffect(() => {
    document.title = title;

    let descTag = document.querySelector('meta[name="description"]');
    if (!descTag) {
      descTag = document.createElement("meta");
      descTag.setAttribute("name", "description");
      document.head.appendChild(descTag);
    }
    descTag.setAttribute("content", description);

    if (keywords) {
      let kwTag = document.querySelector('meta[name="keywords"]');
      if (!kwTag) {
        kwTag = document.createElement("meta");
        kwTag.setAttribute("name", "keywords");
        document.head.appendChild(kwTag);
      }
      kwTag.setAttribute("content", keywords);
    }

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    }
  }, [title, description, keywords, canonical]);

  return null;
};

export default Meta;
