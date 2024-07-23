import classNames from "classnames";

import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();
const formattedDate = `${day}.${month}.${year}г. ${hours}:${minutes}`;

export const Header = () => {
  return (
    <header className={classNames(styles.root, styles.heavy)}>
      <h1 id="logo">PrinTomat</h1>
      <div id="clock">{formattedDate}</div>
      <NavLink className={styles.heavy} to={"/"}>НА ГЛАВНУЮ</NavLink>
    </header>
  );
};
