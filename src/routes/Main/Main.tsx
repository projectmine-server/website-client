import Section from "../../components/Section/Section";
import s from "./Main.module.scss";

export const Main = () => {
  return (
    <div className={`route main ${s.route}`}>
      <Section>
        <h1>Классика и ничего лишнего</h1>
      </Section>
    </div>
  );
};

export default Main;
