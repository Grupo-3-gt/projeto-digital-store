import "./style.css";

function OrderProducts() {
  return (
    <div>
      <select name="" id="">
        <option selected value="">
          <span>Ordenar por:</span> mais relevantes
        </option>
        <option value="bigger">
          <span>Ordenar por:</span>Maior preço
        </option>
        <option value="minor">
          <span>Ordenar por:</span> Menor preço
        </option>
      </select>
    </div>
  );
}

export default OrderProducts;
