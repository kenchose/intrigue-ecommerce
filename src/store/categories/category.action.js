import { categoriesActionType } from "./category.types";
import { createAction } from "../../utils/reducer/reducer.utils";
// import { getCategoriesAndDocs } from "../../utils/firebase/firebase.utils";

export const fetchCategoriesStart = () =>
  createAction(categoriesActionType.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(categoriesActionType.FETCH_CATEGORIES_SUCCESS, categoriesArray);

export const fetchCategoriesFailed = (error) =>
  createAction(categoriesActionType.FETCH_CATEGORIES_FAILED, error);

// export const fetchCategoriesAsync = () => async (dispatch) => {
//   dispatch(fetchCategoriesStart());

//   try {
//     const categoriesArray = await getCategoriesAndDocs("categories");
//     dispatch(fetchCategoriesSuccess(categoriesArray));
//   } catch (error) {
//     dispatch(fetchCategoriesFailed(error));
//   }
// };
