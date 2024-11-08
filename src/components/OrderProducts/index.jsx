import "./style.css";

function OrderProducts() {
  return (
    <div className="order-container">
      <select name="" id="">
        <option selected value="">
          <span className="order-span">Ordenar por:</span> mais relevantes
        </option>
        <option value="bigger">
          <span className="order-span">Ordenar por:</span> Maior preço
        </option>
        <option value="minor">
          <span className="order-span">Ordenar por:</span> Menor preço
        </option>
      </select>
    </div>
  );
}

export default OrderProducts;
