import styles from "./Header.module.css";
import bgImage from "../../images/bgimage.jpg";

const Header = () => {
  return (
    <header
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
      }}
      className={styles.container}
    >
      <h1 className={styles.title}>Cook your favorite kitchen meal with us!</h1>
    </header>
  );
};

export default Header;
  