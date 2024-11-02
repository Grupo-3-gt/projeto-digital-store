import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const [listProducts, setListProducts] = useState([]);
  const defaultFilterState = {
    category: [],
    gender: [],
    mark: [],
    state: [],
  };
  const [filterProductsObj, setFilterProductsObj] =
    useState(defaultFilterState);

  const resetFilter = () => {
    setFilterProductsObj(defaultFilterState);
  };

  async function getProducts() {
    try {
      const res = await fetch("https://api-store-do1w.onrender.com/shoes");

      const data = await res.json();

      setListProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        listProducts,
        filterProductsObj,
        setFilterProductsObj,
        resetFilter,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
