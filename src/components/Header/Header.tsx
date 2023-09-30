import { Link } from "react-router-dom";
import s from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={s.header}>
      <div className="logo">mine! [open beta] | Minecraft 1.20</div>
      <div className="links">
        <Link to={"/"}>main</Link> | <Link to={"/shop"}>shop</Link>
      </div>
    </header>
  );
};

export default Header;
