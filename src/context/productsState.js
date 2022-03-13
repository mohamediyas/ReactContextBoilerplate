import React, { useContext, useReducer } from "react";
import productContext from "./productsContext";
import productsReducer from "./productsReducer";

const ProductState = ({ children }) => {
  const initialValue = {
    products: [
      {
        name: "shoes"
      },
      {
        name: "shirts"
      }
    ]
  };

  const [state, dispatch] = useReducer(productsReducer, initialValue);

  const addNewProduct = (products) => {
    dispatch({
      type: "PRODUCT_ADD",
      payload: products
    });
  };

  return (
    <productContext.Provider
      value={{
        products: state.products,
        addNewProduct
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductState;
