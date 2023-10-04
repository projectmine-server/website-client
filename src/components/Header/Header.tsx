import { NavLink } from "react-router-dom";
import s from "./Header.module.scss";
import { useEffect, useState } from "react";
import Button from "../Button/Button";

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
          <NavLink to={"/"}>
            {({ isActive }) => (
              <Button variant="secondary" compact active={isActive}>
                Главная
              </Button>
            )}
          </NavLink>
          <NavLink to={"/faq"}>
            {({ isActive }) => (
              <Button variant="secondary" compact active={isActive}>
                FAQ
              </Button>
            )}
          </NavLink>
          <NavLink to={"/shop"}>
            {({ isActive }) => (
              <Button variant="secondary" compact active={isActive}>
                Магазин
              </Button>
            )}
          </NavLink>
          <NavLink to={"/profile"}>
            {({ isActive }) => (
              <Button variant="secondary" compact active={isActive}>
                ЛК
              </Button>
            )}
          </NavLink>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
            <Button variant="secondary" compact>
              Discord
            </Button>
          </a>
          <Button compact>Играть</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
