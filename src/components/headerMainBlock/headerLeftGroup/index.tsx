import SearchIcon from "../../../assets/svg/header/search.svg";
import "./styles.css";

const HeaderLeftGroup = () => {
  return (
    <div className="header-left-group">
      <a className="toggle-button-search">
        <img src={SearchIcon} alt="searchIcon" />
        <div className="search-box-container">
          <input type="text" placeholder="Search" className="search-box" />
          <div className="underline-search"> </div>
        </div>
      </a>
    </div>
  );
};

export default HeaderLeftGroup;
