import { categoriesActionType } from "./category.types";

export const categoriesInitialState = {
  categories: [],
};

export const categoriesReducer = (
  state = categoriesInitialState,
  action = {}
) => {
  const { type, payload } = action;
  switch (type) {
    case categoriesActionType.SET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};
