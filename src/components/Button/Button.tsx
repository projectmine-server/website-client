import { HTMLAttributes, ReactElement } from "react";
import s from "./Button.module.scss";
import { ArrowPathIcon, LockClosedIcon } from "@heroicons/react/20/solid";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  compact?: boolean;
  disabled?: boolean;
  loading?: boolean;
  icon?: ReactElement;
  hoverIcon?: ReactElement;
}

export const Button = ({
  variant = "primary",
  compact = false,
  disabled = false,
  loading = false,
  icon,
  hoverIcon,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={
        `${s.button} ` +
        `${s[variant]} ` +
        `${compact ? s.compact : ""} ` +
        `${disabled ? s.disabled : ""} ` +
        `${loading ? s.loading : ""} `
      }
      {...props}
    >
      {disabled && <LockClosedIcon height={20} />}
      <span>{props.children}</span>
      {icon && !loading && !hoverIcon && icon}
      {hoverIcon && !loading && (
        <span className={s.hoverIcon}>{hoverIcon}</span>
      )}
      {loading && <ArrowPathIcon height={20} className={s.loader} />}
    </button>
  );
};

export default Button;
