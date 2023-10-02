import MainCoverSection from "../../components/MainCoverSection/MainCoverSection";
import MainFAQSection from "../../components/MainFAQSection/MainFAQSection";
import s from "./Main.module.scss";

export const Main = () => {
  return (
    <div className={`route main ${s.route}`}>
      <MainCoverSection />
      <MainFAQSection />
    </div>
  );
};

export default Main;
