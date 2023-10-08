import ButtonCopyIP from "../../components/Button/ButtonCopyIP";
import Cover from "../../components/Cover/Cover";
import Flex from "../../components/Flex/Flex";
import MainDonateSection from "../../components/MainDonateSection/MainDonateSection";
import MainFAQSection from "../../components/MainFAQSection/MainFAQSection";
import s from "./Main.module.scss";

export const Main = () => {
  return (
    <div className={`route main ${s.route}`}>
      {/* <MainCoverSection /> */}
      <Cover
        // TODO: компонент флекс контейнер
        content={
          <Flex layout="column" gap={30}>
            <h1>
              Классика
              <br /> – и ничего лишнего
            </h1>
            <p>
              mine! — новый игровой сервер Minecraft в стиле классического
              выживания. Мы соединили воедино только самое важное, чтобы
              получилось место, где вы с друзьями сможете проводить время часами
              и не жалеть об этом. Включайтесь прямо сейчас!
            </p>
            <div>
              <ButtonCopyIP>Начать играть</ButtonCopyIP>
            </div>
          </Flex>
        }
        picture={
          <img src="/images/chelik_1.png" alt="" className={s.chelik1} />
        }
      />
      <MainFAQSection />
      <MainDonateSection />
    </div>
  );
};

export default Main;
