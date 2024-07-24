import BagIcon from "../../../assets/svg/header/bag.svg";
import FavoriteIcon from "../../../assets/svg/header/favorite.svg";
import UserIcon from "../../../assets/svg/header/user.svg";
import "./styles.css";

const HeaderShopGroup = () => {
  return (
    <div className="header-shop-group">
      <div className="header-shop-group__user">
        <img src={UserIcon} alt="user" />
      </div>

      <div className="header-shop-group__bag">
        <img src={BagIcon} alt="bag" />
      </div>

      <div className="header-shop-group__hearth">
        <img src={FavoriteIcon} alt="hearth" />
      </div>
    </div>
  );
};

export default HeaderShopGroup;
