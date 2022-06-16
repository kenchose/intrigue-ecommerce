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
    case categoriesActionType.FETCH_CATEGORIES_START:
      return {
        ...state,
        isLoading: true,
      };
    case categoriesActionType.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categories: payload,
      };
    case categoriesActionType.FETCH_CATEGORIES_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};
