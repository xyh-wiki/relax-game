/**
 * @Author:XYH
 * @Date:2025-11-20
 * @Description: 联系页面，说明邮件联系方式和本地处理特性
 */
import React from "react";
import Card from "../../components/ui/Card";
import Meta from "../../components/seo/Meta";
import Schema from "../../components/seo/Schema";
import SEOBlock from "../../components/seo/SEOBlock";
import { buildBreadcrumbSchema } from "../../utils/seo/schemaBuilders";

const ContactPage: React.FC = () => {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", url: "https://relax-game.xyh.wiki/" },
    { name: "Contact", url: "https://relax-game.xyh.wiki/contact" }
  ]);

  return (
    <>
      <Meta
        title="Contact - Relax Game Hub"
        description="Contact XYH, the developer of Relax Game Hub. Learn how to reach out for suggestions or feedback."
        keywords="contact relax game hub,contact xyh idle tools"
        canonical="https://relax-game.xyh.wiki/contact"
      />
      <Schema jsonLd={breadcrumb} />

      <Card title="Contact">
        <p>
          If you have feedback, ideas for new tools, or want to report an issue, you can contact the
          developer directly via email:
        </p>
        <p style={{ marginTop: "0.6rem" }}>
          <strong>Email:</strong> <a href="mailto:xyh.wiki@gmail.com">xyh.wiki@gmail.com</a>
        </p>
        <p style={{ marginTop: "0.8rem", fontSize: "0.85rem", opacity: 0.9 }}>
          To protect your privacy, we do not run a server-side contact form on this site. Please
          send an email from your preferred mail client instead of submitting in-browser forms that
          might be tracked.
        </p>
        <SEOBlock
          keywords={[
            "contact cookie clicker tools developer",
            "xyh contact email",
            "relax game hub contact"
          ]}
        />
      </Card>
    </>
  );
};

export default ContactPage;
