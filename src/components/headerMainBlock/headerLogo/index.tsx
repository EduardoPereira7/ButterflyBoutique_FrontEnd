import LogoImg from "../../../assets/images/logo.png";
import "./styles.css";

const headerLogo = () => {
  return (
    <div className="header-logo">
      <div>
        <a href="/" title="Butterfly Boutique" className="logo-container">
          <img src={LogoImg} alt="Butterfly Boutique" className="logo-img" />
        </a>
      </div>
    </div>
  );
};

export default headerLogo;
