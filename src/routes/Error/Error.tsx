import { useRouteError } from "react-router-dom";
import Section from "../../components/Section/Section";
import s from "./Error.module.scss";

export const Error = () => {
  const routeError = useRouteError();

  return (
    <div className={`route error ${s.route}`}>
      <Section className={s.errorSection}>
        <h1>Упс...</h1>
        <p>Кажется, что-то поломалось</p>
        <code>{JSON.stringify(routeError)}</code>
      </Section>
    </div>
  );
};

export default Error;
