import { categoriesActionType } from "./category.types";
import { getCategoriesAndDocs } from "../../utils/firebase/firebase.utils";

// export const setCategories = (categories) => ({
//   type: categoriesActionType.SET_CATEGORIES,
//   payload: categories,
// });

export const fetchCategoriesStart = () => ({
  type: categoriesActionType.FETCH_CATEGORIES_START,
});

export const fetchCategoriesSuccess = (categoriesArray) => ({
  type: categoriesActionType.FETCH_CATEGORIES_SUCCESS,
  payload: categoriesArray,
});

export const fetchCategoriesFailed = (error) => ({
  type: categoriesActionType.FETCH_CATEGORIES_FAILED,
  payload: error,
});

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());

  try {
    const categoriesArray = await getCategoriesAndDocs("categories");
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesFailed());
  }
};
