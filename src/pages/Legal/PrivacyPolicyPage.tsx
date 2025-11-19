/**
 * @Author:XYH
 * @Date:2025-11-20
 * @Description: 隐私政策页面，强调本地处理与数据最小化
 */
import React from "react";
import Card from "../../components/ui/Card";
import Meta from "../../components/seo/Meta";
import Schema from "../../components/seo/Schema";
import { buildBreadcrumbSchema } from "../../utils/seo/schemaBuilders";

const PrivacyPolicyPage: React.FC = () => {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", url: "https://relax-game.xyh.wiki/" },
    { name: "Privacy Policy", url: "https://relax-game.xyh.wiki/privacy-policy" }
  ]);

  return (
    <>
      <Meta
        title="Privacy Policy - Relax Game Hub"
        description="Privacy policy for Relax Game Hub. Learn how we handle data and why tools are implemented as local-only utilities."
        keywords="relax game hub privacy policy"
        canonical="https://relax-game.xyh.wiki/privacy-policy"
      />
      <Schema jsonLd={breadcrumb} />

      <Card title="Privacy Policy">
        <p>
          Relax Game Hub is designed as a privacy-friendly website. All calculators and tools run
          entirely in your browser. We do not require you to upload game saves, cookies, or progress
          data to a server.
        </p>
        <h2 className="section-title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>
          Local-only processing
        </h2>
        <p>
          Our tools use JavaScript to perform calculations directly in your browser&apos;s memory.
          Any values you enter into forms are processed locally and are cleared when you leave or
          refresh the page.
        </p>
        <h2 className="section-title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>
          Cookies and tracking
        </h2>
        <p>
          Relax Game Hub does not intentionally implement tracking cookies or analytics scripts that
          profile individual users. If we add basic analytics in the future, this page will be
          updated to reflect that change.
        </p>
        <h2 className="section-title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>
          Third-party links
        </h2>
        <p>
          Guides may contain links to external websites, such as official Cookie Clicker resources
          or community wikis. We are not responsible for the privacy practices of those sites.
        </p>
      </Card>
    </>
  );
};

export default PrivacyPolicyPage;
