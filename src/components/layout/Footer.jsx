import * as styles from "./Footer.css";
import logoImg from '../../assets/images/4devswhite.png';

const Footer = () => {
  // Dynamic Date Function
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className={styles.footer}>
      <div className={styles.designedBy}>
        <p>TEAM</p>
        <img className={styles.logoImg} src={logoImg} alt="Logo" />
      </div>
      <span>&copy; {getCurrentYear()} 4DEVS TEAM . All rights reserved.</span>
    </div>
  );
};

export default Footer;
