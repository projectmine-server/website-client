import { ReactNode, useState } from "react";
import Button from "./Button";
import s from "./Button.module.scss";
import { SparklesIcon } from "@heroicons/react/20/solid";

interface ButtonCopyIPProps {
  compact?: boolean;
  children: ReactNode;
}

export const ButtonCopyIP = ({
  compact = false,
  children,
}: ButtonCopyIPProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = () => {
    setIsActive(true);
    navigator.clipboard.writeText("mc.projectmine.ru");

    setTimeout(setIsActive, 5000, false);
  };

  return (
    <Button
      variant="primary"
      className={`${s.copyIP} ${isActive ? s.pressed : ""}`}
      hoverIcon={!isActive ? <SparklesIcon height={20} /> : undefined}
      icon={isActive ? <SparklesIcon height={20} /> : undefined}
      compact={compact}
      onClick={handleClick}
    >
      {isActive ? "IP скопирован!" : children}
    </Button>
  );
};

export default ButtonCopyIP;
