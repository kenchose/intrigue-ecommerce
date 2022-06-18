import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

// import { fetchCategoriesAsync } from "../../../store/categories/category.action";
import { fetchCategoriesStart } from "../../../store/categories/category.action";

import CategoriesPreview from "../CategoriesPreview/CategoriesPreview.component";
import Category from "../../Category/Category.component";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchCategoriesAsync());
    dispatch(fetchCategoriesStart());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
