import { categoriesActionType } from "./category.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCategories = (categories) =>
  createAction(categoriesActionType.SET_CATEGORIES, categories);
