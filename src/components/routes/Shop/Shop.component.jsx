import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { getCategoriesAndDocs } from "../../../utils/firebase/firebase.utils";

import { setCategories } from "../../../store/categories/category.action";

import CategoriesPreview from "../CategoriesPreview/CategoriesPreview.component";
import Category from "../../Category/Category.component";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesyMap = async () => {
      const categoriesArray = await getCategoriesAndDocs("categories");
      dispatch(setCategories(categoriesArray));
    };

    getCategoriesyMap();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
