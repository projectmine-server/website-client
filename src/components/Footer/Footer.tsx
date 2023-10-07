import s from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <h2>mine!</h2>
      <center>
        <p>mine! - игровой сервер Minecraft. 3+</p>
        <p>© 2023. Все права защищены.</p>
      </center>
      <p className={s.email}>
        <b>support@projectmine.ru</b>
      </p>
    </footer>
  );
};

export default Footer;
