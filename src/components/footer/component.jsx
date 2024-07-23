import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import classNames from "classnames";

export const Footer = () => {
  return (
    <footer className={classNames(styles.root, styles.heavy )}>
      <NavLink className={styles['nav-secondary']} to={"/"}>Стоимость услуг</NavLink>
      <NavLink className={styles['nav-secondary']} to={"/"}>Хочу сотрудничать</NavLink>
      <NavLink className={styles['nav-secondary']} to={"/"}>Ничего не понимаю (F.A.Q.)</NavLink>
    </footer>
  );
};
