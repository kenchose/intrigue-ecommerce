import ProductCard from "../ProductCard/ProductCard.component";

import * as sc from "./CategoryPreview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <sc.CategoryPreviewContainer>
      <h2>
        <sc.Title to={title}>{title.toUpperCase()}</sc.Title>
      </h2>
      <sc.Preview>
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </sc.Preview>
    </sc.CategoryPreviewContainer>
  );
};

export default CategoryPreview;
