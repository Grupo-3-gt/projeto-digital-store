import { useContext } from "react";
import "./style.css";
import { ProductContext } from "../../contexts/ProductsContext";

function OrderProducts() {
  const { sortOrder, setSortOrder } = useContext(ProductContext);
  return (
    <select
      className="select-order"
      value={sortOrder}
      onChange={(e) => setSortOrder(e.target.value)}
    >
      <option value="">Ordenar por: Relevância</option>
      <option value="desc">Ordenar por: Maior preço</option>
      <option value="asc">Ordenar por: Menor preço</option>
    </select>
  );
}

export default OrderProducts;
