/**
 * @Author:XYH
 * @Date:2025-11-20
 * @Description: 主布局组件，包含 Header / Breadcrumb / 主内容 / Footer
 */
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Breadcrumb from "../components/layout/Breadcrumb";

const MainLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="container">
          <Breadcrumb />
        </div>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
