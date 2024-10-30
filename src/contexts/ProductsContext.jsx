import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const [listProducts, setListProducts] = useState([]);

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
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
