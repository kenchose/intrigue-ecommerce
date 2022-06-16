import { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/category.selector";

import ProductCard from "../ProductCard/ProductCard.component";
import Spinner from "../Spinner/Spinner.component";

import * as sc from "./Category.styles";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
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
};

export default Category;
