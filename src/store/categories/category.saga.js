import { takeLatest, all, call, put } from "redux-saga/effects";

import { getCategoriesAndDocs } from "../../utils/firebase/firebase.utils";
import { categoriesActionType } from "./category.types";
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "./category.action";

// code using redux-thunk
// export const fetchCategoriesAsync = () => async (dispatch) => {
//   dispatch(fetchCategoriesStart());

//   try {
//     const categoriesArray = await getCategoriesAndDocs("categories");
//     dispatch(fetchCategoriesSuccess(categoriesArray));
//   } catch (error) {
//     dispatch(fetchCategoriesFailed());
//   }
// };

// migration from using redux-thunk to redux-saga
export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocs, "categories");
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    categoriesActionType.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
