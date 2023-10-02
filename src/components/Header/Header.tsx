import { Link } from "react-router-dom";
import s from "./Header.module.scss";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isCompact, setIsCompact] = useState<boolean>(false);

  const handleWindowScroll = () => {
    if (window.scrollY > 50) {
      setIsCompact(true);
    } else {
      setIsCompact(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);

    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  return (
    <header className={`${s.header} ${isCompact ? s.compact : ""}`}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <h3>mine!</h3>
          <div>Minecraft 1.20</div>
        </div>
        <div className={s.links}>
          <Link to={"/"}>Главная</Link>
          <Link to={"/shop"}>FAQ</Link>
          <Link to={"/shop"}>Магазин</Link>
          <Link to={"/shop"}>ЛК</Link>
          <Link to={"/shop"}>Discord</Link>
          <button>Играть</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
