import styles from "./Navbar.module.css";
import NavbarItem from "../NavbarItem/NavbarItem";

function Navbar() {
  return (
    <div className={styles.container}>
            <nav className={styles.navbar}>
                <div>
                    <h1 className={styles.navbar__brand}>Covid ID</h1>
                </div>
                < NavbarItem/>
            </nav>
        </div>
  );
}

export default Navbar;
