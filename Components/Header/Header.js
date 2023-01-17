import Image from "next/image";
import React, { useEffect, useState } from "react";
import * as s from "./Header.module.scss";
import logo from "./../../images/logo.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import menuBar from "./../../images/menubar.svg";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const { asPath } = useRouter();
  const [scroll, setScroll] = useState();
  const [mobileMenu, setmobileMenu] = useState(false);

  /**
   * When the page is scrolled, the handleScroll function is called, which sets the scroll state to the
   * current scroll position.
   */
  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setmobileMenu((prev) => !prev);
  };

  return (
    <header className={s.header} id={s.header}>
      <div className="container">
        <div className={s.row}>
          <div className={s.header__logo}>
            <Image src={logo} alt="Task Logo" priority={true} />
          </div>

          <nav
            className={`${s.header__menu} ${mobileMenu ? s.menu__active : ""} `}
          >
            <ul className={s.nav__items}>
              <li className={s.nav__item}>
                <Link className={asPath === "/" ? s.active : ""} href="/">
                  Home
                </Link>
              </li>
              <li className={s.nav__item}>
                <Link
                  className={asPath === "/#Products" ? s.active : ""}
                  href="#Products"
                >
                  Products
                </Link>
              </li>
              <li className={s.nav__item}>
                <Link
                  className={asPath === "/#Guidlines" ? s.active : ""}
                  href="#Guidlines"
                >
                  Guidlines
                </Link>
              </li>
              <li className={s.nav__item}>
                <Link
                  className={asPath === "/#Review" ? s.active : ""}
                  href="#Review"
                >
                  Review
                </Link>
              </li>
            </ul>

            <div onClick={toggleMobileMenu} className={s.mobile__menu__close}>
              <IoClose />
            </div>
          </nav>

          <div className={s.header__cta}>
            <button className="sm-btn">Sign In</button>
            {/* Mobile menu bar btn */}
            <Image
              onClick={toggleMobileMenu}
              className={s.mibile__menu__bar}
              src={menuBar}
              alt="Mobile Menu Bar"
              priority={true}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
