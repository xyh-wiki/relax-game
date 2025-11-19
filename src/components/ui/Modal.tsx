/**
 * @Author:XYH
 * @Date:2025-11-20
 * @Description: 简单模态框组件，可用于后续功能扩展
 */
import React from "react";

interface ModalProps {
  open: boolean;
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, title, onClose, children }) => {
  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(15,23,42,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 40
      }}
      onClick={onClose}
    >
      <div
        className="card"
        style={{
          maxWidth: 520,
          width: "100%",
          maxHeight: "80vh",
          overflow: "auto"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {title && <h2 className="section-title">{title}</h2>}
        {children}
      </div>
    </div>
  );
};

export default Modal;
