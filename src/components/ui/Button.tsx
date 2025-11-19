/**
 * @Author:XYH
 * @Date:2025-11-20
 * @Description: 通用按钮组件，支持 primary / ghost 两种样式
 */
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
}

const Button: React.FC<ButtonProps> = ({ variant = "primary", children, ...rest }) => {
  const className = variant === "primary" ? "button-primary" : "button-ghost";
  return (
    <button type="button" className={className} {...rest}>
      {children}
    </button>
  );
};

export default Button;
