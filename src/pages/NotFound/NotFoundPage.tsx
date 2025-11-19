/**
 * @Author:XYH
 * @Date:2025-11-20
 * @Description: 404 页面
 */
import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/ui/Card";
import Meta from "../../components/seo/Meta";

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Meta
        title="Page not found - Relax Game Hub"
        description="The requested page could not be found on Relax Game Hub."
        canonical="https://relax-game.xyh.wiki/404"
      />
      <Card title="Page not found">
        <p>
          The page you are looking for does not exist or has been moved. You can return to the home
          page or browse tools and guides.
        </p>
        <div style={{ marginTop: "0.8rem", display: "flex", gap: "0.6rem" }}>
          <Link to="/" className="button-primary">
            Back to home
          </Link>
          <Link to="/tools" className="button-ghost">
            Browse tools
          </Link>
        </div>
      </Card>
    </>
  );
};

export default NotFoundPage;
