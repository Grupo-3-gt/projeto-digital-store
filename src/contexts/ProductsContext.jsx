import { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { api } from "../Api/Api";

export const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const [listProducts, setListProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const [cartArr, setCartArr] = useState([]);
  const defaultFilterState = {
    category: [],
    gender: [],
    mark: [],
    state: [],
  };
  const [filterProductsObj, setFilterProductsObj] =
    useState(defaultFilterState);

  async function getProducts() {
    try {
      const res = await api.get("/products?limit=-1");

      // const data = await res.json();
      console.log(res.data.data)

      setListProducts(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  const resetFilter = () => {
    setFilterProductsObj(defaultFilterState);
  };

  return (
    <ProductContext.Provider
      value={{
        listProducts,
        filterProductsObj,
        getProducts,
        setFilterProductsObj,
        resetFilter,
        sortOrder,
        setSortOrder,
        cartArr,
        setCartArr,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
