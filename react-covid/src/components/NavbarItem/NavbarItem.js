import styles from "./NavbarItem.module.css";
//import link dari react router
import { Link } from "react-router-dom";

function NavbarItem() {
  return (
        <div>
            <ul  className={styles.navbar__list}>
                <li className={styles.navbar__item}>
                  <Link className={styles.navbar__link} to="/">Global</Link>
                </li>
                <li className={styles.navbar__item}>
                  <Link className={styles.navbar__link} to="/covid/indonesia">Indonesia</Link>
                </li>
                <li className={styles.navbar__item}>
                  <Link className={styles.navbar__link} to="/covid/provinsi">Provinsi</Link>
                </li>
                <li className={styles.navbar__item}>
                  <Link className={styles.navbar__link} to="/about">About</Link>
                </li>
            </ul>
        </div>
  );
}   

export default NavbarItem;
