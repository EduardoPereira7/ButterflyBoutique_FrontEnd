import HeaderLeftGroup from "./headerLeftGroup";
import HeaderLogo from "./headerLogo";
import HeaderShopGroup from "./headerShopGroup";
import "./styles.css";

const HeaderMainBlock = () => {
  return (
    <div className="header-main-block">
      <HeaderLeftGroup />
      <HeaderLogo />
      <HeaderShopGroup />
    </div>
  );
};

export default HeaderMainBlock;
