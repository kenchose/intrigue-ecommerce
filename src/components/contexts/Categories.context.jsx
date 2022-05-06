import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocs } from "../../utils/firebase/firebase.utils";

// import SHOP_DATA from "../../shop-data.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
  setCategoriesMap: () => null,
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesyMap = async () => {
      const categoryMap = await getCategoriesAndDocs();
      setCategoriesMap(categoryMap);
    };

    getCategoriesyMap();
  }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
