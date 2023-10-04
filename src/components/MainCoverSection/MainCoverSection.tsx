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
        <div>
          <ButtonCopyIP>Начать играть</ButtonCopyIP>
        </div>
      </div>
      <div className={s.picture}>
        <img src="/images/chelik_1.png" alt="" className={s.chelik1} />
        <img src="/images/chelik_2.png" alt="" className={s.chelik2} />
        <img src="/images/chelik_3.png" alt="" className={s.chelik3} />
      </div>
    </Section>
  );
};

export default MainCoverSection;
