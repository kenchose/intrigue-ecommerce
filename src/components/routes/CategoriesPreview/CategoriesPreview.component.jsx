import { useContext, Fragment } from "react";

import { CategoriesContext } from "../../contexts/Categories.context";
import CategoryPreview from "../../CategoryPreview/CategoryPreview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title].slice(0, 4);
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
