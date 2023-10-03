import Section from "../Section/Section";
import s from "./MainDonateSection.module.scss";

export const MainDonateSection = () => {
  return (
    <Section className={s.mainDonateSection}>
      <div className={s.donateBorderWrapper}>
        <div className={s.donate}>
          <div className={s.images}>
            <img draggable="false" src="/images/donate_pic_4.png" />
            <img
              draggable="false"
              src="/images/donate_pic_1.png"
              className={s.main}
            />
            <img draggable="false" src="/images/donate_pic_2.png" />
            <img draggable="false" src="/images/donate_pic_3.png" />
          </div>
          <div className={s.info}>
            <h2>Больше возможностей для своего персонажа</h2>
            <p>
              Получите больше возможностей с пакетами привилегий Gold, Platinum
              и Diamond. Новые функции помогут быстрее и лучше развиваться на
              сервере, при этом не нарушая баланс экономики в игре. Попробуйте!
            </p>
            <button>Прокачать персонажа</button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default MainDonateSection;
