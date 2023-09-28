import { Link } from "react-router-dom";
import s from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={s.header}>
      <Link to={"/"}>main</Link> | <Link to={"/shop"}>shop</Link>
    </header>
  );
};

export default Header;
