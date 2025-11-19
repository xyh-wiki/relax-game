/**
 * @Author:XYH
 * @Date:2025-11-20
 * @Description: 简易 Toast 组件，可在页面内局部提示信息
 */
import React from "react";

interface ToastProps {
  message: string;
}

const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;
  return (
    <div
      style={{
        position: "fixed",
        bottom: "1.5rem",
        right: "1.5rem",
        padding: "0.6rem 0.9rem",
        borderRadius: "999px",
        background: "rgba(15,23,42,0.9)",
        border: "1px solid rgba(148,163,184,0.7)",
        fontSize: "0.85rem",
        zIndex: 30
      }}
    >
      {message}
    </div>
  );
};

export default Toast;
