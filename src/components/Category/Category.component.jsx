import { useEffect, useState, useContext, Fragment } from "react";
import { useParams } from "react-router-dom";

import { CategoriesContext } from "../contexts/Categories.context";

import ProductCard from "../ProductCard/ProductCard.component";

import * as sc from "./Category.styles";

const Category = () => {
  const { category } = useParams(); //returns an object of key/value pairs of the dynamic params (hats, mens, womens, etc.) from the current URL that were matched by the <Route path>
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <sc.Title>{category.toUpperCase()}</sc.Title>
      <sc.CategoryContainer>
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </sc.CategoryContainer>
    </Fragment>
  );

  // return (
  //   <div className="category-container">
  //     {products &&
  //       products.map((product) => {
  //         return <ProductCard key={product.id} product={product} />;
  //       })}
  //   </div>
  // );
};

export default Category;
