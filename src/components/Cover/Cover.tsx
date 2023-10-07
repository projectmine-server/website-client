import { ReactElement } from "react";
import Section from "../Section/Section";
import s from "./Cover.module.scss";

interface CoverProps {
  content: ReactElement;
  picture: ReactElement;
}

export const Cover = ({ content, picture }: CoverProps) => {
  return (
    <Section className={s.cover}>
      <div className={s.content}>{content}</div>
      <div className={s.picture}>{picture}</div>
    </Section>
  );
};

export default Cover;
