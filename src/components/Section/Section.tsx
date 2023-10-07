import { HTMLAttributes } from "react";
import s from "./Section.module.scss";

export const Section = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <section className={`${s.section} ${props.className}`}>
      {props.children}
    </section>
  );
};

export default Section;
