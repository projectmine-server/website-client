import Section from "../../components/Section/Section";
import s from "./Main.module.scss";

export const Main = () => {
  return (
    <div className={`route main ${s.route}`}>
      <Section>
        <h1>Классика и ничего лишнего</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          sequi facere laborum ut possimus voluptates natus obcaecati. Deserunt
          impedit blanditiis modi doloribus explicabo, officia, quod corporis
          nihil voluptatum hic laborum.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          sequi facere laborum ut possimus voluptates natus obcaecati. Deserunt
          impedit blanditiis modi doloribus explicabo, officia, quod corporis
          nihil voluptatum hic laborum.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          sequi facere laborum ut possimus voluptates natus obcaecati. Deserunt
          impedit blanditiis modi doloribus explicabo, officia, quod corporis
          nihil voluptatum hic laborum.
        </p>
      </Section>
    </div>
  );
};

export default Main;
