import { categoriesActionType, Category } from "./category.types";
import { CategoryAction } from "./category.action";

export type CategoriesState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const categoriesInitialState: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = categoriesInitialState,
  action = {} as CategoryAction
) => {
  switch (action.type) {
    case categoriesActionType.FETCH_CATEGORIES_START:
      return {
        ...state,
        isLoading: true,
      };
    case categoriesActionType.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categories: action.payload,
      };
    case categoriesActionType.FETCH_CATEGORIES_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
