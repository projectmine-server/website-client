import ButtonCopyIP from "../Button/ButtonCopyIP";
import Section from "../Section/Section";
import s from "./MainCoverSection.module.scss";

export const MainCoverSection = () => {
  return (
    <Section className={s.mainCoverSection}>
      <div className={s.text}>
        <h1>
          Классика
          <br /> – и ничего лишнего
        </h1>
        <p>
          mine! — новый игровой сервер Minecraft в стиле классического
          выживания. Мы соединили воедино только самое важное, чтобы получилось
          место, где вы и ваши друзья смогут проводить время часами и не жалеть
          об этом. Включайтесь прямо сейчас!
        </p>
        <p>
          <ButtonCopyIP>Начать играть</ButtonCopyIP>
        </p>
      </div>
      <div className={s.picture}>
        <img src="/images/chelik_1.png" alt="" />
      </div>
    </Section>
  );
};

export default MainCoverSection;
