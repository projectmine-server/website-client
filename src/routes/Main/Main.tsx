import MainCoverSection from "../../components/MainCoverSection/MainCoverSection";
import MainDonateSection from "../../components/MainDonateSection/MainDonateSection";
import MainFAQSection from "../../components/MainFAQSection/MainFAQSection";
import s from "./Main.module.scss";

export const Main = () => {
  return (
    <div className={`route main ${s.route}`}>
      <MainCoverSection />
      <MainFAQSection />
      <MainDonateSection />
    </div>
  );
};

export default Main;
