import MainCoverSection from "../../components/MainCoverSection/MainCoverSection";
import s from "./Main.module.scss";

export const Main = () => {
  return (
    <div className={`route main ${s.route}`}>
      <MainCoverSection />
    </div>
  );
};

export default Main;
