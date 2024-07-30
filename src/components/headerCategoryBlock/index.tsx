import "./styles.css";

const HeaderCategoryBlock = () => {
  return (
    <div className="header-nav">
      <a href="/category/1" className="header-nav-item">
        <span>Category 1</span>
      </a>
      <a href="/category/2" className="header-nav-item">
        <span>Category 2</span>
      </a>
      <a href="/category/3" className="header-nav-item">
        <span>Category 3</span>
      </a>
      <a href="/category/4" className="header-nav-item">
        <span>Category 4</span>
      </a>
      <a href="/category/5" className="header-nav-item">
        <span>Category 5</span>
      </a>
    </div>
  );
};

export default HeaderCategoryBlock;
