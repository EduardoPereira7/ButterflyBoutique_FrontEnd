import "./styles.css";

const HeaderCategoryBlock = () => {
  return (
    <div className="header-nav">
      <a href="/category/1" className="header-nav-item header-nav-item--new">
        <span>NOVIDADES</span>
      </a>
      <a href="/category/2" className="header-nav-item">
        <span>Roupas</span>
      </a>
      <a href="/category/3" className="header-nav-item">
        <span>Calçados</span>
      </a>
      <a href="/category/4" className="header-nav-item">
        <span>Acessórios</span>
      </a>
      <a href="/category/5" className="header-nav-item">
        <span>Loja</span>
      </a>
    </div>
  );
};

export default HeaderCategoryBlock;
