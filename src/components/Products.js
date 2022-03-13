import React, { useContext } from "react";
import productContext from "../context/productsContext";
import Product from "./Product";

const Products = () => {
  const productData = useContext(productContext);
  console.log(productData);
  return (
    <div>
      <button onClick={() => productData.addNewProduct("sample")}>
        Add Product
      </button>
      {productData.products.map((p) => (
        <Product name={p} />
      ))}
      {/* {
      productData.Products.map()
    } */}
    </div>
  );
};

export default Products;
