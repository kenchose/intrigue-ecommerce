import { categoriesActionType } from "./category.types";

export const setCategories = (categories) => ({
  type: categoriesActionType.SET_CATEGORIES,
  payload: categories,
});
