import s from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <h2>mine!</h2>
      <center>
        <p>mine! - игровой сервер Minecraft. 3+</p>
        <p>Все права защищены тыры-пыры то да сё</p>
      </center>
      <p>
        <b>support@projectmine.ru</b>
      </p>
    </footer>
  );
};

export default Footer;
