import { useContext } from "react";

import { ProductsContext } from "../../contexts/Product.context";
import ProductCard from "../../ProductCard/ProductCard.component";

import "./Shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Shop;
