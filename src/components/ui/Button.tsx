import React from "react";

interface IProps {
  text: string;
  size?: "sm" | "xl" | "2xl";
  variant?: "primary" | "secondary" | "tertiary";
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({
  text,
  size,
  variant,
  className,
  disabled,
  onClick,
}: IProps) => {
  return (
    <button
      className={`Btn w-[${size}] ${className} bg-${variant}`}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
