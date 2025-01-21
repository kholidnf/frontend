import styles from "./index.module.css";
import NavbarItem from "../NavbarItem/NavbarItem";
function Footer() {
  return (
   <div className={styles.container}>
      <footer className={styles.footer}>
        <div className={styles.footer__left}>
          <h2 className={styles.footer__title}>Covid ID</h2>
          <p className={styles.footer__author}>Developed by kholidsaefullah</p>
        </div>
        < NavbarItem/>
      </footer>
    </div>
  );
}

export default Footer;
