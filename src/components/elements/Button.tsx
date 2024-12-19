import { ButtonHTMLAttributes } from "react";
import type { FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  disabled?: boolean;
  className?: string;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ label, disabled = false, className, onClick }) => {
  const disabledStyles = disabled ? "text-gray-600" : "";

  return (
    <button disabled={disabled} className={`${disabledStyles} ${className}`} onClick={onClick} type="button">
      {label}
    </button>
  );
};

export default Button;
