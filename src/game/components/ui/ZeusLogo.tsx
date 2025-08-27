import Zeus from "../../assets/images/zeus.gif";
import Logo from "../../assets/images/gates-of-olympus-logo.png";
import styles from "../../styles/zeusLogo.module.css";
import { FC } from "react";

export const ZeusLogo: FC = () => {
  return (
    <div className={styles["zeus-logo"]}>
      <div className={styles["zeus-image"]}>
        <img src={Logo} alt="Zeus Logo" />
      </div>
      <div className={styles["zeus-gif"]}>
        <img src={Zeus} alt="Zeus Animation" />
      </div>
    </div>
  );
};
