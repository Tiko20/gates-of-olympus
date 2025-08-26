import Zeus from "../../assets/images/zeus.gif";
import Logo from "../../assets/images/gates-of-olympus-logo.png";
import "./style/zeusLogo.css"
import { FC } from "react";

export const ZeusLogo: FC = () => {
  return (
    <div className="zeus-logo">
      <div className="zeus-image">
        <img src={Logo} alt="Zeus Logo" />
      </div>
      <div className="zeus-gif">
        <img src={Zeus} alt="Zeus Animation" />
      </div>
    </div>
  );
};
