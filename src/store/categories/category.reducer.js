import { categoriesActionType } from "./category.types";

export const categoriesInitialState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = categoriesInitialState,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    // case categoriesActionType.SET_CATEGORIES:
    //   return {
    //     ...state,
    //     categories: payload,
    //   };
    case categoriesActionType.SET_CATEGORY_START:
      return {
        ...state,
        isLoading: true,
      };
    case categoriesActionType.SET_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categories: payload,
      };
    case categoriesActionType.SET_CATEGORY_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};
