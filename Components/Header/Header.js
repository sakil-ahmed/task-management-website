import Image from "next/image";
import React, { useEffect, useState } from "react";
import * as s from "./Header.module.scss";
import logo from "./../../images/logo.svg";
import Link from "next/link";

const Header = () => {
  const [scroll, setScroll] = useState();
  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  console.log(scroll);
  return (
    <header className={s.header} id={s.header}>
      <div className="container">
        <div className={s.row}>
          <div className={s.header__logo}>
            <Image src={logo} alt="Task Logo" priority={true} />
          </div>

          <nav className={s.header__menu}>
            <ul className={s.nav__items}>
              <li className={s.nav__item}>
                <Link href="/">Home</Link>
              </li>
              <li className={s.nav__item}>
                <Link href="/">Products</Link>
              </li>
              <li className={s.nav__item}>
                <Link href="/">Guidlines</Link>
              </li>
              <li className={s.nav__item}>
                <Link href="/">Review</Link>
              </li>
            </ul>
          </nav>

          <div className={s.header__cta}>
            <button className="sm-btn">Sign In</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
