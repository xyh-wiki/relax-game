/**
 * @Author:XYH
 * @Date:2025-11-20
 * @Description: 应用根组件，负责配置 React Router 路由结构
 */
import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import HomePage from "./pages/Home/HomePage";
import ToolsPage from "./pages/Tools/ToolsPage";
import CpsCalculatorPage from "./pages/Tools/ToolDetail/CpsCalculatorPage";
import PrestigeCalculatorPage from "./pages/Tools/ToolDetail/PrestigeCalculatorPage";
import StrategyGeneratorPage from "./pages/Tools/ToolDetail/StrategyGeneratorPage";
import IdleGameBalancerPage from "./pages/Tools/ToolDetail/IdleGameBalancerPage";
import GuidesListPage from "./pages/Guides/GuidesListPage";
import GuideDetailPage from "./pages/Guides/GuideDetailPage";
import AboutPage from "./pages/About/AboutPage";
import FAQPage from "./pages/FAQ/FAQPage";
import ContactPage from "./pages/Contact/ContactPage";
import PrivacyPolicyPage from "./pages/Legal/PrivacyPolicyPage";
import TermsPage from "./pages/Legal/TermsPage";
import SitemapPage from "./pages/Sitemap/SitemapPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="tools" element={<ToolsPage />} />
        <Route path="tools/cps-calculator" element={<CpsCalculatorPage />} />
        <Route path="tools/prestige-calculator" element={<PrestigeCalculatorPage />} />
        <Route path="tools/strategy-generator" element={<StrategyGeneratorPage />} />
        <Route path="tools/idle-game-balancer" element={<IdleGameBalancerPage />} />
        <Route path="guides" element={<GuidesListPage />} />
        <Route path="guides/:slug" element={<GuideDetailPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="faq" element={<FAQPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="sitemap" element={<SitemapPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
