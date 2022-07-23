import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Nav() {
  return (
    <nav>
      <h3>Stock market</h3>
      <ul className={styles.navLinks}>
        <Link className={styles.navStyle} to="/">
          <li>Home</li>
        </Link>
        <Link className={styles.navStyle} to="/popular">
          <li>Popular</li>
        </Link>
        <Link className={styles.navStyle} to="/gainers">
          <li>Gainers</li>
        </Link>
        <Link className={styles.navStyle} to="/loosers">
          <li>Loosers</li>
        </Link>
        <Link className={styles.navStyle} to="/all">
          <li>All Stocks</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
