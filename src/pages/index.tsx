import HeaderCategoryBlock from "../components/headerCategoryBlock";
import HeaderMainBlock from "../components/headerMainBlock/index";
import PromotionBar from "../components/promotionBar/index";

function App() {
  return (
    <>
      <PromotionBar />
      <div className="main-header-container">
        <HeaderMainBlock />
        <HeaderCategoryBlock />
      </div>
    </>
  );
}

export default App;
