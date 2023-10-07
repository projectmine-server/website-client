import { HTMLAttributes } from "react";
import s from "./Flex.module.scss";

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  layout: "row" | "column";
  gap: number;
}

export const Flex = ({ children, layout, gap, ...props }: FlexProps) => {
  return (
    <div
      {...props}
      className={`${s.flex} ${s[layout]} ${props.className}`}
      style={{ gap }}
    >
      {children}
    </div>
  );
};

export default Flex;
