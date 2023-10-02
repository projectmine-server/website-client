import { HTMLAttributes } from "react";
import s from "./Block.module.scss";

export const Block = (props: HTMLAttributes<HTMLDivElement>) => {
  return <div className={s.block}>{props.children}</div>;
};

const Header = (props: HTMLAttributes<HTMLDivElement>) => {
  return <div className={s.header}>{props.children}</div>;
};

Block.Header = Header;

export default Block;
