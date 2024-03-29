import { HTMLAttributes, ReactElement } from "react";
import s from "./Button.module.scss";
import { ArrowPathIcon, LockClosedIcon } from "@heroicons/react/20/solid";

type ButtonVariant = "primary" | "secondary" | "tretiary";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  compact?: boolean;
  disabled?: boolean;
  loading?: boolean;
  active?: boolean;
  icon?: ReactElement;
  hoverIcon?: ReactElement;
}

export const Button = ({
  variant = "primary",
  compact = false,
  disabled = false,
  loading = false,
  active = false,
  icon,
  hoverIcon,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={
        `${s.button} ` +
        `${s[variant]} ` +
        `${compact ? s.compact : ""} ` +
        `${disabled ? s.disabled : ""} ` +
        `${loading ? s.loading : ""} ` +
        `${active ? s.active : ""} ` +
        `${props.className}`
      }
    >
      {/* Если кнопка выключена, показываем иконку замочка */}
      {disabled && <LockClosedIcon height={20} />}

      <span>{props.children}</span>

      {/* Если есть иконка, показываем её только когда кнопка
      не в состоянии загрузки и нет иконки, показывающейся только при ховере */}
      {icon && !loading && !hoverIcon && icon}

      {/* Если есть иконка по ховеру и кнопка не в состоянии загрузки,
      то показываем эту иконку */}
      {hoverIcon && !loading && (
        <span className={s.hoverIcon}>{hoverIcon}</span>
      )}

      {/* Если кнопка в состоянии загрузки, показываем иконку-лоудер */}
      {loading && <ArrowPathIcon height={20} className={s.loader} />}
    </button>
  );
};

export default Button;
