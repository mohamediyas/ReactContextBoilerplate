import { useContext } from "react";
import Products from "./components/Products";
import productContext from "./context/productsContext";
import ProductState from "./context/productsState";
import "./styles.css";

export default function App() {
  return (
    <ProductState>
      <div className="App">
        <Products />
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </ProductState>
  );
}
