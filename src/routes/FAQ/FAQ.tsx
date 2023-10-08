import Button from "../../components/Button/Button";
import Cover from "../../components/Cover/Cover";
import Flex from "../../components/Flex/Flex";
import Section from "../../components/Section/Section";
import s from "./FAQ.module.scss";

export const FAQ = () => {
  return (
    <div className={`route faq ${s.route}`}>
      <Cover
        content={
          <Flex layout="column" gap={30}>
            <h1>Справка по игре и серверу</h1>
            <p>
              Здесь вы найдёте полезную информацию об игре на сервере. Время от
              времени мы добавляем сюда больше информации. Stay tuned!
            </p>
            <div>
              <Button variant="secondary">Посмотреть документацию</Button>
            </div>
          </Flex>
        }
        picture={<img src="/images/winstons_home.png" alt="" />}
      />
      <Section></Section>
    </div>
  );
};

export default FAQ;
